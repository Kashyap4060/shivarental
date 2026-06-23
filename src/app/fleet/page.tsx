import type { Metadata } from 'next'
import Image from 'next/image'
import { vehicles } from '@/data/vehicles'
import { scanFleetImages } from '@/lib/fleet-images'
import FleetGrid from '@/components/fleet/FleetGrid'
import { pageImages } from '@/data/images'

export const metadata: Metadata = {
  title: 'Our Fleet — Scooters & Bikes',
  description: 'Browse our full fleet of scooters and bikes available for rent in Gokarna. Honda Activa, TVS Jupiter, Royal Enfield Classic 350, KTM Duke 200 and more. Filter by type, brand, and price.',
}

export default function FleetPage() {
  const vehicleImages: Record<string, string[]> = Object.fromEntries(
    vehicles.map((v) => [v.slug, scanFleetImages(v.slug)])
  )

  return (
    <>
      {/* Page Hero */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <Image
          src={pageImages.fleet}
          alt="Gokarna scenic roads"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-2">Our Fleet</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Choose Your Ride
          </h1>
          <p className="text-white/70 mt-2 text-sm max-w-md">
            6 vehicles · Scooties from ₹279/day · Bikes from ₹499/day
          </p>
        </div>
      </div>

      {/* Fleet content */}
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FleetGrid vehicleImages={vehicleImages} />
        </div>
      </section>
    </>
  )
}
