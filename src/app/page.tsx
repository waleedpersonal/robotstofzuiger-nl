'use client';

import { useState, useEffect } from 'react';
import ComplianceBar from '@/components/ComplianceBar';
import Hero from '@/components/Hero';
import Quiz from '@/components/Quiz';
import QuizResult from '@/components/QuizResult';
import Top3Picks from '@/components/Top3Picks';
import AllProducts from '@/components/AllProducts';
import ComparisonTable from '@/components/ComparisonTable';
import HowToChoose from '@/components/HowToChoose';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import type { Product } from '@/data/products';

interface QuizAnswer {
  question: string;
  answer: string;
}

interface QuizResultData {
  primary: Product;
  upgrade: Product;
  value: Product;
  answers: QuizAnswer[];
}

export default function Home() {
  const [quizResult, setQuizResult] = useState<QuizResultData | null>(null);

  const handleStartQuiz = () => {
    setQuizResult(null);
    
    // Track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quiz_start');
    }

    // Scroll to quiz
    setTimeout(() => {
      const quizElement = document.getElementById('quiz');
      if (quizElement) {
        quizElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleViewTop3 = () => {
    const top3Element = document.getElementById('top3');
    if (top3Element) {
      top3Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuizComplete = (result: QuizResultData) => {
    setQuizResult(result);
    
    // Scroll to result
    setTimeout(() => {
      const resultElement = document.getElementById('quiz-result');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleResetQuiz = () => {
    setQuizResult(null);
    handleStartQuiz();
  };

  // Track scroll depth
  useEffect(() => {
    let scroll50 = false;
    let scroll75 = false;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 50 && !scroll50) {
        scroll50 = true;
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'scroll_50');
        }
      }
      
      if (scrollPercent > 75 && !scroll75) {
        scroll75 = true;
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'scroll_75');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ComplianceBar />
      
      <Hero onStartQuiz={handleStartQuiz} onViewTop3={handleViewTop3} />
      
      {/* Quiz appears immediately after hero (Option A: best for conversion) */}
      {!quizResult && (
        <Quiz onComplete={handleQuizComplete} />
      )}
      
      {/* Quiz result shown after completion */}
      {quizResult && (
        <div id="quiz-result">
          <QuizResult
            primary={quizResult.primary}
            upgrade={quizResult.upgrade}
            value={quizResult.value}
            answers={quizResult.answers}
            onReset={handleResetQuiz}
          />
        </div>
      )}
      
      <Top3Picks />
      
      <AllProducts />
      
      <ComparisonTable />
      
      <HowToChoose />
      
      <FAQ />
      
      <Footer />
      
      {/* Mobile sticky bar */}
      <MobileStickyBar
        quizCompleted={!!quizResult}
        onStartQuiz={handleStartQuiz}
        primaryProductLink={quizResult?.primary.amazonLink}
      />
    </>
  );
}
