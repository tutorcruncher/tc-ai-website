"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    title: "Save Hours Every Week",
    description: "No more chasing tutors for lesson notes. Every session is automatically summarised and ready to review.",
    stat: "5+",
    statLabel: "hours saved weekly",
  },
  {
    title: "Real-time Insights",
    description: "Analysis ready within 15 minutes of each lesson ending. Never wait for feedback again.",
    stat: "15",
    statLabel: "min processing",
  },
  {
    title: "Every Student Tracked",
    description: "Individual progress tracking for every student, even in group sessions.",
    stat: "100%",
    statLabel: "visibility",
  },
  {
    title: "Tutor Coaching Built-in",
    description: "Personalised feedback helps tutors improve with every lesson they deliver.",
    stat: "8.5",
    statLabel: "avg tutor score",
  },
  {
    title: "One Platform",
    description: "All your lesson data and insights in one place. No more juggling multiple tools.",
    stat: "1",
    statLabel: "dashboard",
  },
  {
    title: "Parent Reports",
    description: "Professional reports showing real progress. Share evidence, not just updates.",
    stat: "+18%",
    statLabel: "avg improvement",
  },
];

export function WhyChooseB() {
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
    <section ref={sectionRef} id="why-choose" className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose TutorCruncher AI
          </h2>
          <p className="text-muted-dark max-w-2xl mx-auto">
            Purpose-built for tutoring companies who want to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-link">{benefit.stat}</span>
                <p className="text-sm text-muted uppercase tracking-wide">{benefit.statLabel}</p>
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-dark text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
