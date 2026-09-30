"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";

/*
 * TODO: this page ships with placeholder posts on purpose — replace every
 * entry in BLOG_POSTS below with a real article (title, excerpt, date, read
 * time). Once individual post pages exist at /blog/[slug], turn each card
 * back into a <Link> to that post instead of a plain <article>.
 */

type Category = "Grammar" | "Vocabulary" | "Speaking" | "Study Tips";

const CATEGORY_STYLES: Record<Category, string> = {
  Grammar: "bg-brand-navy/10 text-brand-navy",
  Vocabulary: "bg-brand-gold/15 text-brand-gold-dark",
  Speaking: "bg-brand-navy-light/15 text-brand-navy-light",
  "Study Tips": "bg-brand-green/15 text-brand-green",
};

const BLOG_POSTS: {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}[] = [
  {
    slug: "post-1",
    category: "Grammar",
    title: "[Blog post title]",
    excerpt:
      "[Add a short summary of this article — 1–2 sentences on what it covers.]",
    date: "[Publish date]",
    readTime: "[X] min read",
  },
  {
    slug: "post-2",
    category: "Vocabulary",
    title: "[Blog post title]",
    excerpt:
      "[Add a short summary of this article — 1–2 sentences on what it covers.]",
    date: "[Publish date]",
    readTime: "[X] min read",
  },
  {
    slug: "post-3",
    category: "Speaking",
    title: "[Blog post title]",
    excerpt:
      "[Add a short summary of this article — 1–2 sentences on what it covers.]",
    date: "[Publish date]",
    readTime: "[X] min read",
  },
  {
    slug: "post-4",
    category: "Study Tips",
    title: "[Blog post title]",
    excerpt:
      "[Add a short summary of this article — 1–2 sentences on what it covers.]",
    date: "[Publish date]",
    readTime: "[X] min read",
  },
  {
    slug: "post-5",
    category: "Grammar",
    title: "[Blog post title]",
    excerpt:
      "[Add a short summary of this article — 1–2 sentences on what it covers.]",
    date: "[Publish date]",
    readTime: "[X] min read",
  },
  {
    slug: "post-6",
    category: "Vocabulary",
    title: "[Blog post title]",
    excerpt:
      "[Add a short summary of this article — 1–2 sentences on what it covers.]",
    date: "[Publish date]",
    readTime: "[X] min read",
  },
];

const FILTERS: ("All" | Category)[] = ["All", "Grammar", "Vocabulary", "Speaking", "Study Tips"];

const READING_ROWS: { icon: ComponentType<{ className?: string }>; iconBg: string }[] = [
  { icon: PencilIcon, iconBg: "bg-brand-navy/10 text-brand-navy" },
  { icon: ChatBubbleIcon, iconBg: "bg-brand-gold/15 text-brand-gold-dark" },
  { icon: BookmarkIcon, iconBg: "bg-brand-green/15 text-brand-green" },
];

export default function BlogPage() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const visible =
    filter === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter);

  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-brand-navy/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
              <BookIcon className="h-3.5 w-3.5" />
              Blog
            </div>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              English tips, lessons, and learning insights.
            </h1>
            <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
              Practical articles to help you learn faster — grammar
              breakdowns, vocabulary guides, and tips inspired by lessons
              from the YouNeed English YouTube channel.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="rotate-2 rounded-2xl border border-brand-border bg-background p-6 shadow-xl shadow-black/5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-navy">
                  <BookIcon className="h-4 w-4" />
                </span>
                <p className="font-heading text-sm font-semibold text-foreground">
                  Latest on the blog
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {READING_ROWS.map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${row.iconBg}`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1 space-y-1.5">
                        <div className="h-2.5 w-3/4 rounded-full bg-brand-border" />
                        <div className="h-2 w-1/2 rounded-full bg-brand-border/70" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-4 py-3 shadow-lg sm:flex">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                <SparkleIcon className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-foreground">New articles weekly</p>
                <p className="text-xs text-brand-slate">Fresh tips, every week</p>
              </div>
            </div>

            {/* Floating icon accents */}
            <div
              className="absolute -top-4 -right-3 hidden h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-gold-dark shadow-lg sm:flex"
              style={{ animation: "gentle-float 4s ease-in-out infinite" }}
              aria-hidden="true"
            >
              <PencilIcon className="h-5 w-5" />
            </div>
            <div
              className="absolute top-1/3 -right-6 hidden h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-navy-light shadow-lg lg:flex"
              style={{ animation: "gentle-float 5s ease-in-out infinite 0.6s" }}
              aria-hidden="true"
            >
              <ChatBubbleIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters + posts */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="Filter posts by category"
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

          {/* Post grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-brand-border bg-brand-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand-navy-light hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${CATEGORY_STYLES[post.category]}`}
                  >
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-brand-slate">
                    <ClockIcon className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mt-4 font-heading text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-slate">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy-light">
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-10 text-center text-sm text-brand-slate">
              No posts in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-border bg-brand-surface py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Ready to move from reading to speaking?
            </h2>
            <p className="mt-2 max-w-md text-brand-slate">
              Put these tips into practice with a structured course built for
              real conversations.
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

function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.7-1.5-1.5v-13Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5v-13Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
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

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m16.5 3.5 4 4L8 20H4v-4L16.5 3.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m14.5 5.5 4 4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 4.5h16v11H8.5L4 19.5V4.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

function BookmarkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 3.5h12v17l-6-4-6 4v-17Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11 2.5c.4 3.2 1.4 4.9 4.5 5.5-3.1.6-4.1 2.3-4.5 5.5-.4-3.2-1.4-4.9-4.5-5.5 3.1-.6 4.1-2.3 4.5-5.5Zm7 8c.3 2 .9 3 2.7 3.4-1.8.4-2.4 1.4-2.7 3.4-.3-2-.9-3-2.7-3.4 1.8-.4 2.4-1.4 2.7-3.4Z" />
    </svg>
  );
}