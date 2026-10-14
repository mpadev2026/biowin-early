'use client'

import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}

export default function SearchBar({ value, onChange, placeholder = 'Search…' }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" aria-hidden="true">
        <Search size={18} className="text-gray-400" />
      </span>
      <input
        id="search-input"
        type="search"
        role="searchbox"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors placeholder:text-gray-400"
      />
    </div>
  )
}
