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
      "TutorCruncher AI is an intelligent tutoring management platform that helps tutoring businesses track lessons, monitor student progress, and generate actionable insights — all powered by AI. It streamlines the administrative side of tutoring so tutors and agencies can focus on teaching.",
  },
  {
    question: "How does the AI work during lessons?",
    answer:
      "Our AI takes transcribes from tutoring sessions, then generates structured lesson insights — including topics covered, student engagement, and areas for improvement. This eliminates manual note-taking and gives parents and administrators a clear picture of every session.",
  },
  {
    question: "Who is TutorCruncher AI designed for?",
    answer:
      "It's built for tutoring agencies, independent tutors, and education businesses of any size. Whether you manage a handful of students or hundreds of tutor-student relationships.",
  },
  {
    question: "How are progress reports generated?",
    answer:
      "Reports are generated automatically based on aggregated lesson data over a chosen time period. The AI synthesises session insights, attendance, and tutor feedback into professional, shareable reports — saving hours of manual report writing each term.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. All lesson recordings, transcripts, and student data are encrypted and stored securely. We follow strict data protection standards and never share your data with third parties. You retain full ownership of all content generated on the platform.",
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
