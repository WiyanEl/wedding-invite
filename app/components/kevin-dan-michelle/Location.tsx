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
      <div id="location" className="relative z-10 w-full min-h-screen">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorant text-[#DFD28F] pt-[150px]">
          <h2 className="font-milyuna text-2xl leading-[25px] animate" data-animate="zoom-in">Time & Location</h2>
          <Image src="/images/kevin-dan-michelle/img-garis-judul-mobile.png" alt="Picture of garis judul" width={109} height={10} className="mt-1 mx-auto animate" data-animate="zoom-in" />

          <h4 className="text-xl leading-[18px] mt-[37px] animate" data-animate="fade-up">Holy Matrimony</h4>
          <p className="text-base leading-[25px] uppercase mt-4 animate" data-animate="fade-up">11.00 wib</p>
          <p className="text-[14px] leading-[20px] uppercase mt-4 animate" data-animate="fade-up">Kapel Abipraya Kota Baru <br /> Parahyangan</p>
          <p className="text-[14px] leading-[18px] mt-3 animate" data-animate="fade-up">Parahyangan St, Kertajaya, Padalarang, <br /> West Bandung Regency</p>
          <Link href="https://maps.app.goo.gl/TJX8AgM9pxE7wVWYA" target="_blank" className="relative z-50 flex items-center justify-center w-[160px] h-[33px] bg-[#CDA96A] rounded-[6px] text-[14px] leading-[17.16px] text-white uppercase mt-3 mx-auto animate" data-animate="zoom-in">
            Google Maps
          </Link>

          <Image src="/images/kevin-dan-michelle/img-dot-mobile.png" alt="Picture of titik tengah" width={12} height={12} className="mt-[60px] mx-auto animate" data-animate="zoom-in" />

          <h4 className="text-xl leading-[18px] mt-[60px] animate" data-animate="fade-up">Dinner Reception</h4>
          <p className="text-base leading-[25px] uppercase mt-4 animate" data-animate="fade-up">18.00 wib</p>
          <p className="text-[14px] leading-[20px] uppercase mt-4 animate" data-animate="fade-up"> Pullman Hotel Grand ballroom</p>
          <p className="text-[14px] leading-[18px] mt-3 animate" data-animate="fade-up">Jl. Diponegoro No.27, Citarum, <br /> Kec. Bandung Wetan, Kota Bandung</p>
          <Link href="https://maps.app.goo.gl/TVaxFoJTkMpHS7EV8" target="_blank" className="relative z-50 flex items-center justify-center w-[160px] h-[33px] bg-[#CDA96A] rounded-[6px] text-[14px] leading-[17.16px] text-white uppercase mt-3 mx-auto animate" data-animate="zoom-in">
            Google Maps
          </Link>
        </div>

        {/* Image Absolute */}
        <Image src="/images/kevin-dan-michelle/img-bintang-atas-location-mobile.png" alt="Picture of Bintang atas" width={514} height={514} className="absolute -top-[415px] left-0" />
        <Image src="/images/kevin-dan-michelle/img-bunga-kiri-atas-location-mobile.png" alt="Picture of Bunga kiri atas" width={234} height={234} className="absolute -top-[50px] left-0 w-[168px]" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-location-mobile.png" alt="Picture of Tanaman kanan" width={199} height={199} className="absolute top-[400px] right-0 w-[168px]" />
      </div>
    </>
  )
}