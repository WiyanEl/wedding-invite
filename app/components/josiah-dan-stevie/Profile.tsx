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
      <section id="profile" className="profile relative z-10 -mt-[75px] w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
        <div className="absolute z-0 inset-0 bg-[#fffdf8]/40" />
        <div className="relative z-10 text-center h-full pt-[152px] pb-[113px] font-sorts text-[#22352F] overflow-hidden">
          <h6 className="text-xs font-medium leading-[25px] animate" data-animate="fade-up">MR. ASHLEY MENDES and</h6>
          <h6 className="text-xs font-medium leading-[25px] mt-0.5 animate" data-animate="fade-up">MRS. EUNICE MENDES</h6>
          <h6 className="text-xs font-medium leading-[25px] mt-[29px] italic animate" data-animate="fade-up">together with</h6>
          <h6 className="text-xs font-medium leading-[25px] mt-[29px] animate" data-animate="fade-up">MR. JULIUS DIRJAYANTO and</h6>
          <h6 className="text-xs font-medium leading-[25px] mt-0.5 animate" data-animate="fade-up">MRS. JESSICA EFRATA GUNAWAN HO</h6>
          <p className="text-xs font-normal leading-[20px] mt-[36px] animate" data-animate="fade-up">Cordially request the honour of your presence at</p>
          <p className="text-xs font-normal leading-[20px] mt-0.5 animate" data-animate="fade-up">the marriage of their son and daughter</p>
          <h2 className="font-romantic text-[28px] font-normal leading-none mt-[46px] animate" data-animate="fade-up">Josiah Mendes</h2>
          <h2 className="font-romantic text-[28px] font-normal leading-none mt-8 animate" data-animate="fade-up">&</h2>
          <h2 className="font-romantic text-[28px] font-normal leading-none mt-8 animate" data-animate="fade-up">Stevie Dirjayanto</h2>
          <p className="text-xs font-normal leading-[20px] mt-[56px] animate" data-animate="fade-up">We thank God for bringing our two</p>
          <p className="text-xs font-normal leading-[20px] mt-0.5 animate" data-animate="fade-up">families together,</p>
          <p className="text-xs font-normal leading-[20px] mt-0.5 animate" data-animate="fade-up">and we look forward to sharing this joyful</p>
          <p className="text-xs font-normal leading-[20px] mt-0.5 animate" data-animate="fade-up">day with you!</p>
          
          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-tanaman-bawah-location.png" alt="Picture of Tanaman Bawah Location" width={411} height={199} className="absolute z-0 -bottom-[125px] right-0 animate" data-animate="fade-up" />
        </div>

        {/* Image Absolute */}
        <Image src="/images/josiah-dan-stevie/img-tanaman-atas-profile-new.png" alt="Picture of Tanaman Kanan Atas Location" width={691} height={691} className="absolute -top-[150px] right-0 w-[256px]" />
        <Image src="/images/josiah-dan-stevie/img-bercak-kanan-location.png" alt="Picture of Bercak Kanan Location" width={761} height={761} className="absolute -bottom-[375px] right-0" />
      </section>
    </>
  )
}