"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { COURSES, type CourseDetail, type Level } from "@/data/courses";

/*
 * TODO: this form is UI/UX only for now — it doesn't create a real student
 * account or send data anywhere. Once the backend exists, wire this up to
 * a POST /registrations (or /students) endpoint, and have a successful
 * submit create the student's account and redirect into their dashboard
 * (once /dashboard is built) instead of showing the static success state
 * below.
 */

const LEVEL_STYLES: Record<Level, { badge: string; ring: string }> = {
  Beginner: { badge: "bg-brand-green/15 text-brand-green", ring: "ring-brand-green" },
  Intermediate: { badge: "bg-brand-gold/15 text-brand-gold-dark", ring: "ring-brand-gold" },
  Speaking: { badge: "bg-brand-navy-light/15 text-brand-navy-light", ring: "ring-brand-navy-light" },
  "Test Prep": { badge: "bg-brand-navy/10 text-brand-navy", ring: "ring-brand-navy" },
};

const SCHEDULES = ["Morning", "Afternoon", "Evening", "Flexible / No preference"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  schedule: string;
  notes: string;
};

const EMPTY_FORM: FormState = { name: "", email: "", phone: "", schedule: "", notes: "" };

export function RegisterForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("course");

  const [slug, setSlug] = useState<string | null>(
    preselected && COURSES.some((c) => c.slug === preselected) ? preselected : null
  );
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [attempted, setAttempted] = useState(false);

  const selectedCourse: CourseDetail | undefined = COURSES.find((c) => c.slug === slug);
  const canSubmit = Boolean(slug && form.name && form.email && form.phone);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAttempted(true);
    if (!canSubmit) return;
    setStatus("submitting");
    // Simulated submit — replace with a real API call once the backend's
    // registration endpoint exists.
    setTimeout(() => setStatus("submitted"), 500);
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground">
          Registration received!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-brand-slate">
          Thanks, {form.name.split(" ")[0] || "there"} — you&apos;re registered for{" "}
          <span className="font-semibold text-foreground">{selectedCourse?.title}</span>. We&apos;ll
          reach out at {form.email} to confirm your schedule and next steps.
        </p>
        <p className="mx-auto mt-2 max-w-md text-xs text-brand-slate">
          Once student accounts are live, this is where you&apos;d land in your
          dashboard automatically.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
          >
            Browse other courses
          </Link>
          <button
            type="button"
            onClick={() => {
              setForm(EMPTY_FORM);
              setSlug(null);
              setAttempted(false);
              setStatus("idle");
            }}
            className="text-sm font-semibold text-brand-navy-light transition-colors hover:text-brand-navy"
          >
            Register another student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-10">
        {/* Step 1: course type */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
              1
            </span>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Choose a course
            </h2>
          </div>

          <div
            role="radiogroup"
            aria-label="Choose a course"
            className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {COURSES.map((course) => {
              const isSelected = slug === course.slug;
              const styles = LEVEL_STYLES[course.level];
              return (
                <button
                  key={course.slug}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  data-course-option={course.slug}
                  onClick={() => setSlug(course.slug)}
                  className={`flex flex-col rounded-2xl border p-4 text-left transition-all ${
                    isSelected
                      ? `border-brand-navy-light bg-brand-navy-light/5 ring-2 ${styles.ring}`
                      : "border-brand-border bg-brand-surface hover:border-brand-navy-light"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles.badge}`}>
                      {course.level}
                    </span>
                    {isSelected && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy-light text-white">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-slate">{course.format}</p>
                </button>
              );
            })}
          </div>
          {attempted && !slug && (
            <p className="mt-2 text-xs font-medium text-red-600">Please select a course to continue.</p>
          )}
        </div>

        {/* Step 2: student info */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
              2
            </span>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Your information
            </h2>
          </div>

          <div className="mt-5 space-y-5 rounded-2xl border border-brand-border bg-brand-surface p-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="reg-name" className="text-sm font-semibold text-foreground">
                  Full name
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="reg-email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="reg-phone" className="text-sm font-semibold text-foreground">
                  Phone / WhatsApp
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+93 7X XXX XXXX"
                  className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="reg-schedule" className="text-sm font-semibold text-foreground">
                  Preferred schedule
                </label>
                <select
                  id="reg-schedule"
                  value={form.schedule}
                  onChange={(e) => handleChange("schedule", e.target.value)}
                  className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-brand-navy-light focus:outline-none"
                >
                  <option value="">Select a time</option>
                  {SCHEDULES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="reg-notes" className="text-sm font-semibold text-foreground">
                Anything else we should know?{" "}
                <span className="font-normal text-brand-slate">(optional)</span>
              </label>
              <textarea
                id="reg-notes"
                rows={4}
                value={form.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                placeholder="Goals, availability, questions..."
                className="mt-2 w-full resize-none rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? (
            "Submitting…"
          ) : (
            <>
              Submit Registration
              <ArrowRightIcon className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {/* Sidebar summary */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
          <p className="text-sm font-semibold text-foreground">Your registration</p>

          {selectedCourse ? (
            <div className="mt-4">
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${LEVEL_STYLES[selectedCourse.level].badge}`}
              >
                {selectedCourse.level}
              </span>
              <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                {selectedCourse.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-slate">
                {selectedCourse.tagline}
              </p>
              <dl className="mt-5 space-y-3 border-t border-brand-border pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-brand-slate">Format</dt>
                  <dd className="font-medium text-foreground">{selectedCourse.format}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-brand-slate">Modules</dt>
                  <dd className="font-medium text-foreground">{selectedCourse.curriculum.length}</dd>
                </div>
              </dl>
              <Link
                href={`/courses/${selectedCourse.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy-light transition-colors hover:text-brand-navy"
              >
                View full course details
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-brand-slate">
              Pick a course on the left and its details will show up here.
            </p>
          )}
        </div>
      </div>
    </div>
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