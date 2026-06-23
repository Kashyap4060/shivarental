'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { reviews } from '@/data/reviews'
import SectionHeader from '@/components/shared/SectionHeader'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
        />
      ))}
    </div>
  )
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), [])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [isPaused, next])

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="What Our Riders Say"
          subtitle="Hundreds of happy customers have explored Gokarna on our bikes. Here's what they say."
        />

        <div className="relative max-w-3xl mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Review card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl text-center">
            <StarRating rating={reviews[current].rating} />
            <blockquote className="mt-5 text-slate-700 text-lg leading-relaxed italic">
              &ldquo;{reviews[current].text}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm">
                {reviews[current].name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900 text-sm">{reviews[current].name}</div>
                <div className="text-slate-400 text-xs">{reviews[current].city} · {reviews[current].vehicle}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
