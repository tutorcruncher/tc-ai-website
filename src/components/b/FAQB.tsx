"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question: "Ut enim ad minim veniam quis nostrud?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Excepteur sint occaecat cupidatat?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Nemo enim ipsam voluptatem quia voluptas?",
    answer:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    question: "Quis autem vel eum iure reprehenderit?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

export function FAQB() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-4 bg-white scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-dark max-w-2xl mx-auto">
            Everything you need to know about TutorCruncher AI.
          </p>
        </motion.div>

        {/* Two-column grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: "easeOut" }}
              className="bg-page rounded-xl p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                {item.question}
              </h3>
              <p className="text-muted-dark text-sm leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
