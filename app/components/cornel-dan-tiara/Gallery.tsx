'use client'

import { useState } from 'react'
import { useInView } from '@/app/hooks/useInView'

export default function Gallery() {
  const { ref, isVisible } = useInView()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const images = [
    '/images/cornel-dan-tiara/img-gallery-1.png',
    '/images/cornel-dan-tiara/img-gallery-2.png',
    '/images/cornel-dan-tiara/img-gallery-3.png',
    '/images/cornel-dan-tiara/img-gallery-4.png',
    '/images/cornel-dan-tiara/img-gallery-5.png',
    '/images/cornel-dan-tiara/img-gallery-6.png',
    '/images/cornel-dan-tiara/img-gallery-7.png',
    '/images/cornel-dan-tiara/img-gallery-8.png',
    '/images/cornel-dan-tiara/img-gallery-9.png',
    '/images/cornel-dan-tiara/img-gallery-10.png',
  ]

  return (
    <>
      <section id="gallery" className="gallery relative w-full min-h-min bg-[#F6F6F4]">
        <div className="flex flex-col items-center py-[80px] h-full text-[#3B3B3B] text-center font-canela font-this" ref={ref}>
          <h3 className={`text-2xl leading-[22px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            our gallery
          </h3>
          <div className="grid grid-cols-2 gap-[7px] mt-[40px]">
            <img src={images[0]} alt="Gallery" onClick={() => setActiveIndex(0)} className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[1]} alt="Gallery" onClick={() => setActiveIndex(1)} className={`w-[167px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[2]} alt="Gallery" onClick={() => setActiveIndex(2)} className={`w-[167px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[3]} alt="Gallery" onClick={() => setActiveIndex(3)} className={`w-[167px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[4]} alt="Gallery" onClick={() => setActiveIndex(4)} className={`w-[167px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[5]} alt="Gallery" onClick={() => setActiveIndex(5)} className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[6]} alt="Gallery" onClick={() => setActiveIndex(6)} className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[7]} alt="Gallery" onClick={() => setActiveIndex(7)} className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[8]} alt="Gallery" onClick={() => setActiveIndex(8)} className={`w-[167px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src={images[9]} alt="Gallery" onClick={() => setActiveIndex(9)} className={`w-[167px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 text-white text-2xl z-50"
          >
            ✕
          </button>
          <div className="flex-1 flex items-center justify-center">
            <img src={images[activeIndex]} className="max-h-full max-w-full object-contain animate-scale-in" />
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev !== null ? (prev - 1 + images.length) % images.length : 0
                )
              }
              className="text-white text-3xl px-4"
            >
              ‹
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev !== null ? (prev + 1) % images.length : 0
                )
              }
              className="text-white text-3xl px-4"
            >
              ›
            </button>
          </div>
          <div className="w-full overflow-x-auto flex gap-2 px-4 py-3 bg-black/70">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-[60px] h-[60px] flex-shrink-0 overflow-hidden cursor-pointer border transition ${
                  i === activeIndex
                    ? 'border-white opacity-100'
                    : 'border-transparent opacity-50'
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}