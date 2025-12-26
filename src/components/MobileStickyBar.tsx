'use client';

import { useState, useEffect } from 'react';

interface Props {
  quizCompleted: boolean;
  onStartQuiz: () => void;
  primaryProductLink?: string;
}

export default function MobileStickyBar({ quizCompleted, onStartQuiz, primaryProductLink }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show bar after scrolling past hero (400px)
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-2xl z-50 md:hidden">
      <div className="p-4 flex items-center gap-3">
        {quizCompleted && primaryProductLink ? (
          <>
            <button
              onClick={() => window.open(primaryProductLink, '_blank')}
              className="btn-primary flex-1 text-sm py-3"
            >
              Bekijk beste match op Amazon.nl
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-gray-400 hover:text-gray-600 p-2"
              aria-label="Sluiten"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onStartQuiz}
              className="btn-primary flex-1 text-sm py-3"
            >
              Start keuzehulp
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-gray-400 hover:text-gray-600 p-2"
              aria-label="Sluiten"
            >
              ✕
            </button>
          </>
        )}
      </div>
    </div>
  );
}
