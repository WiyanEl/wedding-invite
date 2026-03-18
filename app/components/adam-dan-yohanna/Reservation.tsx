'use client'

import { useState } from 'react'

export default function Reservation() {
  const [attendance, setAttendance] = useState('attend')

  return (
    <section id="reservation" className="reservation profile relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-[#B95F38] opacity-[0.12] mix-blend-multiply" />
      <img src="/images/adam-dan-yohanna/img-bl-reservation.png" className="absolute pointer-events-none bottom-0 w-[175]" alt="" />
      <div className="relative z-10 flex flex-col items-center pt-[77px] pb-[198px] h-full text-[#635953] text-center">
        <h3 className="font-cormorant font-normal text-[28px] leading-[18px] uppercase animate-fade-up">
          rsvp
        </h3>
        <p className="font-figtree font-normal text-xs leading-[15px] mt-[15px] animate-fade-up">
          Dear Mr. /Mrs. / Ms.
        </p>
        <p className="font-figtree font-normal text-[11px] leading-[15px] mt-[14px] animate-fade-up">
          .............
        </p>
        <p className="font-figtree font-normal text-xs leading-[18px] mt-[37px] animate-fade-up">
          Kindly confirm your attendance before
        </p>
        <p className="font-figtree font-bold text-xs leading-[18px] animate-fade-up">
          07 February 2026
        </p>
        <div className="grid grid-cols-2 gap-5 mt-[35px]">
          <button type="button"  onClick={() => setAttendance('attend')} className={`w-[109px] h-[26px] cursor-pointer rounded-[5px] flex justify-center items-center border font-figtree font-semibold text-xs uppercase
            ${attendance === 'attend'
              ? 'bg-[#889061] border-[#889061] text-white'
              : 'bg-transparent border-[#889061] text-[#889061]'}`}
            >
              attend
          </button>
          <button type="button"  onClick={() => setAttendance('not')} className={`w-[109px] h-[26px] cursor-pointer rounded-[5px] flex justify-center items-center border font-figtree font-semibold text-xs uppercase
            ${attendance === 'attend'
              ? 'bg-transparent border-[#889061] text-[#889061]'
              : 'bg-[#889061] border-[#889061] text-white'}`}
            >
              not attend
          </button>
        </div>
        <p className="font-figtree font-normal text-xs leading-[14.96px] mt-[37px] uppercase animate-fade-up">
          are you sure?
        </p>
        <button type="button" className="w-[240px] h-[26px] cursor-pointer rounded-[5px] flex justify-center items-center border font-figtree font-semibold text-xs uppercase bg-[#889061] border-[#889061] text-white mt-[37px]">
          confirm not attend
        </button>
        <p className="font-figtree font-normal text-[11px] leading-[14.96px] mt-[47px] animate-fade-up">
          Having trouble with RSVP?
        </p>
        <button type="button" className="w-[240px] h-[26px] cursor-pointer rounded-[5px] flex gap-2 justify-center items-center border font-figtree font-semibold text-xs uppercase bg-[#889061] border-[#889061] text-white mt-[22px]">
          <img src="/images/adam-dan-yohanna/icon-cs.png" alt="Icon CS" className="w-[18px] h-[23px]" />
          <span>chat helpdesk team</span>
        </button>
      </div>
    </section>
  )
}