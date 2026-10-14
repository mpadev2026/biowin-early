import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getRelatedProducts, articles } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'

interface Params {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.summary,
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const relatedProducts = getRelatedProducts(article.relatedProductSlugs)
  const paragraphs = article.content.split('\n\n').filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-5">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-700 bg-accent-100 rounded-full">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <time dateTime={article.publishedAt} className="block text-sm text-gray-400">
            {formatDate(article.publishedAt)}
          </time>
          {/* Hero image */}
          <div className="relative h-56 sm:h-72 lg:h-96 rounded-2xl overflow-hidden bg-gray-50">
            <Image
              src={article.imagePlaceholder}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none space-y-5">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16" aria-labelledby="related-products-heading">
            <h2
              id="related-products-heading"
              className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100"
            >
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA Banner */}
      <CTABanner
        headline="Interested in our products?"
        subline="Speak with our technical team or find a distributor near you."
        primaryLabel="View Products"
        primaryHref="/products"
        secondaryLabel="Find Distributor"
        secondaryHref="/distributors"
      />
    </>
  )
}
