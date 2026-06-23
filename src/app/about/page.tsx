import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Users, MapPin, Star } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { pageImages, backgroundImages } from '@/data/images'

export const metadata: Metadata = {
  title: 'About Us — Shiva Bike Rental Gokarna',
  description: 'Learn about Shiva Bike Rental — Gokarna\'s most trusted bike and scooty rental service. We help tourists explore the beautiful beaches and temples of Gokarna on two wheels.',
}

const stats = [
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Star, value: '4.9★', label: 'Average Rating' },
  { icon: MapPin, value: '5+', label: 'Years in Gokarna' },
  { icon: ShieldCheck, value: '100%', label: 'No Hidden Charges' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <Image src={pageImages.about} alt="Gokarna landscape" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-2">About Us</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Story
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Gokarna&apos;s Trusted<br />Bike Rental Partner
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Shiva Bike Rental is Gokarna&apos;s most trusted two-wheeler rental service. For over 5 years, we have been helping tourists and travellers explore the stunning beaches, ancient temples, and scenic coastal roads of Gokarna — on two wheels.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We started with just a few scooties and a belief that every visitor deserves a hassle-free, affordable way to explore Gokarna at their own pace. Today, we offer a fleet of 6 well-maintained vehicles — from fuel-efficient scooties to powerful motorcycles — and we&apos;re proud to serve hundreds of happy customers every year.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Book Your Ride Today
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src={backgroundImages[6]}
                alt="Gokarna scenic view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-blue-600 price-display" style={{ fontFamily: 'var(--font-heading)' }}>{value}</div>
                <div className="text-slate-600 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To make exploring Gokarna affordable, effortless, and safe for every traveller. We believe every visitor deserves a reliable ride — without hidden charges, without hassle, and with a smile.
              </p>
            </div>
            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To be the most trusted mobility partner for every visitor who arrives in Gokarna — offering the best vehicles, the best service, and the most transparent pricing in the region.
              </p>
            </div>
          </div>

          {/* Gokarna gallery */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
              Explore Gokarna on Two Wheels
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {backgroundImages.slice(0, 8).map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`Gokarna scenery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
