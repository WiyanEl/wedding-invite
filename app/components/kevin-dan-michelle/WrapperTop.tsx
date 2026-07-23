'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero from './Hero'

type HeroProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  params:string
  isMobile: boolean
}

export default function WrapperTop({ isOpen, setIsOpen, params, isMobile }: HeroProps) {
  return (
    <div className="relative w-full bg-top bg-cover bg-no-repeat bg-[url('/images/kevin-dan-michelle/bg-full-mobile.png')]">
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} params={params} isMobile={isMobile} />

      <Image src="/images/kevin-dan-michelle/img-bunga-kiri-atas-hero-mobile.png" alt="Picture of Bunga bagian kiri atas" width={593} height={394} className="absolute top-0 left-0 w-[593px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-mobile.png" alt="Picture of background lapisan tengah" width={345} height={514} className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[345px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-mobile.png" alt="Picture of background lapisan atas" width={308} height={500} className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[308px]" />
    </div>
  )
}