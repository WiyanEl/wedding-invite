'use client'

import Link from 'next/link'
import { useInView } from '@/app/hooks/useInView'

export default function Location() {
  const { ref, isVisible } = useInView()

  return (
    <section id="location" className="location relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center h-full py-[120px] font-outfit font-normal text-[#FFFFFF] text-center" ref={ref}>
        <h3 className={`font-canela font-thin text-2xl leading-[25px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          saturday, <br />
          02 may 2026
        </h3>
        <h3 className={`font-canela font-thin italic text-2xl leading-[25px] mt-[100px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Holy Matrimony
        </h3>
        <p className={`font-medium text-xs leading-[18px] mt-6 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          12.30 WIB <br />
          Gereja Katolik Katedral St. Petrus
        </p>
        <p className={`text-xs leading-[18px] mt-5 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Jl. Merdeka No.14,
        </p>
        <Link href="https://maps.app.goo.gl/dMwDJQinAL1TNmXu5" target="_blank" className={`flex items-center justify-center w-[160px] h-[30px] bg-[#FFFFFF17] hover:bg-[#9B3A29] mt-5 text-xs font-medium text-[#FEFBF0] leading-[17.26px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          google maps
        </Link>
        <img src="/images/cornel-dan-tiara/icon-dot.png" alt="Icon dot" className={`w-[12px] mt-[65px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
        <h3 className={`font-canela font-thin italic text-2xl leading-[25px] mt-[65px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Reception
        </h3>
        <p className={`font-medium text-xs leading-[18px] mt-[25px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          18.00 WIB <br />
          Royal Dynasty Restaurant, 2nd Floor
        </p>
        <p className={`text-xs leading-[18px] mt-[19px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Jl. Jend. Sudirman No.232A, Bandung
        </p>
        <Link href="https://maps.app.goo.gl/F384zTLVA8bEhr138" target="_blank" className={`flex items-center justify-center w-[160px] h-[30px] bg-[#FFFFFF17] hover:bg-[#9B3A29] mt-5  text-xs font-medium text-[#FEFBF0] leading-[17.26px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          google maps
        </Link>
      </div>
    </section>
  )
}