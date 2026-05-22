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
      <section id="hero" className="relative z-20 hero w-full h-screen overflow-hidden bg-bottom bg-cover bg-no-repeat bg-[url('/images/josiah-dan-stevie/bg-hero-mobile-1.png')]">
        {!isOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[11.1px]" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="w-[290px] min-h-min rounded-[15px] shadow-[0px_8px_11.6px_0px_#0000008A] zoom-in">
                <div className="w-full h-[180px] bg-center bg-cover bg-no-repeat bg-[url('/images/josiah-dan-stevie/img-popup-hero.png')]"></div>
                <div className="relative w-full pt-[30px] pb-[40px] rounded-bl-[15px] rounded-br-[15px] font-sorts text-[#22352F] text-center bg-center bg-cover bg-no-repeat bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
                  <h6 className="text-[10px] font-medium leading-none tracking-[15%] uppercase">the wedding of</h6>
                  <h2 className="font-romantic text-2xl leading-none font-normal mt-5">Josiah & Stevie</h2>
                  <h6 className="text-[10px] font-medium leading-[25px] mt-2">Dear,</h6>
                  <h6 className="text-[14px] font-medium leading-[25px] capitalize">{params ?? '.......'}</h6>
                  <p className="text-[8px] font-medium leading-[13px] mt-[9px]">We sincerely apologize</p>
                  <p className="text-[8px] font-medium leading-[13px]">for any misspelling of names or titles.</p>
                  <button onClick={() => setIsOpen(true)} className="mx-auto mt-4 w-[184px] h-[33px] bg-[#22352F] rounded-[41px] flex items-center justify-center">
                    <span className="text-xs leading-none font-medium text-[#FEF8EF] uppercase">view invitation</span>
                  </button>

                  {/* Image Absolute */}
                  <Image src="/images/josiah-dan-stevie/img-tanaman-kiri-popup-hero.png" alt="Picture of Tanaman Kiri Atas Popun Hero" width={91} height={127} className="absolute top-0 left-0" />
                  <Image src="/images/josiah-dan-stevie/img-tanaman-kanan-popup-hero.png" alt="Picture of Tanaman Kanan Bawah Popun Hero" width={81} height={212} className="absolute bottom-0 right-0" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative text-center text-[#22352F] font-sorts pt-[140px] h-full">
          <div className="relative z-10">
            <h6 className={`text-[14px] font-medium leading-none tracking-[15%] uppercase ${isOpen ? 'zoom-in' : ''}`}>the wedding of</h6>
            <h2 className={`font-romantic text-[40px] leading-none font-normal mt-7 ${isOpen ? 'zoom-in' : ''}`}>Josiah & Stevie</h2>
            <h6 className={`text-base font-medium leading-[20px] tracking-0 mt-5 ${isOpen ? 'zoom-in' : ''}`}>Saturday, 4 July 2026</h6>
            <div className={`w-[318px] h-[212px] mt-[47px] mx-auto rounded-[16.91px] border-[4.51px] border-[#6C7852] overflow-hidden ${isOpen ? 'zoom-in' : ''}`}>
              <Image src="/images/josiah-dan-stevie/img-hero.png" alt="Picture of Hero" width={318} height={212} className="w-full h-full" />
            </div>
            <p className={`text-xs font-medium leading-[22px] mt-[47px] ${isOpen ? 'zoom-in' : ''}`}>"Two are better than one…</p>
            <p className={`text-xs font-medium leading-[22px] mt-0.5 ${isOpen ? 'zoom-in' : ''}`}>for if they fall, one will lift up his companion.”</p>
            <p className={`text-xs font-medium leading-[22px] mt-6 ${isOpen ? 'zoom-in' : ''}`}>Ecclesiastes 4 : 9 - 10</p>
          </div>

          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-bercak-kiri-hero.png" alt="Picture of Bercak Kiri" width={604} height={604} className="absolute top-0 left-0" />
          <Image src="/images/josiah-dan-stevie/img-tanaman-kiri-atas-hero.png" alt="Picture of Tanaman Kiri Atas" width={465} height={465} className={`absolute top-0 left-0 w-[305px] h-[305px] ${isOpen ? 'fade-right' : ''}`} />
        </div>
      </section>
    </>
  )
}