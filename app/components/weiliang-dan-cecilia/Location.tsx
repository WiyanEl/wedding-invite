'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Location({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-location-mobile.png" : "/images/weiliang-dan-cecillia/bg-location.png" : "/images/weiliang-dan-cecillia/bg-location-mobile.png"

  return (
    <>
      {isOpen ? (
        <section id="location" className="location relative w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-atas-location.png" alt="Tumbuhan Atas" width={414} height={120} className={`absolute w-full top-[-5px] left-0 animate`} data-animate="fade-down" />
          <Image src="/images/weiliang-dan-cecillia/img-alter-location.png" alt="Alter" width={380} height={270} className={`absolute bottom-[-20px] left-[15px] animate`} data-animate="fade-up" />
          <Image src="/images/weiliang-dan-cecillia/img-awan-bawah-kiri-location.png" alt="Awan Bawah Kiri Location" width={100} height={100} className={`absolute bottom-[25px] left-0 animate`} data-animate="fade-right" />
          <Image src="/images/weiliang-dan-cecillia/img-awan-kanan-bawah-location.png" alt="Awan Bawah Kanan Location" width={100} height={100} className={`absolute bottom-[35px] right-0 animate`} data-animate="fade-left" />
          <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-bawah-location.png" alt="Taman Bawah" width={100} height={100} className={`absolute w-full bottom-0 animate`} data-animate="fade-up" />
          <div className="flex flex-col items-center text-center h-full font-perpetua font-normal text-[#724232] pt-[135px] md:pt-[219px] pb-[248px] md:pb-[380px]">
            <h3 className="font-channe text-2xl leading-[26px] uppercase animate" data-animate="zoom-in">the wedding <br /> celebration</h3>
            <h6 className="text-lg leading-[32.22px] uppercase mt-[32px] md:mt-[28px] animate" data-animate="zoom-in">holy matrimony</h6>
            <p className="text-xs md:text-[14px] leading-[12px] mt-[16px] uppercase animate" data-animate="zoom-in">16:00 wita (gmt +8)</p>
            <h6 className="text-lg leading-[32.22px] uppercase mt-[23px] md:mt-[27px] animate" data-animate="zoom-in">CANAPÉ & COCKTAIL PARTY</h6>
            <p className="text-xs md:text-[14px] leading-[12px] mt-[17px] uppercase animate" data-animate="zoom-in">17:30 wita (gmt +8)</p>
            <p className="text-xs md:text-[14px] leading-[12px] mt-[5px] animate" data-animate="zoom-in">Followed by Dinner Reception</p>
            <p className="text-xs md:text-[14px] leading-[12px] mt-[48px] md:mt-[37px] animate" data-animate="zoom-in">Sky at Ayana Resort <br /> Jimbaran, Bali, Indonesia</p>
            <Link href="https://maps.app.goo.gl/2q8gV8FJZeQ7LuCi7" target="_blank" className="flex items-center justify-center bg-[#AB6A7C] hover:bg-[#F9D6D6] w-[160px] py-[10px] font-perpetua font-normal text-xs leading-none text-[#F9D6D6] hover:text-[#AB6A7C] uppercase mt-[20px] md:mt-[25px] animate" data-animate="zoom-in">
              goggle maps
            </Link>
          </div>
        </section>
      ) : null}
    </>
  )
}