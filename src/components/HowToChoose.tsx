'use client';

const guides = [
  {
    title: 'Drempels & deurmatten',
    icon: '🚪',
    content: 'Meeste robots hier klimmen tot ~2cm. Heb je hogere drempels? Overweeg drempelrampen of de Dreame X50 Ultra (ProLeap). Deurmatten: dikke matten kunnen problematisch zijn, dunne zijn meestal OK.'
  },
  {
    title: 'Huisdieren + anti-klit',
    icon: '🐕',
    content: 'Voor lang haar: kies modellen met "anti-tangle" borstels (Qrevo Curv, L40 Ultra AE). Deze hebben rubber/geleide borstels die haar minder laten verstrengelen. Kortharig? Alle modellen hier werken goed.'
  },
  {
    title: 'Dweilen: pads vs roller mop',
    icon: '💧',
    content: 'Pads = goedkoper, meer onderhoud (handmatig wassen). Roller mop = beter resultaat, auto-wash in dock (minder gedoe). Rotating pads = beste dweilresultaat maar grootste station (X8 Pro OMNI).'
  },
  {
    title: 'Dock onderhoud',
    icon: '🔧',
    content: 'Legen-only docks: ~1x per maand stofzak vervangen. Legen+wassen+drogen docks: ~1x per 2-4 weken watertanks bijvullen/legen + dock schoonmaken. Alle docks: controleer op kalk (gebruik ontkalkt water als je hard water hebt).'
  },
  {
    title: 'Apps & mapping (multi-floor)',
    icon: '📱',
    content: 'Alle 6 modellen ondersteunen multi-floor maps (sla tot 3-4 verdiepingen op). Beste apps: Roborock (meest intuïtief), Dreame (veel features). eufy & ECOVACS zijn solide. Pro tip: stel "no-go zones" in voor kabels/speelgoed.'
  },
];

export default function HowToChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Hoe te kiezen?</h2>
          <p className="text-xl text-gray-600">
            5 dingen om te weten voordat je koopt (2 minuten leestijd)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <div key={idx} className="card">
              <div className="text-4xl mb-3">{guide.icon}</div>
              <h3 className="text-lg font-bold mb-3">{guide.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {guide.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
          <h3 className="font-bold mb-2">💡 Belangrijk om te weten:</h3>
          <p className="text-gray-700">
            Een robot stofzuiger is een <strong>helper</strong>, geen vervanging voor grondig schoonmaken. 
            Verwacht ~70-80% minder handmatig stofzuigen/dweilen, maar je zult nog steeds ~1x per 1-2 maanden 
            grondig moeten schoonmaken (hoeken, onder meubels die te laag zijn, etc.). 
            Dat gezegd: de modellen hier zijn de beste balans tussen "minimaal gedoe" en "goed resultaat" 
            die we hebben gevonden voor Nederlandse huizen.
          </p>
        </div>
      </div>
    </section>
  );
}
