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
      <section id="location" className="location relative z-10 w-full min-h-screen bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
        <div className="relative z-10 text-center h-full pt-[164.7px] md:pt-[253px] pb-[124.63px] md:pb-[358px] font-sorts text-[#22352F] overflow-hidden">
          <h6 className="text-xs md:text-lg font-medium leading-[25px] uppercase animate" data-animate="fade-up">save the date</h6>
          <h3 className="font-romantic text-[32px] md:text-[48px] font-normal leading-[111.00000000000001%] mt-[19px] md:mt-[31px] animate" data-animate="fade-up">Time & Location</h3>
          <Image src="/images/josiah-dan-stevie/img-imah-seniman.png" alt="Picture of Imah Seniman" width={552} height={368} className="mx-auto mt-[19px] md:mt-[8px] w-[311px] md:w-[552px] animate" data-animate="zoom-in" />
          <h4 className="text-base md:text-2xl font-medium leading-none uppercase mt-[7px] animate" data-animate="fade-up">imah seniman</h4>
          <p className="text-xs md:text-lg font-medium leading-none md:leading-[30px] mt-[13.58px] md:mt-[19px] animate" data-animate="fade-up">Jl. Kolonel Masturi No. VIII, Lembang,</p>
          <p className="text-xs md:text-lg font-medium leading-none md:leading-[30px] mt-1 animate" data-animate="fade-up">Kab. Bandung Barat, Jawa Barat, Indonesia</p>
          <Link href="https://maps.app.goo.gl/E22iakUisA3eNeMp8" target="_blank" className="inline-flex items-center justify-center w-[160px] md:w-[220px] h-[33px] md:h-[40px] rounded-[44px] bg-[#22352F] text-xs md:text-lg font-medium leading-[17.16px] uppercase text-[#FEF8EF] mt-[28.2px] md:mt-[52px] pt-1 animate" data-animate="fade-up">
            <span className="inline-block m-auto">google maps</span>
          </Link>
          <div className="relative w-[310px] md:w-[610px] mx-auto mt-[22px]">
            <div className="flex gap-8 w-full">
              <div className="pt-[36px] text-right w-[77px] md:w-[317px]">
                <h6 className="text-base md:text-lg font-medium leading-none uppercase animate" data-animate="fade-right">16.00 wib</h6>
                <h6 className="text-base md:text-lg font-medium leading-none uppercase mt-[92.75px] md:mt-[94px] animate" data-animate="fade-right">17.00 wib</h6>
              </div>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1 w-[1.5px] h-[275px] md:h-[295px] bg-[linear-gradient(180deg,rgba(34,53,47,0)_0%,#22352F_20%,#22352F_80%,rgba(34,53,47,0)_100%)]" />
                <div className="w-[9px] h-[9px] bg-[#22352F] rounded-full mt-[36px] md:mt-[46px]"></div>
                <div className="w-[9px] h-[9px] bg-[#22352F] rounded-full mt-[112px]"></div>
              </div>
              <div className="text-left pt-[36px]">
                <div>
                  <h6 className="text-base md:text-2xl font-medium leading-none animate" data-animate="fade-left">Tea Ceremony</h6>
                  <h6 className="text-[14px] md:text-[20px] font-medium leading-none mt-2.5 animate" data-animate="fade-left">at Manten Ballroom,</h6>
                  <h6 className="text-xs md:text-lg font-medium leading-none animate" data-animate="fade-left">Imah Seniman</h6>
                </div>
                <div className="mt-[53px] md:mt-[33px]">
                  <h6 className="md:hidden text-base font-medium leading-none animate" data-animate="fade-left">Afternoon Tea</h6>
                  <h6 className="md:hidden text-base font-medium leading-none mt-1 animate" data-animate="fade-left">followed by Reception</h6>
                  <h6 className="hidden md:block text-base md:text-2xl font-medium leading-none mt-1 animate" data-animate="fade-left">Afternoon Tea followed by Reception</h6>
                  <h6 className="text-[14px] md:text-[20px] font-medium leading-none mt-[19.33px] animate" data-animate="fade-left">at Manten Ballroom,</h6>
                  <h6 className="text-xs md:text-lg font-medium leading-none animate" data-animate="fade-left">Imah Seniman</h6>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-base md:text-2xl font-medium leading-[25px] md:leading-none uppercase mt-[96px] animate" data-animate="fade-up">shuttle</h6>
            <p className="text-xs md:text-lg font-medium leading-none md:leading-[43px] mt-[19px] md:mt-[20px] animate" data-animate="fade-up">Shuttle service will be provided from Gaia Hotel to</p>
            <p className="text-xs md:text-lg font-medium leading-none md:leading-[43px] mt-2 md:mt-0 animate" data-animate="fade-up">Imah Seniman at 16:30 WIB.</p>
            <p className="text-xs md:text-lg font-medium leading-none md:leading-[43px] mt-[19px] md:mt-[20px] animate" data-animate="fade-up">Guests who require the shuttle service are kindly </p>
            <p className="text-xs md:text-lg font-medium leading-none md:leading-[43px] mt-2 md:mt-0 animate" data-animate="fade-up">requested to gather at the lobby.</p>
          </div>

          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-tanaman-atas-location.png" alt="Picture of Tanaman Kanan Atas Location" width={682} height={331} className="absolute -top-[65px] md:-top-[95px] left-[1%] md:left-[35%] w-[371px] md:w-[582px] animate" data-animate="fade-down" />
          <Image src="/images/josiah-dan-stevie/img-2.png" alt="Picture of Tanaman Kiri Bawah Location" width={961} height={961} className="absolute -bottom-[150px] md:-bottom-[280px] -left-[200px] md:-left-[500px] rotate-45 w-[356px] md:w-[961px]" />
          <Image src="/images/josiah-dan-stevie/img-bercak-kanan-location-dekstop.png" alt="Picture of Bercak Kanan Location" width={2094} height={2094} className="absolute -bottom-[550px] md:-top-[200px] right-0 w-[800px] md:w-[1500px]" />
        </div>
      </section>
    </>
  )
}