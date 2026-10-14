import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
  imageSrc?: string
}

export default function HeroSection({
  headline,
  subheadline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-600 to-accent-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              {headline}
            </h1>
            <p className="text-base sm:text-lg text-accent-100 max-w-2xl">
              {subheadline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-accent-700 bg-white rounded-lg hover:bg-accent-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-600"
              >
                {primaryLabel}
              </Link>

              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border-2 border-white rounded-lg hover:bg-accent-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-600"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>

          {/* Image */}
          {imageSrc && (
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Gradient overlay decoration */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-accent-900 via-transparent to-transparent opacity-40 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
