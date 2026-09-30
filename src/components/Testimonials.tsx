/*
 * TODO: this section ships with placeholder quotes on purpose — replace
 * every entry in TESTIMONIALS below with a real quote from a real student
 * (screenshot a YouTube comment, a DM, or a course feedback form, with
 * their permission to use their name). Do not launch with invented quotes
 * attributed to made-up people; that's misleading to visitors.
 */

const TESTIMONIALS: {
  name: string;
  course: string;
  quote: string;
}[] = [
  {
    name: "[Student name]",
    course: "[Course they took, e.g. Beginner English]",
    quote:
      "[Add a real quote here — something specific about what changed for them, in their own words.]",
  },
  {
    name: "[Student name]",
    course: "[Course they took]",
    quote: "[Add a real quote here.]",
  },
  {
    name: "[Student name]",
    course: "[Course they took]",
    quote: "[Add a real quote here.]",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-lg">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            What students are saying.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-slate">
            Real feedback from real students — updated as new stories come in.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-brand-border bg-brand-surface p-6"
            >
              <QuoteIcon className="h-7 w-7 text-brand-gold/50" />
              <blockquote className="mt-4 flex-1 text-base italic leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-border pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy-light">
                  <UserIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="truncate text-xs text-brand-slate">{t.course}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.5 6C4.9 6 3 8.1 3 10.6c0 2.3 1.7 4.2 3.9 4.4-.3 1.5-1.4 2.6-3 3v2c3.3-.4 5.6-2.9 5.6-6.4V10.6C9.5 8.1 8.3 6 7.5 6Zm10 0c-2.6 0-4.5 2.1-4.5 4.6 0 2.3 1.7 4.2 3.9 4.4-.3 1.5-1.4 2.6-3 3v2c3.3-.4 5.6-2.9 5.6-6.4V10.6C19.5 8.1 18.3 6 17.5 6Z" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M5 19.5c1.2-3.3 4-5 7-5s5.8 1.7 7 5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}