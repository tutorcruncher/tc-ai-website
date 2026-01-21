"use client";

import { useState, useEffect } from "react";

const DEMO_PROMPT = "Generate a lesson plan for GCSE maths: quadratic equations";
const TYPING_SPEED = 40;
const PAUSE_BEFORE_SUBMIT = 800;
const LOADING_DURATION = 1200;
const RESPONSE_TYPING_SPEED = 12;
const EDIT_TYPING_SPEED = 60;
const PHASE_PAUSE = 1200;

const LESSON_PLAN_BEFORE_EDIT = `Lesson: Introduction to Quadratic Equations

Learning Objectives:
• Understand the standard form ax² + bx + c = 0
• Solve quadratics by factorisation
• Apply the quadratic formula

Starter Activity (10 mins):
Review linear equations, introduce the concept of squared terms

Main Teaching (25 mins):
1. Define quadratic equations with examples
2. Demonstrate factorisation method
3. Introduce the quadratic formula

Practice Problems (20 mins):
Worksheet with graduated difficulty`;

const EDIT_LINE_PREFIX = "Worksheet with ";
const EDIT_TEXT_ORIGINAL = "graduated difficulty";
const EDIT_TEXT_NEW = "real-world applications";

const LESSON_PLAN_AFTER_EDIT = `Lesson: Introduction to Quadratic Equations

Learning Objectives:
• Understand the standard form ax² + bx + c = 0
• Solve quadratics by factorisation
• Apply the quadratic formula

Starter Activity (10 mins):
Review linear equations, introduce the concept of squared terms

Main Teaching (25 mins):
1. Define quadratic equations with examples
2. Demonstrate factorisation method
3. Introduce the quadratic formula

Practice Problems (20 mins):
Worksheet with real-world applications`;

const LESSON_IN_PROGRESS = `Live Lesson in Progress

Student: Emma Thompson
Topic: Quadratic Equations
Duration: 42:15

Current Activity: Practice Problems
Engagement Level: High
Questions Asked: 7
Problems Completed: 12/15`;

const LESSON_REPORT = `Lesson Report

Student: Emma Thompson
Date: Today, 3:45 PM
Duration: 58 minutes

Performance Summary:
• Comprehension: 87%
• Engagement: 92%
• Problems Solved: 15/15

Key Strengths:
✓ Excellent grasp of factorisation
✓ Quick to apply formulas

Areas for Improvement:
→ Practice with negative coefficients
→ Word problem interpretation

Recommended Next Lesson:
Completing the Square`;

type AnimationPhase =
  | "typing"
  | "paused"
  | "loading"
  | "generating"
  | "generated"
  | "selecting"
  | "replacing"
  | "replaced"
  | "transitioning-lesson"
  | "lesson-active"
  | "transitioning-report"
  | "report-generating"
  | "report-complete"
  | "complete";

export function PromptDemo() {
  const [displayedText, setDisplayedText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [editNewText, setEditNewText] = useState("");
  const [lessonText, setLessonText] = useState("");
  const [reportText, setReportText] = useState("");
  const [phase, setPhase] = useState<AnimationPhase>("typing");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case "typing":
        if (displayedText.length < DEMO_PROMPT.length) {
          timeout = setTimeout(() => {
            setDisplayedText(DEMO_PROMPT.slice(0, displayedText.length + 1));
          }, TYPING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase("paused"), PAUSE_BEFORE_SUBMIT);
        }
        break;

      case "paused":
        timeout = setTimeout(() => setPhase("loading"), 100);
        break;

      case "loading":
        timeout = setTimeout(() => setPhase("generating"), LOADING_DURATION);
        break;

      case "generating":
        if (responseText.length < LESSON_PLAN_BEFORE_EDIT.length) {
          timeout = setTimeout(() => {
            setResponseText(LESSON_PLAN_BEFORE_EDIT.slice(0, responseText.length + 1));
          }, RESPONSE_TYPING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase("generated"), 800);
        }
        break;

      case "generated":
        timeout = setTimeout(() => setPhase("selecting"), 800);
        break;

      case "selecting":
        timeout = setTimeout(() => setPhase("replacing"), 800);
        break;

      case "replacing":
        if (editNewText.length < EDIT_TEXT_NEW.length) {
          timeout = setTimeout(() => {
            setEditNewText(EDIT_TEXT_NEW.slice(0, editNewText.length + 1));
          }, EDIT_TYPING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase("replaced"), 800);
        }
        break;

      case "replaced":
        timeout = setTimeout(() => setPhase("transitioning-lesson"), PHASE_PAUSE);
        break;

      case "transitioning-lesson":
        timeout = setTimeout(() => setPhase("lesson-active"), 500);
        break;

      case "lesson-active":
        if (lessonText.length < LESSON_IN_PROGRESS.length) {
          timeout = setTimeout(() => {
            setLessonText(LESSON_IN_PROGRESS.slice(0, lessonText.length + 1));
          }, RESPONSE_TYPING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase("transitioning-report"), PHASE_PAUSE);
        }
        break;

      case "transitioning-report":
        timeout = setTimeout(() => setPhase("report-generating"), 500);
        break;

      case "report-generating":
        if (reportText.length < LESSON_REPORT.length) {
          timeout = setTimeout(() => {
            setReportText(LESSON_REPORT.slice(0, reportText.length + 1));
          }, RESPONSE_TYPING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase("report-complete"), 500);
        }
        break;

      case "report-complete":
        timeout = setTimeout(() => setPhase("complete"), PHASE_PAUSE * 1.5);
        break;

      case "complete":
        timeout = setTimeout(() => {
          setDisplayedText("");
          setResponseText("");
          setEditNewText("");
          setLessonText("");
          setReportText("");
          setPhase("typing");
        }, 1000);
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayedText, responseText, editNewText, lessonText, reportText, phase]);

  const showPromptSection = [
    "typing", "paused", "loading", "generating", "generated", "selecting", "replacing", "replaced"
  ].includes(phase);

  const showLessonSection = [
    "transitioning-lesson", "lesson-active", "transitioning-report", "report-generating", "report-complete", "complete"
  ].includes(phase);

  const showReportSection = [
    "transitioning-report", "report-generating", "report-complete", "complete"
  ].includes(phase);

  const isButtonActive = phase === "paused" || phase === "loading";
  const showResponse = ["generating", "generated", "selecting", "replacing", "replaced"].includes(phase);
  const isEditing = ["selecting", "replacing"].includes(phase);

  const getHeaderText = () => {
    if (showReportSection) return "Lesson Report";
    if (showLessonSection) return "Live Lesson";
    return "TutorCruncher AI";
  };

  const getHeaderDots = () => {
    if (showLessonSection && !showReportSection) {
      return (
        <>
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-green-400/50" />
          <div className="w-3 h-3 rounded-full bg-green-400/50" />
        </>
      );
    }
    return (
      <>
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </>
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl border border-default overflow-hidden">
        {/* Header bar */}
        <div className="bg-content px-4 py-2 border-b border-default flex items-center gap-2">
          <div className="flex gap-1.5">
            {getHeaderDots()}
          </div>
          <span className="text-xs text-muted ml-2">{getHeaderText()}</span>
          {showLessonSection && !showReportSection && (
            <span className="ml-auto text-xs text-success font-medium">● Recording</span>
          )}
        </div>

        {/* Content area */}
        <div className="p-4">
          {/* Prompt Section */}
          {showPromptSection && (
            <>
              {/* Text area */}
              <div className="relative">
                <div className="w-full min-h-[60px] p-3 bg-page rounded-lg border border-default text-sm text-primary">
                  {displayedText}
                  {phase === "typing" && (
                    <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" />
                  )}
                  {!displayedText && phase === "typing" && (
                    <span className="text-placeholder">Enter your prompt...</span>
                  )}
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-3 flex justify-end">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isButtonActive
                      ? "bg-primary text-white scale-95"
                      : showResponse
                        ? "bg-success text-success"
                        : "bg-primary/20 text-primary/60"
                  }`}
                >
                  {phase === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Generating...
                    </span>
                  ) : showResponse ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Generated
                    </span>
                  ) : (
                    "Generate"
                  )}
                </button>
              </div>

              {/* Response area */}
              {showResponse && (
                <div className={`mt-4 p-4 bg-page rounded-lg border ${isEditing ? "border-link ring-2 ring-link/20" : "border-default"} transition-all duration-300`}>
                  <div className="text-xs text-muted mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      Lesson Plan
                    </span>
                    {["selecting", "replacing", "replaced"].includes(phase) && (
                      <span className="text-link flex items-center gap-1 bg-link/10 px-2 py-0.5 rounded-full">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                        </svg>
                        Editing
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-primary whitespace-pre-wrap text-left leading-relaxed max-h-[200px] overflow-y-auto">
                    {phase === "generating" && (
                      <>
                        {responseText}
                        <span className="inline-block w-0.5 h-4 bg-link ml-0.5 animate-pulse" />
                      </>
                    )}
                    {phase === "generated" && responseText}
                    {phase === "selecting" && (
                      <>
                        {responseText.replace(EDIT_TEXT_ORIGINAL, "")}
                        <mark className="bg-blue-200 text-primary px-0.5 rounded-sm">{EDIT_TEXT_ORIGINAL}</mark>
                      </>
                    )}
                    {(phase === "replacing" || phase === "replaced") && (
                      <>
                        {responseText.replace(EDIT_TEXT_ORIGINAL, "")}
                        <span className="text-link">{editNewText}</span>
                        {phase === "replacing" && (
                          <span className="inline-block w-0.5 h-4 bg-link animate-pulse align-middle" />
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Lesson Section */}
          {showLessonSection && !showReportSection && (
            <div className="p-4 bg-page rounded-lg border border-success/30">
              <div className="text-sm text-primary whitespace-pre-wrap text-left leading-relaxed">
                {lessonText}
                {phase === "lesson-active" && lessonText.length < LESSON_IN_PROGRESS.length && (
                  <span className="inline-block w-0.5 h-4 bg-success ml-0.5 animate-pulse" />
                )}
              </div>
              {phase !== "transitioning-lesson" && (
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 h-2 bg-success/20 rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full w-4/5" />
                  </div>
                  <span className="text-xs text-muted">80%</span>
                </div>
              )}
            </div>
          )}

          {/* Report Section */}
          {showReportSection && (
            <div className="p-4 bg-page rounded-lg border border-default">
              <div className="text-sm text-primary whitespace-pre-wrap text-left leading-relaxed">
                {reportText}
                {phase === "report-generating" && (
                  <span className="inline-block w-0.5 h-4 bg-link ml-0.5 animate-pulse" />
                )}
              </div>
              {phase === "report-complete" && (
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-primary text-white text-xs rounded-lg">
                    Share Report
                  </button>
                  <button className="flex-1 px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-lg">
                    Schedule Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
