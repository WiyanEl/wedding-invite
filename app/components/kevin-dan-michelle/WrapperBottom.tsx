'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Location from './Location'
import Reservation from './Reservation'
import Gallery from './Gallery'
import WeddingGift from './WeddingGift'

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

      <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-location.png" alt="Picture of Bunga kanan atas" width={382} height={382} className="absolute -top-[215px] right-0 w-[302px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-bottom-mobile.png" alt="Picture of background lapisan tengah" width={345} height={514} className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[345px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-bottom-mobile.png" alt="Picture of background lapisan atas" width={308} height={500} className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[308px]" />
    </div>
  )
}