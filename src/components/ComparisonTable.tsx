'use client';

import { useState } from 'react';
import { products } from '@/data/products';

export default function ComparisonTable() {
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="mb-4">Vergelijk alle 6 keuzes</h2>
          <p className="text-xl text-gray-600 mb-6">
            Zie in één oogopslag de verschillen tussen alle modellen.
          </p>
          
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyDifferences}
              onChange={(e) => setShowOnlyDifferences(e.target.checked)}
              className="w-5 h-5"
            />
            <span className="font-semibold">Toon alleen verschillen</span>
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4 text-left sticky left-0 bg-primary z-10">Model</th>
                <th className="p-4 text-left">Beste voor</th>
                <th className="p-4 text-left">Dweilen</th>
                <th className="p-4 text-left">Dock</th>
                <th className="p-4 text-left">Obstakels vermijden</th>
                <th className="p-4 text-left">Voor huisdieren</th>
                <th className="p-4 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr
                  key={product.id}
                  className={`border-b border-gray-200 hover:bg-blue-50 ${
                    idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="p-4 font-semibold sticky left-0 bg-inherit z-10">
                    <div className="flex items-center gap-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-contain rounded"
                      />
                      <div>
                        <div className="font-semibold">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.badge}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{product.specs.bestFor}</td>
                  <td className="p-4">{product.specs.mopping}</td>
                  <td className="p-4">{product.specs.dock}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 rounded text-sm ${
                      product.specs.obstacleAvoidance === 'Excellent' ? 'bg-green-100 text-green-800' :
                      product.specs.obstacleAvoidance === 'Goed' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {product.specs.obstacleAvoidance}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {product.specs.pets ? (
                      <span className="text-2xl">✅</span>
                    ) : (
                      <span className="text-2xl">➖</span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-gray-600">{product.specs.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            💡 <strong>Tip:</strong> Scroll horizontaal op mobiel om alle kolommen te zien
          </p>
        </div>
      </div>
    </section>
  );
}
