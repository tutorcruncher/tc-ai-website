"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <details className="group border-b">
        <summary className="flex items-center justify-between p-3 cursor-pointer list-none">
          <span className="font-medium text-primary">{item.question}</span>
          <svg
            className="h-5 w-5 text-muted group-open:rotate-180 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-3 pb-6 text-muted-dark">{item.answer}</div>
      </details>
    </motion.div>
  );
}

export function FAQ() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-20 px-4 scroll-mt-16">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
