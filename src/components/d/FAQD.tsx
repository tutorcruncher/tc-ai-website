"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    question: "What integrations do you support?",
    answer:
      "We currently integrate deeply with Lesson Space for automatic recording and analysis. More integrations with popular tutoring tools are coming soon.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Analysis is typically ready within 15 minutes of each lesson ending. You'll receive a notification when insights are available.",
  },
];

function FAQItemComponent({ item, index, isOpen, onToggle }: { item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left py-6 transition-all duration-300"
        style={{
          borderBottom: '1px solid rgba(74, 45, 65, 0.1)',
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-lg font-medium pr-4"
            style={{ color: '#4a2d41' }}
          >
            {item.question}
          </h3>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              backgroundColor: isOpen ? '#4a2d41' : 'rgba(232, 168, 124, 0.2)',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: isOpen ? '#ffffff' : '#e8a87c' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p
                className="mt-4 leading-relaxed"
                style={{ color: '#8a7a82' }}
              >
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export function FAQD() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4" style={{ backgroundColor: '#faf9f7' }}>
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="text-sm font-medium tracking-wide uppercase mb-4"
            style={{ color: '#e8a87c' }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
            style={{ color: '#4a2d41' }}
          >
            Questions?
            <br />
            <span style={{ color: '#8a7a82' }}>We have answers.</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div>
          {FAQ_ITEMS.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p
            className="mb-3"
            style={{ color: '#8a7a82' }}
          >
            Still have questions?
          </p>
          <a
            href="mailto:hello@tutorcruncher.com"
            className="inline-flex items-center gap-2 font-medium transition-colors"
            style={{ color: '#4a2d41' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e8a87c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4a2d41'}
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
