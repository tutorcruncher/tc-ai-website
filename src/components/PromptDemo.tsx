"use client";

import { useState, useEffect, useRef } from "react";

const DEMO_PROMPT = "Generate a lesson plan for GCSE maths: quadratic equations";
const TYPING_SPEED = 40;
const PAUSE_BEFORE_SUBMIT = 800;
const LOADING_DURATION = 1200;
const RESPONSE_TYPING_SPEED = 12;
const EDIT_TYPING_SPEED = 60;
const DELETE_SPEED = 50;
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

const EDIT_TEXT_ORIGINAL = "graduated difficulty";
const EDIT_TEXT_NEW = "real-world applications";

const TRANSCRIPT_TEXT = `[00:00] Tutor: Today we're going to explore quadratic equations. Can you tell me what you remember about linear equations?

[00:15] Emma: They have an x term and make a straight line when graphed?

[00:22] Tutor: Exactly! Now, what happens when we square that x? Let's look at x² + 5x + 6 = 0...

[01:45] Tutor: Great work factorising that! You found (x+2)(x+3) = 0. What does that tell us about x?

[01:58] Emma: That x equals -2 or -3?

[02:05] Tutor: Perfect! You're getting the hang of this.`;

const LESSON_REPORT = `Lesson Summary

Student: Emma Thompson
Date: Today, 3:45 PM
Duration: 58 minutes

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
  | "deleting"
  | "replacing"
  | "replaced"
  | "start-lesson"
  | "video-playing"
  | "video-ending"
  | "transcript-generating"
  | "transcript-complete"
  | "report-generating"
  | "report-complete"
  | "complete";

export function PromptDemo() {
  const [displayedText, setDisplayedText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [editNewText, setEditNewText] = useState("");
  const [deletingText, setDeletingText] = useState(EDIT_TEXT_ORIGINAL);
  const [transcriptText, setTranscriptText] = useState("");
  const [reportText, setReportText] = useState("");
  const [phase, setPhase] = useState<AnimationPhase>("typing");
  const [videoTime, setVideoTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [currentSpeaker, setCurrentSpeaker] = useState<"tutor" | "student">("tutor");

  const handleReplay = () => {
    setDisplayedText("");
    setResponseText("");
    setEditNewText("");
    setDeletingText(EDIT_TEXT_ORIGINAL);
    setTranscriptText("");
    setReportText("");
    setVideoTime(0);
    setVideoProgress(0);
    setCurrentSpeaker("tutor");
    setPhase("typing");
  };
  
  const responseRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to keep latest content in view
  useEffect(() => {
    if (responseRef.current && ["generating", "selecting", "deleting", "replacing"].includes(phase)) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
    if (transcriptRef.current && phase === "transcript-generating") {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
    if (reportRef.current && phase === "report-generating") {
      reportRef.current.scrollTop = reportRef.current.scrollHeight;
    }
  }, [phase, responseText, deletingText, editNewText, transcriptText, reportText]);

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
        timeout = setTimeout(() => {
          setDeletingText(EDIT_TEXT_ORIGINAL);
          setPhase("deleting");
        }, 1000);
        break;

      case "deleting":
        if (deletingText.length > 0) {
          timeout = setTimeout(() => {
            setDeletingText(prev => prev.slice(0, -1));
          }, DELETE_SPEED);
        } else {
          timeout = setTimeout(() => setPhase("replacing"), 300);
        }
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
        timeout = setTimeout(() => setPhase("start-lesson"), PHASE_PAUSE);
        break;

      case "start-lesson":
        setVideoTime(0);
        setVideoProgress(0);
        timeout = setTimeout(() => setPhase("video-playing"), 500);
        break;

      case "video-playing":
        if (videoProgress < 100) {
          timeout = setTimeout(() => {
            setVideoProgress(prev => Math.min(prev + 2, 100));
            setVideoTime(prev => prev + 1);
            // Alternate speaker every ~3 seconds (roughly every 6 ticks at 80ms)
            if (videoTime > 0 && videoTime % 6 === 0) {
              setCurrentSpeaker(prev => prev === "tutor" ? "student" : "tutor");
            }
          }, 80);
        } else {
          timeout = setTimeout(() => setPhase("video-ending"), 500);
        }
        break;

      case "video-ending":
        timeout = setTimeout(() => setPhase("transcript-generating"), 800);
        break;

      case "transcript-generating":
        if (transcriptText.length < TRANSCRIPT_TEXT.length) {
          timeout = setTimeout(() => {
            setTranscriptText(TRANSCRIPT_TEXT.slice(0, transcriptText.length + 1));
          }, RESPONSE_TYPING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase("transcript-complete"), 800);
        }
        break;

      case "transcript-complete":
        timeout = setTimeout(() => setPhase("report-generating"), PHASE_PAUSE);
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
        // End the demo here - no loop
        break;

      case "complete":
        // Not used anymore
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayedText, responseText, editNewText, deletingText, transcriptText, reportText, phase, videoProgress, videoTime]);

  const showPromptSection = [
    "typing", "paused", "loading", "generating", "generated", "selecting", "deleting", "replacing", "replaced"
  ].includes(phase);

  const showVideoSection = [
    "start-lesson", "video-playing", "video-ending"
  ].includes(phase);

  const showTranscriptSection = [
    "transcript-generating", "transcript-complete"
  ].includes(phase);

  const showReportSection = [
    "report-generating", "report-complete"
  ].includes(phase);

  const isButtonActive = phase === "paused" || phase === "loading";
  const showResponse = ["generating", "generated", "selecting", "deleting", "replacing", "replaced"].includes(phase);
  const isEditing = ["selecting", "deleting", "replacing"].includes(phase);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getHeaderText = () => {
    if (showReportSection) return "Lesson Summary";
    if (showTranscriptSection) return "Transcript";
    if (showVideoSection) return "Live Lesson";
    return "TutorCruncher AI";
  };

  const getHeaderDots = () => {
    if (showVideoSection) {
      return (
        <>
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
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

  // Split the text at the edit location
  const textBeforeEdit = LESSON_PLAN_BEFORE_EDIT.substring(
    0, 
    LESSON_PLAN_BEFORE_EDIT.indexOf(EDIT_TEXT_ORIGINAL)
  );

  const renderEditableContent = () => {
    switch (phase) {
      case "generating":
        return (
          <>
            {responseText}
            <span className="inline-block w-0.5 h-4 bg-link ml-0.5 animate-pulse" />
          </>
        );
      
      case "generated":
        return responseText;
      
      case "selecting":
        return (
          <>
            {textBeforeEdit}
            <span className="bg-blue-300 text-primary px-0.5 rounded-sm animate-pulse inline-block">
              {EDIT_TEXT_ORIGINAL}
            </span>
          </>
        );
      
      case "deleting":
        return (
          <>
            {textBeforeEdit}
            <span className="relative inline-block">
              <span className="bg-red-200 text-red-800 px-0.5 rounded-sm">
                {deletingText}
              </span>
              <span className="inline-block w-0.5 h-4 bg-red-600 animate-[pulse_0.3s_ease-in-out_infinite] align-middle ml-px" />
            </span>
          </>
        );
      
      case "replacing":
        return (
          <>
            {textBeforeEdit}
            <span className="relative inline-block">
              <span className="bg-green-200 text-green-800 px-0.5 rounded-sm">
                {editNewText}
              </span>
              <span className="inline-block w-0.5 h-4 bg-green-600 animate-[pulse_0.5s_ease-in-out_infinite] align-middle ml-px" />
            </span>
          </>
        );
      
      case "replaced":
        return (
          <>
            {textBeforeEdit}
            <span className="text-green-700 font-medium">{EDIT_TEXT_NEW}</span>
          </>
        );
      
      default:
        return responseText;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto pointer-events-none">
      <div className="bg-white rounded-xl shadow-xl border border-default overflow-hidden">
        {/* Header bar */}
        {/* <div className="bg-content px-4 py-2 border-b border-default flex items-center gap-2">
          <div className="flex gap-1.5">
            {getHeaderDots()}
          </div>
          <span className="text-xs text-muted ml-2">{getHeaderText()}</span>
          {showVideoSection && (
            <span className="ml-auto text-xs text-red-500 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              REC {formatTime(videoTime)}
            </span>
          )}
        </div> */}

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
                <div className={`mt-4 p-4 bg-page rounded-lg border transition-all duration-300 ${
                  isEditing ? "border-blue-400 ring-2 ring-blue-200" : "border-default"
                }`}>
                  <div className="text-xs text-muted mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      Lesson Plan
                    </span>
                    {["selecting", "deleting", "replacing", "replaced"].includes(phase) && (
                      <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                        phase === "selecting" ? "bg-blue-100 text-blue-700" :
                        phase === "deleting" ? "bg-red-100 text-red-700" :
                        phase === "replacing" ? "bg-green-100 text-green-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                        </svg>
                        {phase === "selecting" ? "Selecting..." :
                         phase === "deleting" ? "Deleting..." :
                         phase === "replacing" ? "Typing..." :
                         "Edited ✓"}
                      </span>
                    )}
                  </div>
                  <div 
                    ref={responseRef}
                    className="text-sm text-primary whitespace-pre-wrap text-left leading-relaxed max-h-[200px] overflow-y-auto scroll-smooth"
                  >
                    {renderEditableContent()}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Video Section */}
          {showVideoSection && (
            <div className="space-y-3">
              {/* Video player mockup */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                {/* Video content - two participants */}
                <div className="absolute inset-0 flex">
                  {/* Tutor side */}
                  <div className="flex-1 bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center border-r border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500 mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Tutor</span>
                      {/* Speaking indicator */}
                      <div className="flex justify-center gap-0.5 mt-2">
                        {currentSpeaker === "tutor" ? (
                          <>
                            <div className="w-1 h-3 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]" />
                            <div className="w-1 h-4 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.1s]" />
                            <div className="w-1 h-2 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.2s]" />
                            <div className="w-1 h-5 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.3s]" />
                            <div className="w-1 h-2 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.4s]" />
                          </>
                        ) : (
                          <>
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Student side */}
                  <div className="flex-1 bg-gradient-to-br from-purple-900 to-purple-950 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-purple-500 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">E</span>
                      </div>
                      <span className="text-white text-xs font-medium">Emma</span>
                      {/* Speaking indicator */}
                      <div className="flex justify-center gap-0.5 mt-2">
                        {currentSpeaker === "student" ? (
                          <>
                            <div className="w-1 h-2 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]" />
                            <div className="w-1 h-4 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.1s]" />
                            <div className="w-1 h-3 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.2s]" />
                            <div className="w-1 h-4 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.3s]" />
                            <div className="w-1 h-2 bg-green-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.4s]" />
                          </>
                        ) : (
                          <>
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-2 py-1 rounded">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white text-xs font-medium">LIVE</span>
                </div>

                {/* Topic overlay */}
                <div className="absolute top-3 right-3 bg-black/50 px-2 py-1 rounded">
                  <span className="text-white text-xs">Quadratic Equations</span>
                </div>

                {/* Bottom controls bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <button className="p-1.5 hover:bg-white/20 rounded">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                        </svg>
                      </button>
                      <button className="p-1.5 hover:bg-white/20 rounded">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </button>
                    </div>
                    <span className="text-xs font-mono">{formatTime(videoTime)} / 58:00</span>
                    <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs font-medium">
                      End Lesson
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted">
                  <span>Lesson in progress...</span>
                  <span>{videoProgress}%</span>
                </div>
              </div>
            </div>
          )}

          {/* Transcript Section */}
          {showTranscriptSection && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span>Generating transcript from recording...</span>
              </div>
              
              <div 
                ref={transcriptRef}
                className="p-4 bg-page rounded-lg border border-default max-h-[200px] overflow-y-auto scroll-smooth"
              >
                <div className="text-sm text-primary whitespace-pre-wrap text-left leading-relaxed font-mono">
                  {transcriptText}
                  {phase === "transcript-generating" && (
                    <span className="inline-block w-0.5 h-4 bg-blue-500 ml-0.5 animate-pulse" />
                  )}
                </div>
              </div>

              {phase === "transcript-complete" && (
                <div className="flex items-center gap-2 text-xs text-green-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Transcript complete • Generating summary...</span>
                </div>
              )}
            </div>
          )}

          {/* Report Section */}
          {showReportSection && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <span>AI-Generated Lesson Summary</span>
              </div>

              <div 
                ref={reportRef}
                className="p-4 bg-page rounded-lg border border-default max-h-[220px] overflow-y-auto scroll-smooth"
              >
                <div className="text-sm text-primary whitespace-pre-wrap text-left leading-relaxed">
                  {reportText}
                  {phase === "report-generating" && (
                    <span className="inline-block w-0.5 h-4 bg-link ml-0.5 animate-pulse" />
                  )}
                </div>
              </div>

              {phase === "report-complete" && (
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg font-medium flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    Share Report
                  </button>
                  <button
                    onClick={handleReplay}
                    className="pointer-events-auto flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Replay
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