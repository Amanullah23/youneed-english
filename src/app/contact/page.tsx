"use client";

import { useState, type FormEvent } from "react";

/*
 * TODO: this form doesn't post anywhere yet — wire it up to the Express API
 * once a /contact (or /messages) endpoint exists, the same way the Footer
 * newsletter form is meant to be wired up. Right now submitting just shows
 * a success state in the UI.
 *
 * The email address and response-time line below are placeholders —
 * confirm the real inbox and a realistic response time before this goes
 * live.
 */

const CONTACT_EMAIL = "[hello@youneedenglish.com]";
const YOUTUBE_URL = "https://www.youtube.com/@YouNeed_English";
const FACEBOOK_URL = "https://www.facebook.com/YouNeedEnglish";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("submitting");
    // Simulated submit — replace with a real API call once the backend exists.
    setTimeout(() => setStatus("submitted"), 400);
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
            <MailIcon className="h-3.5 w-3.5" />
            Contact
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Get in touch.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            Questions about a course, a partnership idea, or just want to
            say hello? Send a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Form */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8">
            {status === "submitted" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  Message sent
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-slate">
                  Thanks for reaching out — we&apos;ll get back to you as
                  soon as we can.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", subject: "", message: "" });
                    setStatus("idle");
                  }}
                  className="mt-6 text-sm font-semibold text-brand-navy-light transition-colors hover:text-brand-navy"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="What's this about?"
                    className="mt-2 w-full rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="How can we help?"
                    className="mt-2 w-full resize-none rounded-md border border-brand-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-brand-slate/60 focus:border-brand-navy-light focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark hover:text-white disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message
                      <SendIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <MailIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">Email</h3>
              <p className="mt-1 text-sm text-brand-slate">{CONTACT_EMAIL}</p>
              <p className="mt-3 text-xs text-brand-slate">
                We typically reply within [X] business days.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <ChatIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                Follow along
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-slate">
                Quick questions? Drop a comment on a YouTube video or send a
                message on Facebook — we're active there daily.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-slate transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
                >
                  <YouTubeIcon className="h-4 w-4" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-slate transition-colors hover:border-brand-navy-light hover:text-brand-navy-light"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="m4.5 7 7.5 5.5L19.5 7"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
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

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 3 3 10.5l7.5 3L14 21l7-18Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 3 10.5 13.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
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