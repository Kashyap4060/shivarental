import fs from 'fs'
import path from 'path'

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

/**
 * Scans public/images/fleet/[slug]/ at request time and returns
 * all image paths sorted alphabetically — no manual naming needed.
 * Returns an empty array if the folder is missing or empty.
 */
export function scanFleetImages(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'fleet', slug)
  try {
    return fs
      .readdirSync(dir)
      .filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort()
      .map(f => `/images/fleet/${slug}/${f}`)
  } catch {
    return []
  }
}
