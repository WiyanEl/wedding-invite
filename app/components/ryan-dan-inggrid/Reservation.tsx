'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
  params: string
}

export default function Reservation({ isOpen, isMobile, params }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/ryan-dan-inggrid/bg-profile-mobile.png" : "/images/ryan-dan-inggrid/bg-profile.png" : "/images/ryan-dan-inggrid/bg-profile-mobile.png"
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {isOpen ? (
        <>
          <section id="reservation" className="reservation relative w-full h-min-screen md:h-screen">
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1">
                <Image src="/images/ryan-dan-inggrid/img-rsvp-2.png"  alt="Picture of Image Reservation" width={392} height={577} className="w-full h-full" />
              </div>
              <div className="flex-1 relative text-center font-lora text-[#1B1C1D] pt-[68px] md:pt-[142px] pb-[68px] bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
                <div className="absolute inset-0 bg-[#EDE7DC]/60" />
                <h2 className="font-kunstler text-[64px] md:text-[96px] font-normal leading-[22px] md:leading-[18px] animate" data-animate="fade-up">Rsvp</h2>
                <h6 className="text-xs md:text-lg font-normal leading-[15px] mt-[73px] md:mt-[59px] animate" data-animate="fade-up">
                  Dear Mr. /Mrs. / Ms.
                </h6>
                <h6 className="text-[11px] md:text-lg font-normal leading-[15px] capitalize mt-[14px] md:mt-[39px] animate" data-animate="fade-up">
                  {params ?? '........'}
                </h6>
                <h6 className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px] mt-[49px] md:mt-[57px] animate" data-animate="fade-up">
                  <span>Kindly confirm your attendance before</span> <br />
                  <span className="font-bold">20 June 2026</span>
                </h6>
                <div className="flex justify-between w-[219px] md:w-[368px] mx-auto mt-[31px] animate" data-animate="fade-up">
                  <button type="button" onClick={() => {
                    setAttendance('attend')
                    setShowModal(true)
                    }} className={`w-[90px] md:w-[172px] h-[30px] md:h-[40px] rounded-[71px] md:rounded-[38px] flex justify-center items-center ${attendance == 'attend' ? 'bg-[#1B1C1D]' : 'bg-transparent border-[0.5px] border-[#1B1C1D]'}`}>
                      <span className={`text-xs md:text-lg font-semibold md:font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#FEFBF0]' : 'text-[#1B1C1D]'}`}>attend</span>
                  </button>
                  <button type="button" onClick={() => {
                    setAttendance('not')
                    }} className={`w-[109px] md:w-[172px] h-[30px] md:h-[40px] rounded-[71px] md:rounded-[38px] flex justify-center items-center ${attendance == 'attend' ? 'bg-transparent border-[0.5px] border-[#1B1C1D]' : 'bg-[#1B1C1D]'}`}>
                      <span className={`text-xs md:text-lg font-semibold md:font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#1B1C1D]' : 'text-[#FEFBF0]'}`}>not attend</span>
                  </button>
                </div>
                <h6 className="text-xs md:text-lg font-normal leading-[14.96px] uppercase mt-[43px] animate" data-animate="fade-up">are you sure?</h6>
                <div className="mt-[43px] md:mt-[42px] animate" data-animate="fade-up">
                  <button type="button" className="flex justify-center items-center w-[219px] md:w-[368px] h-[30px] md:h-[40px] rounded-[71px] md:rounded-[38px] bg-[#1B1C1D] mx-auto">
                    <span className="text-xs md:text-lg font-semibold md:font-medium leading-[14.96px] text-white uppercase">confirm not attend</span>
                  </button>
                </div>
                <h6 className="text-[11px] md:text-lg font-normal leading-[14.96px] uppercase mt-[43px] md:mt-[81px] animate" data-animate="fade-up">Having trouble with RSVP?</h6>
                <div className="mt-[22px] md:mt-[44px] animate" data-animate="fade-up">
                  <button type="button" className="flex justify-center items-center w-[219px] md:w-[368px] h-[30px] md:h-[40px] rounded-[71px] md:rounded-[38px] bg-[#1B1C1D] mx-auto">
                    <Image src="/images/ryan-dan-inggrid/icon-helpdesk.png"  alt="Picture of Icon Helpdesk" width={18} height={23} className="md:w-[28px] md:h-[34px] mr-2" />
                    <span className="text-xs md:text-lg font-semibold md:font-medium leading-[14.96px] text-white uppercase">chat helpdesk team</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-[#000000A6]"
                onClick={() => setShowModal(false)}
              />
              <div className="relative flex flex-col items-center text-center z-10 w-[290px] md:w-[410px] py-[39px] bg-[#FEFBF0] rounded-[10px] font-lora font-medium text-[#3B3B3B] animate-scale-in">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 left-3 font-ibm font-medium text-xl md:text-3xl leading-none"
                >
                  x
                </button>
                <h3 className="font-extrabold text-base md:text-xl uppercase">
                  RSVP CLOSED
                </h3>
                <p className="text-xs md:text-lg mt-[18px] leading-[16px]">
                  Reservasi telah ditutup. <br />
                  Untuk bantuan atau reservasi manual, <br />
                  silahkan hubungi tim kami.
                </p>
                <p className="text-xs md:text-lg mt-[18px] leading-[16px]">
                  Reservations are now closed. <br />
                  For assistance or manual reservations, <br />
                  please contact our team.
                </p>
                <button type="button" className={`w-[200px] md:w-[268px] h-[30px] md:h-[40px] rounded-[10px] md:rounded-[34px] cursor-pointer flex gap-2 justify-center items-center border font-figtree font-semibold text-xs uppercase bg-transparent border-[#1B1C1D] text-[#1B1C1D] mt-[22px]`}>
                  <span>chat helpdesk team</span>
                </button>
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  )
}