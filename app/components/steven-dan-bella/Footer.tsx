'use client'

import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Footer({ isOpen, isMobile }: Props) {
  return (
    <>
      {isOpen ? (
        <footer id="footer" className="footer relative w-full min-h-screen bg-right bg-cover bg-[url('/images/steven-dan-bella/bg-footer-mobile.png')] md:bg-[url('/images/steven-dan-bella/bg-footer.png')]">
          <div className="relative h-screen text-center pt-[119px] md:pt-[205px] font-century text-white">
            <div className="absolute top-0 left-0 w-full h-[373px] md:h-[425px] bg-[linear-gradient(180deg,_#7986A1_0%,_rgba(121,134,161,0)_100%)]" />
            <h2 className="font-constantia text-[40px] md:text-[60px] font-bold md:font-normal leading-[22px] animate" data-animate="zoom-in">Thank You</h2>
            <p className="text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-[33px] md:mt-[39px] animate" data-animate="zoom-in">For being part of our journey.</p>
            <p className="md:hidden text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">We look forward to</p>
            <p className="md:hidden text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">celebrating love, laughter, and</p>
            <p className="hidden md:block text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">We look forward to celebrating love, laughter, and</p>
            <p className="text-[14px] md:text-lg font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">happily ever after with you!</p>
            <div className="absolute bottom-0 w-full h-[49px] md:h-[60px] bg-[#3C475E] flex justify-center items-center">
              <Image src="/images/steven-dan-bella/logo-provite.png" alt="Picture of Logo Profite" width={149} height={65} className="w-[89px] md:w-[119px]" />
            </div>
          </div>
        </footer>
      ) : null}
    </>
  )
}