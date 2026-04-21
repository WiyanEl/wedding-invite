'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Location({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/ryan-dan-inggrid/bg-location-mobile.png" : "/images/ryan-dan-inggrid/bg-location.png" : "/images/ryan-dan-inggrid/bg-location-mobile.png"

  return (
    <>
      {isOpen ? (
        <section id="location" className="location relative w-full h-min-screen bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="text-center h-full pt-[84px] md:pt-[118px] pb-[82px] md:pb-[114px] font-lora text-white">
            <h5 className="text-[14px] md:text-[32px] font-normal leading-[18px] uppercase animate" data-animate="fade-up">celebrate our special day</h5>
            <h2 className="font-kunstler text-[64px] md:text-8xl font-normal leading-[18px] mt-[43px] md:mt-[96px] animate" data-animate="fade-up">Our Venues</h2>
            <div className="w-full md:max-w-[1140px] flex flex-col md:flex-row md:justify-between mt-[61px] md:mt-[102px] mx-auto">
              <div>
                <h5 className="text-[14px] md:text-xl font-semibold leading-[18px] uppercase animate" data-animate="fade-up">holy matrimony</h5>
                <Image src="/images/ryan-dan-inggrid/img-holy-matrimony.png"  alt="Picture of Holy Matrimony" width={235} height={201} className="md:w-[300px] md:h-[257px] mx-auto mt-3 animate" data-animate="fade-up" />
                <h6 className="md:hidden text-xs font-semibold leading-[20px] uppercase mt-5 animate" data-animate="fade-up">11.00 wib</h6>
                <h2 className="font-kunstler text-[48px] md:text-[64px] font-normal leading-[81%] mt-[15px] md:mt-[36px] animate" data-animate="fade-up">at</h2>
                <h6 className="text-xs md:text-lg font-semibold leading-[20px] uppercase mt-5 animate" data-animate="fade-up">abipraya cahya kawaluyan chapel</h6>
                <p className="text-xs md:text-lg font-normal leading-[20px] mt-[14px] animate" data-animate="fade-up">
                  <span>Jl. Parahyangan Km 3, Kota Baru Parahyangan,</span> <br />
                  <span>Padalarang, Bandung</span> <br />
                </p>
                <h6 className="text-xs md:text-lg font-semibold leading-[20px] mt-5 animate" data-animate="fade-up">
                  <span className="uppercase">dress code :</span> <br />
                  <span className="uppercase md:lowercase">batik</span>
                </h6>
                <Link href="https://maps.app.goo.gl/t8BwfCTntmefNDtc8" target="_blank" className="md:hidden w-[160px] h-[30px] flex justify-center items-center rounded-[73px] bg-white cursor-pointer mx-auto mt-[30px] animate" data-animate="fade-up">
                  <span className="text-xs font-semibold leading-[17.16px] text-black uppercase">goggle maps</span>
                </Link>
              </div>
              <div className="mt-[46px] md:mt-0">
                <h5 className="text-[14px] md:text-xl font-semibold leading-[18px] uppercase animate" data-animate="fade-up">reception</h5>
                <Image src="/images/ryan-dan-inggrid/img-reception.png"  alt="Picture of Reception" width={313} height={199} className="md:w-[418px] md:h-[266px] mx-auto mt-3 md:mt-[35px] animate" data-animate="fade-up" />
                <h6 className="md:hidden text-xs font-semibold leading-[20px] uppercase mt-5 animate" data-animate="fade-up">18.00 wib</h6>
                <h2 className="font-kunstler text-[48px] md:text-[64px] font-normal leading-[81%] mt-[15px] md:mt-[36px] animate" data-animate="fade-up">at</h2>
                <h6 className="text-xs font-semibold leading-[20px] uppercase mt-5 animate" data-animate="fade-up">ubud mason pine hotel</h6>
                <p className="text-xs md:text-lg font-normal leading-[20px] mt-[14px] animate" data-animate="fade-up">
                  <span>Jl. Parahyangan Km 1, Kota Baru Parahyangan,</span> <br />
                  <span>Padalarang, Bandung</span> <br />
                </p>
                <h6 className="text-xs md:text-lg font-normal leading-[20px] mt-[14px] animate" data-animate="fade-up">
                  <span>DRESS CODE :</span> <br />
                  <span>Family - Silver / Grey</span> <br />
                  <span>Friends - All Black</span>
                </h6>
                <Link href="https://maps.app.goo.gl/wjmp9nCR98i7io91A" target="_blank" className="md:hidden w-[160px] h-[30px] flex justify-center items-center rounded-[73px] bg-white cursor-pointer mx-auto mt-[30px] animate" data-animate="fade-up">
                  <span className="text-xs font-semibold leading-[17.16px] text-black uppercase">goggle maps</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}