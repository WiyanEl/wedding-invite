'use client'

export default function Footer() {
  return (
    <footer id="footer" className="footer relative w-full h-[710] bg-cover bg-center">
      <div className="relative flex flex-col items-center justify-center h-full text-[#FEFBF0] text-center">
        <h3 className="font-cormorant font-normal text-[28px] leading-none uppercase animate-fade-up">
          thank you
        </h3>
        <p className="font-figtree font-normal text-xs leading-[18px] mt-[11px]">
          It would be a joy and honor for us to have you join our <br /> celebration and share your blessings.
        </p>
      </div>
      <img src="/images/adam-dan-yohanna/logo-provite.png" className="absolute pointer-events-none bottom-0 left-1/2 -translate-x-1/2 w-[89px]" alt="" />
    </footer>
  )
}