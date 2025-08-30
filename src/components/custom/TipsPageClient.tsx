"use client";

import { useEffect } from 'react';
import { useTelemetry } from './TelemetryTracker';

interface TipsPageClientProps {
  children: React.ReactNode;
  pageName?: string;
}

export default function TipsPageClient({ children, pageName = 'tips' }: TipsPageClientProps) {
  const telemetry = useTelemetry();

  useEffect(() => {
    // Track page view on component mount
    telemetry.trackPageView();
    
    // Track that user viewed a tips article
    telemetry.trackEvent('article_click', { 
      article_type: 'tips',
      page: pageName,
      section: 'page_load'
    });
  }, [telemetry, pageName]);

  return <>{children}</>;
}