'use client'

import Link from 'next/link'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Location({ isOpen, isMobile }: Props) {
  return (
    <>
      {isOpen ? (
        <section id="location" className="location relative w-full min-h-min bg-cover bg-center">
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center h-full py-[120px] md:pb-[165px] font-outfit font-normal text-[#FFFFFF] text-center">
            <h3 className="font-canela font-thin text-2xl leading-[25px] uppercase animate" data-animate="zoom-in">
              saturday, <br />
              02 may 2026
            </h3>
            <h3 className="font-canela font-thin italic text-2xl leading-[25px] mt-[100px] animate" data-animate="zoom-in">
              Holy Matrimony
            </h3>
            <p className="font-medium text-xs leading-[18px] mt-6 animate" data-animate="zoom-in">
              12.30 WIB <br />
              Gereja Katolik Katedral St. Petrus
            </p>
            <p className="text-xs leading-[18px] mt-5 animate" data-animate="zoom-in">
              Jl. Merdeka No.14,
            </p>
            <span className="animate" data-animate="zoom-in">
              <Link href="https://maps.app.goo.gl/dMwDJQinAL1TNmXu5" target="_blank" className="flex items-center justify-center w-[160px] h-[30px] bg-[#FFFFFF17] hover:bg-[#9B3A29] mt-5 text-xs font-medium text-[#FEFBF0] leading-[17.26px] uppercase">
                google maps
              </Link>
            </span>
            <img src="/images/cornel-dan-tiara/icon-dot.png" alt="Icon dot" className="w-[12px] mt-[65px]" data-animate="zoom-in" />
            <h3 className="font-canela font-thin italic text-2xl leading-[25px] mt-[65px] animate" data-animate="zoom-in">
              Reception
            </h3>
            <p className="font-medium text-xs leading-[18px] mt-[25px] animate" data-animate="zoom-in">
              18.00 WIB <br />
              Royal Dynasty Restaurant, 2nd Floor
            </p>
            <p className="text-xs leading-[18px] mt-[19px] animate" data-animate="zoom-in">
              Jl. Jend. Sudirman No.232A, Bandung
            </p>
            <span className="animate" data-animate="zoom-in">
              <Link href="https://maps.app.goo.gl/F384zTLVA8bEhr138" target="_blank" className="flex items-center justify-center w-[160px] h-[30px] bg-[#FFFFFF17] hover:bg-[#9B3A29] mt-5  text-xs font-medium text-[#FEFBF0] leading-[17.26px] uppercase">
                google maps
              </Link>
            </span>
          </div>
        </section>
      ) : null}
    </>
  )
}