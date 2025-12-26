'use client';

import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function Top3Picks() {
  // Top 3: Qrevo Curv (featured), Saros 10R, X8 Pro OMNI
  const top3 = [
    products[0], // Qrevo Curv
    products[1], // Saros 10R
    products[2], // X8 Pro OMNI
  ];

  return (
    <section id="top3" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Top 3 Keuzes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deze 3 modellen winnen het vaakst in onze keuzehulp. 
            Één hiervan is waarschijnlijk perfect voor jou.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {top3.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={idx === 0}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#all-products" className="btn-secondary inline-block">
            Bekijk alle 6 keuzes
          </a>
        </div>
      </div>
    </section>
  );
}
