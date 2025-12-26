'use client';

import type { Product } from '@/data/products';

interface QuizAnswer {
  question: string;
  answer: string;
}

interface Props {
  primary: Product;
  upgrade: Product;
  value: Product;
  answers: QuizAnswer[];
  onReset: () => void;
}

export default function QuizResult({ primary, upgrade, value, answers, onReset }: Props) {
  const handleProductClick = (productId: string) => {
    // Track click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_amazon', {
        product_id: productId,
        source: 'quiz_result',
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full mb-4">
            ✓ Keuzehulp voltooid
          </div>
          <h2 className="mb-4">Jouw beste match!</h2>
          <button
            onClick={onReset}
            className="text-primary hover:underline text-sm"
          >
            ← Opnieuw doen
          </button>
        </div>

        {/* Primary recommendation */}
        <div className="card border-4 border-green-500 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={primary.image}
                alt={primary.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
                🏆 JOUW BESTE MATCH
              </div>
              <h3 className="mb-4">{primary.name}</h3>
              
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-2">Omdat je koos voor:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {answers.slice(0, 3).map((answer, idx) => (
                    <li key={idx}>✓ {answer.answer}</li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-2 mb-6">
                {primary.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href={primary.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleProductClick(primary.id)}
                className="btn-primary w-full md:w-auto block text-center"
              >
                Bekijk op Amazon.nl →
              </a>
            </div>
          </div>
        </div>

        {/* Alternative options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upgrade option */}
          <div className="card">
            <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
              ⬆️ UPGRADE KEUZE
            </div>
            <h4 className="mb-2">{upgrade.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{upgrade.perfectFor}</p>
            <ul className="space-y-1 mb-4 text-sm">
              {upgrade.bullets.slice(0, 3).map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href={upgrade.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleProductClick(upgrade.id)}
              className="btn-outline w-full block text-center"
            >
              Bekijk op Amazon.nl
            </a>
          </div>

          {/* Value option */}
          <div className="card">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
              💰 SLIMME BESPAAR-KEUZE
            </div>
            <h4 className="mb-2">{value.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{value.perfectFor}</p>
            <ul className="space-y-1 mb-4 text-sm">
              {value.bullets.slice(0, 3).map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href={value.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleProductClick(value.id)}
              className="btn-outline w-full block text-center"
            >
              Bekijk op Amazon.nl
            </a>
          </div>
        </div>

        {/* CTA to view all */}
        <div className="text-center mt-12">
          <a href="#all-products" className="btn-secondary inline-block">
            Bekijk alle 6 keuzes
          </a>
        </div>
      </div>
    </section>
  );
}
