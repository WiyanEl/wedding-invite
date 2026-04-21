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
      <section id="hero" className="relative w-full h-screen overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/images/ryan-dan-inggrid/video-hero.mp4" type="video/mp4" />
        </video>

        {!isOpen ? (
          <>
            <div
              className="md:hidden absolute inset-0 bg-cover bg-center z-[1]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.54), rgba(0,0,0,0.54)), url('/images/ryan-dan-inggrid/bg-gradasi-hero.png')",
              }}
            />

            <div className="hidden md:block absolute inset-0 z-[1] bg-black/40 backdrop-blur-[22px]" />
          </>
        ) : (
          <div className="absolute inset-0 z-[1] bg-black/60" />
        )}

        {!isOpen && (
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center w-[290px] md:w-[416px] h-[440px] md:min-h-min md:pb-[40px] rounded-[15px] bg-[#635953] text-white font-lora zoom-in">
              <Image src="/images/ryan-dan-inggrid/img-hero.png" alt="Picture of open invitation" width={290} height={180} className="w-full md:h-[220px]" />
              <h6 className="text-xs md:text-[14px] font-normal md:font-medium leading-none mt-[23px] md:mt-[25px] uppercase">the wedding of</h6>
              <h1 className="md:hidden font-kunstler text-5xl font-normal leading-none mt-0.5">Ryan & Inggrid</h1>
              <p className="text-[11px] md:text-[14px] font-medium md:font-medium leading-[25px] md:leading-[31px] mt-0.5 md:mt-[71px]">
                <span>Dear Mr. /Mrs. / Ms.</span> <br />
                <span className="capitalize">{params ?? '........'}</span>
              </p>
              <p className="text-[9px] md:text-xs font-normal leading-none md:leading-[16px] mt-3 md:mt-[23px]">
                <span>We sincerely apologize</span> <br />
                <span>for any misspelling of names or titles.</span>
              </p>
              <button onClick={() => setIsOpen(true)} className="mx-auto text-xs md:text-lg font-normal md:font-medium leading-none text-[#635953] uppercase w-[184px] md:w-[288px] h-[30px] md:h-[40px] rounded-[41px] md:rounded-[35px] bg-white flex items-center justify-center mt-2.5 md:mt-[23px]">open invitation</button>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="relative z-10 text-center text-white font-lora pt-[60px] md:pt-[102px] h-full">
            <Image src="/images/ryan-dan-inggrid/img-logo-ri.png" alt="Picture of Ryan dan Inggrid" width={102} height={65} className="mx-auto md:w-[132px] md:h-[84px] animate zoom-in" />
            <h6 className="text-[14px] md:text-lg font-normal leading-none mt-[61px] md:mt-[37px] uppercase zoom-in">the wedding of</h6>
            <h1 className="font-kunstler text-5xl md:text-[96px] font-normal leading-none mt-2 zoom-in">Ryan & Inggrid</h1>
            <p className="md:hidden text-[14px] font-normal leading-none mt-[19px] zoom-in">20.06.26</p>
            <div className="absolute bottom-[84px] md:bottom-[110px] text-center w-full">
              <p className="text-xs md:text-lg font-normal leading-none md:leading-[28px] zoom-in">
                <span>“So they are no longer two, but one flesh.</span> <br />
                <span>What therefore God has joined together, let no one separate.”</span>
              </p>
              <p className="text-xs md:text-lg font-medium leading-none mt-[15px] md:mt-[27px] zoom-in">
                Matthew 19:6
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  )
}