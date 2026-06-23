import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredVehicles } from '@/data/vehicles'
import { scanFleetImages } from '@/lib/fleet-images'
import VehicleCard from '@/components/shared/VehicleCard'
import SectionHeader from '@/components/shared/SectionHeader'

export default function FeaturedVehicles() {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Fleet"
          title="Choose Your Ride"
          subtitle="From fuel-efficient scooties to powerful motorcycles — we have the perfect vehicle for every adventure in Gokarna."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.slug}
              vehicle={vehicle}
              images={scanFleetImages(vehicle.slug)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
          >
            View All Vehicles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
