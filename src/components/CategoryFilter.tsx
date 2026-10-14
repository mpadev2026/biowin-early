'use client'

interface CategoryFilterProps {
  categories: string[]
  selected: string
  onSelect: (c: string) => void
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  const allLabel = 'All'

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {/* "All" button */}
      <button
        type="button"
        onClick={() => onSelect('')}
        className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1 ${
          selected === ''
            ? 'bg-accent-600 text-white border-accent-600'
            : 'bg-white text-gray-600 border-gray-300 hover:border-accent-400 hover:text-accent-600'
        }`}
        aria-pressed={selected === ''}
        aria-label={allLabel}
      >
        {allLabel}
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1 ${
            selected === cat
              ? 'bg-accent-600 text-white border-accent-600'
              : 'bg-white text-gray-600 border-gray-300 hover:border-accent-400 hover:text-accent-600'
          }`}
          aria-pressed={selected === cat}
          aria-label={cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
