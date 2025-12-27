export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Robotstofzuiger Keuzehulp",
    url: "https://robotstofzuiger-keuzehulp.nl",
    logo: "https://robotstofzuiger-keuzehulp.nl/images/products/roborock-qrevo-curv.jpg",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Robotstofzuiger Keuzehulp",
    url: "https://robotstofzuiger-keuzehulp.nl",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://robotstofzuiger-keuzehulp.nl/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Beste Robotstofzuiger met Dweil (NL) — Keuzehulp 2025",
    description:
      "Vind de perfecte robotstofzuiger voor jouw huis in 60 seconden. Vergelijk 6 geteste modellen op Amazon.nl.",
    url: "https://robotstofzuiger-keuzehulp.nl",
    inLanguage: "nl-NL",
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is de beste robotstofzuiger met dweilfunctie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De Roborock Qrevo Curv en Dreame X50 Ultra zijn momenteel de beste robotstofzuigers met dweilfunctie. Ze bieden krachtige zuigkracht, slimme navigatie en effectieve dweilfunctie voor tegels en laminaat.",
        },
      },
      {
        "@type": "Question",
        name: "Hoeveel kost een goede robotstofzuiger?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Goede robotstofzuigers variëren van €300 voor instapmodellen tot €1500+ voor premium modellen met alle functies. Modellen rond €600-900 bieden vaak de beste prijs-kwaliteitverhouding.",
        },
      },
      {
        "@type": "Question",
        name: "Is een robotstofzuiger geschikt voor huisdieren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, veel moderne robotstofzuigers zijn uitstekend geschikt voor huishoudens met huisdieren. Let op modellen met sterke zuigkracht (4000+ Pa) en een rubberen borstel om haren niet te laten verstrikt raken.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

