'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
  params:string
}

export default function Reservation({ isOpen, isMobile, params }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-reservation-mobile.png" : "/images/weiliang-dan-cecillia/bg-reservation.png" : "/images/weiliang-dan-cecillia/bg-reservation-mobile.png"
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)
  const [selectedMatrimony, setSelectedMatrimony] = useState(false);
  const [selectedCanape, setSelectedCanape] = useState(false);

  return (
    <>
      {isOpen ? (
        <>
          <section id="reservation" className="reservation relative w-full bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
            <div className="relative overflow-hidden">
              <Image src="/images/weiliang-dan-cecillia/img-tanaman-kanan-reservation.png" alt="Tanaman Kanan" width={149} height={484} className={`absolute top-[95px] right-0 animate`} data-animate="fade-left" />
              <Image src="/images/weiliang-dan-cecillia/img-tanaman-kiri-reservation.png" alt="Tanaman Kiri" width={146} height={196} className={`absolute top-[96px] left-0 animate`} data-animate="fade-right" />
              <div className="flex flex-col items-center text-center h-full pt-[39px] pb-[89px] md:pt-[86px] md:pb-[233px] font-perpetua font-normal text-[#724232]">
                <Image src="/images/weiliang-dan-cecillia/img-altar-reservation.png" alt="Gambar Altar" width={224} height={160} className="animate" data-animate="zoom-in" />
                <h3 className="font-channe text-2xl leading-[26px] uppercase md:mt-[21px] animate" data-animate="zoom-in">rsvp</h3>
                <p className="text-xs md:text-[14px] leading-[15px] mt-[36px] animate" data-animate="zoom-in">
                  <span>Dear Mr. /Mrs. / Ms.</span> <br />
                  <span className="capitalize">{params ?? '........'}</span> <br />
                  <span>Kindly confirm your attendance before</span> <br />
                  <span>10 January 2000</span>
                </p>
                <div className={`relative z-20 flex gap-5 mt-[32px] animate`} data-animate="zoom-in">
                  <button type="button"  onClick={() => {
                    setAttendance('attend')
                    setShowModal(true)
                    }} className={`w-[70px] h-[26px] cursor-pointer flex justify-center items-center text-xs md:text-[14px] leading-[14.96px] uppercase
                    ${attendance === 'attend'
                      ? 'bg-[#AB6A7C] text-[#E6D8DC] border-[0.5px] border-[#AB6A7C]'
                      : 'bg-[#E6D8DC] border-[0.5px] border-[#F9D6D6] text-[#AB6A7C]'}`}
                    >
                      attend
                  </button>
                  <button type="button"  onClick={() => setAttendance('not')} className={`w-[90px] h-[26px] cursor-pointer flex justify-center items-center text-xs md:text-[14px] leading-[14.96px] uppercase
                    ${attendance === 'attend'
                      ? 'bg-[#E6D8DC] border-[0.5px] border-[#F9D6D6] text-[#AB6A7C]'
                      : 'bg-[#AB6A7C] text-[#E6D8DC] border-[0.5px] border-[#AB6A7C]'}`}>
                      not attend
                  </button>
                </div>
                <p className="relative z-20 text-xs md:text-[14px] leading-[15px] mt-[18px] animate" data-animate="zoom-in">Chosee event session to attend</p>
                <div className="animate" data-animate="zoom-in">
                  <div
                    onClick={() => setSelectedMatrimony(!selectedMatrimony)}
                    className="relative flex items-center w-[200px] h-[26px] bg-[#AB6A7C] pl-[7px] cursor-pointer mt-[21px]"
                  >
                    <div className="w-[13px] h-[13px] border border-[#AB6A7C] flex items-center justify-center bg-[#E6D8DC] z-10">
                      {selectedMatrimony && (
                        <div className="w-[7px] h-[7px] bg-[#AB6A7C]" />
                      )}
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs md:text-[14px] text-[#E6D8DC] uppercase pointer-events-none">
                      holy matrimony
                    </span>
                  </div>
                  <div
                    onClick={() => setSelectedCanape(!selectedCanape)}
                    className="relative flex items-center w-[200px] h-[26px] bg-[#AB6A7C] pl-[7px] cursor-pointer mt-[14px]"
                  >
                    <div className="w-[13px] h-[13px] border border-[#AB6A7C] flex items-center justify-center bg-[#E6D8DC] z-10">
                      {selectedCanape && (
                        <div className="w-[7px] h-[7px] bg-[#AB6A7C]" />
                      )}
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs md:text-[14px] text-[#E6D8DC] uppercase pointer-events-none">
                      CANAPÉ & COCKTAIL PARTY
                    </span>
                  </div>
                </div>
                <p className="relative z-20 text-xs md:text-[14px] leading-[15px] mt-[19px] animate" data-animate="zoom-in">Confirm Attendance</p>
                <div className="animate" data-animate="zoom-in">
                  <button type="button" className="w-[200px] h-[26px] flex items-center justify-center border-[0.5px] border-[#AB6A7C] hover:bg-[#AB6A7C] hover:text-[#E6D8DC] text-xs md:text-[14px] leading-[14.96px] mt-[19px]">Yes</button>
                </div>
                <p className="relative z-20 text-xs md:text-[14px] leading-[15px] mt-[20px] animate" data-animate="zoom-in">Having trouble with RSVP?</p>
                <div className="animate" data-animate="zoom-in">
                  <button type="button" className="w-[200px] h-[26px] flex gap-[13px] items-center justify-center border-[0.5px] border-[#AB6A7C] hover:bg-[#AB6A7C] hover:text-[#E6D8DC] text-xs md:text-[14px] leading-[14.96px] mt-[19px]">
                    <Image src="/images/weiliang-dan-cecillia/img-altar-reservation.png" alt="Gambar Altar" width={14} height={17} />
                    <span>Chat Helpdesk Team</span>
                  </button>
                </div>
              </div>
            </div>
            <Image src="/images/weiliang-dan-cecillia/img-tanaman-tengah-reservation.png" alt="Tumbuhan Bawah" width={468} height={185} className={`absolute z-10 w-full bottom-[-210px] md:bottom-[-210px] right-0 animate`} data-animate="fade-up" />
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
                <p className="text-xs md:text-[14px] mt-[18px] leading-[16px]">
                  Reservasi telah ditutup. <br />
                  Untuk bantuan atau reservasi manual, <br />
                  silahkan hubungi tim kami.
                </p>
                <p className="text-xs md:text-[14px] mt-[18px] leading-[16px]">
                  Reservations are now closed. <br />
                  For assistance or manual reservations, <br />
                  please contact our team.
                </p>
                <button type="button" className={`w-[200px] h-[30px] rounded-[10px] cursor-pointer flex gap-2 justify-center items-center border font-figtree font-semibold text-xs md:text-[14px] uppercase bg-transparent border-[#AB6A7C] text-[#AB6A7C] mt-[22px]`}>
                  <img src="/images/weiliang-dan-cecillia/icon-cs.png" alt="Icon CS" className="w-[18px] h-[23px]" />
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