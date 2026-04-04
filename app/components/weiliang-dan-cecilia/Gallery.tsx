'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Gallery({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-gallery-mobile.png" : "/images/weiliang-dan-cecillia/bg-gallery.png" : "/images/weiliang-dan-cecillia/bg-gallery-mobile.png"
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const images = [
    '/images/weiliang-dan-cecillia/img-gallery-1.png',
    '/images/weiliang-dan-cecillia/img-gallery-2.png',
    '/images/weiliang-dan-cecillia/img-gallery-3.png',
    '/images/weiliang-dan-cecillia/img-gallery-4.png',
    '/images/weiliang-dan-cecillia/img-gallery-5.png',
    '/images/weiliang-dan-cecillia/img-gallery-6.png',
    '/images/weiliang-dan-cecillia/img-gallery-7.png',
    '/images/weiliang-dan-cecillia/img-gallery-8.png',
  ]

  return (
    <>
      {isOpen ? (
        <>
          <section id="gallery" className="gallery relative w-full bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
            <div className="relative overflow-hidden">
              <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-atas-gallery.png" alt="Tumbuhan Atas" width={414} height={294} className={`absolute w-full top-[-120px] left-0 animate`} data-animate="fade-down" />
              <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-kanan-atas-gallery.png" alt="Tumbuhan Kanan Atas" width={93} height={151} className={`absolute w-[67px] top-[77px] right-0 animate`} data-animate="fade-left" />
              <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-kiri-gallery.png" alt="Tumbuhan Kiri" width={242} height={420} className={`absolute w-[142px] bottom-[67px] left-0 animate`} data-animate="fade-right" />
              <Image src="/images/weiliang-dan-cecillia/img-alter-gallery.png" alt="Tumbuhan Kiri" width={330} height={235} className={`absolute w-[230px] bottom-[-15px] right-0 animate`} data-animate="fade-left" />
              <div className="flex flex-col items-center text-center h-full pt-[126px] pb-[352px]">
                <h3 className="font-channe text-2xl leading-[26px] text-[#724232] uppercase animate" data-animate="zoom-in">our moments</h3>
                <Image src="/images/weiliang-dan-cecillia/img-gallery-1.png" alt="Gambar Gallery" width={100} height={100} className="mt-[38px] w-[340px] h-[180px] animate" data-animate="fade-up" onClick={() => setActiveIndex(0)} />
                <div className="w-[340px] flex gap-[7px] mt-[7px]">
                  <Image src="/images/weiliang-dan-cecillia/img-gallery-2.png" alt="Gambar Gallery" width={100} height={100} className="w-[103px] h-[113px] animate" data-animate="fade-right" onClick={() => setActiveIndex(1)} />
                  <Image src="/images/weiliang-dan-cecillia/img-gallery-3.png" alt="Gambar Gallery" width={100} height={100} className="w-[104px] h-[113px] animate" data-animate="fade-up" onClick={() => setActiveIndex(2)} />
                  <Image src="/images/weiliang-dan-cecillia/img-gallery-4.png" alt="Gambar Gallery" width={100} height={100} className="w-[119px] h-[113px] animate" data-animate="fade-left" onClick={() => setActiveIndex(3)} />
                </div>
                <div className="w-[340px] flex gap-[7px] mt-[7px]">
                  <Image src="/images/weiliang-dan-cecillia/img-gallery-5.png" alt="Gambar Gallery" width={100} height={100} className="w-[243px] h-[153px] animate" data-animate="fade-right" onClick={() => setActiveIndex(4)} />
                  <Image src="/images/weiliang-dan-cecillia/img-gallery-6.png" alt="Gambar Gallery" width={100} height={100} className="w-[90px] h-[153px] animate" data-animate="fade-left" onClick={() => setActiveIndex(5)} />
                </div>
                <div className="w-[340px] flex gap-[7px] mt-[7px]">
                  <Image src="/images/weiliang-dan-cecillia/img-gallery-7.png" alt="Gambar Gallery" width={100} height={100} className="w-[160px] h-[153px] animate" data-animate="fade-right" onClick={() => setActiveIndex(6)} />
                  <Image src="/images/weiliang-dan-cecillia/img-gallery-8.png" alt="Gambar Gallery" width={100} height={100} className="w-[173px] h-[153px] animate" data-animate="fade-left" onClick={() => setActiveIndex(7)} />
                </div>
              </div>
            </div>
            <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-bawah-gallery.png" alt="Tumbuhan Bawah" width={477} height={158} className={`absolute z-10 w-full bottom-[-110px] right-0 animate`} data-animate="fade-up" />
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
      ) : null}
    </>
  )
}