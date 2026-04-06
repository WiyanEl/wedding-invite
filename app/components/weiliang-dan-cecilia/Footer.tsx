'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Footer({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-footer-mobile.png" : "/images/weiliang-dan-cecillia/bg-footer.png" : "/images/weiliang-dan-cecillia/bg-footer-mobile.png"

  return (
    <>
      {isOpen ? (
        <footer id="footer" className="footer relative w-full h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <Image src="/images/weiliang-dan-cecillia/img-bunga-atas-footer.png" alt="Tanaman Atas" width={518} height={369} className={`absolute top-[-170px] left-0 animate`} data-animate="fade-down" />
          <Image src="/images/weiliang-dan-cecillia/img-tiang-kiri-footer.png" alt="Tanaman Atas" width={135} height={287} className={`absolute bottom-[10px] left-0 animate`} data-animate="fade-right" />
          <Image src="/images/weiliang-dan-cecillia/img-altar-footer.png" alt="Tanaman Atas" width={286} height={203} className={`absolute bottom-[10px] left-[51px] animate`} data-animate="fade-up" />
          <Image src="/images/weiliang-dan-cecillia/img-awan-footer.png" alt="Tanaman Atas" width={173} height={123} className={`absolute bottom-0 left-[79px] animate`} data-animate="fade-up" />
          <Image src="/images/weiliang-dan-cecillia/img-pengantin-footer.png" alt="Tanaman Atas" width={129} height={92} className={`absolute bottom-[40px] left-[125px] animate`} data-animate="fade-up" style={{ animationDelay: '1s' }} />
          <Image src="/images/weiliang-dan-cecillia/img-bunga-bawah-footer.png" alt="Tanaman Atas" width={471} height={335} className={`absolute bottom-0 left-0 animate`} data-animate="fade-up" />
          <Image src="/images/weiliang-dan-cecillia/img-tiang-kanan-footer.png" alt="Tanaman Atas" width={139} height={293} className={`absolute bottom-[10px] right-0 animate`} data-animate="fade-left" />
          <div className="absolute z-20 bottom-[214px] right-[34px] animate" data-animate="fade-left-butterfly">
            <Image src="/images/weiliang-dan-cecillia/img-kupu-kupu-footer.png" alt="Butterfly Kanan" width={59} height={42} className={`${isOpen ? 'butterfly-flap' : ''}`} />
          </div>
          <div className="flex flex-col items-center text-center h-full pt-[255px] md:pt-[369px] pb-[331px] md:pb-[361] font-normal text-[#724232]">
            <h3 className="font-channe text-[28px] leading-none animate" data-animate="zoom-in">Thank You</h3>
            <p className="font-perpetua text-xs md:text-[14px] leading-[15px] animate mt-[11px]" data-animate="zoom-in">
              It would be a joy and honor for us to <br /> have you join our celebration and <br /> share your blessings.
            </p>
            <p className="font-perpetua text-[14px] leading-[15px] animate mt-[17px]" data-animate="zoom-in">
              #cecifoundherwei
            </p>
          </div>
        </footer>
      ) : null}
    </>
  )
}