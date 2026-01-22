"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export function CTASectionB() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl p-8 md:p-12 lg:p-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Be first to transform your tutoring business
          </h2>
          <p className="text-muted-dark max-w-2xl mx-auto mb-8">
            Join a select group of tutoring companies getting early access to AI-powered lesson insights.
          </p>
          <Button href="/early-access" size="large">
            Request Early Access
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
