'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Dresscode({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-dresscode-mobile.png" : "/images/weiliang-dan-cecillia/bg-dresscode.png" : "/images/weiliang-dan-cecillia/bg-dresscode-mobile.png"

  return (
    <>
      {isOpen ? (
        <section id="dresscode" className="dresscode relative w-full bg-cover bg-center mt-[-10px] md:mt-[-40px]" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="relative overflow-hidden">
            <Image src="/images/weiliang-dan-cecillia/img-tanaman-kanan-dresscode.png" alt="Tumbuhan Kanan" width={100} height={100} className={`absolute w-[156px] top-[46px] md:top-[207px] right-0 animate`} data-animate="fade-left" />
            <Image src="/images/weiliang-dan-cecillia/img-tanaman-kiri-dresscode.png" alt="Tumbuhan Kiri" width={100} height={100} className={`absolute w-[126px] top-[77px] md:top-[257px] left-0 animate`} data-animate="fade-right" />
            <Image src="/images/weiliang-dan-cecillia/img-gapura-dresscode.png" alt="Gapura" width={100} height={100} className={`absolute w-[205px] bottom-[15px] right-0 animate`} data-animate="fade-left" />
            <Image src="/images/weiliang-dan-cecillia/img-pengantin-dress.png" alt="Pengantin" width={176} height={125} className={`absolute w-[176px] bottom-0 md:bottom-0 left-[23px] animate`} data-animate="fade-right-pengantin" style={{ animationDelay: '1s' }} />
            <Image src="/images/weiliang-dan-cecillia/img-air-mancur-dresscode.png" alt="Air Mancur" width={245} height={174} className={`absolute w-[78px] bottom-[-10px] left-0 animate`} data-animate="fade-right" />
            <div className="flex flex-col items-center text-center h-full pt-[178px] md:pt-[252px] pb-[334px] md:pb-[431] font-normal">
              <h3 className="font-channe text-2xl leading-[26px] text-[#724232] uppercase animate" data-animate="zoom-in">dress code</h3>
              <h6 className="font-perpetua text-xs md:text-[14px] leading-[16px] text-[#724232] mt-[34px] animate" data-animate="zoom-in">
                Attire in colors from the suggested palette <br /> is greatly appreciated.
              </h6>
              <Image src="/images/weiliang-dan-cecillia/img-color-dresscode.png" alt="Gambar Theme Dresscode" width={279} height={78} className="mt-[27px] animate" data-animate="zoom-in" />
            </div>
          </div>
          <Image src="/images/weiliang-dan-cecillia/img-tanaman-bawah-dresscode.png" alt="Tumbuhan Bawah" width={455} height={324} className={`absolute z-10 w-full bottom-[-160px] right-0 animate`} data-animate="fade-up" />
        </section>
      ) : null}
    </>
  )
}