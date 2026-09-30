import Link from "next/link";
import type { ComponentType } from "react";

/*
 * TODO: this page ships with a few placeholders on purpose:
 * - STATS: "Countries reached" and "Students helped" are bracketed [X]
 *   placeholders — the subscriber/lesson counts (23.6K+ / 109+) are the
 *   real, confirmed numbers from the YouTube channel.
 * - The instructor section below reuses the same placeholder pattern as
 *   the homepage About section — swap in the real name, role, and bio
 *   (and a real photo instead of the icon avatar) once you have them.
 */

const YOUTUBE_URL = "https://www.youtube.com/@YouNeed_English";

const STATS: { label: string; value: string }[] = [
  { label: "Subscribers", value: "23.6K+" },
  { label: "Video lessons", value: "109+" },
  { label: "Countries reached", value: "[X]+" },
  { label: "Students helped", value: "[X]+" },
];

const VALUES: { title: string; description: string; icon: ComponentType<{ className?: string }> }[] = [
  {
    title: "Practical over perfect",
    description:
      "We teach English you'll actually use in real conversations — not just grammar rules memorized for a test.",
    icon: TargetIcon,
  },
  {
    title: "Consistency over intensity",
    description:
      "Short, regular lessons build fluency faster than occasional cramming. That's why new videos go up every week.",
    icon: ClockIcon,
  },
  {
    title: "Community, not just content",
    description:
      "Thousands of learners ask questions, share progress, and support each other in the comments every week.",
    icon: UsersIcon,
  },
  {
    title: "Accessible to everyone",
    description:
      "Free lessons stay free on YouTube. Paid courses are there only when you want more structure — never a paywall on the basics.",
    icon: GlobeIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <UsersIcon className="h-3.5 w-3.5" />
            About Us
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Helping you speak English with real confidence.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            What started as a YouTube channel teaching practical English has
            grown into a full academy — built around real conversations,
            structured practice, and a community of learners from around the
            world.
          </p>
        </div>
      </section>

      {/* Story + stats */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
              Our story
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              From a YouTube channel to a full learning academy.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-brand-slate">
              <p>
                YouNeed English started with a simple idea: teach English the
                way people actually speak it, not the way it's written in a
                textbook. Every video focuses on real, everyday conversations
                — the vocabulary, grammar, and pronunciation you need to
                understand and be understood.
              </p>
              <p>
                Over time, that idea grew into a channel followed by more
                than 23,600 learners, with over 100 free lessons covering
                everything from beginner basics to advanced speaking
                practice. YouNeed English Academy is the next step — turning
                those lessons into structured courses, live practice
                sessions, and a clear path from your first words to
                confident, fluent conversation.
              </p>
            </div>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy-light transition-colors hover:text-brand-navy"
            >
              Watch the channel on YouTube
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-brand-border bg-brand-surface p-5 text-center"
              >
                <p className="font-heading text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-brand-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-brand-border bg-brand-surface py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-lg">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
              What we believe
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              The approach behind every lesson.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex gap-4 rounded-2xl border border-brand-border bg-background p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-slate">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-navy">
                <GraduationCapIcon className="h-9 w-9" />
              </span>
              <div>
                {/*
                  TODO: replace the placeholder name/role/bio below with the
                  real instructor's details, and swap the icon avatar above
                  for an actual photo once you have one to use.
                */}
                <p className="font-heading text-xl font-semibold text-foreground">
                  [Instructor Name]
                </p>
                <p className="text-sm font-medium text-brand-gold-dark">
                  Founder &amp; Lead Instructor
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  [Add a short instructor bio here — background, teaching
                  experience, and what led to starting YouNeed English. A
                  few sentences in their own words works best.]
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-brand-border pt-6">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-light"
              >
                <YouTubeIcon className="h-4 w-4" />
                Watch on YouTube
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-brand-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-border bg-brand-surface py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Ready to start learning?
            </h2>
            <p className="mt-2 max-w-md text-brand-slate">
              Join thousands of students building real English confidence,
              one lesson at a time.
            </p>
          </div>
          <Link
            href="/courses"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white"
          >
            Browse Courses
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
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

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3 2 8l10 5 8-4v6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5.5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
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