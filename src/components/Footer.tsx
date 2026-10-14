import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">BioWin</h2>
            <p className="text-sm text-gray-400 mb-4">
              Premium industrial solutions for modern manufacturing environments.
            </p>
            <p className="text-sm text-gray-400">
              Trusted by leading companies worldwide.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link href="/products" className="text-sm hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-sm hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/distributors" className="text-sm hover:text-white transition-colors">
                  Distributors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p className="text-gray-400">
                123 Industrial Park Road
                <br />
                Business District, City 12345
              </p>
              <p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                  aria-label="Call us at +1 234 567 890"
                >
                  +1 234 567 890
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@biowin.com"
                  className="hover:text-white transition-colors"
                  aria-label="Email us at info@biowin.com"
                >
                  info@biowin.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
                  aria-label="Contact us on WhatsApp"
                >
                  WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BioWin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
