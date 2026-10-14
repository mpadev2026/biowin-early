'use client'

import { useState, useMemo } from 'react'
import { distributors, getDistributorRegions } from '@/lib/data'
import DistributorCard from '@/components/DistributorCard'
import CategoryFilter from '@/components/CategoryFilter'

export default function DistributorsPage() {
  const [selectedRegion, setSelectedRegion] = useState('')

  const regions = useMemo(() => getDistributorRegions(), [])

  const filtered = useMemo(() => {
    if (selectedRegion === '') return distributors
    return distributors.filter((d) => d.region === selectedRegion)
  }, [selectedRegion])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Distributor Directory</h1>
          <p className="mt-2 text-gray-500 text-sm max-w-2xl">
            Find an authorised BioWin distributor near you. Our network spans major cities and
            regions across Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {/* Region filter */}
        <CategoryFilter
          categories={regions}
          selected={selectedRegion}
          onSelect={setSelectedRegion}
        />

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((distributor) => (
              <DistributorCard key={distributor.id} distributor={distributor} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-lg font-semibold">No distributors found</p>
            <p className="text-gray-400 text-sm mt-1">
              Try clearing the region filter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
