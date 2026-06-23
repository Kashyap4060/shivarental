import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import MobileBookingBar from '@/components/layout/MobileBookingBar'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Shiva Bike Rental — Gokarna | Scooter & Bike Rentals',
    template: '%s | Shiva Bike Rental Gokarna',
  },
  description:
    'Rent scooters and bikes in Gokarna, Karnataka at affordable prices. Honda Activa, TVS Jupiter, Royal Enfield, KTM Duke and more. Daily, weekly & monthly rentals. Helmet included. No hidden charges. Book via WhatsApp!',
  keywords: [
    'bike rental gokarna',
    'scooty rental gokarna',
    'motorcycle rental gokarna',
    'royal enfield rental gokarna',
    'activa rental gokarna karnataka',
    'two wheeler rental gokarna',
    'gokarna bike hire',
  ],
  openGraph: {
    title: 'Shiva Bike Rental — Gokarna | Scooter & Bike Rentals',
    description:
      'Rent scooters and bikes in Gokarna at affordable prices. Daily, weekly & monthly rentals. Book via WhatsApp!',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body
        className="min-h-dvh flex flex-col"
        style={{ fontFamily: 'var(--font-body), Inter, sans-serif' }}
      >
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBookingBar />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
