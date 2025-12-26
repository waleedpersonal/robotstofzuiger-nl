'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white font-bold mb-4">Over deze site</h4>
            <p className="text-sm">
              Wij helpen je de beste robotstofzuiger te kiezen zonder keuzestress. 
              Onafhankelijk, eerlijk, gebaseerd op data.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#top3" className="hover:text-white">Top 3 keuzes</a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white">Start keuzehulp</a>
              </li>
              <li>
                <a href="#all-products" className="hover:text-white">Alle 6 keuzes</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Juridisch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy/" className="hover:text-white">Privacy</a>
              </li>
              <li>
                <a href="/terms/" className="hover:text-white">Algemene voorwaarden</a>
              </li>
              <li>
                <a href="#disclosure" className="hover:text-white">Affiliate disclosure</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact/" className="hover:text-white">Neem contact op</a>
              </li>
              <li>
                <a href="/about/" className="hover:text-white">Over ons</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclosure */}
        <div id="disclosure" className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-white font-bold mb-3">Affiliate Disclosure</h4>
          <p className="text-sm mb-2">
            <strong>English (required):</strong> As an Amazon Associate I earn from qualifying purchases.
          </p>
          <p className="text-sm">
            <strong>Nederlands:</strong> Wanneer je via onze links koopt, krijgen wij mogelijk een commissie — 
            zonder extra kosten voor jou. Dit helpt ons deze gratis keuzehulp te onderhouden. 
            Wij bevelen alleen producten aan die we zelf zouden kopen.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-white font-bold mb-3">Bronnen & methodologie</h4>
          <p className="text-sm mb-3">
            Onze aanbevelingen zijn gebaseerd op:
          </p>
          <ul className="text-sm space-y-1 grid md:grid-cols-2 gap-2">
            <li>✓ RTINGS robot vacuum testing (onafhankelijk lab)</li>
            <li>✓ TechRadar best robot vacuum reviews 2025</li>
            <li>✓ The Verge hands-on reviews</li>
            <li>✓ Coolblue NL top verkochte modellen (populariteit)</li>
            <li>✓ Amazon.nl reviews & rating analyse</li>
            <li>✓ Eigen ervaring + gebruikersfeedback</li>
          </ul>
          <p className="text-sm mt-3 text-gray-400">
            Laatste update: 24 december 2025
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Robotstofzuiger Keuzehulp. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
