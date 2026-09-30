"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";

/*
 * TODO: this page ships with placeholder prices on purpose — every amount
 * below (monthly, yearly, lifetime) is a bracketed [X] placeholder. Replace
 * them with real, confirmed pricing before launch. The feature lists are
 * reasonable starter copy based on the courses already built on the
 * Courses page — confirm they match what's actually included in each plan
 * before this goes live.
 */

type Period = "monthly" | "yearly";

const PLANS: {
  name: string;
  icon: ComponentType<{ className?: string }>;
  tagline: string;
  price: Record<Period, string>;
  priceSuffix: Record<Period, string>;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  cta: { label: string; href: string };
}[] = [
  {
    name: "Free",
    icon: RocketIcon,
    tagline: "Start learning with no commitment.",
    price: { monthly: "$0", yearly: "$0" },
    priceSuffix: { monthly: "", yearly: "" },
    features: [
      "Full access to YouTube lessons",
      "New videos every week",
      "Community updates on Facebook",
      "Beginner course preview",
    ],
    cta: { label: "Start Free", href: "/courses" },
  },
  {
    name: "Pro",
    icon: StarIcon,
    tagline: "Structured courses and real practice.",
    price: { monthly: "$[X]", yearly: "$[X]" },
    priceSuffix: { monthly: "/month", yearly: "/month, billed yearly" },
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "All structured courses (Beginner → Test Prep)",
      "Live speaking & pronunciation sessions",
      "Progress tracking",
      "Downloadable lesson materials",
    ],
    cta: { label: "Get Started", href: "/courses" },
  },
  {
    name: "All-Access",
    icon: CrownIcon,
    tagline: "Pay once, learn at your own pace forever.",
    price: { monthly: "$[X]", yearly: "$[X]" },
    priceSuffix: { monthly: "one-time", yearly: "one-time" },
    features: [
      "Everything in Pro",
      "Lifetime access — no renewals",
      "All future courses included",
      "Certificate of completion",
      "Priority support",
    ],
    cta: { label: "Get All-Access", href: "/courses" },
  },
];

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Can I cancel my Pro plan anytime?",
    answer:
      "Yes — Pro is billed monthly or yearly with no long-term contract. Cancel anytime and you'll keep access until the end of your current billing period.",
  },
  {
    question: "What's the difference between Pro and All-Access?",
    answer:
      "Pro is an ongoing subscription. All-Access is a one-time payment that unlocks every course — current and future — for good, with no recurring billing.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "[Add your refund policy here — e.g. a 7-day money-back guarantee if a plan isn't the right fit.]",
  },
  {
    question: "Is the Free plan really free?",
    answer:
      "Yes. The Free plan gives you full access to every lesson on the YouTube channel, no card required — upgrade to Pro or All-Access whenever you want structured courses and live practice.",
  },
];

export default function PricingPage() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-brand-navy/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <TagIcon className="h-3.5 w-3.5" />
            Pricing
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Simple pricing, real results.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            Start free with our YouTube lessons, then upgrade whenever
            you&apos;re ready for structured courses and live practice.
          </p>

          {/* Billing toggle */}
          <div
            className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full border border-brand-border bg-background p-1"
            role="tablist"
            aria-label="Billing period"
          >
            {(["monthly", "yearly"] as Period[]).map((p) => (
              <button
                key={p}
                type="button"
                role="tab"
                aria-selected={period === p}
                onClick={() => setPeriod(p)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                  period === p
                    ? "bg-brand-navy text-white"
                    : "text-brand-slate hover:text-brand-navy-light"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${
                    plan.highlighted
                      ? "border-brand-gold bg-brand-surface shadow-xl shadow-black/5 lg:-translate-y-2"
                      : "border-brand-border bg-brand-surface"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm">
                      {plan.badge}
                    </span>
                  )}

                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      plan.highlighted
                        ? "bg-brand-gold/15 text-brand-gold-dark"
                        : "bg-brand-navy/5 text-brand-navy"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
                    {plan.name}
                  </h2>
                  <p className="mt-1 text-sm text-brand-slate">{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-heading text-4xl font-semibold text-foreground">
                      {plan.price[period]}
                    </span>
                    {plan.priceSuffix[period] && (
                      <span className="text-sm text-brand-slate">{plan.priceSuffix[period]}</span>
                    )}
                  </div>

                  <Link
                    href={plan.cta.href}
                    className={`mt-6 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-brand-gold text-brand-navy hover:bg-brand-gold-dark hover:text-white"
                        : "border border-brand-border text-foreground hover:border-brand-navy-light hover:text-brand-navy-light"
                    }`}
                  >
                    {plan.cta.label}
                  </Link>

                  <ul className="mt-7 flex-1 space-y-3 border-t border-brand-border pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-slate">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-border bg-brand-surface py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
              FAQ
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Questions about pricing?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-brand-border bg-background p-5">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Still not sure which plan fits?
            </h2>
            <p className="mt-2 max-w-md text-brand-slate">
              Start free, watch a few lessons, and upgrade whenever
              you&apos;re ready for structured courses.
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

function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 3.5H5.5a2 2 0 0 0-2 2V11c0 .5.2 1 .6 1.4l8.2 8.2c.8.8 2 .8 2.8 0l5.7-5.7c.8-.8.8-2 0-2.8l-8.2-8.2c-.4-.4-.9-.6-1.4-.6Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" />
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

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 15c3.5-1 6-4 6.5-9.5C13 6 10 8.5 9 12l3 3Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12c-1.5 0-3.5.5-4.5 3.5C7 15 9 15.5 9 15.5M12 15c0 1.5-.5 3.5-3.5 4.5 0-2.5-.5-4.5-.5-4.5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="7.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5 14.9 9l7 .6-5.3 4.6 1.6 6.8-6.2-3.7-6.2 3.7 1.6-6.8L2.1 9.6l7-.6L12 2.5Z" />
    </svg>
  );
}

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m3.5 8.5 3 2.5 3.5-5 2 4.5 2-4.5 3.5 5 3-2.5-1.5 9h-14l-1.5-9Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 20.5h12" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}