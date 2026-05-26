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
      <section id="profile" className="profile relative z-10 -mt-[75px] md:-mt-[395px] w-full min-h-screen overflow-hidden bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
        <div className="relative z-10 text-center h-full pt-[152px] md:pt-[360px] pb-[113px] md:pb-[187px] font-sorts text-[#22352F] overflow-hidden">
          <h6 className="text-xs md:text-lg font-medium leading-[25px] md:leading-[30px] animate" data-animate="fade-up">MR. ASHLEY MENDES and</h6>
          <h6 className="text-xs md:text-lg font-medium leading-[25px] md:leading-[30px] mt-0.5 md:mt-1 animate" data-animate="fade-up">MRS. EUNICE MENDES</h6>
          <h6 className="text-xs md:text-lg font-medium leading-[25px] md:leading-[30px] mt-[29px] md:mt-[25px] italic animate" data-animate="fade-up">together with</h6>
          <h6 className="text-xs md:text-lg font-medium leading-[25px] md:leading-[30px] mt-[29px] md:mt-[32px] animate" data-animate="fade-up">MR. JULIUS DIRJAYANTO and</h6>
          <h6 className="text-xs md:text-lg font-medium leading-[25px] md:leading-[30px] mt-0.5 md:mt-1 animate" data-animate="fade-up">MRS. JESSICA EFRATA GUNAWAN HO</h6>
          <p className="text-xs md:text-lg font-normal leading-[20px] md:leading-[30px] mt-[36px] md:mt-[31px] animate" data-animate="fade-up">Cordially request the honour of your presence at</p>
          <p className="text-xs md:text-lg font-normal leading-[20px] md:leading-[30px] mt-0.5 md:mt-1 animate" data-animate="fade-up">the marriage of their son and daughter</p>
          <h2 className="font-romantic text-[28px] md:text-[48px] font-normal leading-none mt-[46px] md:mt-[42px] animate" data-animate="fade-up">Josiah Mendes</h2>
          <h2 className="font-romantic text-[28px] md:text-[48px] font-normal leading-none mt-8 md:mt-[25px] animate" data-animate="fade-up">&</h2>
          <h2 className="font-romantic text-[28px] md:text-[48px] font-normal leading-none mt-8 md:mt-[35px] animate" data-animate="fade-up">Stevie Dirjayanto</h2>
          <p className="md:hidden text-xs font-normal leading-[20px] mt-[56px] animate" data-animate="fade-up">We thank God for bringing our two</p>
          <p className="md:hidden text-xs font-normal leading-[20px] mt-0.5 animate" data-animate="fade-up">families together,</p>
          <p className="md:hidden text-xs font-normal leading-[20px] mt-0.5 animate" data-animate="fade-up">and we look forward to sharing this joyful</p>
          <p className="md:hidden text-xs font-normal leading-[20px] mt-0.5 animate" data-animate="fade-up">day with you!</p>
          <p className="hidden md:block text-lg font-normal leading-[30px] mt-[50px] animate" data-animate="fade-up">and we look forward to sharing this joyful</p>
          <p className="hidden md:block text-lg font-normal leading-[30px] mt-1 animate" data-animate="fade-up">day with you!</p>
          
          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-7-atas.png" alt="Picture of Tanaman Bawah Location" width={756} height={362} className="absolute z-0 -bottom-[220px] md:-bottom-[425px] md:left-[31%] md:w-[756px] animate" data-animate="fade-up" />
        </div>

        {/* Image Absolute */}
        <Image src="/images/josiah-dan-stevie/img-3.png" alt="Picture of Tanaman Kanan Atas Location" width={1000} height={1000} className="absolute -top-[75px] md:-top-[195px] -right-[100px] md:-right-[250px] -rotate-45 w-[256px] md:w-[691px]" />
        <Image src="/images/josiah-dan-stevie/img-bercak-kanan-location-new.png" alt="Picture of Bercak Kanan Location" width={1340} height={1340} className="absolute -bottom-[317px] md:-top-[150px] right-0" />
      </section>
    </>
  )
}