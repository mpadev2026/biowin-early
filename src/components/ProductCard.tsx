import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
        <Image
          src={product.imagePlaceholder}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category badge */}
        <span className="self-start px-2.5 py-0.5 text-xs font-semibold text-accent-700 bg-accent-100 rounded-full">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-base font-bold text-gray-900 leading-snug">
          {product.name}
        </h3>

        {/* Short description — 2-line clamp */}
        <p className="text-sm text-gray-600 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        {/* CTA */}
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-accent-600 rounded-lg hover:bg-accent-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
          aria-label={`View details for ${product.name}`}
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
