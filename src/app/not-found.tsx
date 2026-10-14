import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <AlertCircle
        size={56}
        className="text-accent-400 mb-5"
        aria-hidden="true"
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-gray-500 text-base max-w-sm mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-accent-600 rounded-lg hover:bg-accent-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  )
}
