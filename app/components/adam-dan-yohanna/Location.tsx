'use client'

import Link from 'next/link'
import { useInView } from '@/app/hooks/useInView'

export default function Location() {
  const { ref, isVisible } = useInView()

  return (
    <section id="location" className="location relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-[#B95F38] opacity-[0.90] mix-blend-multiply" />
      <img src="/images/adam-dan-yohanna/img-tl-location.png" className="absolute pointer-events-none top-[-55px] left-0 w-[269]" alt="" />
      <div className="relative z-10 flex flex-col items-center py-[73px] h-full text-[#FEFBF0] text-center">
        <h3 ref={ref} className={`font-cormorant font-bold text-2xl leading-[25px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          saturday, <br />
          02 may 2026
        </h3>
        <img src="/images/adam-dan-yohanna/tea-location-mobile.png" alt="Tea" className={`w-[190px] mt-[6px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
        <h3 ref={ref} className={`font-cormorant font-normal text-2xl leading-[32px] uppercase mt-[11px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          teapai
        </h3>
        <p ref={ref} className={`font-figtree font-medium text-xs leading-[12px] mt-[21px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          14.00 at The One
        </p>
        <img src="/images/adam-dan-yohanna/cincin-location-mobile.png" alt="Cincin" className={`w-[158px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
        <h3 ref={ref} className={`font-cormorant font-normal text-2xl leading-[32px] uppercase mt-[16px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          holy matrimony
        </h3>
        <p ref={ref} className={`font-figtree font-medium text-xs leading-[12px] mt-[21px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          15.30 WITA at The One
        </p>
        <img src="/images/adam-dan-yohanna/table-dinner-location-mobile.png" alt="Table Dinner" className={`w-[219px] mt-[32px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
        <h3 ref={ref} className={`font-cormorant font-normal text-2xl leading-[32px] uppercase mt-[11px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          dinner reception
        </h3>
        <p ref={ref} className={`font-figtree font-medium text-xs leading-[12px] mt-[21px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          18.00 WITA at The View
        </p>
        <p ref={ref} className={`font-figtree font-light text-xs leading-[12px] mt-[5px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Canapés & Cocktail Party at 17.00 WITA
        </p>
        <h3 ref={ref} className={`font-cormorant font-semibold text-2xl leading-[32px] uppercase mt-[34px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          the edge bali
        </h3>
        <p ref={ref} className={`font-figtree font-light text-xs leading-[16px] mt-[10px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Jl. Goa Lempeh, Pecatu, Bali
        </p>
        <Link href="https://maps.app.goo.gl/B9Z97vQr4nnv9o998" target="_blank" className={`bg-[#9B3A29] w-[160px] h-[29px] flex gap-2 items-center justify-center rounded-[5px] text-xs text-[#FEFBF0] uppercase mt-[24px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          <img src="/images/adam-dan-yohanna/icon-location.png" alt="Icon maps" className="w-[16px] h-[20px]" />
          <span>google maps</span>
        </Link>
      </div>
    </section>
  )
}