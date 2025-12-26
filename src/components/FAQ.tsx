'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Werkt dit met kleden?',
    answer: 'Ja! Alle 6 modellen kunnen met kleden overweg. Premium modellen (zoals Qrevo Curv, X8 Pro OMNI) detecteren kleden automatisch en verhogen de zuigkracht. Voor dweilen: sommige robots tillen de dweil automatisch op bij kleden, andere (zoals D10 Plus Gen 2) hebben basis dweilfunctie die je handmatig moet uitschakelen.'
  },
  {
    question: 'Hoe zit het met drempels?',
    answer: 'De meeste robots hier kunnen drempels tot ~2cm aan. Als je hogere drempels hebt (>2cm), overweeg dan de Dreame X50 Ultra met ProLeap technologie (in "Ook overwogen" sectie), of plaats kleine drempelrampen. Lage meubels (<9cm)? Kies dan de Saros 10R.'
  },
  {
    question: 'Is dweilen écht goed of meer "opfrissen"?',
    answer: 'Eerlijk antwoord: voor normale stof en lichte vlekken zijn deze robots uitstekend. Voor hardnekkige vlekken (zoals opgedroogde koffie/saus) moet je soms nog voorbehandelen. De beste dweilaars hier (X8 Pro OMNI, Qrevo Curv) komen het dichtst bij "echt dweilen" door hot water wash + druk op de mop. Basis modellen (D10 Plus Gen 2) zijn meer "licht vochtig afvegen".'
  },
  {
    question: 'Hoeveel onderhoud blijft er over?',
    answer: 'Hangt af van je dock: Premium stations (legen + wassen + drogen) → ~1x per 2-4 weken watertanks bijvullen/legen + schoonmaken. Basis stations (alleen legen) → ~1x per week dweildoek wassen + watertank bijvullen. Alle modellen: ~1x per 2 maanden borstel/filter checken.'
  },
  {
    question: 'Kan ik schoonmaakmiddel gebruiken?',
    answer: 'Check altijd je handleiding, maar over het algemeen: gebruik alleen oplossingen die door de fabrikant zijn aanbevolen. Veel merken verkopen eigen cleaning solution. Normale schoonmaakmiddelen kunnen het systeem beschadigen of garantie laten vervallen.'
  },
  {
    question: 'Wat als ik kinderen/speelgoed heb?',
    answer: 'Kies dan een model met goede obstakel herkenning (Excellent rating): Qrevo Curv, Saros 10R, X8 Pro OMNI. Deze hebben camera + AI en vermijden sokken, kabels, speelgoed. Basis modellen (D10 Plus Gen 2) kunnen vastlopen op kleine objecten. Pro tip: maak een "no-go zone" in de app voor speelhoeken.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Veelgestelde vragen</h2>
          <p className="text-xl text-gray-600">
            De vragen die we het meest krijgen (met eerlijke antwoorden)
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <span className="text-2xl flex-shrink-0">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              {openIndex === idx && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
