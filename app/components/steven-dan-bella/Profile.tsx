'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Profile({ isOpen, isMobile }: Props) {
  return (
    <>
      <section id="profile" className="profile relative z-10 w-full min-h-screen overflow-hidden bg-[url('/images/steven-dan-bella/bg-profile-mobile.png')] md:bg-[url('/images/steven-dan-bella/bg-profile.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-[#7A86A114]" />
        <div className="relative z-10 text-center h-full pt-[134px] md:pt-[120px] pb-[217px] md:pb-[122px] font-century text-[#3C475E] overflow-hidden">
          <p className="md:hidden text-[14px] font-normal leading-[22px] animate" data-animate="zoom-in">We request the honour of your presence</p>
          <p className="md:hidden text-[14px] font-normal leading-[22px] animate mt-0.5" data-animate="zoom-in">at the wedding of</p>
          <p className="md:hidden text-[14px] font-normal leading-[22px] animate mt-0.5" data-animate="zoom-in">our beloved son and daughter</p>
          <p className="hidden md:block text-xl font-normal leading-[22px] md:leading-[28px] animate" data-animate="zoom-in">We request the honour of your presence at the wedding of</p>
          <p className="hidden md:block text-xl font-normal leading-[22px] md:leading-[28px] animate mt-1" data-animate="zoom-in">our beloved son and daughter</p>

          <h3 className="font-constantia text-[30px] md:text-[48px] font-normal leading-[114%] md:leading-none uppercase mt-[63px] animate" data-animate="zoom-in">steven theodorus <br className="hidden md:block" /> dirjayanto</h3>
          <p className="font-ovo text-[13px] md:text-[20px] font-normal leading-[20px] mt-3 md:mt-10 animate" data-animate="zoom-in">The Son of</p>
          <p className="text-[14px] md:text-[20px] font-normal leading-[24px] animate mt-2 md:mt-3" data-animate="zoom-in">Mr. Julius Dirjayanto and</p>
          <p className="text-[14px] md:text-[20px] font-normal leading-[24px] animate mt-0.5" data-animate="zoom-in">Mrs. Jessica Efrata Gunawan Ho</p>

          <h3 className="font-corben text-[32px] md:text-[48px] font-normal leading-none uppercase mt-8 animate" data-animate="zoom-in">&</h3>

          <h3 className="font-constantia text-[30px] md:text-[48px] font-normal leading-[114%] md:leading-none uppercase mt-[63px] animate" data-animate="zoom-in">bella anesia</h3>
          <p className="font-ovo text-[13px] md:text-[20px] font-normal leading-[20px] mt-3 md:mt-10 animate" data-animate="zoom-in">The Daughter of</p>
          <p className="text-[14px] md:text-[20px] font-normal leading-[24px] animate mt-2 md:mt-3" data-animate="zoom-in">Mr. Billy Ertanto and</p>
          <p className="text-[14px] md:text-[20px] font-normal leading-[24px] animate mt-0.5" data-animate="zoom-in">Mrs. Ennie Tan</p>

          <p className="text-[14px] md:text-2xl font-normal leading-[22px] md:leading-[28px] animate mt-[58px]" data-animate="zoom-in">We would be honoured</p>
          <p className="text-[14px] md:text-2xl font-normal leading-[22px] md:leading-[28px] animate mt-0.5" data-animate="zoom-in">by your presence and blessing.</p>
        </div>

        {/* Image Absolute */}
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-atas-profile.png" alt="Picture of Tanaman Kiri Atas Profile" width={328} height={277} className="absolute top-0 left-0 w-[115px] md:w-[228px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-atas-profile.png" alt="Picture of Tanaman Kanan Atas Profile" width={328} height={277} className="absolute top-0 right-0 w-[115px] md:w-[228px] animate" data-animate="fade-left" />
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-bawah-profile.png" alt="Picture of Tanaman Kiri Bawah Profile" width={521} height={711} className="absolute -bottom-[75px] md:-bottom-[150px] left-0 w-[150px] md:w-[281px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-bawah-profile.png" alt="Picture of Tanaman Kanan Bawah Profile" width={521} height={711} className="absolute -bottom-[75px] md:-bottom-[150px] right-0 w-[150px] md:w-[281px] animate" data-animate="fade-left" />

        {/* Gif */}
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={51} height={51} className="md:hidden absolute bottom-[103px] left-[44px] animate" data-animate="fade-right-butterfly" />
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-2.gif" alt="Animasi Kupu-kupu" width={42} height={42} className="md:hidden absolute bottom-[83px] right-[64px] animate" data-animate="fade-left-butterfly" />
      </section>
    </>
  )
}