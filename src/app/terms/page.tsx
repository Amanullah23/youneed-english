import Link from "next/link";

/*
 * TODO: this is a solid starter Terms of Service, but it hasn't been
 * reviewed by a lawyer and ships with a few bracketed [X] placeholders on
 * purpose — the refund policy, governing-law jurisdiction, and effective
 * date. Confirm all of these (and get the terms themselves reviewed)
 * before this goes live.
 */

const CONTACT_EMAIL = "[hello@youneedenglish.com]";
const EFFECTIVE_DATE = "[Month Day, Year]";

type Section = { id: string; title: string; paragraphs?: string[]; list?: string[] };

const SECTIONS: Section[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    paragraphs: [
      'These Terms of Service ("Terms") govern your access to and use of YouNeed English Academy\'s website, courses, and related services (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.',
    ],
  },
  {
    id: "description",
    title: "Description of Service",
    paragraphs: [
      "YouNeed English Academy provides English-language video lessons, structured courses, and related educational content, available through free and paid plans as described on our Pricing page.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility & Account Registration",
    paragraphs: [
      "You must provide accurate information when registering for an account or a course. If you are under 18, a parent or guardian should be involved in your registration and use of the Service.",
      "You're responsible for keeping your login credentials confidential and for all activity under your account.",
    ],
  },
  {
    id: "courses-payment",
    title: "Course Access, Plans & Payment",
    paragraphs: [
      "Access to courses depends on your selected plan (Free, Pro, or All-Access), as described on our Pricing page. Paid plans are billed on a recurring basis (monthly or yearly) unless otherwise stated at the time of purchase.",
      "Prices, features, and available plans may change; we'll make reasonable efforts to notify active subscribers of material changes in advance.",
    ],
  },
  {
    id: "cancellations-refunds",
    title: "Cancellations & Refunds",
    paragraphs: [
      "You may cancel a paid plan at any time; you'll keep access until the end of your current billing period. [Add your refund policy here — e.g. whether partial refunds are offered for unused time.]",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    paragraphs: ["When using the Service, you agree not to:"],
    list: [
      "Share your account credentials or resell access to the Service",
      "Copy, redistribute, or publicly share course content without permission",
      "Use the Service for any unlawful purpose or in a way that disrupts other learners",
      "Attempt to reverse-engineer, scrape, or interfere with the Service's underlying systems",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "All course content, videos, text, graphics, and branding on the Service are owned by YouNeed English Academy or its licensors and are protected by copyright and other intellectual property laws. Your paid or free access grants you a personal, non-transferable license to use the content for your own learning — not to reproduce, resell, or distribute it.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services & Links",
    paragraphs: [
      "The Service may link to or embed third-party platforms, including YouTube and Facebook. We don't control and aren't responsible for third-party content, policies, or practices.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      'The Service is provided "as is" without warranties of any kind, express or implied. We don\'t guarantee specific learning outcomes, and individual results depend on effort, consistency, and other factors outside our control.',
    ],
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, YouNeed English Academy won't be liable for any indirect, incidental, or consequential damages arising from your use of the Service.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: [
      "We may suspend or terminate access to the Service for violations of these Terms or for any conduct that we believe harms the Service or other users. You may stop using the Service and cancel your account at any time.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of [Jurisdiction — e.g. Afghanistan, or the jurisdiction applicable to your registered business], without regard to conflict-of-law principles.",
    ],
  },
  {
    id: "changes-terms",
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. We'll post the updated version here with a new effective date. Continued use of the Service after changes take effect means you accept the revised Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [`Questions about these Terms? Reach out at ${CONTACT_EMAIL} or through our Contact page.`],
  },
];

export const metadata = {
  title: "Terms of Service — YouNeed English Academy",
  description: "The terms that govern your use of YouNeed English Academy's website and courses.",
};

export default function TermsPage() {
  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <DocumentIcon className="h-3.5 w-3.5" />
            Terms of Service
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            The rules of the road.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            The terms that govern your use of YouNeed English Academy's
            website and courses.
          </p>
          <p className="mt-4 text-sm text-brand-slate">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Main content */}
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-slate">
                  {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* TOC sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
              <p className="text-sm font-semibold text-foreground">On this page</p>
              <nav className="mt-4">
                <ul className="space-y-2.5 text-sm">
                  {SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-brand-slate transition-colors hover:text-brand-navy-light"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 border-t border-brand-border pt-5">
                <Link
                  href="/privacy"
                  className="text-sm font-semibold text-brand-navy-light transition-colors hover:text-brand-navy"
                >
                  Read our Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 3.5V8h4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13h6M9 16.5h6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}