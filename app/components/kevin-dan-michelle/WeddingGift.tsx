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

  return (
    <>
      <div id="wedding-gift" className="relative z-10 w-full">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorant text-[#DFD28F] pt-[109px]">
          <h2 className="font-milyuna text-2xl leading-[25px] animate" data-animate="zoom-in">Wedding Gift</h2>
          <Image src="/images/kevin-dan-michelle/img-garis-judul-mobile.png" alt="Picture of garis judul" width={109} height={10} className="mt-1 mx-auto animate" data-animate="zoom-in" />

          <p className="text-[14px] leading-[18px] mt-[35px] animate" data-animate="fade-up">
            Your presence and prayers <br /> are the greatest blessing to us.
          </p>
          <p className="text-[14px] leading-[18px] mt-4 animate" data-animate="fade-up">
            Should you wish to honor us with a gift, <br /> please find the details below <br /> for your convenience.
          </p>

          <div className="flex justify-between items-center w-[241px] md:w-[470px] border-b border-[#DFD28F] pb-3 mx-auto mt-[37px] md:mt-[90px] animate" data-animate="zoom-in">
            <p className="text-left text-[14px] md:text-lg font-normal leading-[20px]">
              <span>IDR</span> <br />
              <span className="mt-1">BCA - 3469991998</span> <br />
              <span className="mt-1">Kevin Axel Laurent Susanto</span>
            </p>
            <button onClick={() => handleCopy('3469991998')} className="w-[50px] h-[30px] border-b border-[#DFD28F] text-center" data-animate="zoom-in">
              <span className="text-[14px] md:text-lg font-normal leading-[81%] uppercase">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Image Absolute */}
          <Image src="/images/kevin-dan-michelle/img-bintang-atas-wedding-gift-mobile.png" alt="Picture of bintang atas" width={347} height={347} className="absolute -top-[220px] left-1/2 -translate-x-1/2" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-wedding-gift-1-mobile.png" alt="Picture of tanaman kiri atas" width={135} height={135} className="absolute -top-[40px] left-0" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-wedding-gift-2-mobile.png" alt="Picture of tanaman kiri atas" width={143} height={143} className="absolute top-[70px] left-0 w-[120px]" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wedding-gift-1-mobile.png" alt="Picture of tanaman kanan atas" width={135} height={135} className="absolute -top-[40px] right-0" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wedding-gift-2-mobile.png" alt="Picture of tanaman kanan atas" width={143} height={143} className="absolute top-[70px] right-0 w-[120px]" />
        </div>
      </div>
    </>
  )
}