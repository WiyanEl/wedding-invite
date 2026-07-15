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
      <section id="hero" className="relative z-20 hero w-full h-screen bg-top md:bg-[center_40%] bg-cover bg-no-repeat bg-[url('/images/steven-dan-bella/bg-hero-mobile.png')] md:bg-[url('/images/steven-dan-bella/bg-hero.png')]">

        {!isOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[11.1px]" />
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="w-[290px] md:w-[416px] min-h-min rounded-[15px] md:rounded-[20px] shadow-[0px_8px_11.6px_0px_#0000008A] zoom-in">
                <div className="w-full h-[180px] md:h-[220px] rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] bg-center bg-cover bg-no-repeat bg-[url('/images/steven-dan-bella/img-hero-mobile.png')]"></div>
                <div className="relative w-full pt-[25px] md:pt-[26px] pb-[40px] rounded-bl-[15px] md:rounded-bl-[20px] rounded-br-[15px] md:rounded-br-[20px] font-century text-[#3C475E] text-center bg-[#F6F6F4] md:bg-white">
                  <h6 className="text-xs md:text-[14px] font-normal leading-none tracking-[15%] md:tracking-normal uppercase">the wedding of</h6>
                  <h2 className="font-constantia text-[28px] md:text-[36px] leading-none font-normal mt-2">Steven & Bella</h2>
                  <h6 className="text-[10px] md:text-[14px] font-medium leading-[25px] md:leading-[31px] mt-3">Dear,</h6>
                  <h6 className="text-xs md:text-lg font-medium leading-[25px] md:leading-[31px] capitalize">{params ?? '.......'}</h6>
                  <p className="text-[8px] md:text-xs font-medium leading-[13px] md:leading-[16px] mt-[9px] md:mt-[20px]">We sincerely apologize</p>
                  <p className="text-[8px] md:text-xs font-medium leading-[13px] md:leading-[16px]">for any misspelling of names or titles.</p>
                  <button onClick={() => setIsOpen(true)} className="mx-auto mt-4 md:mt-[23px] w-[184px] md:w-[288px] h-[33px] md:h-[40px] bg-[#3C475E] rounded-[41px] md:rounded-[35px] flex items-center justify-center">
                    <span className="text-xs md:text-lg leading-none font-medium text-[#F6F6F4] uppercase">view invitation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative text-center font-century text-white pt-[88px] md:pt-[134px] h-full">
          <div className="absolute top-0 left-0 w-full h-[284px] md:h-[442px] bg-[linear-gradient(180deg,_#7986A1_0%,_rgba(121,134,161,0)_100%)]" />
          <div className="relative z-10">
            <h6 className={`text-[14px] md:text-2xl font-normal leading-none tracking-[0.15em] ${isOpen ? 'zoom-in' : ''}`}>The Wedding of</h6>
            <h2 className={`font-constantia text-[48px] md:text-[72px] leading-none font-normal mt-3 md:mt-6 ${isOpen ? 'zoom-in' : ''}`}>Steven & Bella</h2>
            <h6 className={`text-[14px] md:text-2xl font-normal leading-none mt-4 md:mt-6 ${isOpen ? 'zoom-in' : ''}`}>17.10.26</h6>
          </div>
        </div>

      </section>
    </>
  )
}