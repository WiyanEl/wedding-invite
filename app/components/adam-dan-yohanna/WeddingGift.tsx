'use client'

import { useInView } from '@/app/hooks/useInView'

export default function WeddingGift() {
  const { ref, isVisible } = useInView()

  return (
    <section id="wedding-gift" className="wedding-gift relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-[#B95F38] opacity-[0.90] mix-blend-multiply" />
      <img src="/images/adam-dan-yohanna/img-br-wedding-gift.png" className="absolute pointer-events-none bottom-0 right-0 w-[140px]" alt="" />
      <div className="relative z-10 flex flex-col items-center py-[77px] h-full text-[#FEFBF0] text-center">
        <h3 ref={ref} className={`font-cormorant font-normal text-[28px] leading-[18px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          wedding gift
        </h3>
        <p ref={ref} className={`font-figtree font-light text-sx leading-[18px] mt-[37px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Your presence and prayers <br />
          are the greatest blessing to us
          <br />
          <br />
          Should you wish to honor us with a gift, <br />
          please find the details below <br />
          for your convenience.
        </p>
        <div ref={ref} className={`w-full max-w-[205px] text-[#FEFBF0] mt-[49px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          <div className="flex justify-between items-center">
            <div className="text-left font-figtree font-normal text-[10px] leading-[111.00000000000001%] uppercase">
              <p>bca</p>
              <p>1234567891011</p>
              <p>provite</p>
            </div>
            <div className="w-[46px] border-b border-[#FEFBF0]">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('1234567891011')
                }}
                className="font-figtree font-normal text-[10px] leading-[111.00000000000001%] uppercase cursor-pointer"
              >
                copy
              </button>
            </div>
          </div>
          <div className="border-t border-[#FEFBF0] mt-1" />
        </div>
        <div ref={ref} className={`w-full max-w-[205px] text-[#FEFBF0] mt-[32px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          <div className="flex justify-between items-center">
            <div className="text-left font-figtree font-normal text-[10px] leading-[111.00000000000001%] uppercase">
              <p>mandiri</p>
              <p>1234567891011</p>
              <p>provite</p>
            </div>
            <div className="w-[46px] border-b border-[#FEFBF0]">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('1234567891011')
                }}
                className="font-figtree font-normal text-[10px] leading-[111.00000000000001%] uppercase cursor-pointer"
              >
                copy
              </button>
            </div>
          </div>
          <div className="border-t border-[#FEFBF0] mt-1" />
        </div>
      </div>
    </section>
  )
}