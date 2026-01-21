import { Logo } from "@/components/Logo";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "TutorCruncher AI | TutorCruncher",
};

export default function ProductLaunchPage() {
  return (
    <div className="bg-gradient-to-r from-[oklch(0.97_0.014_254.604)] to-[oklch(0.809_0.105_251.813)] py-20 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-[600px] mx-auto flex flex-col items-center justify-center text-center gap-5 relative z-10">
        <Logo />
        <div>
          <div className="text-xl leading-relaxed mb-10 animate-fade-up animation-delay-200 opacity-0">
            <p className="mb-6">
              TutorCruncher AI is the next-generation tutoring platform that
              harnesses the power of artificial intelligence to deliver
              personalised, data-driven educational experiences.
            </p>
            <p>
              Our cutting-edge AI technology analyses every lesson, providing
              tutors and companies with unprecedented insights to maximise
              student success.
            </p>
          </div>
          <div className="animate-fade-up animation-delay-600 opacity-0">
            <a
              href="https://forms.gle/uunftAqJqn2ZFQzFA"
              target="_blank"
              className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-black/70 transition-colors"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
