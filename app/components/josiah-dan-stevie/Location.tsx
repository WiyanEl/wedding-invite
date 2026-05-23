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
      <section id="location" className="location relative z-10 w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
        <div className="absolute z-0 inset-0 bg-[#fffdf8]/40" />
        <div className="relative z-10 text-center h-full pt-[164.7px] pb-[194.63px] font-sorts text-[#22352F] overflow-hidden">
          <h6 className="text-xs font-medium leading-[25px] uppercase animate" data-animate="fade-up">save the date</h6>
          <h3 className="font-romantic text-[32px] font-normal leading-[111.00000000000001%] mt-[19px] animate" data-animate="fade-up">Time & Location</h3>
          <Image src="/images/josiah-dan-stevie/img-imah-seniman.png" alt="Picture of Imah Seniman" width={311} height={207} className="mx-auto mt-[19px] animate" data-animate="zoom-in" />
          <h4 className="text-base font-medium leading-none uppercase mt-[7px] animate" data-animate="fade-up">imah seniman</h4>
          <p className="text-xs font-medium leading-none mt-[13.58px]">Jl. Kolonel Masturi No. VIII, Lembang,</p>
          <p className="text-xs font-medium leading-none mt-1">Kab. Bandung Barat, Jawa Barat, Indonesia</p>
          <Link href="https://maps.app.goo.gl/9vjZkWzgwcpG4T777" target="_blank" className="inline-flex items-center justify-center w-[160px] h-[33px] rounded-[44px] bg-[#22352F] text-xs font-medium leading-[17.16px] uppercase text-[#FEF8EF] mt-[28.2px] animate" data-animate="fade-up">
            <span className="inline-block m-auto">google maps</span>
          </Link>
          <div className="relative w-[310px] mx-auto mt-[22px]">
            <div className="flex gap-8 w-full">
              <div className="pt-[36px] text-right w-[117px]">
                <h6 className="text-base font-medium leading-none uppercase animate" data-animate="fade-right">16.00 wib</h6>
                <h6 className="text-base font-medium leading-none uppercase mt-[92.75px] animate" data-animate="fade-right">17.00 wib</h6>
              </div>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1 w-[1.5px] h-[275px] bg-[linear-gradient(180deg,rgba(34,53,47,0)_0%,#22352F_20%,#22352F_80%,rgba(34,53,47,0)_100%)]" />
                <div className="w-[9px] h-[9px] bg-[#22352F] rounded-full mt-[36px]"></div>
                <div className="w-[9px] h-[9px] bg-[#22352F] rounded-full mt-[102px]"></div>
              </div>
              <div className="text-left pt-[36px]">
                <div>
                  <h6 className="text-base font-medium leading-none animate" data-animate="fade-left">Tea Ceremony</h6>
                  <h6 className="text-[14px] font-medium leading-none mt-2.5 animate" data-animate="fade-left">at Manten Ballroom,</h6>
                  <h6 className="text-xs font-medium leading-none animate" data-animate="fade-left">Imah Seniman</h6>
                </div>
                <div className="mt-[53px]">
                  <h6 className="text-base font-medium leading-none animate" data-animate="fade-left">Afternoon Tea</h6>
                  <h6 className="text-base font-medium leading-none mt-1 animate" data-animate="fade-left">followed by Reception</h6>
                  <h6 className="text-[14px] font-medium leading-none mt-[19.33px] animate" data-animate="fade-left">at Manten Ballroom,</h6>
                  <h6 className="text-xs font-medium leading-none animate" data-animate="fade-left">Imah Seniman</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-tanaman-atas-location.png" alt="Picture of Tanaman Kanan Atas Location" width={371} height={180} className="absolute -top-[65px] mx-auto animate" data-animate="fade-down" />
          <Image src="/images/josiah-dan-stevie/img-tanaman-kiri-bawah-location-new.png" alt="Picture of Tanaman Kiri Bawah Location" width={961} height={961} className="absolute -bottom-[220px] -left-[20px] w-[256px] animate" data-animate="fade-right" />
          <Image src="/images/josiah-dan-stevie/img-bercak-kanan-location-2.png" alt="Picture of Bercak Kanan Location" width={800} height={800} className="absolute -bottom-[550px] right-0" />
        </div>
      </section>
    </>
  )
}