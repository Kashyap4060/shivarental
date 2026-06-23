'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { vehicles } from '@/data/vehicles'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi! My name is ${form.name}.\nPhone: ${form.phone}\nEmail: ${form.email}\nVehicle interest: ${form.vehicle || 'Not specified'}\nMessage: ${form.message}`
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
      <h2 className="font-bold text-slate-900 text-xl mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
        Send an Inquiry
      </h2>
      <p className="text-slate-500 text-sm mb-6">
        Fill the form and we&apos;ll open WhatsApp with your message pre-filled.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide" htmlFor="name">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Rahul Sharma"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide" htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="rahul@email.com"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide" htmlFor="vehicle">
            Vehicle Interest
          </label>
          <select
            id="vehicle"
            value={form.vehicle}
            onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="">Select a vehicle (optional)</option>
            {vehicles.map((v) => (
              <option key={v.slug} value={v.name}>
                {v.name} — ₹{v.priceDay}/day
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us your rental dates, pickup time, and any questions..."
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb856] text-white py-3.5 rounded-xl font-bold text-sm transition-colors"
        >
          <Send className="w-4 h-4" />
          Send via WhatsApp
        </button>
        <p className="text-center text-xs text-slate-400">Opens WhatsApp with your message pre-filled</p>
      </form>
    </div>
  )
}
