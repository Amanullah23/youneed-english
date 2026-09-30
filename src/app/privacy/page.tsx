import Link from "next/link";

/*
 * TODO: this is a solid starter Privacy Policy, but it hasn't been reviewed
 * by a lawyer and ships with a few bracketed [X] placeholders on purpose —
 * the payment processor name, jurisdiction, and effective date. Confirm all
 * of these (and get the policy itself reviewed) before this goes live.
 */

const CONTACT_EMAIL = "[hello@youneedenglish.com]";
const EFFECTIVE_DATE = "[Month Day, Year]";

type Section = { id: string; title: string; paragraphs?: string[]; list?: string[] };

const SECTIONS: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      'This Privacy Policy explains how YouNeed English Academy ("we," "us," or "our") collects, uses, and protects your information when you use our website, courses, and related services (collectively, the "Service").',
      "By using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "We collect information you provide directly to us, information collected automatically as you use the Service, and information from third parties.",
    ],
    list: [
      "Account information: name, email address, and phone/WhatsApp number when you register for a course or create an account.",
      `Payment information: processed securely by [Payment Processor Name]; we do not store your full card details on our servers.`,
      "Usage information: pages visited, courses viewed, lesson progress, and general device/browser information.",
      "Communications: messages you send through our Contact form, and your email address if you subscribe to our newsletter.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    list: [
      "Provide, maintain, and improve the Service, including course access and progress tracking",
      "Process registrations and, where applicable, payments",
      "Communicate with you about your account, courses, or support requests",
      "Send course updates and, if you've opted in, marketing emails (you can unsubscribe anytime)",
      "Monitor and analyze usage trends to improve our courses and content",
      "Detect, prevent, and address technical issues, fraud, or abuse",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Similar Technologies",
    paragraphs: [
      "We use cookies and similar technologies to keep you logged in, remember your preferences, and understand how visitors use the Service. You can control cookies through your browser settings, though disabling them may affect how the Service functions.",
      "Embedded YouTube videos on our site may set their own cookies in accordance with Google's privacy policy.",
    ],
  },
  {
    id: "how-we-share-information",
    title: "How We Share Your Information",
    paragraphs: ["We do not sell your personal information. We may share information with:"],
    list: [
      "Service providers who help us operate the Service (e.g. hosting, email delivery, payment processing)",
      "YouTube and Facebook, when you interact with embedded content or linked pages",
      "Authorities, when required by law or to protect our rights and the safety of our users",
      "A successor entity, in the event of a merger, acquisition, or sale of assets",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    paragraphs: [
      'We retain your information for as long as your account is active or as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. You can request deletion of your data at any time (see "Your Rights & Choices" below).',
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    paragraphs: [
      "We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    list: [
      "Access or update the information associated with your account",
      "Request a copy of the personal information we hold about you",
      "Request deletion of your account and associated data",
      "Unsubscribe from marketing emails at any time using the link in those emails",
    ],
    paragraphs: [`To exercise any of these rights, contact us at ${CONTACT_EMAIL}.`],
  },
  {
    id: "children",
    title: "Children's Privacy",
    paragraphs: [
      "Some of our courses may be used by learners under the age of 18. We do not knowingly collect personal information from children without appropriate parental or guardian involvement in the registration process. If you believe a child has provided us with personal information without appropriate consent, please contact us so we can address it.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    paragraphs: [
      "Our Service may contain links to third-party websites, including YouTube and Facebook. We are not responsible for the privacy practices of those sites, and we encourage you to review their privacy policies separately.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We'll post the updated version here with a new effective date. Continued use of the Service after changes take effect means you accept the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [
      `If you have questions about this Privacy Policy or how we handle your information, reach out at ${CONTACT_EMAIL} or through our Contact page.`,
    ],
  },
];

export const metadata = {
  title: "Privacy Policy — YouNeed English Academy",
  description: "How YouNeed English Academy collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 bg-background">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
            <ShieldIcon className="h-3.5 w-3.5" />
            Privacy Policy
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Your privacy matters to us.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-brand-slate">
            How we collect, use, and protect your information across
            YouNeed English Academy.
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
                  href="/terms"
                  className="text-sm font-semibold text-brand-navy-light transition-colors hover:text-brand-navy"
                >
                  Read our Terms of Service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c2.5 1.5 5 2 7 2 0 8-3 12-7 15-4-3-7-7-7-15 2 0 4.5-.5 7-2Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9 12.3 2 2 4-4.3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}