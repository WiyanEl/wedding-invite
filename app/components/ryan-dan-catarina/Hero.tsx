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
  const bgImage = isMobile ? "/images/ryan-dan-catarina/bg-hero-mobile.png" : "/images/ryan-dan-catarina/bg-hero.png"

  return (
    <>
      <section id="hero" className="relative w-full h-screen overflow-hidden bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
        {!isOpen ? (
          isMobile ? (
            <div className="md:hidden absolute inset-0 bg-center bg-cover bg-no-repeat bg-[url('/images/ryan-dan-catarina/bg-gradasi-hero.png')] backdrop-blur-[5px]" />
          ) : (
            <div className="hidden md:block absolute inset-0 bg-center bg-cover bg-no-repeat md:bg-[#00000066] backdrop-blur-[5px] md:backdrop-blur-[22px]" />
          )
        ) : (
          <div className="absolute inset-0 z-[1] bg-[#00000052]" />
        )}

        {!isOpen && (
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="w-[290px] md:w-[416px] h-[440px] md:h-[540px] rounded-[15px] zoom-in">
              <div className="w-full h-[180px] md:h-[211px] bg-center bg-cover bg-no-repeat bg-[url('/images/ryan-dan-catarina/img-hero-mobile.png')] md:bg-[url('/images/ryan-dan-catarina/img-hero.png')]"></div>
              <div className="w-full min-h-min pt-[24px] md:pt-[34px] pb-[37px] md:pb-[40px] rounded-bl-[15px] rounded-br-[15px] font-bellmt text-[#60564D] text-center bg-center bg-cover bg-no-repeat bg-[url('/images/ryan-dan-catarina/white-paper-texture.png')]">
                <h6 className="text-xs md:text-[14px] font-normal md:font-medium leading-none tracking-[15%] uppercase">the wedding of</h6>
                <h3 className="font-bickham text-[48px] font-normal md:font-bold leading-none mt-2 md:mt-4">Ryan & Catarina</h3>
                <p className="text-[10px] md:text-[14px] font-medium md:font-medium leading-[25px] md:leading-[31px] mt-1 md:mt-2">Dear Mr. /Mrs. / Ms.</p>
                <p className="text-xs md:text-lg font-medium md:font-medium leading-[25px] md:leading-[31px] mt-1 capitalize">{params ?? '.......'}</p>
                <p className="text-[9px] md:text-xs italic md:not-italic font-medium md:font-medium mt-[9px] md:mt-[23px]">
                  <span>We sincerely apologize</span> <br />
                  <span>for any misspelling of names or titles.</span>
                </p>
                <button onClick={() => setIsOpen(true)} className="mx-auto font-bellmt text-xs md:text-lg font-medium md:font-medium leading-none text-white uppercase w-[184px] md:w-[288px] h-[33px] md:h-[40px] rounded-[41px] md:rounded-[35px] bg-[#60564D] flex items-center justify-center mt-3 md:mt-[23px]">view invitation</button>
              </div>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="relative z-10 text-center text-white font-bellmt pt-[128px] md:pt-[123px] h-full">
            <h6 className="text-[14px] md:text-[20px] font-medium leading-none tracking-[15%] zoom-in">The Wedding of</h6>
            <h1 className="font-bickham text-[64px] md:text-[96px] font-normal leading-none mt-1 md:mt-2 zoom-in">Ryan & Catarina</h1>
            <p className="text-[14px] md:text-[20px] font-medium leading-none mt-0.5 md:mt-1 zoom-in">16.05.26</p>
            <div className="absolute bottom-[84px] md:bottom-[86px] text-center w-full">
              <p className="text-xs md:text-lg font-normal leading-none md:leading-[28px] zoom-in">
                <span>"Therefore what God has joined together, let no one separate"</span>
              </p>
              <p className="text-xs md:text-lg font-medium leading-none mt-[17px] md:mt-[27px] zoom-in">
                Mark 10:9
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  )
}