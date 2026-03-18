'use client'

import Link from 'next/link'

export default function Location() {
  return (
    <section id="location" className="location relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-[#B95F38] opacity-[0.90] mix-blend-multiply" />
      <img src="/images/adam-dan-yohanna/img-tl-location.png" className="absolute pointer-events-none top-[-55px] left-0 w-[269]" alt="" />
      <div className="relative z-10 flex flex-col items-center py-[73px] h-full text-[#FEFBF0] text-center">
        <h3 className="font-cormorant font-bold text-2xl leading-[25px] uppercase animate-fade-up">
          saturday, <br />
          02 may 2026
        </h3>
        <img src="/images/adam-dan-yohanna/tea-location-mobile.png" alt="Tea" className="w-[190px] mt-[6px] animate-fade-up" />
        <h3 className="font-cormorant font-normal text-2xl leading-[32px] uppercase mt-[11px] animate-fade-up">
          teapai
        </h3>
        <p className="font-figtree font-medium text-xs leading-[12px] mt-[21px] animate-fade-up">
          14.00 at The One
        </p>
        <img src="/images/adam-dan-yohanna/cincin-location-mobile.png" alt="Cincin" className="w-[158px] animate-fade-up" />
        <h3 className="font-cormorant font-normal text-2xl leading-[32px] uppercase mt-[16px] animate-fade-up">
          holy matrimony
        </h3>
        <p className="font-figtree font-medium text-xs leading-[12px] mt-[21px] animate-fade-up">
          15.30 WITA at The One
        </p>
        <img src="/images/adam-dan-yohanna/table-dinner-location-mobile.png" alt="Table Dinner" className="w-[219px] mt-[32px] animate-fade-up" />
        <h3 className="font-cormorant font-normal text-2xl leading-[32px] uppercase mt-[11px] animate-fade-up">
          dinner reception
        </h3>
        <p className="font-figtree font-medium text-xs leading-[12px] mt-[21px] animate-fade-up">
          18.00 WITA at The View
        </p>
        <p className="font-figtree font-light text-xs leading-[12px] mt-[5px] animate-fade-up">
          Canapés & Cocktail Party at 17.00 WITA
        </p>
        <h3 className="font-cormorant font-semibold text-2xl leading-[32px] uppercase mt-[34px] animate-fade-up">
          dinner reception
        </h3>
        <p className="font-figtree font-light text-xs leading-[16px] mt-[10px] animate-fade-up">
          Jl. Goa Lempeh, Pecatu, Bali
        </p>
        <Link href="https://maps.app.goo.gl/B9Z97vQr4nnv9o998" target="_blank" className="bg-[#9B3A29] w-[160px] h-[29px] flex gap-2 items-center justify-center rounded-[5px] text-xs text-[#FEFBF0] uppercase mt-[24px] animate-fade-up">
          <img src="/images/adam-dan-yohanna/icon-location.png" alt="Icon maps" className="w-[16px] h-[20px]" />
          <span>google maps</span>
        </Link>
      </div>
    </section>
  )
}