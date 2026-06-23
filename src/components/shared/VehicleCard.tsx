import { Zap, Fuel } from 'lucide-react'
import type { Vehicle } from '@/data/vehicles'
import { buildVehicleWhatsAppUrl } from '@/lib/whatsapp'
import VehicleImageCarousel from './VehicleImageCarousel'

type VehicleCardProps = {
  vehicle: Vehicle
  images: string[]
}

const typeColors = {
  scooty: 'bg-blue-100 text-blue-700',
  bike: 'bg-violet-100 text-violet-700',
}

export default function VehicleCard({ vehicle, images }: VehicleCardProps) {
  const waUrl = buildVehicleWhatsAppUrl(vehicle.name)

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image carousel with auto background removal */}
      <div className="relative">
        <VehicleImageCarousel images={images} name={vehicle.name} />

        {/* Type badge */}
        <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-semibold ${typeColors[vehicle.type]}`}>
          {vehicle.type === 'scooty' ? 'Scooty' : 'Bike'}
        </span>

        {!vehicle.available && (
          <div className="absolute inset-0 z-20 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-slate-900 font-semibold px-4 py-2 rounded-full text-sm">
              Not Available
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-1">
          <h3 className="font-bold text-slate-900 text-lg leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
            {vehicle.name}
          </h3>
          <p className="text-slate-500 text-xs mt-0.5">{vehicle.brand}</p>
        </div>

        <div className="flex gap-3 mt-3 mb-4">
          <div className="flex items-center gap-1.5 text-slate-600 text-xs">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            {vehicle.engine}
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-xs">
            <Fuel className="w-3.5 h-3.5 text-green-500" />
            {vehicle.mileage}
          </div>
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100">
          <div className="price-display text-2xl font-bold text-slate-900">
            ₹{vehicle.priceDay.toLocaleString('en-IN')}
            <span className="text-sm font-normal text-slate-400">/day</span>
          </div>
          <div className="price-display text-xs text-slate-400 mt-0.5">
            ₹{vehicle.priceWeek.toLocaleString('en-IN')}/week
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb856] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
          aria-label={`Book ${vehicle.name} via WhatsApp`}
        >
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book via WhatsApp
        </a>
      </div>
    </div>
  )
}
