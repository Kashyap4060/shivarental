'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BgRemovedImage from './BgRemovedImage'

type Props = {
  images: string[]
  name: string
}

export default function VehicleImageCarousel({ images, name }: Props) {
  const [current, setCurrent] = useState(0)
  const total = images.length
  const single = total <= 1

  const prev = () => setCurrent(p => (p - 1 + total) % total)
  const next = () => setCurrent(p => (p + 1) % total)

  // No images — show gradient placeholder
  if (total === 0) {
    return (
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        <span className="text-5xl opacity-20">🏍️</span>
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden group">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <BgRemovedImage
            src={src}
            alt={`${name} — photo ${i + 1}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ))}

      {/* Prev / Next arrows — only when multiple images */}
      {!single && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Photo ${i + 1}`}
                className="rounded-full bg-white transition-all duration-300"
                style={{ width: i === current ? 16 : 5, height: 5, opacity: i === current ? 1 : 0.5 }}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-2 right-2 z-10 bg-black/40 text-white text-xs px-1.5 py-0.5 rounded-full">
            {current + 1}/{total}
          </div>
        </>
      )}
    </div>
  )
}
