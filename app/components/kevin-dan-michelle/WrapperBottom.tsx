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
      <Reservation isOpen={isOpen} isMobile={isMobile} params={params} />
      <Gallery isOpen={isOpen} isMobile={isMobile} />
      <WeddingGift isOpen={isOpen} isMobile={isMobile} />
      <Wishes isOpen={isOpen} isMobile={isMobile} />
      <Footer isOpen={isOpen} isMobile={isMobile} />

      <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-location.png" alt="Picture of Bunga kanan atas" width={382} height={382} className="absolute -top-[215px] right-0 w-[302px]" />
      <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-footer-mobile.png" alt="Picture of tanaman kanan bawah" width={501} height={448} className="absolute z-0 bottom-0 right-0 w-[301px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-bottom-mobile.png" alt="Picture of background lapisan tengah" width={346} height={3827} className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[345px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-bottom-mobile.png" alt="Picture of background lapisan atas" width={308} height={3715} className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[308px]" />
    </div>
  )
}