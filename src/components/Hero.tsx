import Link from "next/link";

const YOUTUBE_URL = "https://www.youtube.com/@YouNeed_English";

const LESSON_PREVIEWS = [
  { title: "Common Phrasal Verbs", duration: "12:34", accent: "from-brand-gold to-brand-gold-dark" },
  { title: "IELTS Speaking Tips", duration: "18:02", accent: "from-brand-navy-light to-brand-navy" },
  { title: "Everyday Conversations", duration: "9:47", accent: "from-brand-green to-brand-navy-light" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-brand-navy/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold-dark opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-gold-dark" />
            </span>
            Teaching 23.6K+ students on YouTube
          </div>

          <h1 className="mt-5 max-w-xl text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Learn English the way it&apos;s actually spoken.
          </h1>

          <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-brand-slate">
            Structured video lessons, live courses, and real conversation
            practice — everything you need to go from hesitant to fluent,
            built around the YouNeed English YouTube channel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white"
            >
              Start Free
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
            >
              <PlayIcon className="h-4 w-4" />
              Watch on YouTube
            </a>
          </div>

          <p className="mt-4 text-sm text-brand-slate">
            Free lessons every week &middot; No credit card required
          </p>

          {/* Stat row */}
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-brand-border pt-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-brand-slate">
                Subscribers
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold text-foreground">
                23.6K+
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-brand-slate">
                Lessons
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold text-foreground">
                109+
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-brand-slate">
                Access
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold text-foreground">
                24/7
              </dd>
            </div>
          </dl>
        </div>

        {/* Channel / lesson preview card */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 pb-9 shadow-xl shadow-black/5 sm:p-6 sm:pb-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-navy">
                <GraduationCapIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-heading text-sm font-semibold text-foreground">
                  YouNeed English
                </p>
                <p className="text-xs text-brand-slate">
                  23.6K subscribers &middot; 109 videos
                </p>
              </div>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto shrink-0 rounded-md bg-brand-navy px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-navy-light"
              >
                Subscribe
              </a>
            </div>

            <div className="mt-5 space-y-2.5">
              {LESSON_PREVIEWS.map((lesson) => (
                <a
                  key={lesson.title}
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-brand-navy/5"
                >
                  <span
                    className={`relative flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${lesson.accent}`}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <PlayIcon className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="absolute bottom-1 right-1 rounded bg-black/50 px-1 text-[10px] font-medium text-white">
                      {lesson.duration}
                    </span>
                  </span>
                  <span className="min-w-0 text-sm font-medium text-foreground">
                    {lesson.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-4 py-3 shadow-lg sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
              <CheckIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-foreground">Beginner to fluent</p>
              <p className="text-xs text-brand-slate">One structured path</p>
            </div>
          </div>
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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
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