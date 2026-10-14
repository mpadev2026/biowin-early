'use client'

import { useState, useMemo } from 'react'
import { articles, getArticleCategories } from '@/lib/data'
import ArticleCard from '@/components/ArticleCard'
import CategoryFilter from '@/components/CategoryFilter'

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = useMemo(() => getArticleCategories(), [])

  const filtered = useMemo(() => {
    if (selectedCategory === '') return articles
    return articles.filter((a) => a.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Articles &amp; Guides</h1>
          <p className="mt-2 text-gray-500 text-sm">
            Expert knowledge to help you get the most from your industrial products.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {/* Category filter */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-lg font-semibold">No articles found</p>
            <p className="text-gray-400 text-sm mt-1">
              Try clearing the category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
