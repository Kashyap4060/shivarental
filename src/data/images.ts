// Gokarna background images — assigned per page to avoid SSR hydration issues
export const backgroundImages = [
  '/images/backgrounds/pexels-aditya-bajpai-237271287-12211174.jpg',
  '/images/backgrounds/pexels-akshay-sawardekar-170981760-11229858.jpg',
  '/images/backgrounds/pexels-artosuraj-33793094.jpg',
  '/images/backgrounds/pexels-beladiya-nikunj-742323377-18862151.jpg',
  '/images/backgrounds/pexels-omaid-andrabi-151117364-19993280.jpg',
  '/images/backgrounds/pexels-pavan-prasad-2156671405-35775961.jpg',
  '/images/backgrounds/pexels-qhung999-12640133.jpg',
  '/images/backgrounds/pexels-ravikant-11616382.jpg',
  '/images/backgrounds/pexels-ravikant-11645627.jpg',
  '/images/backgrounds/pexels-ravikant-11659286.jpg',
  '/images/backgrounds/pexels-rsturka-30873476.jpg',
  '/images/backgrounds/pexels-sripadastudios-25841472.jpg',
  '/images/backgrounds/pexels-vishwanth07-16253138.jpg',
  '/images/backgrounds/pexels-yuvraj-singh-155871751-15111124.jpg',
]

// Per-page background image assignments
export const pageImages = {
  home: backgroundImages[0],
  fleet: backgroundImages[4],
  pricing: backgroundImages[7],
  about: backgroundImages[11],
  contact: backgroundImages[13],
}

/** Returns an array of image paths for a vehicle. Falls back to legacy slug.jpg if imageCount is absent. */
export function getFleetImagePaths(slug: string, imageCount?: number): string[] {
  if (!imageCount || imageCount < 1) return [`/images/fleet/${slug}/${slug}.jpg`]
  return Array.from({ length: imageCount }, (_, i) => `/images/fleet/${slug}/${i + 1}.jpg`)
}
