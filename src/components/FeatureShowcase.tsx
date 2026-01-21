interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  reversed?: boolean;
}

function FeatureCard({ title, description, children, reversed }: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      <div className="flex-1 lg:max-w-md">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
          {title}
        </h3>
        <p className="text-muted-dark leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}

function MockWindow({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-default overflow-hidden">
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

// Feature 1: AI Lesson Summaries
function LessonSummaryPreview() {
  return (
    <MockWindow title="Lesson Summary">
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-default">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">E</span>
          </div>
          <div>
            <p className="font-medium text-primary text-sm">Emma Thompson</p>
            <p className="text-xs text-muted">GCSE Maths • 58 mins • Today, 3:45 PM</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Topics Covered</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Quadratic Equations</span>
            <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Factorisation</span>
            <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">Quadratic Formula</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Chapters</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">0:00</span>
              <span className="text-primary">Introduction & Review</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">8:30</span>
              <span className="text-primary">Factorisation Method</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">25:00</span>
              <span className="text-primary">Quadratic Formula</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">42:00</span>
              <span className="text-primary">Practice Problems</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-page rounded-lg">
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Summary</p>
          <p className="text-sm text-primary leading-relaxed">
            Emma demonstrated strong understanding of factorisation, successfully solving 8/10 problems independently. Introduced the quadratic formula with good initial grasp...
          </p>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 2: Student Performance Insights
function PerformanceInsightsPreview() {
  return (
    <MockWindow title="Student Insights">
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-default">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 font-semibold">E</span>
            </div>
            <div>
              <p className="font-medium text-primary text-sm">Emma Thompson</p>
              <p className="text-xs text-muted">12 lessons this month</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">87%</p>
            <p className="text-xs text-green-600">+12% this month</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-xl font-bold text-blue-600">92%</p>
            <p className="text-xs text-muted">Engagement</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-xl font-bold text-green-600">85%</p>
            <p className="text-xs text-muted">Comprehension</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-xl font-bold text-purple-600">15/15</p>
            <p className="text-xs text-muted">Problems</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Key Strengths</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-primary">Excellent grasp of factorisation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-primary">Quick to apply formulas</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Areas for Improvement</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-sm text-primary">Practice with negative coefficients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-sm text-primary">Word problem interpretation</span>
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 3: Tutor Feedback & Coaching
function TutorFeedbackPreview() {
  return (
    <MockWindow title="Tutor Feedback">
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-default">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-primary text-sm">Session Feedback</p>
            <p className="text-xs text-muted">Lesson with Emma • Today</p>
          </div>
        </div>

        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-xs font-medium text-green-800 uppercase tracking-wide mb-2">What Worked Well</p>
          <ul className="space-y-1 text-sm text-green-700">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Clear explanations with visual examples</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Good use of scaffolded questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Effective pace adjustments based on responses</span>
            </li>
          </ul>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs font-medium text-blue-800 uppercase tracking-wide mb-2">Suggestions</p>
          <ul className="space-y-1 text-sm text-blue-700">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Consider more real-world examples for engagement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Allow more think-time after questions</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between p-3 bg-page rounded-lg">
          <div>
            <p className="text-xs text-muted">Teaching Score</p>
            <p className="text-lg font-bold text-primary">8.5/10</p>
          </div>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 4: AI Lesson Plan Generator
function LessonPlanPreview() {
  return (
    <MockWindow title="Lesson Plan Generator">
      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 px-3 py-2 bg-page border border-default rounded-lg text-sm text-primary">
            GCSE Maths: Quadratic Equations
          </div>
          <button className="px-4 py-2 bg-primary text-white text-sm rounded-lg font-medium">
            Generate
          </button>
        </div>

        <div className="p-4 bg-page rounded-lg border border-default">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <span className="text-xs text-muted">Generated Lesson Plan</span>
          </div>

          <div className="text-sm text-primary space-y-3">
            <div>
              <p className="font-semibold">Lesson: Introduction to Quadratic Equations</p>
            </div>

            <div>
              <p className="font-medium text-muted-dark mb-1">Learning Objectives:</p>
              <ul className="list-disc list-inside space-y-0.5 text-muted-dark">
                <li>Understand standard form ax² + bx + c = 0</li>
                <li>Solve quadratics by factorisation</li>
                <li>Apply the quadratic formula</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-muted-dark mb-1">Starter Activity (10 mins):</p>
              <p className="text-muted-dark">Review linear equations, introduce squared terms</p>
            </div>

            <div>
              <p className="font-medium text-muted-dark mb-1">Main Teaching (25 mins):</p>
              <ol className="list-decimal list-inside space-y-0.5 text-muted-dark">
                <li>Define quadratic equations with examples</li>
                <li>Demonstrate factorisation method</li>
                <li>Introduce the quadratic formula</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 5: Parent Progress Reports
function ParentReportPreview() {
  return (
    <MockWindow title="Progress Report">
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-default">
          <div>
            <p className="font-medium text-primary">Progress Report</p>
            <p className="text-xs text-muted">Emma Thompson • January 2025</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-xs rounded-lg">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            Share
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-page rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted">Lessons</p>
          </div>
          <div className="p-3 bg-page rounded-lg text-center">
            <p className="text-2xl font-bold text-green-600">+18%</p>
            <p className="text-xs text-muted">Improvement</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Monthly Progress</p>
          <div className="h-20 flex items-end gap-1">
            {[65, 70, 72, 68, 75, 78, 82, 80, 85, 87, 88, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-blue-500 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="p-3 bg-page rounded-lg">
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Summary</p>
          <p className="text-sm text-primary leading-relaxed">
            Emma has made excellent progress this month, particularly in algebra. She consistently engages well in lessons and shows strong problem-solving skills.
          </p>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 6: Automatic Attendance Tracking
function AttendancePreview() {
  return (
    <MockWindow title="Attendance">
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-default">
          <p className="font-medium text-primary text-sm">Today&apos;s Lessons</p>
          <span className="text-xs text-muted">Auto-detected from recordings</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-page rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Emma Thompson</p>
                <p className="text-xs text-muted">GCSE Maths • 3:45 PM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-green-600">Present</p>
              <p className="text-xs text-muted">Joined 3:44 PM</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-page rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">James Wilson</p>
                <p className="text-xs text-muted">A-Level Physics • 5:00 PM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-green-600">Present</p>
              <p className="text-xs text-muted">Joined 4:58 PM</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-page rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Sophie Chen</p>
                <p className="text-xs text-muted">GCSE English • 6:30 PM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-orange-600">Late</p>
              <p className="text-xs text-muted">Joined 6:38 PM</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
          <span className="text-sm text-green-700">Attendance rate this week</span>
          <span className="text-lg font-bold text-green-700">96%</span>
        </div>
      </div>
    </MockWindow>
  );
}

export function FeatureShowcase() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-link uppercase tracking-wide mb-3">
            Platform Features
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Everything you need to transform tutoring
          </h2>
          <p className="text-muted-dark max-w-2xl mx-auto">
            Powerful AI tools that work together to give you complete visibility into every lesson.
          </p>
        </div>

        <div className="space-y-24">
          <FeatureCard
            title="AI Lesson Summaries"
            description="Every recorded lesson is automatically transcribed and summarised. Get a clear overview of what was covered, key topics discussed, and timestamped chapters—without tutors writing a single note."
          >
            <LessonSummaryPreview />
          </FeatureCard>

          <FeatureCard
            title="Student Performance Insights"
            description="AI analyses each student's engagement, identifies their strengths, and highlights areas for improvement. Track individual progress across every lesson, even in group sessions."
            reversed
          >
            <PerformanceInsightsPreview />
          </FeatureCard>

          <FeatureCard
            title="Tutor Feedback & Coaching"
            description="Tutors receive personalised feedback on their teaching after each session. Understand what's working, get actionable suggestions, and improve continuously—without manual observations."
          >
            <TutorFeedbackPreview />
          </FeatureCard>

          <FeatureCard
            title="AI Lesson Plan Generator"
            description="Before a session, tutors can generate structured lesson plans tailored to the student's history and learning goals. Enter a topic, click generate, and get a ready-to-use plan in seconds."
            reversed
          >
            <LessonPlanPreview />
          </FeatureCard>

          <FeatureCard
            title="Parent Progress Reports"
            description="Generate professional reports summarising student progress over any time period. Share real evidence of improvement with parents and clients—not just vague updates."
          >
            <ParentReportPreview />
          </FeatureCard>

          <FeatureCard
            title="Automatic Attendance Tracking"
            description="AI detects who joined each lesson and when. Attendance is logged automatically from the recording—no manual registers, no chasing tutors for confirmation."
            reversed
          >
            <AttendancePreview />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
