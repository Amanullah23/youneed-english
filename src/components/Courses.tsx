"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";

type Level = "Beginner" | "Intermediate" | "Speaking" | "Test Prep";

const LEVEL_STYLES: Record<Level, { badge: string; icon: string }> = {
  Beginner: { badge: "bg-brand-green/15 text-brand-green", icon: "bg-brand-green/10 text-brand-green" },
  Intermediate: { badge: "bg-brand-gold/15 text-brand-gold-dark", icon: "bg-brand-gold/10 text-brand-gold-dark" },
  Speaking: { badge: "bg-brand-navy-light/15 text-brand-navy-light", icon: "bg-brand-navy-light/10 text-brand-navy-light" },
  "Test Prep": { badge: "bg-brand-navy/10 text-brand-navy", icon: "bg-brand-navy/5 text-brand-navy" },
};

const COURSES: {
  slug: string;
  title: string;
  level: Level;
  format: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    slug: "beginner",
    title: "Beginner English",
    level: "Beginner",
    format: "Self-paced · Video lessons",
    desc: "Start from zero — everyday vocabulary, basic grammar, and simple conversations to get you speaking with confidence.",
    icon: SeedlingIcon,
  },
  {
    slug: "intermediate",
    title: "Intermediate English",
    level: "Intermediate",
    format: "Self-paced · Video lessons",
    desc: "Build fluency with real conversations, expanded vocabulary, and the grammar you'll actually use day to day.",
    icon: ChatIcon,
  },
  {
    slug: "speaking",
    title: "Speaking & Pronunciation",
    level: "Speaking",
    format: "Live + recorded sessions",
    desc: "Practice real conversations, fix common pronunciation mistakes, and build the confidence to speak without hesitation.",
    icon: MicIcon,
  },
  {
    slug: "ielts-toefl",
    title: "IELTS & TOEFL Prep",
    level: "Test Prep",
    format: "Self-paced · Practice tests",
    desc: "Focused practice for reading, writing, listening, and speaking — built around the real exam format.",
    icon: ClipboardIcon,
  },
];

const FILTERS: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Speaking", "Test Prep"];

export function Courses() {
  const [filter, setFilter] = useState<"All" | Level>("All");
  const visible = filter === "All" ? COURSES : COURSES.filter((c) => c.level === filter);

  return (
    <section className="border-t border-brand-border bg-brand-surface py-16 sm:py-24" id="courses">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
              Courses
            </p>
            <h2 className="mt-3 max-w-lg text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Pick your starting point.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-slate">
              Structured courses that take you from your first words to real,
              confident conversations.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-1"
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
                  : "border-brand-border bg-background text-brand-slate hover:border-brand-navy-light hover:text-brand-navy-light"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((course) => {
            const styles = LEVEL_STYLES[course.level];
            const Icon = course.icon;
            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group flex flex-col rounded-2xl border border-brand-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-brand-navy-light hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles.badge}`}>
                    {course.level}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">
                  {course.desc}
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

        <div className="mt-10 flex justify-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-md border border-brand-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
          >
            Browse all courses
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
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
      <path
        d="M12 21V12"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
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