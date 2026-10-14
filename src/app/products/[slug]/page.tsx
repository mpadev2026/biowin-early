import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts, products } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { CheckCircle, FileText } from 'lucide-react'

interface Params {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.shortDescription,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const relatedProducts = getRelatedProducts(product.relatedProductSlugs)

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image
                src={product.imagePlaceholder}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-700 bg-accent-100 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
              <p className="text-gray-600 text-base leading-relaxed">
                {product.shortDescription}
              </p>
              <a
                href={`https://wa.me/628123456789?text=${encodeURIComponent(`I'm interested in ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                aria-label={`Enquire about ${product.name} on WhatsApp`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Full description */}
        <section aria-labelledby="desc-heading">
          <h2
            id="desc-heading"
            className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
          >
            Product Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
        </section>

        {/* Benefits */}
        <section aria-labelledby="benefits-heading">
          <h2
            id="benefits-heading"
            className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
          >
            Key Benefits
          </h2>
          <ul className="space-y-3" role="list">
            {product.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="shrink-0 mt-0.5 text-accent-600"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Usage Instructions */}
        <section aria-labelledby="usage-heading">
          <h2
            id="usage-heading"
            className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
          >
            Usage Instructions
          </h2>
          <div className="bg-accent-50 rounded-xl p-6 text-sm text-gray-700 leading-relaxed border border-accent-100">
            {product.usageInstructions}
          </div>
        </section>

        {/* Specifications */}
        <section aria-labelledby="specs-heading">
          <h2
            id="specs-heading"
            className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
          >
            Specifications
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="sr-only">
                <tr>
                  <th scope="col">Specification</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-5 py-3 font-medium text-gray-900 w-1/2">
                      {spec.label}
                    </td>
                    <td className="px-5 py-3 text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Documents */}
        {product.documents.length > 0 && (
          <section aria-labelledby="docs-heading">
            <h2
              id="docs-heading"
              className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
            >
              Documentation
            </h2>
            <ul className="space-y-3" role="list">
              {product.documents.map((doc) => (
                <li key={doc.name}>
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 hover:bg-accent-50 hover:border-accent-200 hover:text-accent-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1"
                    aria-label={`Download ${doc.name}`}
                  >
                    <FileText size={18} className="shrink-0 text-accent-600" aria-hidden="true" />
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        {product.faq.length > 0 && (
          <section aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {product.faq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-gray-100 bg-white overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset">
                    {item.question}
                    <span
                      className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100"
            >
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA Banner */}
      <CTABanner
        headline="Need more information?"
        subline="Our technical team is ready to help you choose the right product."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        whatsapp="628123456789"
      />
    </>
  )
}
