'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function WeddingGift({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-wedding-gift-mobile.png" : "/images/weiliang-dan-cecillia/bg-wedding-gift.png" : "/images/weiliang-dan-cecillia/bg-wedding-gift-mobile.png"

  return (
    <>
      {isOpen ? (
        <section id="wedding-gift" className="wedding-gift relative w-full bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="relative overflow-hidden">
            <Image src="/images/weiliang-dan-cecillia/img-tanaman-wedding-gift.png" alt="Tanaman Atas" width={305} height={324} className={`absolute top-[-70px] left-0 animate`} data-animate="fade-down" />
            <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-kanan-wedding-gift.png" alt="Tanaman Kanan" width={86} height={184} className={`absolute top-[50px] right-0 animate`} data-animate="fade-left" />
            <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-kiri-wedding-gift.png" alt="Tanaman Kiri" width={45} height={122} className={`absolute bottom-[108px] left-0 animate`} data-animate="fade-right" />
            <Image src="/images/weiliang-dan-cecillia/img-tiang-kanan-wedding-gift.png" alt="Tiang Kanan" width={157} height={446} className={`hidden md:block absolute bottom-[18px] right-0 animate`} data-animate="fade-left" />
            <Image src="/images/weiliang-dan-cecillia/img-air-mancur-wedding-gift.png" alt="Air Mancur Kiri" width={107} height={446} className={`hidden md:block absolute bottom-[37px] left-0 animate`} data-animate="fade-right" />
            <div className="flex flex-col items-center text-center h-full pb-[154px] md:pt-[180px] pt-[141px] md:pb-[338px] font-perpetua font-normal text-[#724232]">
              <Image src="/images/weiliang-dan-cecillia/img-pengantin-wedding-gift.png" alt="Gambar Pengantin" width={210} height={150} className="animate" data-animate="zoom-in" />
              <h3 className="font-channe text-2xl leading-[26px] text-[#724232] mt-[16px] uppercase animate" data-animate="zoom-in">wedding gift</h3>
              <h6 className="font-perpetua text-xs md:text-[14px] leading-[16px] text-[#724232] mt-[34px] md:mt-[38px] animate" data-animate="zoom-in">
                Your presence and prayers <br /> are the greatest blessing to us.
              </h6>
              <h6 className="font-perpetua text-xs md:text-[14px] leading-[16px] text-[#724232] mt-[26px] md:mt-[34px] animate" data-animate="zoom-in">
                Should you wish to honor us with a gift, <br /> kindly find the details below for your convenience.
              </h6>
              <div className="w-[270px] pb-[19px] flex justify-between items-end border-b border-[#724232] text-left mt-[36px] md:mt-[26px]">
                <p className="text-xs md:text-[14px] leading-[15px] animate" data-animate="zoom-in">
                  DBS Bank - Singapore <br />
                  2713234683 <br />
                  Cecilia Widjojo <br />
                </p>
                <button
                    onClick={() => {
                      navigator.clipboard.writeText('2713234683')
                    }}
                    className="w-[99px] h-[20px] flex items-center justify-center bg-[#AB6A7C] text-xs md:text-[14px] leading-[11.82px] text-[#E6D8DC] animate" data-animate="fade-left">
                    Copy Number
                  </button>
              </div>
            </div>
          </div>
          <Image src="/images/weiliang-dan-cecillia/img-tanaman-tengah-wedding-gift.png" alt="Tumbuhan Bawah" width={468} height={185} className={`absolute z-10 w-full bottom-[-100px] right-0 animate`} data-animate="fade-up" />
        </section>
      ) : null}
    </>
  )
}