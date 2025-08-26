'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console in development
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
        </div>

        {/* Error Message in Telugu */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ఏదో తప్పు జరిగింది
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            క్షమించండి, అనుకోని లోపం జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి లేదా హోమ్ పేజీకి వెళ్ళండి.
          </p>
          
          {/* Error Details for Development */}
          {process.env.NODE_ENV === 'development' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6 text-left">
              <p className="text-red-800 text-sm font-mono">
                <strong>Error:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-red-600 text-xs mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
          
          {/* Disclaimer */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-8">
            <p className="text-blue-800 text-sm">
              <strong>గమనిక:</strong> ఈ వెబ్‌సైట్‌లోని కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              ఇది పెట్టుబడి సలహా కాదు.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => reset()} 
              size="lg" 
              className="bg-[#4B6FFF] hover:bg-blue-700 inline-flex items-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              మళ్లీ ప్రయత్నించండి
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/" className="inline-flex items-center">
                <Home className="w-5 h-5 mr-2" />
                హోమ్ పేజీకి వెళ్ళండి
              </Link>
            </Button>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            ఇదే సమస్య మళ్లీ వస్తే, దయచేసి కొంత సమయం తర్వాత ప్రయత్నించండి.
          </p>
        </div>
      </div>
    </div>
  );
}