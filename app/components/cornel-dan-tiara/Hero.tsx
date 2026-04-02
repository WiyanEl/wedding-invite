'use client'

import { useState, useEffect } from "react";

type HeroProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  params:string
  isMobile: boolean
}

export default function Hero({ isOpen, setIsOpen, params, isMobile }: HeroProps) {
  return (
    <section id="hero" className={`hero relative w-full h-screen bg-cover bg-center md:bg-top ${!isOpen 
        ? "bg-[url('/images/cornel-dan-tiara/bg-hero-mobile.png')] md:bg-[url('/images/cornel-dan-tiara/bg-hero.png')]" 
        : "bg-[url('/images/cornel-dan-tiara/bg-hero-mobile.png')]"
      }`}>
      <div className={`absolute inset-0 ${isOpen ? 'bg-[#00000082]' : 'bg-[#000000B5]'} `} />
      <div className={`relative z-10 flex ${isOpen ? 'items-end pb-[85px]' : 'items-center'} justify-center h-full`}>

        {!isOpen && (
          <div className="text-center bg-[#FEFBF091]/40 md:bg-[#77767291] md:opacity-70 font-outfit text-[#FEFBF0] leading-none w-[290px] md:w-[528px] min-h-min py-[60px] zoom-in">
            <p className="font-extralight md:font-light text-[10px] md:text-lg uppercase">
              we invite you to celebrate
            </p>
            <h2 className="font-cloudy font-normal text-[28px] md:text-[46px] leading-[31px] uppercase mt-[13px] md:mt-[15px]">
              cornel & tiara
            </h2>
            <p className="font-extralight md:font-light text-[10px] md:text-lg uppercase mt-[13px] md:mt-[19px]">
              saturday, 02 may 2026
            </p>
            <p className="font-normal md:font-medium md:text-lg leading-[25px] text-white mt-[30px] md:mt-[31px]">
              <span className="text-[12px]">Dear Mr./Mrs./Ms.</span>
              <br />
              <span className="text-[14px] capitalize">{params ?? '........'}</span>
            </p>
            <p className="font-extralight text-[9px] md:text-sm text-white mt-[25px] md:mt-[31px]">
              We sincerely apologize <br />
              for any misspelling of names or titles
            </p>
            <button onClick={() => setIsOpen(true)} className="bg-[#FEFBF0] hover:bg-[#3B3B3B] uppercase w-[160px] md:w-[187px] h-[29px] md:h-[40] text-[10px] md:text-[18px] text-[#3B3B3B] hover:text-[#FEFBF0] mt-[35px] md:mt-[29px]">open invitation</button>
          </div>
        )}

        {isOpen && (
          <div className="font-outfit text-center text-white text-xs leading-none tracking-normal uppercase animate-fade-up">
            <p className="font-extralight">
              save the date
            </p>
            <p className="font-extralight mt-1">
              the wedding of
            </p>
            <h2 className="font-cloudy font-normal text-[28px] leading-[31px] mt-[17px]">
              cornel & tiara
            </h2>
            <p className="font-extralight mt-[11px]">
              saturday, 02 may 2026
            </p>
          </div>
        )}

      </div>
    </section>
  )
}