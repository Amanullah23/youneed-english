"use client";

import Link from "next/link";
import { useState } from "react";

/*
 * TODO: this page ships with a couple of placeholders on purpose —
 * "What payment methods do you accept?" and the support email below are
 * bracketed [X] placeholders. Confirm real payment methods and the real
 * support inbox before this goes live.
 */

type Category = "Getting Started" | "Courses" | "Pricing & Billing" | "Account";

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Getting Started",
  "Courses",
  "Pricing & Billing",
  "Account",
];

const FAQS: { id: string; category: Category; question: string; answer: string }[] = [
  {
    id: "getting-started",
    category: "Getting Started",
    question: "How do I get started with YouNeed English Academy?",
    answer:
      "Sign up for the Free plan — no card required — and you'll get full access to every lesson on the YouTube channel right away. When you're ready for structured courses and live practice, upgrade to Pro or All-Access.",
  },
  {
    id: "which-level",
    category: "Getting Started",
    question: "I don't know my level. Which course should I start with?",
    answer:
      "If you're just starting out, begin with Beginner English. If you can already hold basic conversations, Intermediate English is a better fit. Not sure? Watch a free lesson from each on YouTube — you'll know within a few minutes which one matches you.",
  },
  {
    id: "any-device",
    category: "Getting Started",
    question: "Can I use YouNeed English Academy on my phone?",
    answer:
      "Yes — the site works on any device with a browser, phone, tablet, or computer. Your progress and access carry over no matter which device you use.",
  },
  {
    id: "course-length",
    category: "Courses",
    question: "How long does each course take to complete?",
    answer:
      "Courses are self-paced, so you move as fast or as slow as you like. Each course is broken into modules you can complete in short sessions — there's no deadline or expiration.",
  },
  {
    id: "live-sessions",
    category: "Courses",
    question: "Do courses include live sessions, or is it all pre-recorded?",
    answer:
      "Speaking & Pronunciation includes live practice sessions alongside recorded lessons. Beginner English, Intermediate English, and IELTS & TOEFL Prep are self-paced video lessons and practice exercises.",
  },
  {
    id: "certificate",
    category: "Courses",
    question: "Do I get a certificate when I finish a course?",
    answer:
      "Yes — a certificate of completion is included with the All-Access plan. Pro members can upgrade to All-Access anytime to unlock certificates for courses they've completed.",
  },
  {
    id: "cancel-anytime",
    category: "Pricing & Billing",
    question: "Can I cancel my plan anytime?",
    answer:
      "Yes. Pro is billed monthly or yearly with no long-term contract — cancel anytime and you'll keep access until your current billing period ends. See the full pricing breakdown on the Pricing page.",
  },
  {
    id: "payment-methods",
    category: "Pricing & Billing",
    question: "What payment methods do you accept?",
    answer: "[Add your accepted payment methods here — e.g. major credit cards, PayPal, etc.]",
  },
  {
    id: "free-trial",
    category: "Pricing & Billing",
    question: "Is there a free trial?",
    answer:
      "The Free plan is effectively an open-ended trial — full access to every YouTube lesson, no card required, no time limit. You only pay if you want structured courses through Pro or All-Access.",
  },
  {
    id: "forgot-password",
    category: "Account",
    question: "I forgot my password. What do I do?",
    answer:
      "Use the \"Forgot password\" link on the login page to reset it — you'll get an email with instructions to set a new one.",
  },
  {
    id: "multiple-devices",
    category: "Account",
    question: "Can I log in from more than one device?",
    answer:
      "Yes — log in from any device with your email and password, and your progress stays in sync across all of them.",
  },
  {
    id: "contact-support",
    category: "Account",
    question: "How do I contact support?",
    answer: "Send a message through the Contact page, or email us directly at [hello@youneedenglish.com].",
  },
];

export default function FaqPage() {
  const [category, setCategory] = useState<"All" | Category>("All");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(["getting-started"]));

  const visible = category === "All" ? FAQS : FAQS.filter((f) => f.category === category);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <HelpCircleIcon className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Frequently asked questions.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            Everything you need to know about getting started, courses, and
            billing. Can&apos;t find your answer? Reach out on the Contact
            page.
          </p>
        </div>
      </section>

      {/* Filters + FAQ list */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="Filter FAQs by category"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                  category === c
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-brand-border bg-brand-surface text-brand-slate hover:border-brand-navy-light hover:text-brand-navy-light"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {visible.map((faq) => {
              const isOpen = openIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    data-faq-toggle
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-heading text-base font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-4 w-4 shrink-0 text-brand-slate transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-brand-border px-5 py-4">
                      <p className="text-sm leading-relaxed text-brand-slate">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {visible.length === 0 && (
            <p className="mt-10 text-center text-sm text-brand-slate">
              No questions in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-border bg-brand-surface py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mt-2 max-w-md text-brand-slate">
              Can&apos;t find what you&apos;re looking for? Send a message
              and we&apos;ll get back to you.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white"
          >
            Contact Us
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function HelpCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M9.5 9.3a2.5 2.5 0 1 1 3.7 2.2c-.7.4-1.2.9-1.2 1.7v.3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16.8" r="0.9" fill="currentColor" />
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