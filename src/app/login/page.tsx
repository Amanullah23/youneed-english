"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

/*
 * TODO: this form doesn't authenticate against anything yet — wire it up to
 * the Express API once a /auth/login endpoint (and JWT session handling)
 * exists. Right now submitting just simulates a request and shows an error
 * state, since there's no real account to log into.
 *
 * There's also no /forgot-password or /signup page yet — "Forgot password?"
 * currently points to Contact, and "Start Free" points to Courses (same as
 * the Navbar CTA). Build dedicated pages for these once sign-up is ready.
 */

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") setStatus("idle");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.email || !form.password) return;
    setStatus("submitting");
    // Simulated auth request — replace with a real API call once the
    // backend's /auth/login endpoint exists.
    setTimeout(() => setStatus("error"), 500);
  }

  return (
    <div className="flex-1 bg-background">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-brand-navy-light/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:px-6">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold text-brand-navy">
                <CapIcon className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-semibold text-foreground">
                YouNeed English Academy
              </span>
            </Link>
            <h1 className="mt-6 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground">
              Welcome back.
            </h1>
            <p className="mt-2 text-balance text-brand-slate">
              Log in to pick up right where you left off.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold text-foreground">
                    Password
                  </label>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-navy-light transition-colors hover:text-brand-navy"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 pr-10 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-brand-slate transition-colors hover:text-brand-navy-light"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700"
                >
                  <AlertIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    We couldn&apos;t log you in with those details. Double-check
                    your email and password and try again.
                  </span>
                </div>
              )}

              <label className="flex items-center gap-2 text-sm text-brand-slate">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-brand-border text-brand-navy focus:ring-brand-navy-light"
                />
                Remember me on this device
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white disabled:opacity-60"
              >
                {status === "submitting" ? "Logging in…" : "Log In"}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-brand-slate">
            New to YouNeed English Academy?{" "}
            <Link href="/courses" className="font-semibold text-brand-navy-light hover:text-brand-navy">
              Start for free
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

function CapIcon({ className }: { className?: string }) {
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

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth={1.8} />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 3l18 18M9.9 5.1A10.6 10.6 0 0 1 12 5c6 0 9.5 6.5 9.5 6.5a13.9 13.9 0 0 1-3.15 3.85M6.6 6.6C4.1 8.2 2.5 12 2.5 12S6 18.5 12 18.5c1.36 0 2.6-.28 3.7-.75M9.7 9.7a2.75 2.75 0 0 0 3.9 3.9"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <path d="M12 8v5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <circle cx="12" cy="16" r="0.9" fill="currentColor" />
    </svg>
  );
}