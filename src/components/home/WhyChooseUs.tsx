import { Zap, IndianRupee, ShieldCheck, Wrench, HardHat, CalendarDays } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const features = [
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book your vehicle instantly via WhatsApp. No waiting, no paperwork delays.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Transparent, competitive pricing with absolutely no hidden charges. Ever.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Sanitized Vehicles',
    description: 'Every vehicle is thoroughly cleaned and sanitized before each rental.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Wrench,
    title: 'Roadside Assistance',
    description: '24/7 roadside support. We\'re just a call away if you need help on the road.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: HardHat,
    title: 'Helmet Included',
    description: 'Complimentary helmet with every rental. Your safety is our top priority.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: CalendarDays,
    title: 'Flexible Plans',
    description: 'Daily, weekly, or monthly — choose a plan that suits your travel schedule.',
    color: 'bg-indigo-100 text-indigo-600',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Ride with Confidence"
          subtitle="We make renting a bike in Gokarna effortless, affordable, and safe — so you can focus on the adventure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust badge */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-center justify-center gap-3">
          <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
          <p className="text-green-800 font-semibold text-sm md:text-base">
            No Hidden Charges — The price you see is the price you pay. Always.
          </p>
        </div>
      </div>
    </section>
  )
}
