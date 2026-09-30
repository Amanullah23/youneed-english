import Link from "next/link";

const YOUTUBE_URL = "https://www.youtube.com/@YouNeed_English";

const APPROACH = [
  {
    title: "Practical first",
    desc: "Real conversations and phrases people actually use, not just grammar rules.",
    icon: ChatIcon,
  },
  {
    title: "Structured path",
    desc: "A clear route from beginner to fluent, so you always know what's next.",
    icon: StepsIcon,
  },
  {
    title: "Consistent lessons",
    desc: "New videos every week on YouTube, plus deeper courses on this site.",
    icon: CalendarIcon,
  },
  {
    title: "Learn anywhere",
    desc: "Video lessons and live courses you can follow on your own schedule.",
    icon: GlobeIcon,
  },
];

export function About() {
  return (
    <section className="bg-background py-16 sm:py-24" id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Story + approach */}
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
              About YouNeed English
            </p>
            <h2 className="mt-3 max-w-lg text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Real English, taught the way people actually speak it.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-slate">
              YouNeed English started as a YouTube channel with one goal: to
              teach English the way it&apos;s actually used in everyday
              conversations, not just how it looks in a textbook. It&apos;s
              since grown into a full learning path — weekly video lessons on
              YouTube, paired with structured courses here, so you always know
              exactly what to study next.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {APPROACH.map(({ title, desc, icon: Icon }) => (
                <div key={title} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="font-heading text-sm font-semibold text-foreground">
                      {title}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-brand-slate">
                      {desc}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Instructor card */}
          <div className="lg:pt-2">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-sm sm:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-navy">
                <GraduationCapIcon className="h-8 w-8" />
              </span>

              {/*
                TODO: replace the placeholder name/role/bio below with the
                real instructor's details (and swap the icon avatar above
                for an actual photo once you have one to use).
              */}
              <p className="mt-4 font-heading text-lg font-semibold text-foreground">
                [Instructor Name]
              </p>
              <p className="text-sm font-medium text-brand-gold-dark">
                Founder &amp; Lead Instructor
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                Teaches everyday English through the YouNeed English YouTube
                channel, focusing on real conversations, natural pronunciation,
                and confidence over rote memorization.
              </p>

              <div className="mt-6 flex items-center gap-4 border-t border-brand-border pt-5">
                <div>
                  <p className="font-heading text-xl font-semibold text-foreground">
                    23.6K+
                  </p>
                  <p className="text-xs text-brand-slate">Subscribers</p>
                </div>
                <div className="h-8 w-px bg-brand-border" />
                <div>
                  <p className="font-heading text-xl font-semibold text-foreground">
                    109+
                  </p>
                  <p className="text-xs text-brand-slate">Lessons</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-light"
                >
                  <YouTubeIcon className="h-4 w-4" />
                  Watch on YouTube
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 rounded-md px-4 py-2.5 text-sm font-semibold text-brand-navy-light hover:bg-brand-navy/5"
                >
                  Full story
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
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

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 1.96c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33ZM9.75 15.02V8.48l5.75 3.27-5.75 3.27Z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 4h16v11H8l-4 4V4Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5h8M8 12.5h5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

function StepsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 18v-3M10 18V9M16 18V5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="m3 15 6-6 4 4 7-7"
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
      <rect
        x="4"
        y="5.5"
        width="16"
        height="14.5"
        rx="2"
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.2-3.7-8.5S9.6 5.8 12 3.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
      />
    </svg>
  );
}