'use client'

import { useState, useMemo } from 'react'
import { products, getProductCategories } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = useMemo(() => getProductCategories(), [])

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return products.filter((p) => {
      const matchesSearch =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
      const matchesCategory =
        selectedCategory === '' || p.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Product Catalog</h1>
          <p className="mt-2 text-gray-500 text-sm">
            Browse our full range of industrial cleaning, maintenance, and protection products.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:max-w-xs">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search products…"
            />
          </div>
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-lg font-semibold">No products found</p>
            <p className="text-gray-400 text-sm mt-1">
              Try adjusting your search or clearing the category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
