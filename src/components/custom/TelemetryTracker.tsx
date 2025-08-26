'use client';

import { useEffect } from 'react';

interface TelemetryEvent {
  event_type: 'page_view' | 'navigation_click' | 'calculator_click' | 'article_click' | 'route_transition' | 'error_occurred';
  page_url: string;
  timestamp: string;
  user_agent?: string;
  additional_data?: Record<string, string | number | boolean>;
}

class TelemetryService {
  private static instance: TelemetryService;
  private events: TelemetryEvent[] = [];
  
  static getInstance(): TelemetryService {
    if (!TelemetryService.instance) {
      TelemetryService.instance = new TelemetryService();
    }
    return TelemetryService.instance;
  }

  async trackEvent(eventType: TelemetryEvent['event_type'], additionalData?: Record<string, string | number | boolean>) {
    const event: TelemetryEvent = {
      event_type: eventType,
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      additional_data: additionalData
    };

    // Store locally for now (in production, send to Django REST endpoint)
    this.events.push(event);
    
    // In development, log to console
    console.log('📊 Telemetry Event:', event);

    // TODO: In production, uncomment below to send to Django backend
    // try {
    //   await fetch('/api/telemetry', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(event),
    //   });
    // } catch (error) {
    //   console.error('Failed to send telemetry:', error);
    // }
  }

  trackPageView() {
    this.trackEvent('page_view');
  }

  trackNavClick(destination: string) {
    this.trackEvent('navigation_click', { destination });
  }

  trackCalculatorClick(calculator: string) {
    this.trackEvent('calculator_click', { calculator });
  }

  trackArticleClick(article: string) {
    this.trackEvent('article_click', { article });
  }

  trackRouteTransition(fromRoute: string, toRoute: string) {
    this.trackEvent('route_transition', { from_route: fromRoute, to_route: toRoute });
  }

  trackError(error: string, errorType: string = 'unknown') {
    this.trackEvent('error_occurred', { error_message: error, error_type: errorType });
  }
}

export const telemetryService = TelemetryService.getInstance();

interface TelemetryTrackerProps {
  trackPageView?: boolean;
}

export default function TelemetryTracker({ trackPageView = true }: TelemetryTrackerProps) {
  useEffect(() => {
    if (trackPageView) {
      telemetryService.trackPageView();
    }
  }, [trackPageView]);

  return null; // This component doesn't render anything
}

// Hook for manual telemetry tracking
export function useTelemetry() {
  return telemetryService;
}