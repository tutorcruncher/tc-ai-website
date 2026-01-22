"use client";

import { motion } from "framer-motion";

export function IntegrationsD() {
  return (
    <section id="integrations" className="py-24 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-wide uppercase mb-4"
            style={{ color: '#e8a87c' }}
          >
            Integrations
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
            style={{ color: '#4a2d41' }}
          >
            Works with the tools
            <br />
            <span style={{ color: '#8a7a82' }}>you already use</span>
          </h2>
        </motion.div>

        {/* Main integration card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Visual - Browser mockup */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              backgroundColor: '#faf9f7',
              border: '1px solid rgba(74, 45, 65, 0.1)',
            }}
          >
            {/* Browser chrome */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(74, 45, 65, 0.1)' }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#e8a87c' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#d4c5ba' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c9bdb2' }} />
              </div>
              <div className="flex-1 flex justify-center">
                <div
                  className="rounded-full px-4 py-1 text-xs"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#8a7a82',
                    border: '1px solid rgba(74, 45, 65, 0.1)',
                  }}
                >
                  lessonspace.com
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Video feeds */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-video rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#4a2d41' }}
                  >
                    <span className="text-white font-medium text-lg">T</span>
                  </div>
                </div>
                <div
                  className="aspect-video rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#e8a87c' }}
                  >
                    <span className="text-white font-medium text-lg">S</span>
                  </div>
                </div>
              </div>

              {/* Whiteboard */}
              <div
                className="rounded-2xl p-5"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(74, 45, 65, 0.1)',
                }}
              >
                <p
                  className="text-xs uppercase tracking-wider mb-3"
                  style={{ color: '#8a7a82' }}
                >
                  Whiteboard
                </p>
                <div className="font-mono text-base space-y-1">
                  <p style={{ color: '#4a2d41' }}>x² + 5x + 6 = 0</p>
                  <p style={{ color: '#e8a87c' }}>(x + 2)(x + 3) = 0</p>
                </div>
              </div>

              {/* Recording indicator */}
              <div className="flex items-center justify-center gap-2 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: '#e8a87c' }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                    style={{ backgroundColor: '#e8a87c' }}
                  />
                </span>
                <span
                  className="text-sm"
                  style={{ color: '#8a7a82' }}
                >
                  Recording • AI analysis enabled
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-medium mb-4"
              style={{ color: '#4a2d41' }}
            >
              Deep Lesson Space integration
            </h3>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: '#8a7a82' }}
            >
              Your online tutoring sessions are automatically recorded and analysed. Complete visibility into every lesson without any extra setup or manual work.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {["Auto recording", "Whiteboard capture", "Video analysis", "No extra software"].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(232, 168, 124, 0.2)' }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      style={{ color: '#e8a87c' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span
                    className="font-medium"
                    style={{ color: '#4a2d41' }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
