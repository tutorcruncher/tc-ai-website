"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";

export function CTASection() {
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
    <section ref={sectionRef} className="py-64 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          Use the power of AI to transform how you teach
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-lg text-muted-dark max-w-2xl mx-auto mb-8"
        >
          Join a select group of tutoring companies getting early access to AI-powered lesson
          insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Button href="https://forms.gle/uunftAqJqn2ZFQzFA" size="large">
            Request Early Access
          </Button>
        </motion.div>

        {/* Social proof - tutors already signed up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex -space-x-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face"
              alt="Tutor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
              alt="Tutor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face"
              alt="Tutor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
              alt="Tutor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
              alt="Tutor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          </div>
          <p className="text-sm text-muted-dark">
            <span className="font-medium text-primary">50+ tutoring companies</span> already on the
            waitlist
          </p>
        </motion.div>
      </div>
    </section>
  );
}
