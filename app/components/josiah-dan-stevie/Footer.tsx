'use client'

import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Footer({ isOpen, isMobile }: Props) {
  return (
    <>
      <footer id="footer" className="footer relative z-30 w-full min-h-screen bg-center bg-cover bg-[url('/images/josiah-dan-stevie/bg-footer.png')]">
        <div className="relative h-screen text-center pt-[160px] md:pt-[140px] text-[#FEF8EF]">
          <h3 className="font-romantic font-normal text-[38px] leading-[22px] animate fade-up" data-animate="fade-up">Thank You</h3>
          <div className="absolute bottom-[24px] w-full h-[38px] md:h-[85px] flex justify-center items-center">
            <Image src="/images/josiah-dan-stevie/logo-provite.png" alt="Picture of Logo Profite" width={149} height={65} className="w-[89px] md:w-[149px]" />
          </div>
        </div>
      </footer>
    </>
  )
}