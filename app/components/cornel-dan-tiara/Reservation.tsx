'use client'

import { useState } from 'react'
import { useInView } from '@/app/hooks/useInView'

export default function Reservation() {
  const { ref, isVisible } = useInView()
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section id="reservation" className="reservation relative w-full min-h-min bg-[#F6F6F4]">
        <div className="flex flex-col items-center py-[80px] h-full text-[#3B3B3B] text-center font-outfit font-normal text-xs leading-[18px]" ref={ref}>
          <h3 className={`font-canela font-thin text-2xl leading-[22px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            rsvp
          </h3>
          <p className={`text-xs leading-[15px] mt-[49px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            Dear Mr. /Mrs. / Ms.
          </p>
          <p className={`text-xs leading-[15px] mt-[14px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            .............
          </p>
          <p className={`text-xs leading-[20px] mt-[49px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            Kindly confirm your attendance before
          </p>
          <p className={`font-bold text-xs leading-[20px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            02 May 2026
          </p>
          <div className={`grid grid-cols-2 gap-5 mt-[31px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            <button type="button"  onClick={() => {
              setAttendance('attend')
              setShowModal(true)
              }} className={`w-[90px] h-[30px] cursor-pointer flex justify-center items-center font-figtree font-semibold text-xs leading-[14.96px] uppercase
              ${attendance === 'attend'
                ? 'bg-[#4E4E4E] text-[#FEFBF0]'
                : 'bg-transparent border border-[#4E4E4E] text-[#635953]'}`}
              >
                attend
            </button>
            <button type="button"  onClick={() => setAttendance('not')} className={`w-[90px] h-[30px] cursor-pointer flex justify-center items-center font-figtree font-semibold text-xs leading-[14.96px] uppercase
              ${attendance === 'attend'
                ? 'bg-transparent border border-[#4E4E4E] text-[#635953]'
                : 'bg-[#4E4E4E] text-[#FEFBF0]'}`}
              >
                not attend
            </button>
          </div>
          <p className={`font-figtree text-xs text-[#635953] leading-[14.96px] uppercase mt-[43px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            are you sure?
          </p>
          <button type="button" className={`w-[200px] h-[30px] cursor-pointer flex justify-center items-center font-figtree font-semibold text-xs leading-[14.96px] uppercase bg-[#4E4E4E] text-[#FEFBF0] mt-[51px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            confirm not attend
          </button>
          <p className={`font-figtree text-[11px] text-[#635953] leading-[14.96px] mt-[43px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            Having trouble with RSVP?
          </p>
          <button type="button" className={`w-[200px] h-[30px] cursor-pointer flex gap-2 justify-center items-center border font-figtree font-semibold text-xs uppercase bg-[#4E4E4E] text-[#FEFBF0] mt-[22px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            <img src="/images/cornel-dan-tiara/icon-cs.png" alt="Icon CS" className="w-[18px] h-[23px]" />
            <span>chat helpdesk team</span>
          </button>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#000000A6]"
            onClick={() => setShowModal(false)}
          />
          <div className="relative flex flex-col items-center text-center z-10 w-[290px] py-[39px] bg-[#FEFBF0] rounded-[10px] font-noto font-medium text-[#3B3B3B] animate-scale-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 left-3 font-ibm font-medium text-xl leading-none"
            >
              x
            </button>
            <h3 className="font-extrabold text-base uppercase">
              RSVP CLOSED
            </h3>
            <p className="text-xs mt-[18px] leading-[16px]">
              Reservasi telah ditutup. <br />
              Untuk bantuan atau reservasi manual, <br />
              silahkan hubungi tim kami.
            </p>
            <p className="text-xs mt-[18px] leading-[16px]">
              Reservations are now closed. <br />
              For assistance or manual reservations, <br />
              please contact our team.
            </p>
            <button type="button" className={`w-[200px] h-[30px] rounded-[10px] cursor-pointer flex gap-2 justify-center items-center border font-figtree font-semibold text-xs uppercase bg-[#4E4E4E] text-[#FEFBF0] mt-[22px]`}>
              <img src="/images/cornel-dan-tiara/icon-cs.png" alt="Icon CS" className="w-[18px] h-[23px]" />
              <span>chat helpdesk team</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}