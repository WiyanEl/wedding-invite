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
        <footer id="footer" className="footer relative w-full min-h-screen bg-bottom bg-cover bg-[url('/images/ryan-dan-inggrid/bg-footer.png')]">
          <div className="relative h-screen text-center pt-[97px] md:pt-[136px] font-lora text-white">
            <h2 className="font-kunstler text-[64px] md:text-[96px] font-normal leading-[22px] md:leading-[22px] animate fade-up" data-animate="fade-up">Thank You</h2>
            <p className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px] mt-[33px] md:mt-[70px] animate" data-animate="fade-up">
              <span>For being part of our journey.</span> <br />
              <span>We look forward to</span> <br className="md:hidden" />
              <span>celebrating love, laughter, and</span> <br />
              <span>happily ever after with you!</span>
            </p>
            <h6 className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px] mt-2.5 md:mt-[22px] animate" data-animate="fade-up">#oureverlastINGstoRY</h6>
            <div className="absolute bottom-[38px] md:bottom-[85px] mb-4 md:mb-[38px] left-1/2 -translate-x-1/2">
              <Image src="/images/ryan-dan-inggrid/img-logo-ri.png" alt="Picture of Logo RI" width={79} height={51} className="md:w-[132px] md:h-[84px]" />
            </div>
            <div className="absolute bottom-0 w-full h-[38px] md:h-[85px] flex justify-center items-center bg-[#1B1C1D] mt-4">
              <Image src="/images/ryan-dan-inggrid/logo-provite-new.png" alt="Picture of Logo Profite" width={149} height={65} className="w-[89px] md:w-[149px]" />
            </div>
          </div>
        </footer>
      ) : null}
    </>
  )
}