"use client";

import { useEffect, useRef } from "react";

export function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("animate-in");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose" ref={sectionRef} className="px-4 py-20 why-choose-section">
      <style jsx>{`
        .why-choose-section .fade-up {
          opacity: 0;
          transform: translateY(20px);
        }
        .why-choose-section.animate-in .fade-up {
          animation: whyFadeUp 0.5s ease-out forwards;
        }
        .why-choose-section.animate-in .delay-1 { animation-delay: 0.05s; }
        .why-choose-section.animate-in .delay-2 { animation-delay: 0.1s; }
        .why-choose-section.animate-in .delay-3 { animation-delay: 0.15s; }
        .why-choose-section.animate-in .delay-4 { animation-delay: 0.2s; }
        .why-choose-section.animate-in .delay-5 { animation-delay: 0.25s; }
        .why-choose-section.animate-in .delay-6 { animation-delay: 0.3s; }
        .why-choose-section.animate-in .delay-7 { animation-delay: 0.35s; }
        .why-choose-section.animate-in .delay-8 { animation-delay: 0.4s; }
        @keyframes whyFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="fade-up font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Why Choose TutorCruncher AI
        </h2>
        <p className="fade-up delay-1 text-center text-muted-dark mb-12 max-w-2xl mx-auto">
          Working with the leaders in tutoring and education for more than 10 years
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1 */}
          {/* Large card - Save Hours */}
          <div className="fade-up delay-2 md:col-span-2 bg-white rounded-2xl border border-default overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image on left */}
              <div className="md:w-2/5 h-48 md:h-auto relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tutors-collaborating.jpg"
                  alt="Tutors collaborating"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Content on right */}
              <div className="md:w-3/5 p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Save Hours Every Week
                </h3>
                <p className="text-muted-dark text-sm mb-6">
                  Every session is automatically summarised and ready to review so you can focus
                  on what&apos;s important.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-page rounded-lg">
                    <span className="text-sm text-primary">Lesson summary</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      Auto-generated
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-page rounded-lg">
                    <span className="text-sm text-primary">Student feedback</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      Auto-generated
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-page rounded-lg">
                    <span className="text-sm text-primary">Attendance tracking</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      Auto-detected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small cards stack */}
          <div className="space-y-4">
            <div className="fade-up delay-3 bg-white rounded-2xl border border-default p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Real-time Insights
                </h3>
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <p className="text-muted text-sm mt-1">Analysis within 15 minutes</p>
            </div>
            <div className="fade-up delay-4 bg-white rounded-2xl border border-default p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Every Student
                </h3>
                <div className="flex -space-x-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/tutor-sarah.jpg"
                    alt="Emma"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/avatar-james.jpg"
                    alt="James"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/avatar-sophie.jpg"
                    alt="Sophie"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                </div>
              </div>
              <p className="text-muted text-sm mt-1">Individual progress tracking</p>
            </div>
            <div className="fade-up delay-5 bg-white rounded-2xl border border-default p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Powered by AI
                </h3>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
              <p className="text-muted text-sm mt-1">Advanced language models</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="fade-up delay-6 bg-white rounded-2xl border border-default p-6">
            <h3 className="font-heading text-xl font-semibold text-primary mb-2">
              Tutor Feedback
            </h3>
            <p className="text-muted-dark text-sm mb-4">
              Personalised feedback helps tutors improve with every lesson.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-primary">Great use of real-world examples</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <span className="text-sm text-primary">Try allowing more think-time after questions</span>
              </div>
            </div>
          </div>

          <div className="fade-up delay-7 bg-white rounded-2xl border border-default p-6 text-center">
            <h3 className="font-heading text-xl font-semibold text-primary mb-2">
              One Platform
            </h3>
            <p className="text-muted-dark text-sm">
              All your lesson data and insights in one place. No more juggling multiple tools or
              chasing tutors for updates.
            </p>
          </div>

          <div className="fade-up delay-7 bg-white rounded-2xl border border-default p-6">
            <h3 className="font-heading text-xl font-semibold text-primary mb-2">
              Parent Reports
            </h3>
            <p className="text-muted-dark text-sm mb-4">
              Professional reports showing real progress.
            </p>
            <div className="p-3 bg-page rounded-lg">
              <p className="text-sm text-primary leading-relaxed">
                &ldquo;Emma has made excellent progress in algebra this month&hellip;&rdquo;
              </p>
              <p className="text-xs text-muted mt-2">Auto-generated summary</p>
            </div>
          </div>

          {/* Row 3 - Full width */}
          <div className="fade-up delay-8 md:col-span-3 bg-white rounded-2xl border border-default p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Always in the Loop
                </h3>
                <p className="text-muted-dark text-sm">
                  Stay informed with automatic notifications about student progress, lesson
                  completions, and important insights.
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/avatar-emma.jpg"
                    alt="Emma"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-primary">Lesson summary ready for Emma</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/avatar-james.jpg"
                    alt="James"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-primary">
                    Progress milestone: James completed algebra module
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                  <div className="flex -space-x-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/avatar-emma.jpg"
                      alt="Student"
                      className="w-4 h-4 rounded-full object-cover border border-white"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/avatar-james.jpg"
                      alt="Student"
                      className="w-4 h-4 rounded-full object-cover border border-white"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/avatar-sophie.jpg"
                      alt="Student"
                      className="w-4 h-4 rounded-full object-cover border border-white"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-primary">
                    Weekly report generated for 12 students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
