'use client';

import type { Product } from '@/data/products';

interface Props {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    // Track click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_amazon', {
        product_id: product.id,
        source: 'product_card',
      });
    }
  };

  return (
    <div className={`card ${featured ? 'border-4 border-primary' : ''} h-full flex flex-col`}>
      {/* Badge */}
      <div className={`inline-block px-3 py-1 rounded text-sm font-semibold mb-3 self-start ${
        featured ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
      }`}>
        {product.badge}
      </div>

      {/* Image */}
      <div className="mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded-lg"
        />
      </div>

      {/* Product name */}
      <h3 className="text-xl font-bold mb-3">{product.name}</h3>

      {/* Bullets */}
      <ul className="space-y-2 mb-4 flex-grow">
        {product.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <span className="text-primary font-bold">✓</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Perfect for */}
      <div className="bg-green-50 p-3 rounded-lg mb-3 text-sm">
        <p className="font-semibold text-green-800 mb-1">Voor wie is dit perfect?</p>
        <p className="text-green-700">{product.perfectFor}</p>
      </div>

      {/* Watch out */}
      <div className="bg-orange-50 p-3 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-orange-800 mb-1">Let op:</p>
        <p className="text-orange-700">{product.watchOut}</p>
      </div>

      {/* CTA */}
      <a
        href={product.amazonLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="btn-primary w-full mb-2 block"
      >
        Bekijk op Amazon.nl
      </a>

      {/* Secondary link */}
      <a
        href={`#product-${product.id}`}
        className="text-center text-sm text-primary hover:underline"
      >
        Waarom deze keuze?
      </a>
    </div>
  );
}
