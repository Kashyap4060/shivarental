'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/faqs'
import SectionHeader from '@/components/shared/SectionHeader'

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before you ride."
        />

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all ${
                  isOpen ? 'border-blue-200 shadow-md' : 'border-slate-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left flex items-start justify-between gap-4 p-5 md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
