'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { telemetryService } from './TelemetryTracker';

export default function RouteTracker() {
  const pathname = usePathname();
  const previousPathname = useRef<string>('');

  useEffect(() => {
    // Track route transitions
    if (previousPathname.current && previousPathname.current !== pathname) {
      telemetryService.trackRouteTransition(previousPathname.current, pathname);
    }
    
    // Track page views for route changes
    telemetryService.trackPageView();
    
    // Update previous pathname
    previousPathname.current = pathname;
  }, [pathname]);

  return null; // This component doesn't render anything
}