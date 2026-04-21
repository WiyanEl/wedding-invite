'use client'

import { useState } from 'react'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function WeddingGift({ isOpen, isMobile }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('1234567891011');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <>
      {isOpen ? (
        <section id="wedding-gift" className="wedding-gift relative w-full min-h-min" style={{backgroundImage: "url('/images/ryan-dan-inggrid/bg-wishes-mobile.png')"}}>
          <div className="relative text-center pt-[95px] md:pt-[287px] pb-[74px] md:pb-[131px] font-lora text-[#FEFBF0]">
            <h2 className="font-kunstler text-[64px] md:text-[96px] font-normal leading-[22px] md:leading-[22px] animate fade-up" data-animate="fade-up">Wedding Gift</h2>
            <h6 className="text-xs md:text-lg font-medium leading-[20px] md:leading-[26px] uppercase mt-[57px] md:mt-[79px] animate" data-animate="fade-up">
              <span className="md:hidden">your prayers and presence will be the</span> <br />
              <span className="md:hidden">greatest blessing for us.</span>
              <span className="hidden md:inline-block">your prayers and presence will be the greatest</span> <br />
              <span className="hidden md:inline-block">blessing for us.</span>
            </h6>
            <h6 className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px] mt-3 md:mt-4 animate" data-animate="fade-up">
              <span className="md:hidden">Should you wish to express your love with a gift,</span> <br />
              <span className="md:hidden">kindly find the details below for your convenience.</span>
              <span className="hidden md:inline-block">Should you wish to express your love with a gift, kindly find the</span> <br />
              <span className="hidden md:inline-block">details below for your convenience.</span>
            </h6>
            <Image src="/images/ryan-dan-inggrid/logo-bca.png" alt="Picture of Logo BCA" width="64" height={23} className="md:w-[88px] md:h-[31px] mx-auto mt-[57px] animate" data-animate="fade-up" />
            <div className="flex gap-[25px] md:gap-[49px] justify-center items-center mt-[22px] animate" data-animate="fade-up">
              <span className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px]">1234567891011</span>
              <button
                onClick={handleCopy}
                className="w-[57px] md:w-[110px] h-[30px] md:h-[40px] flex items-center justify-center bg-[#FEFBF0] rounded-[51px] animate" data-animate="fade-up">
                  <span className="text-xs md:text-lg font-normal leading-[81%] md:leading-[26px] text-[#1B1C1D]">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <p className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px] mt-[15px] md:mt-[18px] animate" data-animate="fade-up">Bank BCA - PROVITE</p>
          </div>
        </section>
      ) : null}
    </>
  )
}