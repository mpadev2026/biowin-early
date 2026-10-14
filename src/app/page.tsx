import type { Metadata } from 'next'
import { getFeaturedProducts, getLatestArticles } from '@/lib/data'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import ArticleCard from '@/components/ArticleCard'
import CTABanner from '@/components/CTABanner'
import { Shield, Truck, Users, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'BioWin delivers cleaning, maintenance, and protection solutions trusted by thousands of businesses.',
}

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const latestArticles = getLatestArticles(3)

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Premium Industrial Products for Every Need"
        subheadline="BioWin delivers cleaning, maintenance, and protection solutions trusted by thousands of businesses."
        primaryLabel="Explore Products"
        primaryHref="/products"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Why Choose BioWin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Advantage 1 */}
            <article className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Shield size={28} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Proven Quality</h3>
              <p className="text-sm text-gray-600">
                ISO-certified formulations tested in the field
              </p>
            </article>

            {/* Advantage 2 */}
            <article className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Truck size={28} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Nationwide distribution network</p>
            </article>

            {/* Advantage 3 */}
            <article className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Users size={28} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">Dedicated technical support team</p>
            </article>

            {/* Advantage 4 */}
            <article className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Leaf size={28} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">
                Biodegradable and environmentally responsible
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Order?"
        subline="Contact our team or find a distributor near you."
        primaryLabel="Find Distributor"
        primaryHref="/distributors"
        secondaryLabel="WhatsApp Us"
        whatsapp="628123456789"
      />
    </>
  )
}
