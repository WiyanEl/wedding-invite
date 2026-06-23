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
      <section id="profile" className="profile relative z-10 w-full min-h-screen overflow-hidden bg-[url('/images/steven-dan-bella/bg-profile-mobile.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-[#7A86A114]" />
        <div className="relative z-10 text-center h-full pt-[134px] pb-[217px] font-century text-[#3C475E] overflow-hidden">
          <p className="text-[14px] font-normal leading-[22px] animate" data-animate="zoom-in">We request the honour of your presence</p>
          <p className="text-[14px] font-normal leading-[22px] animate mt-0.5" data-animate="zoom-in">at the wedding of</p>
          <p className="text-[14px] font-normal leading-[22px] animate mt-0.5" data-animate="zoom-in">our beloved son and daughter</p>

          <h3 className="font-constantia text-[30px] font-normal leading-[114%] uppercase mt-[63px] animate" data-animate="zoom-in">steven theodorus dirjayanto</h3>
          <p className="font-ovo text-[13px] font-normal leading-[20px] mt-3 animate" data-animate="zoom-in">The Son of</p>
          <p className="text-[14px] font-normal leading-[24px] animate mt-2" data-animate="zoom-in">Mr. Julius Dirjayanto and</p>
          <p className="text-[14px] font-normal leading-[24px] animate mt-0.5" data-animate="zoom-in">Mrs. Jessica Efrata Gunawan Ho</p>

          <h3 className="font-corben text-[32px] font-normal leading-none uppercase mt-8 animate" data-animate="zoom-in">&</h3>

          <h3 className="font-constantia text-[30px] font-normal leading-none uppercase mt-8 animate" data-animate="zoom-in">bella anesia</h3>
          <p className="font-ovo text-[13px] font-normal leading-[20px] mt-3 animate" data-animate="zoom-in">The Daughter of</p>
          <p className="text-[14px] font-normal leading-[24px] animate mt-2" data-animate="zoom-in">Mr. Billy Ertanto and</p>
          <p className="text-[14px] font-normal leading-[24px] animate mt-0.5" data-animate="zoom-in">Mrs. Ennie Tan</p>

          <p className="text-[14px] font-normal leading-[22px] animate mt-[58px]" data-animate="zoom-in">We would be honoured</p>
          <p className="text-[14px] font-normal leading-[22px] animate mt-0.5" data-animate="zoom-in">by your presence and blessing.</p>
        </div>

        {/* Image Absolute */}
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-atas-profile.png" alt="Picture of Tanaman Kiri Atas Profile" width={160} height={135} className="absolute top-0 left-0 w-[115px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-atas-profile.png" alt="Picture of Tanaman Kanan Atas Profile" width={160} height={135} className="absolute top-0 right-0 w-[115px] animate" data-animate="fade-left" />
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-bawah-profile.png" alt="Picture of Tanaman Kiri Bawah Profile" width={226} height={309} className="absolute -bottom-[75px] left-0 w-[150px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-bawah-profile.png" alt="Picture of Tanaman Kanan Bawah Profile" width={226} height={309} className="absolute -bottom-[75px] right-0 w-[150px] animate" data-animate="fade-left" />

        {/* Gif */}
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={51} height={51} className="absolute bottom-[103px] left-[44px] animate" data-animate="fade-right-butterfly" />
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-2.gif" alt="Animasi Kupu-kupu" width={42} height={42} className="absolute bottom-[83px] right-[64px] animate" data-animate="fade-left-butterfly" />
      </section>
    </>
  )
}