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
      <section id="wedding-gift" className="wedding-gift relative z-10 w-full min-h-min overflow-hidden bg-[url('/images/steven-dan-bella/bg-wedding-gift-mobile.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-[#7A86A114]" />
        <div className="relative z-10 text-center h-full pt-[91px] md:pt-[187px] pb-[99px] md:pb-[192px] font-century text-[#3C475E] overflow-hidden">
          <h2 className="font-constantia text-2xl md:text-[48px] font-normal leading-[111.00000000000001%] uppercase animate" data-animate="zoom-in">wedding gift</h2>
          <Image src="/images/steven-dan-bella/img-line-title.png" alt="Picture of Garis Bawah Judul" width={276} height={37} className="w-[155px] md:w-[276px] mx-auto mt-2 md:mt-4 animate" data-animate="zoom-in" />

          <p className="text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-[43px] md:mt-[47px] animate" data-animate="zoom-in">
            <span className="md:hidden">our presence and prayers</span>
            <span className="hidden md:inline-block">Whether celebrating with us in person or from afar, your</span>
          </p>
          <p className="text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">
            <span className="md:hidden">are the greatest blessing to us.</span>
            <span className="hidden md:inline-block">thoughts and and prayers are the greatest blessing to us.</span>
          </p>

          <p className="text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-4 md:mt-8 animate" data-animate="zoom-in">
            <span className="md:hidden">Should you wish to honor us with a gift,</span>
            <span className="hidden md:inline-block">If you would like to kindly give us a gift as we begin</span>
          </p>
          <p className="text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">
            <span className="md:hidden">please find the details below</span>
            <span className="hidden md:inline-block">married life, our bank details are below.</span>
          </p>
          <p className="md:hidden text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">for your convenience.</p>

          <div className="flex justify-between items-center w-[299px] md:w-[470px] border-b border-[#3C475E] pb-3 mx-auto mt-[30px] md:mt-[90px] animate" data-animate="zoom-in">
            <p className="text-left text-[14px] md:text-lg font-normal leading-[20px]">
              <span>IDR</span> <br />
              <span className="mt-1">BCA - 3831660455</span> <br />
              <span className="mt-1">Bella Anesia</span>
            </p>
            <button onClick={() => handleCopy('3831660455')} className="w-[50px] h-[30px] border-b border-[#3C475E] text-center" data-animate="zoom-in">
              <span className="text-[14px] md:text-lg font-normal leading-[81%] uppercase">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <div className="flex justify-between items-center w-[299px] md:w-[470px] border-b border-[#3C475E] pb-3 mx-auto mt-[30px] md:mt-[42px] animate" data-animate="zoom-in">
            <p className="text-left text-[14px] md:text-lg font-normal leading-[20px]">
              <span>SGD</span> <br />
              <span className="mt-1">DBS Bank (Singapore) - 249483079</span> <br />
              <span className="mt-1">Steven Theodorus Dirjayanto</span>
            </p>
            <button onClick={() => handleCopy2('249483079')} className="w-[50px] h-[30px] border-b border-[#3C475E] text-center" data-animate="zoom-in">
              <span className="text-[14px] md:text-lg font-normal leading-[81%] uppercase">{copied2 ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}