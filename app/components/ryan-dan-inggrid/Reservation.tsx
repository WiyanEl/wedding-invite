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
  const bgImage = isMobile ? "/images/ryan-dan-inggrid/bg-profile-mobile.png" : "/images/ryan-dan-inggrid/bg-profile.png"
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {isOpen ? (
        <>
          <section id="reservation" className="reservation relative w-full h-min-screen md:h-screen">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full">
                <Image src="/images/ryan-dan-inggrid/img-rsvp-2.png"  alt="Picture of Image Reservation" width={392} height={577} className="md:hidden w-full h-full" />
                <Image src="/images/ryan-dan-inggrid/img-rsvp-new.png"  alt="Picture of Image Reservation" width={744} height={960} className="hidden md:block w-full h-full" />
              </div>
              <div className="w-full relative text-center font-lora text-[#1B1C1D] pt-[68px] md:pt-[142px] pb-[68px] bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
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
                    setShowModal(true)
                    }} className={`w-[109px] md:w-[172px] h-[30px] md:h-[40px] rounded-[71px] md:rounded-[38px] flex justify-center items-center ${attendance == 'attend' ? 'bg-transparent border-[0.5px] border-[#1B1C1D]' : 'bg-[#1B1C1D]'}`}>
                      <span className={`text-xs md:text-lg font-semibold md:font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#1B1C1D]' : 'text-[#FEFBF0]'}`}>not attend</span>
                  </button>
                </div>
                <h6 className="text-xs md:text-lg font-normal leading-[14.96px] uppercase mt-[43px] animate" data-animate="fade-up">are you sure?</h6>
                <div className="mt-[43px] md:mt-[42px] animate" data-animate="fade-up">
                  <button onClick={() => {
                    setAttendance('not')
                    setShowModal(true)
                  }} type="button" className="flex justify-center items-center w-[219px] md:w-[368px] h-[30px] md:h-[40px] rounded-[71px] md:rounded-[38px] bg-[#1B1C1D] mx-auto">
                    <span className="text-xs md:text-lg font-semibold md:font-medium leading-[14.96px] text-white uppercase">confirm not attend</span>
                  </button>
                </div>
                <h6 className="text-[11px] md:text-lg font-normal leading-[14.96px] uppercase mt-[43px] md:mt-[81px] animate" data-animate="fade-up">Having trouble with RSVP?</h6>
                <div className="mt-[22px] md:mt-[44px] animate" data-animate="fade-up">
                  <button type="button" className="flex justify-center items-center w-[160px] md:w-[212px] h-[30px] md:h-[40px] rounded-[55px] bg-[#12877B] mx-auto">
                    <Image src="/images/ryan-dan-inggrid/logo-whatsapp.png"  alt="Picture of Icon WhatsApp" width={16} height={16} className="mr-2" />
                    <span className="text-xs md:text-lg font-semibold md:font-medium leading-[14.96px] text-white uppercase">chat support</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-[#E9E9E9A8] backdrop-blur-[6.8px]"
                onClick={() => setShowModal(false)}
              />
              {attendance == 'attend' ? (
                <div className="relative flex flex-col items-center text-center z-10 w-[322px] md:w-[486] h-[360px] md:h-[543px] bg-white rounded-[10px] pt-[38px] md:pt-[57px] border border-[#605F5E33] text-[#605F5E] animate-scale-in">
                  <Image src="/images/ryan-dan-inggrid/icon-checked.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
                  <h6 className="font-noto font-extrabold text-base md:text-[24.13px] leading-none uppercase mt-[18px] md:mt-[22px]">rsvp confirmed</h6>
                  <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                    <span>Konfirmasi kehadiran Anda telah kami terima,</span> <br />
                    <span>kami menantikan kehadiran Anda. Terima kasih</span> <br />
                    <span>atas konfirmasi Anda.</span>
                  </p>
                  <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                    <span>Your attendance has been confirmed, we look</span> <br />
                    <span>forward to welcoming you. Thank you for your</span> <br />
                    <span>confirmation.</span>
                  </p>
                  <div onClick={() => setShowModal(false)} className="absolute bottom-0 flex justify-center items-center w-full h-[52px] md:h-[78px] border-t border-[#605F5E33] cursor-pointer">
                    <span className="font-noto text-[14px] md:text-[21px] font-normal leading-[16px] md:leading-[24px]">Close</span>
                  </div>
                </div>
              ) : (
                <div className="relative flex flex-col items-center text-center z-10 w-[322px] md:w-[486] h-[360px] md:h-[543px] bg-white rounded-[10px] pt-[38px] border border-[#605F5E33] text-[#605F5E] animate-scale-in">
                  <Image src="/images/ryan-dan-inggrid/icon-checked-fill.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
                  <h6 className="font-noto font-extrabold text-base md:text-[24.13px] leading-none uppercase mt-[18px] md:mt-[22px]">rsvp confirmed</h6>
                  <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                    <span>Konfirmasi ketidakhadiran Anda telah kami</span> <br />
                    <span>terima, terima kasih atas respon Anda. Kami</span> <br />
                    <span>menghargai pemberitahuan Anda.</span>
                  </p>
                  <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                    <span>Your response has been received, thank you for</span> <br />
                    <span>your confirmation. We appreciate your</span> <br />
                    <span>response.</span>
                  </p>
                  <div onClick={() => setShowModal(false)} className="absolute bottom-0 flex justify-center items-center w-full h-[52px] md:h-[78px] border-t border-[#605F5E33] cursor-pointer">
                    <span className="font-noto text-[14px] md:text-[21px] font-normal leading-[16px] md:leading-[24px]">Close</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      ) : null}
    </>
  )
}