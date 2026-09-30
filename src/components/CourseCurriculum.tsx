"use client";

import { useState } from "react";

type Module = { title: string; lessonCount: string; topics: string[] };

export function CourseCurriculum({ modules }: { modules: Module[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {modules.map((module, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={module.title}
            className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-label={`Toggle ${module.title} module`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-navy/5 text-sm font-semibold text-brand-navy">
                  {i + 1}
                </span>
                <span className="font-heading text-base font-semibold text-foreground">
                  {module.title}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden text-xs font-medium text-brand-slate sm:inline">
                  {module.lessonCount}
                </span>
                <ChevronDownIcon
                  className={`h-4 w-4 text-brand-slate transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-brand-border px-5 py-4">
                <span className="mb-3 inline-block text-xs font-medium text-brand-slate sm:hidden">
                  {module.lessonCount}
                </span>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5 text-sm text-brand-slate">
                      <PlayCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy-light" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <path d="M10.5 9v6l5-3-5-3Z" fill="currentColor" />
    </svg>
  );
}