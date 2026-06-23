import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import FeaturedVehicles from '@/components/home/FeaturedVehicles'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import RentalPackages from '@/components/home/RentalPackages'
import ReviewsCarousel from '@/components/home/ReviewsCarousel'
import FAQSection from '@/components/home/FAQSection'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Shiva Bike Rental Gokarna — Scooties & Bikes from ₹279/day',
  description: 'Rent scooties and bikes in Gokarna, Karnataka. Honda Activa, TVS Jupiter, Royal Enfield Classic 350, KTM Duke 200 and more. No hidden charges, helmet included, instant WhatsApp booking.',
  keywords: ['bike rental gokarna', 'scooty rental gokarna', 'gokarna bike hire', 'two wheeler rental gokarna', 'royal enfield gokarna'],
  openGraph: {
    title: 'Shiva Bike Rental Gokarna — Scooties & Bikes from ₹279/day',
    description: 'Rent scooties and bikes in Gokarna, Karnataka. Instant WhatsApp booking.',
    type: 'website',
    locale: 'en_IN',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shiva Bike Rental',
  description: 'Scooty and bike rental service in Gokarna, Karnataka, India',
  telephone: '+919986596949',
  email: 'shivabikerental@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gokarna',
    addressRegion: 'Karnataka',
    postalCode: '581326',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 14.5492,
    longitude: 74.3174,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '20:00',
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash',
  areaServed: 'Gokarna, Karnataka, India',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FeaturedVehicles />
      <WhyChooseUs />
      <RentalPackages />
      <ReviewsCarousel />
      <FAQSection />
      <ContactSection />
    </>
  )
}
