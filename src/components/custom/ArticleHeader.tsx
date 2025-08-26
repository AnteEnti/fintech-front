"use client";

import { useEffect } from 'react';

interface ArticleHeaderProps {
  category: string;
  title: string;
  subtitle: string;
  onView?: () => void;
}

export default function ArticleHeader({ category, title, subtitle, onView }: ArticleHeaderProps) {
  useEffect(() => {
    if (onView) {
      onView();
    }
  }, [onView]);

  return (
    <header className="mb-12">
      {/* Category Tag */}
      <div className="mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {category}
        </span>
      </div>

      {/* Hero Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Intro Summary */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl" style={{ lineHeight: '1.6' }}>
          {subtitle}
        </p>
      </div>

      {/* Visual Separator */}
      <div className="border-t border-gray-200 pt-8">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>విద్యాపరమైన వ్యాసం</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>5 నిమిషాలు చదవండి</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>SEBI నియంత్రిత సమాచారం</span>
          </div>
        </div>
      </div>
    </header>
  );
}