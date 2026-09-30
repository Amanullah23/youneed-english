"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const YOUTUBE_URL = "https://www.youtube.com/@YouNeed_English";
const FACEBOOK_URL = "https://www.facebook.com/YouNeedEnglish";

const COURSE_LINKS = [
  {
    href: "/courses/beginner",
    label: "Beginner English",
    desc: "Grammar and vocabulary foundations",
  },
  {
    href: "/courses/intermediate",
    label: "Intermediate English",
    desc: "Build fluency and confidence",
  },
  {
    href: "/courses/ielts-toefl",
    label: "IELTS & TOEFL Prep",
    desc: "Focused practice for test day",
  },
  {
    href: "/courses/speaking",
    label: "Speaking & Pronunciation",
    desc: "Sound natural, speak with ease",
  },
];

const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: YOUTUBE_URL, label: "YouTube", icon: YouTubeIcon },
  { href: FACEBOOK_URL, label: "Facebook", icon: FacebookIcon },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  const isCoursesActive = pathname.startsWith("/courses");

  // Elevate the bar once the page scrolls.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change.
  useEffect(() => {
    setCoursesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Desktop dropdown: close on outside click or Escape.
  useEffect(() => {
    if (!coursesOpen) return;

    function handleClick(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setCoursesOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [coursesOpen]);

  // Mobile drawer: close on Escape, lock background scroll.
  useEffect(() => {
    if (!mobileOpen) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }

    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={`sticky z-50 border-b bg-brand-navy/95 text-white backdrop-blur transition-shadow duration-200 supports-[backdrop-filter]:bg-brand-navy/90 ${
        scrolled ? "border-white/10 shadow-lg shadow-black/10" : "border-transparent"
      }`}
      style={{ top: 0, paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      {/* Utility bar */}
      <div className="hidden items-center justify-between border-b border-white/10 px-4 py-1.5 text-xs text-white/70 sm:flex sm:px-6">
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <YouTubeIcon className="h-3.5 w-3.5" />
          23.6K+ learning with us on YouTube
        </a>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors hover:text-brand-gold"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Main row */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex lg:gap-1" aria-label="Primary">
          <div ref={coursesRef} className="relative">
            <button
              type="button"
              onClick={() => setCoursesOpen((v) => !v)}
              aria-expanded={coursesOpen}
              aria-haspopup="true"
              // Courses button: whitespace-nowrap + tighter padding
className={`flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium transition-colors lg:px-3 ${
                isCoursesActive || coursesOpen
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              Courses
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ${
                  coursesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              role="menu"
              className={`absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 origin-top rounded-xl border border-brand-border bg-brand-surface p-2 text-foreground shadow-xl transition-all duration-150 ${
                coursesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {COURSE_LINKS.map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  role="menuitem"
                  className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-brand-navy/5"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {course.label}
                  </span>
                  <span className="text-xs text-brand-slate">{course.desc}</span>
                </Link>
              ))}
              <div className="mt-1 border-t border-brand-border pt-1">
                <Link
                  href="/courses"
                  role="menuitem"
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-navy-light hover:bg-brand-navy/5"
                >
                  Browse all courses
                  <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                </Link>
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side */}
        
<div className="hidden shrink-0 items-center gap-2 md:flex lg:gap-3">
  <Link href="/login" className="shrink-0 whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white lg:px-3">
    Log in
  </Link>
  <Link href="/courses" className="shrink-0 whitespace-nowrap rounded-md bg-brand-gold px-3 py-2 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white lg:px-4">
    Start Free
  </Link>
</div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>

    {/* Mobile drawer — rendered outside <header> so its `fixed` positioning
        is relative to the viewport, not the header (which is its own
        containing block because backdrop-blur applies a CSS filter). */}
    <div
      className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 md:hidden ${
        mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => setMobileOpen(false)}
      aria-hidden="true"
    />
    <div
      id="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className={`fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-brand-navy shadow-2xl transition-transform duration-300 ease-out md:hidden ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        <Logo />
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
        <button
          type="button"
          onClick={() => setMobileCoursesOpen((v) => !v)}
          aria-expanded={mobileCoursesOpen}
          className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium ${
            isCoursesActive ? "bg-white/10 text-white" : "text-white/90 hover:bg-white/10"
          }`}
        >
          Courses
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform duration-200 ${
              mobileCoursesOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
            mobileCoursesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-0.5 py-1 pl-3">
              {COURSE_LINKS.map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  className="rounded-md px-3 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-white"
                >
                  {course.label}
                </Link>
              ))}
              <Link
                href="/courses"
                className="rounded-md px-3 py-2 text-sm font-semibold text-brand-gold hover:bg-white/10"
              >
                Browse all courses
              </Link>
            </div>
          </div>
        </div>

        {NAV_LINKS.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`mt-1 block rounded-md px-3 py-2.5 text-base font-medium ${
                isActive ? "bg-white/10 text-white" : "text-white/90 hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="flex gap-2">
          <Link
            href="/login"
            className="flex-1 rounded-md border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10"
          >
            Log in
          </Link>
          <Link
            href="/courses"
            className="flex-1 rounded-md bg-brand-gold px-4 py-2.5 text-center text-sm font-semibold text-brand-navy"
          >
            Start Free
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/70 hover:text-brand-gold"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-navy shadow-sm">
        <GraduationCapIcon className="h-5 w-5" />
      </span>
      <span className="font-heading text-base font-semibold leading-tight sm:text-lg">
        <span className="hidden lg:inline">YouNeed English Academy</span>
        <span className="lg:hidden">YouNeed English</span>
      </span>
    </Link>
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

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth={2}
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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}