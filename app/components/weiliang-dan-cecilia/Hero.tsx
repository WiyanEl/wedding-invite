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
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-hero-mobile.png" : "/images/weiliang-dan-cecillia/bg-hero.png" : "/images/weiliang-dan-cecillia/bg-hero-mobile.png"

  return (
    <>
      {isMobile ? (
        <section id="hero" className={`block md:hidden hero relative w-full h-screen bg-cover bg-center md:bg-top`} style={{ backgroundImage: `url('/images/weiliang-dan-cecillia/bg-hero-mobile.png')` }}>
          <div className={`relative z-10 flex ${isOpen ? '' : 'items-center'} justify-center h-full overflow-hidden`}>
            <Image src="/images/weiliang-dan-cecillia/img-tl-pohon-hero.png" alt="Pohon Kiri" width={263} height={187} className="absolute top-0 left-[-33px] opacity-0 fade-right" />
            <Image src="/images/weiliang-dan-cecillia/img-tr-pohon-hero.png" alt="Pohon Kanan" width={229} height={163} className="absolute top-0 right-0 opacity-0 fade-left" />
            <Image src="/images/weiliang-dan-cecillia/img-bunga-kiri-hero.png" alt="Bunga Kiri" width={129} height={92} className="absolute top-[131px] left-0 opacity-0 fade-right" style={{ animationDelay: '0.3s' }} />
            <Image src="/images/weiliang-dan-cecillia/img-butterfly-hero.png" alt="Kupu-kupu" width={386} height={275} className="absolute top-[22px] opacity-0 fade-up-butterfly" style={{ animationDelay: '0.6s' }} />
            <Image src="/images/weiliang-dan-cecillia/img-taman-belakang-hero.png" alt="Taman Belakang" width={368} height={258} className="absolute bottom-[177px] opacity-0 fade-up" style={{ animationDelay: '0.9s' }} />
            <Image src="/images/weiliang-dan-cecillia/img-altar-hero.png" alt="Altar" width={339} height={241} className="absolute bottom-[202px] right-0 opacity-0 fade-up" style={{ animationDelay: '1.2s' }} />
            <Image src="/images/weiliang-dan-cecillia/img-taman-hero.png" alt="Taman" width={510} height={363} className="absolute bottom-[42px] opacity-0 fade-up" style={{ animationDelay: '1.5s' }} />
            <Image src="/images/weiliang-dan-cecillia/img-taman-bawah-hero.png" alt="Taman Bawah" width={480} height={239} className="absolute bottom-0 opacity-0 fade-up" style={{ animationDelay: '1.8s' }} />
            <Image src="/images/weiliang-dan-cecillia/img-pengantin-hero.png" alt="Pengantin" width={196} height={139} className="absolute bottom-[36px] left-0 opacity-0 fade-right-pengantin" style={{ animationDelay: '2.5s' }} />
              {!isOpen ? (
                <>
                  <div className={`opacity-0 absolute inset-0 bg-[#F9D6D6C4] blur-[100px] zoom-in`} style={{ animationDelay: '2.8s' }} />
                  <div className="relative z-10 flex items-center justify-center h-full zoom-in" style={{ animationDelay: '2.8s' }}>
                    <div className="text-center w-[290px] min-h-min py-[60px] bg-[#AB6A7C]/70 font-perpetua font-normal text-white opacity-0 zoom-in" style={{ animationDelay: '2.8s' }}>
                      <h6 className="text-base leading-none">The Wedding of</h6>
                      <h2 className="font-channe text-[26px] leading-none mt-[10.78px]">Wei Liang & Cecillia</h2>
                      <h6 className="text-[14px] leading-none mt-2.5">31 . 05 . 26</h6>
                      <h6 className="text-[14px] leading-none mt-[27px]">
                        <span>Dear Mr. /Mrs. / Ms.</span> <br />
                        <span className="capitalize">{params ?? '........'}</span>
                      </h6>
                      <p className="text-xs leading-none mt-[25px]">
                        We sincerely apologize <br />
                        for any misspelling of names or titles.
                      </p>
                      <button onClick={() => setIsOpen(true)} className="w-[160px] h-[29px] bg-[#F9D6D6] hover:bg-[#AB6A7C] text-xs leading-none text-[#AB6A7C] hover:text-[#F9D6D6] uppercase mt-[23px]">open invitation</button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center font-perpetua font-normal text-[#724232] pt-[211px]">
                  <h6 className="text-base leading-none opacity-0 zoom-in">The Wedding of</h6>
                  <h3 className="font-channe text-[28px] leading-none mt-[10.78px] opacity-0 zoom-in">Wei Liang & Cecillia</h3>
                  <h6 className="text-base leading-none mt-2.5 opacity-0 zoom-in">31 . 05 . 26</h6>
                  <Image src="/images/weiliang-dan-cecillia/img-jek-hero.png" alt="Jek" width={162} height={202} className="absolute bottom-[-24px] right-[16px] opacity-0 fade-left-jek" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-[52px] right-[8px] w-[190px] opacity-0 fade-left" style={{ animationDelay: '0.5s' }}>
                    <p className="font-bold text-[14px] leading-[14px]">Love never fails.</p>
                    <p className="text-xs leading-[14px]">1 Corinthians 13:8a</p>
                  </div>
                </div>
              )}
          </div>
        </section>
      ) : (
        <section id="hero" className={`hidden md:block hero relative w-full h-screen bg-cover bg-center md:bg-top`} style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className={`absolute inset-0 bg-[#DEB9C161]`} />
          <div className={`relative z-10 flex ${isOpen ? '' : 'items-center'} justify-center h-full overflow-hidden`}>
            {!isOpen ? (
              <div className="text-center w-[528px] min-h-min pt-[52px] pb-[60px] bg-[#AB6A7CF0]/70 font-perpetua font-normal text-[#FEFBF0] opacity-0 zoom-in" style={{ animationDelay: '0.3s' }}>
                <h6 className="text-2xl leading-none">The Wedding of</h6>
                <h2 className="font-channe text-[46px] leading-none mt-2.5">Wei Liang & Cecillia</h2>
                <h6 className="text-2xl leading-none mt-[19px]">31 . 05 . 26</h6>
                <h6 className="text-2xl leading-[26px] text-white mt-[26px]">
                  <span>Dear Mr. /Mrs. / Ms.</span> <br />
                  <span className="capitalize">{params ?? '........'}</span>
                </h6>
                <p className="text-lg leading-none text-white mt-[31px]">
                  We sincerely apologize <br />
                  for any misspelling of names or titles.
                </p>
                <button onClick={() => setIsOpen(true)} className="w-[187px] h-[40px] bg-[#FEFBF0] hover:bg-[#AB6A7C] text-lg leading-none text-[#AB6A7C] hover:text-[#FEFBF0] uppercase mt-[23px]">open invitation</button>
              </div>
            ) : (
              <>
                <Image src="/images/weiliang-dan-cecillia/img-tl-pohon-hero.png" alt="Pohon Kiri" width={263} height={187} className="absolute top-0 left-[-33px] opacity-0 fade-right" />
                <Image src="/images/weiliang-dan-cecillia/img-tr-pohon-hero.png" alt="Pohon Kanan" width={229} height={163} className="absolute top-0 right-0 opacity-0 fade-left" />
                <Image src="/images/weiliang-dan-cecillia/img-bunga-kiri-hero.png" alt="Bunga Kiri" width={129} height={92} className="absolute top-[151px] left-0 opacity-0 fade-right" style={{ animationDelay: '0.3s' }} />
                <Image src="/images/weiliang-dan-cecillia/img-butterfly-hero.png" alt="Kupu-kupu" width={386} height={275} className="absolute top-[141px] opacity-0 fade-up-butterfly" style={{ animationDelay: '0.6s' }} />
                <Image src="/images/weiliang-dan-cecillia/img-taman-belakang-hero.png" alt="Taman Belakang" width={368} height={258} className="absolute bottom-[177px] opacity-0 fade-up" style={{ animationDelay: '0.9s' }} />
                <Image src="/images/weiliang-dan-cecillia/img-altar-hero.png" alt="Altar" width={339} height={241} className="absolute bottom-[202px] right-0 opacity-0 fade-up" style={{ animationDelay: '1.2s' }} />
                <Image src="/images/weiliang-dan-cecillia/img-taman-hero.png" alt="Taman" width={510} height={363} className="absolute bottom-[42px] opacity-0 fade-up" style={{ animationDelay: '1.5s' }} />
                <Image src="/images/weiliang-dan-cecillia/img-taman-bawah-hero.png" alt="Taman Bawah" width={480} height={239} className="absolute bottom-0 opacity-0 fade-up" style={{ animationDelay: '1.8s' }} />
                <Image src="/images/weiliang-dan-cecillia/img-pengantin-hero.png" alt="Pengantin" width={196} height={139} className="absolute bottom-[36px] left-0 opacity-0 fade-right-pengantin" style={{ animationDelay: '2.5s' }} />
                <div className="text-center font-perpetua font-normal text-[#724232] pt-[306px]">
                  <h6 className="text-base md:text-lg leading-none opacity-0 zoom-in" style={{ animationDelay: '2.8s' }}>The Wedding of</h6>
                  <h3 className="font-channe text-[28px] leading-none mt-[10.78px] md:mt-[20.78px] opacity-0 zoom-in" style={{ animationDelay: '2.8s' }}>Wei Liang & Cecillia</h3>
                  <h6 className="text-base md:text-lg leading-none mt-2.5 md:mt-[17px] opacity-0 zoom-in" style={{ animationDelay: '2.8s' }}>31 . 05 . 26</h6>
                  <Image src="/images/weiliang-dan-cecillia/img-jek-hero.png" alt="Jek" width={162} height={202} className="absolute bottom-[-24px] right-[16px] opacity-0 fade-left-jek" style={{ animationDelay: '2.8s' }} />
                  <div className="absolute bottom-[52px] right-[8px] w-[190px] opacity-0 fade-left" style={{ animationDelay: '2.8s' }}>
                    <p className="font-bold text-[14px] leading-[14px]">Love never fails.</p>
                    <p className="text-xs leading-[14px]">1 Corinthians 13:8a</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  )
}