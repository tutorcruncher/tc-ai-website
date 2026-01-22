"use client";

import Link from "next/link";
import Image from "next/image";

export function HeaderD() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(250, 249, 247, 0.9)',
        borderBottom: '1px solid rgba(74, 45, 65, 0.1)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/d" className="flex items-center gap-2">
          <Image
            src="/tc-ai-logo.svg"
            alt="TutorCruncher AI"
            width={140}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium transition-colors"
            style={{ color: '#4a2d41' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e8a87c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4a2d41'}
          >
            Features
          </a>
          <a
            href="#integrations"
            className="text-sm font-medium transition-colors"
            style={{ color: '#4a2d41' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e8a87c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4a2d41'}
          >
            Integrations
          </a>
          <a
            href="#faq"
            className="text-sm font-medium transition-colors"
            style={{ color: '#4a2d41' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e8a87c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4a2d41'}
          >
            FAQ
          </a>
        </nav>

        <a
          href="/early-access"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200"
          style={{
            backgroundColor: '#4a2d41',
            color: '#ffffff',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5d3a54';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4a2d41';
          }}
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
