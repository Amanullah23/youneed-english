"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const YOUTUBE_URL = "https://www.youtube.com/@YouNeed_English";
const FACEBOOK_URL = "https://www.facebook.com/YouNeedEnglish";

const COURSE_LINKS = [
  { href: "/courses/beginner", label: "Beginner English" },
  { href: "/courses/intermediate", label: "Intermediate English" },
  { href: "/courses/speaking", label: "Speaking & Pronunciation" },
  { href: "/courses/ielts-toefl", label: "IELTS & TOEFL Prep" },
  { href: "/courses", label: "Browse all courses" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const SUPPORT_LINKS = [
   { href: "/register", label: "Register for Classes" },
  { href: "/login", label: "Log in" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-navy">
                <GraduationCapIcon className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-semibold">
                YouNeed English Academy
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Practical English lessons and structured courses — helping you
              speak with confidence, one video at a time.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/70 transition-colors hover:text-brand-gold"
              >
                <YouTubeIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 transition-colors hover:text-brand-gold"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>

            <NewsletterForm />
          </div>

          {/* Courses */}
          <nav aria-label="Courses">
            <p className="font-heading text-sm font-semibold text-white">Courses</p>
            <ul className="mt-4 space-y-2.5">
              {COURSE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="font-heading text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <p className="font-heading text-sm font-semibold text-white">Support</p>
            <ul className="mt-4 space-y-2.5">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} YouNeed English Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  // TODO: this posts nowhere yet — wire it up to the Express API's
  // newsletter/subscribe endpoint once that route exists (planned for the
  // backend step). For now it just confirms the UI interaction.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="mt-6 flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/85">
        <CheckIcon className="h-4 w-4 shrink-0 text-brand-gold" />
        You&apos;re on the list — thanks!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor="footer-email" className="text-xs font-semibold text-white/70">
        Get new lessons in your inbox
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold-dark hover:text-white"
        >
          Subscribe
        </button>
      </div>
    </form>
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

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 1.96c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33ZM9.75 15.02V8.48l5.75 3.27-5.75 3.27Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}