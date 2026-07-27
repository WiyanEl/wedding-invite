'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Location from './Location'
import Reservation from './Reservation'
import Gallery from './Gallery'
import WeddingGift from './WeddingGift'
import Wishes from './Wishes'
import Footer from './Footer'

type WrapperProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  params:string
  isMobile: boolean
}

export default function WrapperBootom({ isOpen, setIsOpen, params, isMobile }: WrapperProps) {
  return (
    <div className="relative w-full">
      <Location isOpen={isOpen} isMobile={isMobile} />
      <Gallery isOpen={isOpen} isMobile={isMobile} />
      <Reservation isOpen={isOpen} isMobile={isMobile} params={params} />
      <WeddingGift isOpen={isOpen} isMobile={isMobile} />
      <Wishes isOpen={isOpen} isMobile={isMobile} />
      <Footer isOpen={isOpen} isMobile={isMobile} />

      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-bottom-mobile.png" alt="Picture of background lapisan tengah" width={346} height={3827} className="md:hidden absolute -top-[320px] md:top-0 left-1/2 -translate-x-1/2 w-[345px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-bottom-mobile.png" alt="Picture of background lapisan atas" width={308} height={3715} className="md:hidden absolute -top-[300px] md:top-0 left-1/2 -translate-x-1/2 w-[308px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-bottom.png" alt="Picture of background lapisan tengah" width={1230} height={6976} className="hidden md:block absolute -top-[320px] md:top-0 left-1/2 -translate-x-1/2" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-bottom.png" alt="Picture of background lapisan atas" width={1108} height={6919} className="hidden md:block absolute -top-[300px] md:top-0 left-1/2 -translate-x-1/2" />
    </div>
  )
}