'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type HeroProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  params:string
  isMobile: boolean
}

export default function Hero({ isOpen, setIsOpen, params, isMobile }: HeroProps) {
  return (
    <>
      <section id="hero" className="relative z-20 hero w-full h-screen bg-bottom bg-cover bg-no-repeat bg-[url('/images/steven-dan-bella/bg-hero-mobile.png')] md:bg-[url('/images/steven-dan-bella/bg-hero-mobile.png')]">

        <div className="relative text-center font-century text-white pt-[120px] h-full">
          <div className="absolute top-0 left-0 w-full h-[372px] bg-[linear-gradient(180deg,_#7986A1_0%,_rgba(121,134,161,0)_100%)]" />
          <div className="relative z-10">
            <h6 className={`text-[14px] font-normal leading-none tracking-[0.15em] ${isOpen ? 'zoom-in' : ''}`}>The Wedding of</h6>
            <h2 className={`font-constantia text-[48px] leading-none font-normal mt-4 ${isOpen ? 'zoom-in' : ''}`}>Steven & Bella</h2>
            <h6 className={`text-[14px] font-normal leading-none mt-5 ${isOpen ? 'zoom-in' : ''}`}>17.10.26</h6>
          </div>
        </div>

      </section>
    </>
  )
}