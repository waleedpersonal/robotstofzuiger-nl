'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import type { Product } from '@/data/products';

interface QuizAnswer {
  question: string;
  answer: string;
}

interface QuizResult {
  primary: Product;
  upgrade: Product;
  value: Product;
  answers: QuizAnswer[];
}

interface Props {
  onComplete: (result: QuizResult) => void;
}

const quizQuestions = [
  {
    id: 'floor',
    question: 'Hoe ziet jouw vloer eruit?',
    explanation: 'Vloertype bepaalt of je een roller mop / dweilpads / tapijt-detectie nodig hebt.',
    options: [
      { value: 'hard', label: 'Vooral harde vloeren (tegels/laminaat/hout)' },
      { value: 'mixed', label: 'Gemengd (harde vloer + kleden)' },
      { value: 'carpet', label: 'Veel tapijt (middel/hoogpolig)' },
    ],
  },
  {
    id: 'mopping',
    question: 'Hoe belangrijk is dweilen voor jou?',
    explanation: 'Dit bepaalt of je een basis dweilfunctie of een premium mop-wash station nodig hebt.',
    options: [
      { value: 'light', label: 'Klein onderhoud (stof + lichte vlekken)' },
      { value: 'kitchen', label: 'Keuken/etensvlekken (regelmatig)' },
      { value: 'premium', label: 'Ik wil "bijna altijd schoon" + minimaal gedoe (dock moet dweilen wassen/drogen)' },
    ],
  },
  {
    id: 'pets',
    question: 'Huisdieren?',
    explanation: 'Huisdieren vereisen vaak anti-klit borstels en betere zuigkracht.',
    options: [
      { value: 'none', label: 'Geen' },
      { value: 'short', label: 'Ja (kort haar)' },
      { value: 'long', label: 'Ja (lang haar / veel verharen)' },
    ],
  },
  {
    id: 'obstacles',
    question: 'Obstakels in huis?',
    explanation: 'Dit bepaalt hoe geavanceerd de obstakel herkenning moet zijn.',
    options: [
      { value: 'clean', label: 'Meestal netjes (weinig spullen op de grond)' },
      { value: 'obstacles', label: 'Kabels / speelgoed / rommel (moet goed ontwijken)' },
      { value: 'low', label: 'Lage meubels/bed (< ~9cm) (robot moet eronder kunnen)' },
    ],
  },
  {
    id: 'automation',
    question: 'Hoe handsfree wil je het?',
    explanation: 'Dit bepaalt welk type docking station je nodig hebt.',
    options: [
      { value: 'basic', label: 'Ik wil alleen automatisch legen (stof)' },
      { value: 'mop', label: 'Ik wil legen + dweilen reinigen/drogen' },
      { value: 'premium', label: 'Ik wil het meest automatische dat er is (premium station)' },
    ],
  },
];

export default function Quiz({ onComplete }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<string | null>(null);

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    // Track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quiz_answer', {
        question: questionId,
        answer: answer,
      });
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(null);
    } else {
      // Calculate result
      const result = calculateResult(newAnswers);
      
      // Track completion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quiz_complete', {
          primary_product: result.primary.id,
        });
      }

      onComplete(result);
    }
  };

  const calculateResult = (answers: Record<string, string>): QuizResult => {
    // Score each product based on answers
    const scores = products.map(product => {
      let score = 0;
      
      // Floor type scoring
      if (answers.floor === 'hard') score += product.quizScore.hardFloors;
      if (answers.floor === 'mixed') score += product.quizScore.mixed;
      if (answers.floor === 'carpet') score += product.quizScore.carpet;
      
      // Mopping scoring
      if (answers.mopping === 'light') score += product.quizScore.lightMopping;
      if (answers.mopping === 'kitchen') score += product.quizScore.kitchenStains;
      if (answers.mopping === 'premium') score += product.quizScore.premiumStation;
      
      // Pets scoring
      if (answers.pets === 'none') score += product.quizScore.noPets;
      if (answers.pets === 'short') score += product.quizScore.shortHair;
      if (answers.pets === 'long') score += product.quizScore.longHair;
      
      // Obstacles scoring
      if (answers.obstacles === 'clean') score += product.quizScore.clean;
      if (answers.obstacles === 'obstacles') score += product.quizScore.obstacles;
      if (answers.obstacles === 'low') score += product.quizScore.lowFurniture;
      
      // Automation scoring
      if (answers.automation === 'basic') score += product.quizScore.basicEmpty;
      if (answers.automation === 'mop') score += product.quizScore.mopClean;
      if (answers.automation === 'premium') score += product.quizScore.mostAutomatic;
      
      return { product, score };
    });

    // Sort by score
    scores.sort((a, b) => b.score - a.score);

    // Get top 3
    const primary = scores[0].product;
    const upgrade = scores[1].product;
    const value = scores[scores.length - 2].product; // Second cheapest as value option

    // Build answer summary
    const answerSummary: QuizAnswer[] = quizQuestions.map(q => ({
      question: q.question,
      answer: q.options.find(opt => opt.value === answers[q.id])?.label || '',
    }));

    return {
      primary,
      upgrade,
      value,
      answers: answerSummary,
    };
  };

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-16 bg-white">
      <div className="container-custom max-w-3xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Stap {currentQuestion + 1} van {quizQuestions.length}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="card">
          <h2 className="mb-6">{currentQ.question}</h2>

          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQ.id, option.value)}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-all duration-200"
              >
                <span className="text-lg">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Explanation toggle */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowExplanation(showExplanation ? null : currentQ.id)}
              className="text-sm text-gray-600 hover:text-primary flex items-center gap-2"
            >
              <span>❓</span>
              <span className="underline">Waarom vragen we dit?</span>
            </button>
            {showExplanation === currentQ.id && (
              <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                {currentQ.explanation}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
