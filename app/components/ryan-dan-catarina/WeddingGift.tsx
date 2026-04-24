'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function WeddingGift({ isOpen, isMobile }: Props) {
  const [copied, setCopied] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const handleCopy = (norek:string) => {
    navigator.clipboard.writeText(norek);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  const handleCopy2 = (norek:string) => {
    navigator.clipboard.writeText(norek);
    setCopied2(true);

    setTimeout(() => {
      setCopied2(false);
    }, 10000);
  };

  return (
    <>
      {isOpen ? (
        <section id="wedding-gift" className="wedding-gift relative w-full min-h-min bg-cover bg-center bg-no-repeat bg-[url('/images/ryan-dan-catarina/white-paper-texture.png')]">
          <div className="absolute inset-0 bg-[#fffdf8]/40" />
          <div className="text-center h-full py-[96px] md:py-[87px] font-bellmt text-[#60564D]">
            <h2 className="font-bickham text-[40px] md:text-[64px] font-bold leading-[111%] animate" data-animate="fade-up">Wedding Gift</h2>
            <Image src="/images/ryan-dan-catarina/line-location.png" alt="Picture of Line Location" width={180} height={37} className="w-[116px] h-[24px] md:w-[180px] md:h-[37px] mx-auto mt-2.5 md:mt-5 animate" data-animate="fade-up" />
            <p className="text-[14px] md:text-[20px] font-normal leading-[20px] md:leading-[26px] mt-[44px] md:mt-[57px] animate" data-animate="fade-up">
              <span>Your presence and prayers</span> <br />
              <span className="mt-1">are the greatest blessing to us.</span>
            </p>
            <p className="text-[14px] md:text-[20px] font-normal leading-[20px] md:leading-[26px] mt-[24px] md:mt-[32px] animate" data-animate="fade-up">
              <span>Should you wish to express your love with a gift,</span> <br />
              <span className="mt-1">kindly find the details below</span> <br />
              <span className="mt-1">for your convenience.</span>
            </p>
            <div className="flex justify-between items-center w-[224px] md:w-[392px] border-b border-[#60564D] pb-3 md:pb-5 mx-auto mt-[30px] md:mt-[36px] animate" data-animate="fade-up">
              <p className="text-left text-xs md:text-lg font-normal leading-[14px] md:leading-[20px]">
                <span>BCA</span> <br />
                <span className="mt-1">777 189 2471</span> <br />
                <span className="mt-1">Ryan Febrian</span>
              </p>
              <button onClick={() => handleCopy('777 189 2471')} className="w-[50px] h-[30px] border-b border-[#60564D] text-center" data-animate="fade-up">
                <span className="text-xs md:text-lg font-normal leading-[81%] md:leading-[20px] uppercase">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <div className="flex justify-between items-center w-[224px] md:w-[392px] border-b border-[#60564D] pb-3 md:pb-5 mx-auto mt-[30px] md:mt-[36px] animate" data-animate="fade-up">
              <p className="text-left text-xs md:text-lg font-normal leading-[14px] md:leading-[20px]">
                <span>BCA</span> <br />
                <span className="mt-1">065 073 7440</span> <br />
                <span className="mt-1">Catarina Christy Natalia</span>
              </p>
              <button onClick={() => handleCopy2('065 073 7440')} className="w-[50px] h-[30px] border-b border-[#60564D] text-center" data-animate="fade-up">
                <span className="text-xs md:text-lg font-normal leading-[81%] md:leading-[20px] uppercase">{copied2 ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}