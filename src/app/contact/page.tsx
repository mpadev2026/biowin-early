import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the BioWin team. We are ready to help with product enquiries, technical support, and distribution questions.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-500 text-sm max-w-xl">
            We are happy to help with product enquiries, technical questions, or distributor
            information. Fill in the form or reach out directly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact info + map */}
          <div className="space-y-8">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-lg font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100"
              >
                Contact Information
              </h2>
              <address className="not-italic space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin
                    size={20}
                    className="shrink-0 mt-0.5 text-accent-600"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="mt-0.5">
                      Jl. Industri Raya No. 123
                      <br />
                      Kawasan Industri, Jakarta Utara 14140
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Phone
                    size={20}
                    className="shrink-0 mt-0.5 text-accent-600"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+6221234567890"
                      className="mt-0.5 hover:text-accent-600 transition-colors"
                      aria-label="Call us at +62 21 234 567 890"
                    >
                      +62 21 234 567 890
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Mail
                    size={20}
                    className="shrink-0 mt-0.5 text-accent-600"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:info@biowin.co.id"
                      className="mt-0.5 hover:text-accent-600 transition-colors"
                      aria-label="Email us at info@biowin.co.id"
                    >
                      info@biowin.co.id
                    </a>
                  </div>
                </div>
              </address>
            </section>

            {/* WhatsApp CTA */}
            <div>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                aria-label="Contact us on WhatsApp"
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
                Chat on WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div
              className="w-full h-56 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center"
              role="img"
              aria-label="Map placeholder"
            >
              <span className="text-sm text-gray-400 font-medium">Map Placeholder</span>
            </div>
          </div>

          {/* Right: Contact form */}
          <section aria-labelledby="contact-form-heading">
            <h2
              id="contact-form-heading"
              className="text-lg font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100"
            >
              Send Us a Message
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  )
}
