import type { Metadata } from 'next'
import { Shield, Truck, Users, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about BioWin — our mission, vision, values, and the team behind our premium industrial products.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            About BioWin
          </h1>
          <p className="text-accent-100 text-base sm:text-lg max-w-2xl mx-auto">
            BioWin is a leading supplier of premium industrial cleaning, maintenance, and
            protection products, serving businesses across Indonesia since 2014. Our mission is
            to help facilities operate cleaner, safer, and more efficiently.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="vision-mission-heading">
        <div className="max-w-7xl mx-auto">
          <h2
            id="vision-mission-heading"
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10"
          >
            Vision &amp; Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="p-8 bg-accent-50 rounded-2xl border border-accent-100">
              <h3 className="text-lg font-bold text-accent-700 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                To be the most trusted industrial product brand in Southeast Asia — recognised
                for product quality, technical expertise, and commitment to sustainability.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                To develop and deliver innovative industrial solutions that improve operational
                efficiency, protect assets, and support environmentally responsible practices
                across every industry we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="advantages-heading">
        <div className="max-w-7xl mx-auto">
          <h2
            id="advantages-heading"
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10"
          >
            Why Choose BioWin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Shield size={28} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Proven Quality</h3>
              <p className="text-sm text-gray-600">
                ISO-certified formulations tested in the field
              </p>
            </article>

            <article className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Truck size={28} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Nationwide distribution network</p>
            </article>

            <article className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Users size={28} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">Dedicated technical support team</p>
            </article>

            <article className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100">
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

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto">
          <h2
            id="stats-heading"
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10"
          >
            BioWin by the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '500+', label: 'Clients' },
              { stat: '10 Years', label: 'Experience' },
              { stat: '50+', label: 'Products' },
              { stat: '24/7', label: 'Support' },
            ].map(({ stat, label }) => (
              <article
                key={label}
                className="flex flex-col items-center justify-center p-6 bg-accent-50 rounded-2xl border border-accent-100 text-center"
              >
                <span className="text-3xl font-extrabold text-accent-700">{stat}</span>
                <span className="mt-1 text-sm font-medium text-gray-600">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
