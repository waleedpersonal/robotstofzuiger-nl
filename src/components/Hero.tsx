'use client';

interface Props {
  onStartQuiz: () => void;
  onViewTop3: () => void;
}

export default function Hero({ onStartQuiz, onViewTop3 }: Props) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h1 className="mb-6 leading-tight">
            Beste robotstofzuiger met dweil voor jouw huis (NL) — kies in 60 seconden
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Beantwoord 5 korte vragen. Je krijgt 1 topkeuze + 2 alternatieven die op Amazon.nl verkrijgbaar zijn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={onStartQuiz}
              className="btn-primary flex-1 sm:flex-none"
            >
              Start keuzehulp
            </button>
            <button
              onClick={onViewTop3}
              className="btn-secondary flex-1 sm:flex-none"
            >
              Bekijk Top 3 keuzes
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold">Voor tegels, laminaat én tapijt</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🐕</div>
              <div>
                <p className="font-semibold">Speciaal voor huisdieren & drempels</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🤖</div>
              <div>
                <p className="font-semibold">Alleen modellen met docking / handsfree opties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
