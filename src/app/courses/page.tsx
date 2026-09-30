"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";
import { COURSES, type Level } from "@/data/courses";

const LEVEL_STYLES: Record<Level, { badge: string; icon: string }> = {
  Beginner: { badge: "bg-brand-green/15 text-brand-green", icon: "bg-brand-green/10 text-brand-green" },
  Intermediate: { badge: "bg-brand-gold/15 text-brand-gold-dark", icon: "bg-brand-gold/10 text-brand-gold-dark" },
  Speaking: {
    badge: "bg-brand-navy-light/15 text-brand-navy-light",
    icon: "bg-brand-navy-light/10 text-brand-navy-light",
  },
  "Test Prep": { badge: "bg-brand-navy/10 text-brand-navy", icon: "bg-brand-navy/5 text-brand-navy" },
};

const LEVEL_ICONS: Record<Level, ComponentType<{ className?: string }>> = {
  Beginner: SeedlingIcon,
  Intermediate: ChatIcon,
  Speaking: MicIcon,
  "Test Prep": ClipboardIcon,
};

const FILTERS: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Speaking", "Test Prep"];

export default function CoursesPage() {
  const [filter, setFilter] = useState<"All" | Level>("All");
  const visible = filter === "All" ? COURSES : COURSES.filter((c) => c.level === filter);

  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <GraduationCapIcon className="h-3.5 w-3.5" />
            Courses
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Find the right course for you.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            From your first words to exam-ready fluency — structured courses
            that take you from watching to actually speaking.
          </p>
        </div>
      </section>

      {/* Filters + course grid */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="Filter courses by level"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                  filter === f
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-brand-border bg-brand-surface text-brand-slate hover:border-brand-navy-light hover:text-brand-navy-light"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => {
              const styles = LEVEL_STYLES[course.level];
              const Icon = LEVEL_ICONS[course.level];
              return (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group flex flex-col rounded-2xl border border-brand-border bg-brand-surface p-6 transition-all hover:-translate-y-0.5 hover:border-brand-navy-light hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles.badge}`}>
                      {course.level}
                    </span>
                  </div>

                  <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {course.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">
                    {course.tagline}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-4">
                    <span className="text-xs font-medium text-brand-slate">{course.format}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy-light">
                      View
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {visible.length === 0 && (
            <p className="mt-10 text-center text-sm text-brand-slate">
              No courses in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-border bg-brand-surface py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-2 max-w-md text-brand-slate">
              Compare plans and see exactly what&apos;s included with each
              one.
            </p>
          </div>
          <Link
            href="/pricing"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white"
          >
            View Pricing
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
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

function SeedlingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21V12" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <path
        d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6ZM12 12c0-3.5 2.5-5.5 6-5.5 0 3.5-2.5 5.5-6 5.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 4h16v11H8l-4 4V4Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9.5h8M8 12.5h5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M5.5 11.5A6.5 6.5 0 0 0 12 18a6.5 6.5 0 0 0 6.5-6.5M12 18v3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M9 4.5V3.8A1.3 1.3 0 0 1 10.3 2.5h3.4A1.3 1.3 0 0 1 15 3.8v.7"
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path d="M8.5 10.5h7M8.5 14h7M8.5 17.5h4.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}