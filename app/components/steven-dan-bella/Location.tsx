'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Location({ isOpen, isMobile }: Props) {
  return (
    <>
      <section id="location" className="relative z-10 w-full min-h-screen overflow-hidden bg-[url('/images/steven-dan-bella/bg-location-mobile.png')] md:bg-[url('/images/steven-dan-bella/bg-location.png')] bg-cover bg-top bg-no-repeat bg-fixed">
        <div className=" md:hidden absolute inset-0 bg-[#D9D9D96B]" />
        <div className="relative z-10 text-center h-full pt-[115px] md:pt-[176px] pb-[180px] md:pb-[260px] font-century text-[#3C475E] overflow-hidden">
          <h2 className="font-constantia text-2xl md:text-[48px] font-normal leading-[111.00000000000001%] uppercase animate" data-animate="zoom-in">event order</h2>
          <Image src="/images/steven-dan-bella/img-line-title.png" alt="Picture of Garis Bawah Judul" width={276} height={32} className="w-[155px] h-[21px] md:w-[276px] md:h-[32px] mx-auto mt-2 md:mt-4 animate" data-animate="zoom-in" />

          <h3 className="text-base md:text-2xl font-bold leading-[18px] md:leading-[18px] uppercase mt-[44px] md:mt-[62px] animate" data-animate="zoom-in">holy matrimony</h3>
          <h6 className="text-base md:text-xl font-normal leading-[18px] md:leading-[18px] uppercase mt-[17px] md:mt-[36px] animate" data-animate="zoom-in">10.00 am</h6>
          <h6 className="text-base md:text-xl font-normal leading-[18px] md:leading-[18px] mt-[17px] md:mt-[36px] animate" data-animate="zoom-in">at John Calvin Chapel</h6>
          <h6 className="text-base md:text-xl font-normal leading-[18px] md:leading-[18px] mt-[17px] md:mt-[36px] animate" data-animate="zoom-in">Followed by Lunch</h6>


          <Image src="/images/steven-dan-bella/img-holy-matrimony.png" alt="Picture of Holy Matrimony" width={292} height={365} className="w-[212px] h-[265px] md:w-[292px] md:h-[365px] mx-auto mt-4 md:mt-6 animate" data-animate="zoom-in" />

          <h6 className="text-base md:text-2xl font-normal leading-[18px] md:leading-[25px] mt-[17px] md:mt-[18px] animate" data-animate="zoom-in">GRII Bandung</h6>
          <h6 className="text-base md:text-2xl font-normal leading-[18px] md:leading-[25px] mt-2 md:mt-3 animate" data-animate="zoom-in">Jl. Moch. Toha No.229, Bandung</h6>
          <Link href="https://maps.app.goo.gl/R7LDN6J6yBN5Fd6v8" target="_blank" className="inline-block font-ovo text-[13px] md:text-lg leading-[17.16px] underline underline-offset-2 mt-[11px] md:mt-[47px] animate" data-animate="zoom-in">
            Google Maps
          </Link>

          <Image src="/images/steven-dan-bella/img-flower-tea-ceremony.png" alt="Picture of Holy Matrimony" width={292} height={365} className="w-[138px] h-[90px] md:w-[292px] md:h-[365px] mx-auto mt-[46px] md:mt-6 animate" data-animate="zoom-in" />

          <h3 className="text-base md:text-2xl font-bold leading-[18px] md:leading-[18px] uppercase mt-[44px] md:mt-[62px] animate" data-animate="zoom-in">tea ceremony</h3>
          <h6 className="text-base md:text-xl font-normal leading-[18px] md:leading-[18px] uppercase mt-[27px] md:mt-[36px] animate" data-animate="zoom-in">15.00 pm</h6>
          <h6 className="text-base md:text-2xl font-normal leading-[18px] md:leading-[18px] uppercase mt-6 md:mt-[36px] animate" data-animate="zoom-in">at Janu Chapel</h6>

          <Image src="/images/steven-dan-bella/img-dot.png" alt="Picture of Titik Hitam" width={15} height={15} className="w-[15px] md:w-[15px] mx-auto mt-[44px] md:mt-[63px] animate" data-animate="zoom-in" />

          <h3 className="text-base md:text-2xl font-bold leading-[18px] uppercase mt-[44px] md:mt-[63px] animate" data-animate="zoom-in">afternoon tea & <br /> dinner reception</h3>
          <h6 className="text-base md:text-xl font-normal leading-[18px] uppercase mt-[27px] md:mt-[36px] animate" data-animate="zoom-in">16.30 pm</h6>
          <h6 className="text-base md:text-xl font-normal leading-[18px] mt-6 animate" data-animate="zoom-in">at Janu Ballroom</h6>

          <Image src="/images/steven-dan-bella/img-dot.png" alt="Picture of Titik Hitam" width={15} height={15} className="w-[12px] md:w-[15px] mx-auto mt-[44px] md:mt-[63px] animate" data-animate="zoom-in" />

          <h3 className="text-base md:text-2xl font-normal leading-[18px] uppercase mt-[44px] md:mt-[63px] animate" data-animate="zoom-in">after party</h3>
          <h6 className="text-base md:text-xl font-normal leading-[18px] uppercase mt-[27px] md:mt-[36px] animate" data-animate="zoom-in">22.00 pm</h6>
          <h6 className="text-base md:text-xl font-normal leading-[18px] mt-6 animate" data-animate="zoom-in">at Janu Terrace</h6>

          <Image src="/images/steven-dan-bella/img-tea-ceremony.png" alt="Picture of Tea Ceremony" width={378} height={453} className="w-[262px] h-[327px] md:w-[378px] md:h-[453px] mx-auto -mt-10 md:mt-0 z-10 relative animate" data-animate="zoom-in" />

          <h6 className="text-base md:text-2xl font-normal leading-[18px] md:leading-[25px] mt-[17px] md:mt-[28px] animate" data-animate="zoom-in">Mahia Resort</h6>
          <h6 className="text-base md:text-2xl font-normal leading-[18px] md:leading-[25px] mt-2 md:mt-3 animate" data-animate="zoom-in">Jl. Ciwaruga No.30, Bandung</h6>
          <Link href="https://maps.app.goo.gl/wH1CTg8bGano7tsa7" target="_blank" className="inline-block font-ovo text-[13px] md:text-lg leading-[17.16px] underline underline-offset-2 mt-[11px] md:mt-[47px] animate" data-animate="zoom-in">
            Google Maps
          </Link>
        </div>

        {/* Image Absolute */}
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-atas-location.png" alt="Picture of Tanaman Kiri Atas Location" width={435} height={406} className="absolute -top-[50px] md:-top-[75px] left-0 w-[156px] md:w-[306px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-atas-location.png" alt="Picture of Tanaman Kanan Atas Location" width={435} height={406} className="absolute -top-[50px] md:-top-[75px] right-0 w-[156px] md:w-[306px] animate" data-animate="fade-left" />

        <Image src="/images/steven-dan-bella/img-tanaman-kanan-bawah-location-rev-1.png" alt="Picture of Tanaman Bawah Kanan Location" width={506} height={1041} className="absolute -bottom-[75px] md:-bottom-[150px] right-0 w-[130px] md:w-[263px] animate" data-animate="fade-left" />
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-bawah-location-rev.png" alt="Picture of Tanaman Bawah Kiri Location" width={506} height={1041} className="absolute -bottom-[75px] md:-bottom-[150px] left-0 w-[130px] md:w-[263px] animate" data-animate="fade-right" />

        {/* Gif */}
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-2.gif" alt="Animasi Kupu-kupu" width={145} height={145} className="w-[42px] md:w-[105px] h-[42px] md:h-[105px] absolute bottom-[260px] md:bottom-[550px] left-[33px] md:left-[73px] animate" data-animate="fade-right-butterfly" />
        <div className="w-[51px] md:w-[121px] h-[51px] md:h-[121px] absolute bottom-[287px] md:bottom-[627px] right-[22px] -rotate-45">
          <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={151} height={151} className="animate" data-animate="fade-left-butterfly" />
        </div>
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={151} height={151} className="w-[51px] md:w-[121px] h-[51px] md:h-[121px] absolute bottom-[57px] md:bottom-[107px] right-[74px] md:right-[94px] animate" data-animate="fade-left-butterfly" />
      </section>
    </>
  )
}