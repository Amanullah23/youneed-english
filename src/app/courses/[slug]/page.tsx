import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COURSES, getCourseBySlug, type Level } from "@/data/courses";
import { CourseCurriculum } from "@/components/CourseCurriculum";

const YOUTUBE_URL = "https://www.youtube.com/@YouNeed_English";

const LEVEL_STYLES: Record<Level, { badge: string }> = {
  Beginner: { badge: "bg-brand-green/15 text-brand-green" },
  Intermediate: { badge: "bg-brand-gold/15 text-brand-gold-dark" },
  Speaking: { badge: "bg-brand-navy-light/15 text-brand-navy-light" },
  "Test Prep": { badge: "bg-brand-navy/10 text-brand-navy" },
};

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} — YouNeed English Academy`,
    description: course.tagline,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const related = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-slate transition-colors hover:text-brand-navy-light"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Courses
          </Link>

          <span
            className={`mt-5 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${LEVEL_STYLES[course.level].badge}`}
          >
            {course.level}
          </span>

          <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            {course.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-slate">
            <span className="inline-flex items-center gap-1.5">
              <FormatIcon className="h-4 w-4" />
              {course.format}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UsersIcon className="h-4 w-4" />
              {course.studentsLabel}
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Left column */}
          <div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                About this course
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-slate">
                {course.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                What you&apos;ll learn
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2.5 rounded-xl border border-brand-border bg-brand-surface p-3.5 text-sm text-foreground"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Curriculum</h2>
              <p className="mt-2 text-sm text-brand-slate">
                {course.curriculum.length} modules · tap a module to see what&apos;s inside
              </p>
              <div className="mt-5">
                <CourseCurriculum modules={course.curriculum} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
              <p className="text-sm font-semibold text-foreground">Ready to get started?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-slate">
                Full access to this course is included with a Pro or
                All-Access plan.
              </p>
                            <Link
                href={`/register?course=${course.slug}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white"
              >
                Enroll Now
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-brand-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
              >
                View Pricing
              </Link>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-brand-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
              >
                <YouTubeIcon className="h-4 w-4" />
                Watch a Free Lesson
              </a>

              <dl className="mt-6 space-y-3 border-t border-brand-border pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-brand-slate">Level</dt>
                  <dd className="font-medium text-foreground">{course.level}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-brand-slate">Format</dt>
                  <dd className="font-medium text-foreground">{course.format}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-brand-slate">Modules</dt>
                  <dd className="font-medium text-foreground">{course.curriculum.length}</dd>
                </div>
              </dl>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
                <p className="text-sm font-semibold text-foreground">Other courses</p>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/courses/${r.slug}`}
                        className="group flex items-center justify-between gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand-navy-light"
                      >
                        <span>{r.title}</span>
                        <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand-slate transition-transform group-hover:translate-x-0.5 group-hover:text-brand-navy-light" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M19 12H5M11 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m5 13 4 4L19 7"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FormatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M3 19c1-3.3 3.5-5 6-5s5 1.7 6 5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.5c1.4.3 2.5 1.5 2.5 3s-1.1 2.7-2.5 3M18 14c1.8.5 3.2 1.8 4 4"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 1.96c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33ZM9.75 15.02V8.48l5.75 3.27-5.75 3.27Z" />
    </svg>
  );
}