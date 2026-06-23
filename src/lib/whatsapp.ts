const WHATSAPP_NUMBER = '919986596949'

const DEFAULT_MESSAGE =
  "Hi, I'm interested in renting a bike/scooty from Shiva Bike Rental, Gokarna. Please share the available options and pricing."

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? DEFAULT_MESSAGE)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function buildVehicleWhatsAppUrl(vehicleName: string): string {
  const message = `Hi, I'd like to book the ${vehicleName} from Shiva Bike Rental, Gokarna. Please confirm availability and share booking details.`
  return buildWhatsAppUrl(message)
}

export const WHATSAPP_PHONE_DISPLAY = '+91 99865 96949'
export const PHONE_NUMBER = '+919986596949'
export const PHONE_DISPLAY = '+91 99865 96949'
export const EMAIL = 'shivabikerental@gmail.com'
export const ADDRESS = 'Gokarna, Uttara Kannada, Karnataka 581326'
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15397.5!2d74.3196!3d14.5479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcba1c4d3e4a61%3A0x8b5d0a5e!2sGokarna%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
