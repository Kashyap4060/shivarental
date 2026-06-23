'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { vehicles } from '@/data/vehicles'
import VehicleCard from '@/components/shared/VehicleCard'

const brands = ['All', 'Honda', 'TVS', 'Suzuki', 'Royal Enfield', 'KTM', 'Bajaj']
const types = ['All', 'Scooty', 'Bike']

type Props = {
  vehicleImages: Record<string, string[]>
}

export default function FleetGrid({ vehicleImages }: Props) {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [maxPrice, setMaxPrice] = useState(1000)

  const filtered = useMemo(
    () =>
      vehicles.filter((v) => {
        const typeMatch = selectedType === 'All' || v.type === selectedType.toLowerCase()
        const brandMatch = selectedBrand === 'All' || v.brand === selectedBrand
        const priceMatch = v.priceDay <= maxPrice
        return typeMatch && brandMatch && priceMatch
      }),
    [selectedType, selectedBrand, maxPrice]
  )

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <span className="font-semibold text-slate-900 text-sm">Filter Vehicles</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Type filter */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Vehicle Type</label>
            <div className="flex gap-2 flex-wrap">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedType === t
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Brand filter */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Brand</label>
            <div className="flex gap-2 flex-wrap">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedBrand === b
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Price filter */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">
              Max Price: <span className="price-display text-blue-600 font-bold">₹{maxPrice}/day</span>
            </label>
            <input
              type="range"
              min={200}
              max={1000}
              step={50}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-600"
              aria-label="Maximum price per day"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>₹200</span>
              <span>₹1,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center gap-2 mb-5">
        <Search className="w-4 h-4 text-slate-400" />
        <span className="text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-900">{filtered.length}</span> vehicle{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vehicle) => (
            <VehicleCard
              key={vehicle.slug}
              vehicle={vehicle}
              images={vehicleImages[vehicle.slug] ?? []}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <div className="text-4xl mb-3">🏍️</div>
          <h3 className="font-semibold text-slate-900 mb-1">No vehicles found</h3>
          <p className="text-slate-500 text-sm">Try adjusting your filters to see more options.</p>
          <button
            onClick={() => { setSelectedType('All'); setSelectedBrand('All'); setMaxPrice(1000) }}
            className="mt-4 text-blue-600 text-sm font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
