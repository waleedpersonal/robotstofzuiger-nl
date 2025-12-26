'use client';

import { useState } from 'react';
import { products, alsoConsidered } from '@/data/products';
import ProductCard from './ProductCard';

export default function AllProducts() {
  const [showAll, setShowAll] = useState(false);
  const [showAlsoConsidered, setShowAlsoConsidered] = useState(false);

  return (
    <section id="all-products" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Onze 6 keuzes (zonder keuzestress)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We hebben het werk voor je gedaan. Deze 6 modellen dekken alle scenario's af.
          </p>
        </div>

        {/* First 3 products (always visible) */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile: Show More button */}
        {!showAll && (
          <div className="text-center mb-8 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              Toon alle 6 keuzes
            </button>
          </div>
        )}

        {/* Remaining 3 products */}
        <div className={`grid md:grid-cols-3 gap-8 ${!showAll ? 'hidden md:grid' : ''}`}>
          {products.slice(3, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Also Considered (collapsed accordion) */}
        <div className="mt-12 max-w-4xl mx-auto">
          <button
            onClick={() => setShowAlsoConsidered(!showAlsoConsidered)}
            className="w-full p-4 bg-white border-2 border-gray-300 rounded-lg hover:border-primary transition-colors flex justify-between items-center"
          >
            <span className="font-semibold text-lg">
              Ook overwogen ({alsoConsidered.length} modellen)
            </span>
            <span className="text-2xl">{showAlsoConsidered ? '−' : '+'}</span>
          </button>

          {showAlsoConsidered && (
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {alsoConsidered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
