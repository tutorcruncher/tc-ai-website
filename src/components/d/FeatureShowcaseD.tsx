"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: "summaries",
    label: "Summaries",
    title: "Lesson Summaries",
    description: "Every session transcribed and summarised with AI-generated chapters and key takeaways. No more chasing tutors for notes.",
    features: ["Auto-transcription", "Key moments highlighted", "Searchable archives"],
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Student Analytics",
    description: "Track engagement, comprehension, and progress across every lesson. Understand exactly how each student is developing.",
    features: ["Engagement scoring", "Progress tracking", "Pattern detection"],
  },
  {
    id: "coaching",
    label: "Coaching",
    title: "Tutor Coaching",
    description: "Personalised feedback and scores help tutors improve their teaching continuously. Data-driven professional development.",
    features: ["Performance metrics", "Actionable feedback", "Improvement tracking"],
  },
  {
    id: "reports",
    label: "Reports",
    title: "Progress Reports",
    description: "Generate professional reports showing real evidence of improvement. Keep parents informed with minimal effort.",
    features: ["Auto-generated", "Visual progress charts", "Parent-friendly format"],
  },
];

export function FeatureShowcaseD() {
  const [activeTab, setActiveTab] = useState("summaries");
  const activeFeature = TABS.find((tab) => tab.id === activeTab)!;

  return (
    <section id="features" className="py-24 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-5xl">
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
            Features
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
            style={{ color: '#4a2d41' }}
          >
            Everything happens
            <br />
            <span style={{ color: '#8a7a82' }}>automatically</span>
          </h2>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div
            className="inline-flex gap-1 p-1.5 rounded-full"
            style={{ backgroundColor: '#f5f3f0' }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300"
                style={{
                  color: activeTab === tab.id ? '#ffffff' : '#4a2d41',
                  backgroundColor: activeTab === tab.id ? '#4a2d41' : 'transparent',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Content */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-medium mb-4"
                style={{ color: '#4a2d41' }}
              >
                {activeFeature.title}
              </h3>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#8a7a82' }}
              >
                {activeFeature.description}
              </p>

              <div className="space-y-3">
                {activeFeature.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(232, 168, 124, 0.2)' }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        style={{ color: '#e8a87c' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: '#4a2d41' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual placeholder */}
            <div
              className="aspect-square rounded-3xl flex items-center justify-center"
              style={{
                backgroundColor: '#f5f3f0',
                border: '1px solid rgba(74, 45, 65, 0.1)',
              }}
            >
              <div className="text-center p-8">
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(232, 168, 124, 0.2)' }}
                >
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    style={{ color: '#e8a87c' }}
                  >
                    {activeTab === "summaries" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    )}
                    {activeTab === "analytics" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    )}
                    {activeTab === "coaching" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    )}
                    {activeTab === "reports" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    )}
                  </svg>
                </div>
                <p
                  className="text-sm"
                  style={{ color: '#8a7a82' }}
                >
                  {activeFeature.title} visualization
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
