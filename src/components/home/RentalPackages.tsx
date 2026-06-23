import { Check } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import SectionHeader from '@/components/shared/SectionHeader'

const packages = [
  {
    id: 'daily',
    name: 'Daily Rental',
    period: 'Per Day',
    priceFrom: 279,
    popular: false,
    features: [
      'Minimum 1 day',
      'Helmet included',
      'Unlimited kilometres',
      'Roadside assistance',
      'Quick WhatsApp booking',
    ],
    cta: 'Book Daily Rental',
    message: 'Hi, I\'d like to book a daily rental. Please share available vehicles and confirm my booking.',
  },
  {
    id: 'weekly',
    name: 'Weekly Rental',
    period: 'Per Week (7 Days)',
    priceFrom: 1599,
    popular: true,
    savings: 'Save up to 20%',
    features: [
      '7 continuous days',
      'Helmet included',
      'Unlimited kilometres',
      'Roadside assistance',
      'Priority support',
      'Free extension option',
    ],
    cta: 'Book Weekly Rental',
    message: 'Hi, I\'m interested in a weekly rental (7 days). Please share available vehicles and pricing.',
  },
  {
    id: 'monthly',
    name: 'Monthly Rental',
    period: 'Per Month (30 Days)',
    priceFrom: 4999,
    popular: false,
    savings: 'Save up to 35%',
    features: [
      '30 continuous days',
      'Helmet included',
      'Unlimited kilometres',
      'Roadside assistance',
      'Dedicated support',
      'Flexible extension',
      'Best value deal',
    ],
    cta: 'Book Monthly Rental',
    message: 'Hi, I\'m interested in a monthly rental (30 days). Please share available vehicles and the best pricing.',
  },
]

export default function RentalPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Rental Plans"
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your trip. No surprises, no hidden fees — just great rides at great prices."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 border-2 flex flex-col transition-shadow hover:shadow-xl ${
                pkg.popular
                  ? 'border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-200'
                  : 'border-slate-200 bg-white text-slate-900'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3
                  className={`font-bold text-xl mb-1 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.popular ? 'text-blue-200' : 'text-slate-500'}`}>{pkg.period}</p>
              </div>

              <div className="mb-5">
                <div className={`price-display flex items-end gap-1 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                  <span className="text-4xl font-extrabold">₹{pkg.priceFrom.toLocaleString('en-IN')}</span>
                  <span className={`text-sm pb-1 ${pkg.popular ? 'text-blue-200' : 'text-slate-400'}`}>onwards</span>
                </div>
                {pkg.savings && (
                  <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${pkg.popular ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
                    {pkg.savings}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-green-300' : 'text-green-500'}`} />
                    <span className={pkg.popular ? 'text-blue-100' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppUrl(pkg.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors ${
                  pkg.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
