'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
  params: string
}

export default function Dresscode({ isOpen, isMobile, params }: Props) {
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="relative z-10 w-full min-h-screen overflow-hidden bg-[url('/images/steven-dan-bella/bg-dresscode-mobile.png')] md:bg-[url('/images/steven-dan-bella/bg-dresscode.png')] bg-cover bg-top bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-[#7A86A114]" />
        <div id="dresscode" className="relative z-10 text-center h-full pt-[148px] md:pt-[180px] font-century text-[#3C475E] overflow-hidden">
          <h2 className="font-constantia text-2xl md:text-[48px] font-normal leading-[111.00000000000001%] uppercase animate" data-animate="zoom-in">dress code</h2>
          <Image src="/images/steven-dan-bella/img-line-title.png" alt="Picture of Garis Bawah Judul" width={276} height={37} className="w-[155px] md:w-[276px] mx-auto mt-2 md:mt-4 animate" data-animate="zoom-in" />

          <p className="text-[14px] md:text-xl font-normal leading-[20px] md:leading-[28px] mt-[49px] animate" data-animate="zoom-in">To support our wedding theme,</p>
          <p className="text-[14px] md:text-xl font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">we request our guests to</p>
          <p className="text-[14px] md:text-xl font-normal leading-[20px] md:leading-[28px] mt-0.5 animate" data-animate="zoom-in">dress as follow on our special day.</p>

          {/* <Image src="/images/steven-dan-bella/img-dresscode.png" alt="Picture of Dresscode" width={120} height={181} className="mx-auto mt-4 animate" data-animate="zoom-in" /> */}

          <p className="text-[14px] md:text-xl font-normal leading-[25px] md:leading-[20px] uppercase mt-14 animate" data-animate="zoom-in">formal attire</p>
          <p className="text-[14px] md:text-xl font-normal leading-0.5 md:leading-[28px] mt-2 animate" data-animate="zoom-in">Open Color Palette</p>
        </div>
        <div id="reservation" className="relative z-10 text-center h-full pt-[106px] md:pt-[205px] pb-[183px] md:pb-[239px] font-century text-[#3C475E]">
          <h2 className="font-constantia text-2xl md:text-[48px] font-normal leading-[111.00000000000001%] uppercase animate" data-animate="zoom-in">rsvp</h2>
          <Image src="/images/steven-dan-bella/img-line-title.png" alt="Picture of Garis Bawah Judul" width={276} height={37} className="w-[155px] md:w-[276px] mx-auto mt-2 md:mt-4 animate" data-animate="zoom-in" />

          <p className="text-[14px] md:text-xl font-normal leading-[15px] mt-[49px] md:mt-[55px] animate" data-animate="zoom-in">Dear Mr. /Mrs. / Ms.</p>
          <p className="text-[14px] md:text-xl font-normal leading-[15px] mt-[26px] md:mt-[48px] capitalize animate" data-animate="zoom-in">{params ?? '........'}</p>

          <p className="text-[14px] md:text-xl font-normal leading-[20px] md:leading-[26px] mt-[24px] md:mt-[48px] animate" data-animate="zoom-in">Kindly confirm your attendance before</p>
          <p className="text-[14px] md:text-xl font-normal leading-[20px] md:leading-[26px] mt-0.5 animate" data-animate="zoom-in">27 June 2026</p>

          <div className="flex justify-between w-[301px] md:w-[470px] mx-auto mt-[40px] md:mt-[52px] animate" data-animate="zoom-in">
            <button type="button" onClick={() => {
              setAttendance('attend')
              setShowModal(true)
              }} className={`w-[103px] md:w-[223px] h-[33px] md:h-[40px] rounded-[71px] md:rounded-[38px] flex justify-center items-center ${attendance == 'attend' ? 'bg-[#3C475E]' : 'bg-transparent border-[0.5px] border-[#3C475E]'}`}>
                <span className={`text-[14px] md:text-lg font-normal leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-white' : 'text-[#3C475E]'}`}>attend</span>
            </button>
            <button type="button" onClick={() => {
              setAttendance('not')
              setShowModal(true)
              }} className={`w-[173px] md:w-[223px] h-[33px] md:h-[40px] rounded-[71px] md:rounded-[38px] flex justify-center items-center ${attendance == 'attend' ? 'bg-transparent border-[0.5px] border-[#3C475E]' : 'bg-[#3C475E]'}`}>
                {/* {isMobile ? ( */}
                  <span className={`text-[14px] md:text-lg font-normal leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#3C475E]' : 'text-white'}`}>unable to attend</span>
                {/* ) : (
                  <span className={`text-[14px] font-normal leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[60564D]' : 'text-white'}`}>not attend</span>
                )} */}
            </button>
          </div>

          <p className="text-[14px] md:text-xl font-normal leading-[14.96px] mt-[37px] md:mt-[42px] animate" data-animate="zoom-in">Confirm your selection?</p>

          <div className="mt-[28px] md:mt-[43px] animate" data-animate="zoom-in">
            <button onClick={() => {
              setAttendance('not')
              setShowModal(true)
            }} type="button" className="flex justify-center items-center w-[222px] md:w-[368px] h-[33px] md:h-[40px] rounded-[71px] md:rounded-[38px] bg-[#3C475E] mx-auto">
              <span className="text-[14px] md:text-lg md font-normal leading-[14.96px] text-white uppercase">confirm not attend</span>
            </button>
          </div>
          <p className="md:hidden text-xs font-normal leading-[16px] mt-[54px] animate" data-animate="zoom-in">If you need assistance with your RSVP,</p>
          <p className="md:hidden text-xs font-normal leading-[16px] mt-0.5 animate" data-animate="zoom-in">please contact our support team.</p>
          <p className="hidden md:block text-xl font-normal leading-[14.96px] mt-[80px] animate" data-animate="zoom-in">Having trouble with RSVP?</p>

          <div className="mt-[33px] md:mt-[45px] animate" data-animate="zoom-in">
            <Link href="https://wa.me/6289671650843" target="_blank" className="flex justify-center items-center w-[160px] md:w-[212px] h-[33px] md:h-[40px] rounded-[55px] bg-[#12877B] mx-auto">
              <Image src="/images/steven-dan-bella/icon-whatsapp.png"  alt="Picture of Icon WhatsApp" width={16} height={16} className="mr-2" />
              <span className="font-ovo text-[14px] md:text-lg font-normal leading-[14.96px] md:leading-[26px] text-white uppercase">chat support</span>
            </Link>
          </div>

        </div>

        {/* Image Absolute */}
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-atas-dresscode-rev.png" alt="Picture of Tanaman Kiri Atas Dresscode" width={226} height={365} className="absolute top-0 left-0 w-[95px] md:w-[166px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-atas-dresscode-rev.png" alt="Picture of Tanaman Kanan Atas Dresscode" width={226} height={365} className="absolute top-0 right-0 w-[95px] md:w-[166px] animate" data-animate="fade-left" />

        <Image src="/images/steven-dan-bella/img-tanaman-kiri-bawah-dresscode.png" alt="Picture of Tanaman Kiri Bawah Dresscode" width={415} height={465} className="absolute -bottom-[50px] md:-bottom-[90px] left-0 w-[109px] md:w-[240px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-bawah-dresscode.png" alt="Picture of Tanaman Kanan Bawah Dresscode" width={415} height={465} className="absolute -bottom-[50px] md:-bottom-[90px] right-0 w-[109px] md:w-[240px] animate" data-animate="fade-left" />

        {/* Gif */}
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-2.gif" alt="Animasi Kupu-kupu" width={42} height={42} className="md:hidden absolute bottom-[82px] left-[33px] animate" data-animate="fade-right-butterfly" />
        <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={51} height={51} className="md:hidden absolute bottom-[39px] right-[64px] animate" data-animate="fade-left-butterfly" />
      </section>


      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#E9E9E9A8] backdrop-blur-[6.8px]"
            onClick={() => setShowModal(false)}
          />
          {attendance == 'attend' ? (
            <div className="relative flex flex-col items-center text-center z-10 w-[322px] md:w-[486] h-[360px] md:h-[543px] bg-white rounded-[10px] pt-[38px] md:pt-[57px] border border-[#605F5E33] text-[#605F5E] animate-scale-in">
              <Image src="/images/ryan-dan-inggrid/icon-checked-fill.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
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
              <Image src="/images/ryan-dan-inggrid/icon-checked.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
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
  )
}