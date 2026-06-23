import Image from 'next/image'

type Props = {
  src: string
  alt: string
  sizes: string
}

export default function BgRemovedImage({ src, alt, sizes }: Props) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-3"
        sizes={sizes}
      />
    </div>
  )
}

// Background removal disabled — was causing UX issues due to heavy model download on first load.
// To re-enable, restore the @imgly/background-removal logic with the module-level cache + sequential queue.
