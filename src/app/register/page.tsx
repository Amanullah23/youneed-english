import { Suspense } from "react";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata = {
  title: "Register for a Course — YouNeed English Academy",
  description:
    "Register for online English classes with YouNeed English Academy — pick a course and tell us a bit about yourself to get started.",
};

export default function RegisterPage() {
  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <ClipboardIcon className="h-3.5 w-3.5" />
            Register
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Register for online classes.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            Pick the course that fits you, tell us a bit about yourself, and
            we&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Suspense fallback={<RegisterFormFallback />}>
            <RegisterForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

function RegisterFormFallback() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
      <div className="space-y-6">
        <div className="h-40 animate-pulse rounded-2xl border border-brand-border bg-brand-surface" />
        <div className="h-72 animate-pulse rounded-2xl border border-brand-border bg-brand-surface" />
      </div>
      <div className="h-56 animate-pulse rounded-2xl border border-brand-border bg-brand-surface" />
    </div>
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