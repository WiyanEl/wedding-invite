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
        <footer id="footer" className="footer relative w-full min-h-screen bg-bottom bg-cover bg-[url('/images/ryan-dan-catarina/bg-footer-mobile-rev.png')] md:bg-[url('/images/ryan-dan-catarina/bg-footer.png')]">
          <div className="relative h-screen text-center pt-[92px] md:pt-[140px] font-bellmt text-white">
            <h2 className="font-bickham text-[40px] md:text-[96px] font-bold leading-[22px] animate" data-animate="fade-up">Thank You</h2>
            <p className="text-xs md:text-[20px] font-normal leading-[20px] md:leading-[26px] mt-5 md:mt-[53px] animate" data-animate="fade-up">
              <span>for being part of our journey</span> <br />
              <span className="mt-2">We look forward to celebrating love and laughter</span> <br />
              <span className="mt-2">with you.</span>
            </p>
            <div className="absolute bottom-[24px] w-full h-[38px] md:h-[85px] flex justify-center items-center">
              <Image src="/images/ryan-dan-catarina/logo-provite.png" alt="Picture of Logo Profite" width={149} height={65} className="w-[89px] md:w-[149px]" />
            </div>
          </div>
        </footer>
      ) : null}
    </>
  )
}