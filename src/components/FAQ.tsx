interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is TutorCruncher AI?",
    answer:
      "TutorCruncher AI is an AI-powered tutoring platform that provides real-time lesson analysis, personalised learning paths, and comprehensive reporting to help tutors deliver better educational outcomes.",
  },
  {
    question: "How does the AI analyse lessons?",
    answer:
      "Our AI monitors engagement levels, tracks comprehension through interactive assessments, and identifies patterns in student responses to provide actionable insights for tutors.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security seriously. All data is encrypted in transit and at rest, and we comply with GDPR and other relevant data protection regulations.",
  },
  {
    question: "When will TutorCruncher AI be available?",
    answer:
      "We're currently in early access. Join our waitlist to be among the first to try TutorCruncher AI when it launches.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <details key={index} className="group border-b">
              <summary className="flex items-center justify-between p-3 cursor-pointer list-none">
                <span className="font-medium text-primary">{item.question}</span>
                <svg
                  className="h-5 w-5 text-muted group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-3 pb-6 text-muted-dark">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
