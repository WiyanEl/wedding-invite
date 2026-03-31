'use client'

import { useInView } from '@/app/hooks/useInView'

export default function Footer() {
  const { ref, isVisible } = useInView()

  return (
    <footer id="footer" className="footer relative w-full min-h-min bg-[#4E4E4E]">
      <div className="flex flex-col items-center pt-[80px] h-full text-white font-outfit font-normal text-xs leading-[16px]">
        <div className="w-[280px] min-h-min flex flex-col items-center" ref={ref}>
          <img src="/images/cornel-dan-tiara/img-footer.png" alt="Image Footer" className={`w-full ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
          <h3 className={`font-thin text-2xl leading-[22px] uppercase mt-[34px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            thank you
          </h3>
          <p className={`mt-[29px] text-center ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            It would be a joy and an honor for us to have you join <br /> 
            our celebration and share your blessings.
          </p>
          <img src="/images/cornel-dan-tiara/logo-provite.png" alt="Image Logo Provite" className={`w-[89px] mt-[74px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
        </div>
      </div>
    </footer>
  )
}