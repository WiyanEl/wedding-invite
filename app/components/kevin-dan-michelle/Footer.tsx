'use client'

import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Footer({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="footer" className="relative z-10 w-full h-1/2">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorant text-[#DFD28F] pt-[109px] pb-[160px]">
          <h2 className="font-milyuna text-[40px] leading-[22px] animate" data-animate="zoom-in">Thank You</h2>

          <p className="text-[14px] leading-[20px] mt-[25px] animate" data-animate="fade-up">
            For being part of our journey. <br />
            We look forward to celebrating love, <br />
            aughter, and happily ever after with you!
          </p>

          <Image src="/images/kevin-dan-michelle/logo-provite.png" alt="Picture of logo provite" width={89} height={111} className="mt-1 mx-auto animate" data-animate="zoom-in" />

          {/* Image Absolute */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-footer-mobile.png" alt="Picture of tanaman kiri bawah" width={329} height={329} className="absolute bottom-0 left-0 w-[229px]" />
          <Image src="/images/kevin-dan-michelle/img-bintang-bawah-footer-mobile.png" alt="Picture of tanaman kiri bawah" width={553} height={553} className="absolute bottom-0 right-0" />
        </div>
      </div>
    </>
  )
}