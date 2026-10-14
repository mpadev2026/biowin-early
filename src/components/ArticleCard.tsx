import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
        <Image
          src={article.imagePlaceholder}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        {/* Category badge */}
        <span className="self-start px-2.5 py-0.5 text-xs font-semibold text-accent-700 bg-accent-100 rounded-full">
          {article.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 leading-snug">
          {article.title}
        </h3>

        {/* Date */}
        <time
          dateTime={article.publishedAt}
          className="text-xs text-gray-400"
        >
          {formatDate(article.publishedAt)}
        </time>

        {/* Summary — 3-line clamp */}
        <p className="text-sm text-gray-600 line-clamp-3 flex-1">
          {article.summary}
        </p>

        {/* CTA */}
        <Link
          href={`/articles/${article.slug}`}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-accent-600 border border-accent-600 rounded-lg hover:bg-accent-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
          aria-label={`Read more about ${article.title}`}
        >
          Read More
        </Link>
      </div>
    </article>
  )
}
