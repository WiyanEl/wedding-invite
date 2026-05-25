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
      <section id="hero" className="relative z-20 hero w-full h-screen md:h-[calc(100vh+15vh)] bg-bottom bg-cover bg-no-repeat bg-[url('/images/josiah-dan-stevie/bg-hero-mobile-1.png')] md:bg-[url('/images/josiah-dan-stevie/bg-gelombang.png')]">
        {!isOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[11.1px]" />
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="w-[290px] md:w-[416px] min-h-min rounded-[15px] md:rounded-[22px] shadow-[0px_8px_11.6px_0px_#0000008A] zoom-in">
                <div className="w-full h-[180px] md:h-[220px] rounded-tl-[15px] md:rounded-tl-[22px] rounded-tr-[15px] md:rounded-tr-[22px] bg-center bg-cover bg-no-repeat bg-[url('/images/josiah-dan-stevie/img-popup-hero-new.png')]"></div>
                <div className="relative w-full pt-[30px] md:pt-[26px] pb-[40px] rounded-bl-[15px] md:rounded-bl-[22px] rounded-br-[15px] md:rounded-br-[22px] font-sorts text-[#22352F] text-center bg-center bg-cover bg-no-repeat bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
                  <h6 className="text-[10px] md:text-[14px] font-medium leading-none tracking-[15%] md:tracking-normal uppercase">the wedding of</h6>
                  <h2 className="font-romantic text-2xl md:text-[36px] leading-none font-normal mt-5">Josiah & Stevie</h2>
                  <h6 className="text-[10px] md:text-[14px] font-medium leading-[25px] md:leading-[31px] mt-2">Dear Mr. /Mrs. / Ms.</h6>
                  <h6 className="text-[14px] md:text-lg font-medium leading-[25px] md:leading-[31px] capitalize">{params ?? '.......'}</h6>
                  <p className="text-[8px] md:text-xs font-medium leading-[13px] md:leading-[16px] mt-[9px] md:mt-[20px]">We sincerely apologize</p>
                  <p className="text-[8px] md:text-xs font-medium leading-[13px] md:leading-[16px]">for any misspelling of names or titles.</p>
                  <button onClick={() => setIsOpen(true)} className="mx-auto mt-4 md:mt-[23px] w-[184px] md:w-[288px] h-[33px] md:h-[40px] bg-[#22352F] rounded-[41px] md:rounded-[35px] flex items-center justify-center pt-0.5 md:pt-1">
                    <span className="text-xs md:text-lg leading-none font-medium text-[#FEF8EF] uppercase">view invitation</span>
                  </button>

                  {/* Image Absolute */}
                  <Image src="/images/josiah-dan-stevie/img-tanaman-kiri-popup-hero-new.png" alt="Picture of Tanaman Kiri Atas Popun Hero" width={91} height={127} className="absolute top-0 left-0 md:w-[102px]" />
                  <Image src="/images/josiah-dan-stevie/img-tanaman-kanan-popup-hero-new.png" alt="Picture of Tanaman Kanan Bawah Popun Hero" width={81} height={212} className="absolute bottom-0 right-0 md:w-[96px]" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative text-center text-[#22352F] font-sorts pt-[95px] md:pt-[140px] h-full">
          <div className="relative z-10">
            <h6 className={`text-[14px] md:text-lg font-medium leading-none tracking-[15%] uppercase ${isOpen ? 'zoom-in' : ''}`}>the wedding of</h6>
            <h2 className={`font-romantic text-[40px] md:text-[52px] leading-none font-normal mt-7 ${isOpen ? 'zoom-in' : ''}`}>Josiah & Stevie</h2>
            <h6 className={`text-base md:text-[20px] font-medium leading-[20px] tracking-0 mt-5 md:mt-8 ${isOpen ? 'zoom-in' : ''}`}>Saturday, 4 July 2026</h6>
            <div className={`w-[318px] md:w-[388px] h-[212px] md:h-[258px] mt-[47px] md:mt-[37px] mx-auto rounded-[16.91px] md:rounded-[20.66px] border-[4.51px] md:border-[5.51px] border-[#6C7852] overflow-hidden ${isOpen ? 'zoom-in' : ''}`}>
              <Image src="/images/josiah-dan-stevie/img-hero.png" alt="Picture of Hero" width={318} height={258} className="w-full h-full" />
            </div>
            <p className={`text-xs md:text-lg font-medium leading-[22px] md:leading-[30px] mt-[47px] md:mt-[58px] ${isOpen ? 'zoom-in' : ''}`}>"Two are better than one…</p>
            <p className={`text-xs md:text-lg font-medium leading-[22px] md:leading-[30px] mt-0.5 ${isOpen ? 'zoom-in' : ''}`}>for if they fall, one will lift up his companion.”</p>
            <p className={`text-xs md:text-lg font-medium leading-[22px] md:leading-[30px] mt-6 ${isOpen ? 'zoom-in' : ''}`}>Ecclesiastes 4 : 9 - 10</p>
          </div>

          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-bercak-kiri-hero.png" alt="Picture of Bercak Kiri" width={748} height={748} className="md:hidden absolute top-0 left-0 w-[354px]" />
          <Image src="/images/josiah-dan-stevie/img-bercak-kiri-hero-dekstop.png" alt="Picture of Bercak Kiri" width={748} height={748} className="hidden md:block absolute top-0 left-0 md:w-[654px]" />
          <Image src="/images/josiah-dan-stevie/img-1.png" alt="Picture of Tanaman Kiri Atas" width={857} height={857} className={`absolute -top-[190px] -left-[180px] md:-top-[195px] md:-left-[230px] rotate-[140deg] w-[365px] md:w-[657px]`} />
        </div>
      </section>
    </>
  )
}