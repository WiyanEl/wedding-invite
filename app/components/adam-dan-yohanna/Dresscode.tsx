'use client'

export default function Dresscode() {
  return (
    <section id="dresscode" className="dresscode relative w-full min-h-min bg-[#C47959] bg-cover bg-center">
      <img src="/images/adam-dan-yohanna/img-tl-dresscode.png" className="absolute pointer-events-none left-0 w-[186]" alt="" />
      <img src="/images/adam-dan-yohanna/img-br-dresscode.png" className="absolute pointer-events-none bottom-0 right-0 w-[186]" alt="" />
      <div className="flex flex-col items-center py-[138px] h-full text-[#FEFBF0] text-center">
        <h3 className="font-cormorant font-normal text-[28px] leading-[26px] uppercase animate-fade-up">
          dress code
        </h3>
        <p className="font-figtree font-normal text-xs leading-[15px] mt-[17px] animate-fade-up">
          Wearing colors from this palette is appreciated.
        </p>
        <p className="font-figtree font-semibold text-xs leading-[17px] mt-[14px] animate-fade-up">
          Ladies : Dress (No White) <br />
          Gentlemen : Suit (No Batik)
        </p>
        <div className="flex items-center mt-[40px]">
          <div className="w-[60px] h-[60px] rounded-full bg-[#DABF87]" />
          <div className="w-[60px] h-[60px] rounded-full bg-[#A39685] -ml-4" />
          <div className="w-[60px] h-[60px] rounded-full bg-[#D9A496] -ml-4" />
          <div className="w-[60px] h-[60px] rounded-full bg-[#9C735F] -ml-4" />
          <div className="w-[60px] h-[60px] rounded-full bg-[#3A2D24] -ml-4" />
        </div>
      </div>
    </section>
  )
}