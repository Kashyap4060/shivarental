import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, ShieldCheck } from 'lucide-react'
import { vehicles } from '@/data/vehicles'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { pageImages } from '@/data/images'

export const metadata: Metadata = {
  title: 'Pricing — Transparent Rental Rates',
  description: 'Complete pricing for all bikes and scooties in Gokarna. Daily, weekly, and monthly rates. Security deposit info. No hidden charges — what you see is what you pay.',
}

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <Image src={pageImages.pricing} alt="Gokarna scenery" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-2">Pricing</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Transparent Pricing
          </h1>
          <p className="text-white/70 mt-2 text-sm">No hidden charges. The price you see is the price you pay.</p>
        </div>
      </div>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* No hidden charges badge */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3 mb-10">
            <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-green-800 font-semibold">
              No Hidden Charges — Fuel, late returns, and optional extra helmets are the only additional costs.
            </p>
          </div>

          {/* Pricing table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 text-sm font-semibold">Vehicle</th>
                    <th className="text-left px-4 py-4 text-sm font-semibold">Type</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold">Per Day</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold">Per Week</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold">Per Month</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold">Deposit</th>
                    <th className="px-4 py-4" />
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((v, i) => (
                    <tr key={v.slug} className={`border-t border-slate-100 hover:bg-blue-50/40 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900 text-sm">{v.name}</div>
                        <div className="text-xs text-slate-400">{v.engine} · {v.mileage}</div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${v.type === 'scooty' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'}`}>
                          {v.type === 'scooty' ? 'Scooty' : 'Bike'}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="price-display font-bold text-slate-900">₹{v.priceDay.toLocaleString('en-IN')}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="price-display font-bold text-slate-900">₹{v.priceWeek.toLocaleString('en-IN')}</span>
                        <div className="text-xs text-green-600 font-medium">
                          Save {Math.round((1 - (v.priceWeek / (v.priceDay * 7))) * 100)}%
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="price-display font-bold text-slate-900">₹{v.priceMonth.toLocaleString('en-IN')}</span>
                        <div className="text-xs text-green-600 font-medium">
                          Save {Math.round((1 - (v.priceMonth / (v.priceDay * 30))) * 100)}%
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="price-display text-slate-600 text-sm">₹{v.deposit.toLocaleString('en-IN')}</span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <a
                          href={buildWhatsAppUrl(`Hi, I'd like to book the ${v.name}. Please confirm availability and pricing.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1fb856] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Book
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* What's included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="font-bold text-slate-900 text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                What&apos;s Included
              </h2>
              <ul className="space-y-2.5">
                {['One helmet per rental', 'Roadside assistance', 'Unlimited kilometres', 'Basic insurance', 'Clean & sanitized vehicle', 'WhatsApp support'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="font-bold text-slate-900 text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Deposit Policy
              </h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><span className="font-semibold text-slate-900">Scooties:</span> ₹500 refundable deposit</li>
                <li><span className="font-semibold text-slate-900">Bikes (150–200cc):</span> ₹1,500 refundable deposit</li>
                <li><span className="font-semibold text-slate-900">Premium bikes:</span> ₹2,000 refundable deposit</li>
                <li className="pt-2 text-slate-500 text-xs">Full deposit refunded on return of vehicle in good condition. Deposit covers minor damages only.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
