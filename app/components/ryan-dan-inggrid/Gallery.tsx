'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}


export default function Gallery({ isOpen, isMobile }: Props) {
  let images = [
    '/images/ryan-dan-inggrid/img-gallery-1.png'
  ]
  const [current, setCurrent] = useState(0)

  return (
    <>
      {isOpen ? (
        <section id="gallery" className="gallery relative w-full h-screen overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <Image
                  src={src}
                  alt={`gallery-${index}`}
                  width={1512}
                  height={945}
                  className="w-full h-full object-cover object-[55%_center]"
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