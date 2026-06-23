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
      <section id="location" className="relative z-10 w-full min-h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[817px] bg-[url('/images/steven-dan-bella/bg-location-mobile.png')] bg-no-repeat bg-cover bg-top" />
        <div className="absolute inset-0 bg-[#D9D9D96B]" />
        <div className="relative z-10 text-center h-full pt-[115px] pb-[180px] font-century text-[#3C475E] overflow-hidden">
          <h2 className="font-constantia text-2xl font-normal leading-[111.00000000000001%] uppercase animate" data-animate="zoom-in">event order</h2>
          <Image src="/images/steven-dan-bella/img-line-title.png" alt="Picture of Garis Bawah Judul" width={155} height={21} className="mx-auto mt-2 animate" data-animate="zoom-in" />

          <Image src="/images/steven-dan-bella/img-holy-matrimony.png" alt="Picture of Holy Matrimony" width={212} height={265} className="mx-auto mt-4 animate" data-animate="zoom-in" />
          <h3 className="text-base font-normal leading-[18px] uppercase mt-[25px] animate" data-animate="zoom-in">holy matrimony</h3>
          <h6 className="text-base font-normal leading-[18px] uppercase mt-[27px] animate" data-animate="zoom-in">10.00 am</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-6 animate" data-animate="zoom-in">GRII Bandung</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-2 animate" data-animate="zoom-in">Jl. Moch. Toha No.229, Bandung</h6>
          <Link href="https://maps.app.goo.gl/R7LDN6J6yBN5Fd6v8" target="_blank" className="inline-block font-ovo text-[13px] leading-[17.16px] underline underline-offset-2 mt-[33px] animate" data-animate="zoom-in">
            Google Maps
          </Link>

          <Image src="/images/steven-dan-bella/img-dot.png" alt="Picture of Titik Hitam" width={12} height={12} className="mx-auto mt-[63px] animate" data-animate="zoom-in" />

          <Image src="/images/steven-dan-bella/img-tea-ceremony.png" alt="Picture of Tea Ceremony" width={262} height={327} className="mx-auto -mt-10 z-10 relative animate" data-animate="zoom-in" />
          <h3 className="text-base font-normal leading-[18px] uppercase mt-[25px] animate" data-animate="zoom-in">tea ceremony</h3>
          <h6 className="text-base font-normal leading-[18px] uppercase mt-[27px] animate" data-animate="zoom-in">15.00 pm</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-6 animate" data-animate="zoom-in">Janu Chapel</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-0.5 animate" data-animate="zoom-in">Mahia Resort</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-2 animate" data-animate="zoom-in">Jl. Ciwaruga No.30, Bandung</h6>
          <Link href="https://maps.app.goo.gl/wH1CTg8bGano7tsa7" target="_blank" className="inline-block font-ovo text-[13px] leading-[17.16px] underline underline-offset-2 mt-[33px] animate" data-animate="zoom-in">
            Google Maps
          </Link>

          <h3 className="text-base font-normal leading-[18px] uppercase mt-[56px] animate" data-animate="zoom-in">afternoon tea</h3>
          <h6 className="text-base font-normal leading-[18px] uppercase mt-[27px] animate" data-animate="zoom-in">16.30 pm</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-6 animate" data-animate="zoom-in">Janu Chapel</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-0.5 animate" data-animate="zoom-in">Mahia Resort</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-2 animate" data-animate="zoom-in">Jl. Ciwaruga No.30, Bandung</h6>
          <Link href="https://maps.app.goo.gl/wH1CTg8bGano7tsa7" target="_blank" className="inline-block font-ovo text-[13px] leading-[17.16px] underline underline-offset-2 mt-[33px] animate" data-animate="zoom-in">
            Google Maps
          </Link>

          <h3 className="text-base font-normal leading-[18px] uppercase mt-[56px] animate" data-animate="zoom-in">wedding banquet</h3>
          <h6 className="text-base font-normal leading-[18px] uppercase mt-[27px] animate" data-animate="zoom-in">18.00 pm</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-6 animate" data-animate="zoom-in">Janu Ballroom</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-0.5 animate" data-animate="zoom-in">Mahia Resort</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-2 animate" data-animate="zoom-in">Jl. Ciwaruga No.30, Bandung</h6>
          <Link href="https://maps.app.goo.gl/wH1CTg8bGano7tsa7" target="_blank" className="inline-block font-ovo text-[13px] leading-[17.16px] underline underline-offset-2 mt-[33px] animate" data-animate="zoom-in">
            Google Maps
          </Link>

          <h3 className="text-base font-normal leading-[18px] uppercase mt-[56px] animate" data-animate="zoom-in">after party</h3>
          <h6 className="text-base font-normal leading-[18px] uppercase mt-[27px] animate" data-animate="zoom-in">22.00 pm</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-6 animate" data-animate="zoom-in">Janu Ballroom</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-0.5 animate" data-animate="zoom-in">Mahia Resort</h6>
          <h6 className="text-[14px] font-normal leading-[18px] mt-2 animate" data-animate="zoom-in">Jl. Ciwaruga No.30, Bandung</h6>
          <Link href="https://maps.app.goo.gl/wH1CTg8bGano7tsa7" target="_blank" className="inline-block font-ovo text-[13px] leading-[17.16px] underline underline-offset-2 mt-[33px] animate" data-animate="zoom-in">
            Google Maps
          </Link>
        </div>

        {/* Image Absolute */}
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-atas-location.png" alt="Picture of Tanaman Kiri Atas Location" width={176} height={164} className="absolute -top-[50px] left-0 w-[156px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-atas-location.png" alt="Picture of Tanaman Kanan Atas Location" width={176} height={164} className="absolute -top-[50px] right-0 w-[156px] animate" data-animate="fade-left" />

        <Image src="/images/steven-dan-bella/img-tanaman-kanan-bawah-location.png" alt="Picture of Tanaman Bawah Kanan Location" width={263} height={509} className="absolute -bottom-[75px] right-0 w-[130px] animate" data-animate="fade-left" />
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-bawah-location.png" alt="Picture of Tanaman Bawah Kiri Location" width={263} height={509} className="absolute -bottom-[75px] left-0 w-[130px] animate" data-animate="fade-right" />

        {/* Gif */}
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-2.gif" alt="Animasi Kupu-kupu" width={42} height={42} className="absolute bottom-[310px] left-[33px] animate" data-animate="fade-right-butterfly" />
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={51} height={51} className="absolute bottom-[327px] right-[33px] animate" data-animate="fade-left-butterfly" />
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={51} height={51} className="absolute bottom-[67px] right-[64px] animate" data-animate="fade-left-butterfly" />
      </section>
    </>
  )
}