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
      <section id="hero" className="relative overflow-hidden z-20 hero w-full h-screen">

        {!isOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[11.1px]" />
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="w-[290px] md:w-[416px] min-h-min rounded-[15px] md:rounded-[20px] shadow-[0px_8px_11.6px_0px_#0000008A] zoom-in">
                <div className="w-full h-[180px] md:h-[220px] rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] bg-center bg-cover bg-no-repeat bg-[url('/images/kevin-dan-michelle/img-hero-mobile.png')]"></div>
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

        <div className="relative z-10 text-center font-cormorant text-[#DFD28F] pt-[274px] h-full">
          <h4 className="text-[14px] tracking-wider uppercase animate" data-animate="zoom-in">the wedding</h4>
          <h2 className="font-milyuna text-[42px] mt-1 animate" data-animate="zoom-in">Kevin</h2>
          <h2 className="font-milyuna text-2xl mt-2 animate" data-animate="zoom-in">&</h2>
          <h2 className="font-milyuna text-[42px] mt-2 animate" data-animate="zoom-in">Michelle</h2>
          <h4 className="text-base tracking-[0.09em] mt-2 animate" data-animate="zoom-in">12  .  09  .  26</h4>
          <p className="text-[14px] leading-[16px] font-light mt-[142px] animate" data-animate="zoom-in">“So they are no longer two, but one flesh. <br /> Therefore what God has joined together, let no <br /> one separate.”</p>
          <p className="text-[14px] leading-[18px] font-light mt-4 animate" data-animate="zoom-in">Matthew 19:6</p>
        </div>

        {/* Img Absolute */}
        {/* <Image src="/images/kevin-dan-michelle/img-bunga-kiri-atas-hero-mobile.png" alt="Picture of Bunga bagian kiri atas" width={593} height={394} className="absolute top-0 left-0 w-[593px]" />
        <Image src="/images/kevin-dan-michelle/bg-hero-lapis-tengah-bagian-bawah-mobile.png" alt="Picture of background lapisan tengah" width={345} height={295} className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 w-[345px]" />
        <Image src="/images/kevin-dan-michelle/bg-hero-lapis-atas-bagian-bawah-mobile.png" alt="Picture of background lapisan atas" width={308} height={367} className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[308px]" />
        <Image src="/images/kevin-dan-michelle/bg-hero-lapis-tengah-mobile.png" alt="Picture of background lapisan tengah" width={345} height={514} className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[345px]" />
        <Image src="/images/kevin-dan-michelle/bg-hero-lapis-atas-mobile.png" alt="Picture of background lapisan atas" width={308} height={500} className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[308px]" /> */}
        <Image src="/images/kevin-dan-michelle/img-bintang-kiri-bawah-hero-mobile.png" alt="Picture of background lapisan atas" width={359} height={359} className="absolute bottom-0 left-0 w-[259px]" />
        <Image src="/images/kevin-dan-michelle/img-bintang-hero-mobile.png" alt="Picture of background lapisan atas" width={409} height={409} className="absolute top-0 left-0 w-[409px]" />
      </section>
    </>
  )
}