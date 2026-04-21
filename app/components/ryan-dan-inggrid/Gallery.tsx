'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}


export default function Gallery({ isOpen, isMobile }: Props) {
  let images = []
  const [current, setCurrent] = useState(0)

  if (isMobile) {
    images = [
      '/images/ryan-dan-inggrid/gallery-mobile-1.png'
    ]
  } else {
    images = [
      '/images/ryan-dan-inggrid/gallery-1.png'
    ]
  }

  return (
    <>
      {isOpen ? (
        <section id="gallery" className="gallery relative w-full h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <Image
                  src={src}
                  alt={`gallery-${index}`}
                  width={392}
                  height={573}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === index
                    ? 'bg-white scale-110'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}