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
        className="w-full text-left p-5 rounded-xl transition-all duration-300"
        style={{
          backgroundColor: isOpen ? '#141419' : '#111116',
          border: `1px solid ${isOpen ? '#2a2a35' : '#1a1a22'}`,
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.borderColor = '#2a2a35';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.borderColor = '#1a1a22';
          }
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-base font-medium pr-4"
            style={{ color: '#f6f6f7' }}
          >
            {item.question}
          </h3>
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              backgroundColor: isOpen ? 'rgba(99, 91, 255, 0.2)' : 'rgba(99, 91, 255, 0.1)',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: '#635bff' }}
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
                className="mt-4 text-sm leading-relaxed"
                style={{ color: '#7a7a85' }}
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

export function FAQC() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 relative" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Subtle gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 91, 255, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="text-sm font-medium tracking-wide mb-4"
            style={{ color: '#635bff' }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
            style={{ color: '#f6f6f7' }}
          >
            Questions?
            <br />
            <span style={{ color: '#7a7a85' }}>We have answers.</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
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
          className="mt-10 text-center"
        >
          <p
            className="text-sm mb-3"
            style={{ color: '#7a7a85' }}
          >
            Still have questions?
          </p>
          <a
            href="mailto:hello@tutorcruncher.com"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#635bff' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#7c6fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#635bff'}
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
