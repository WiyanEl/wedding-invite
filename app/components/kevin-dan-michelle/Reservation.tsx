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
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div id="reservation" className="relative z-10 w-full">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorant text-[#DFD28F] pt-[115px] pb-[132px]">
          <h2 className="font-milyuna text-2xl leading-[25px] uppercase animate" data-animate="zoom-in">rsvp</h2>
          <Image src="/images/kevin-dan-michelle/img-garis-judul-mobile.png" alt="Picture of garis judul" width={109} height={10} className="mt-1 mx-auto animate" data-animate="zoom-in" />

          <p className="text-[14px] font-normal leading-[15px] mt-[35px] animate" data-animate="zoom-in">Dear,</p>
          <p className="text-[14px] font-normal leading-[15px] mt-[26px] capitalize animate" data-animate="zoom-in">{params ?? '........'}</p>

          <p className="text-[14px] font-normal leading-[20px] mt-[24px] animate" data-animate="zoom-in">Kindly confirm your attendance before</p>
          <p className="text-[14px] font-normal leading-[20px] mt-0.5 animate" data-animate="zoom-in">12 September 2026</p>

          <div className="flex justify-between w-[262px] md:w-[470px] mx-auto mt-[30px] md:mt-[52px] animate" data-animate="zoom-in">
            <button type="button" onClick={() => {
              setAttendance('attend')
              setShowModal(true)
              }} className={`w-[121px] md:w-[223px] h-[40px] md:h-[40px] rounded-[6px] md:rounded-[38px] flex justify-center items-center ${attendance == 'attend' ? 'bg-[#CDA96A]' : 'bg-transparent border-[0.5px] border-[#CDA96A]'}`}>
                <span className={`text-[14px] md:text-lg font-normal leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-white' : 'text-[#CDA96A]'}`}>attend</span>
            </button>
            <button type="button" onClick={() => {
              setAttendance('not')
              setShowModal(true)
              }} className={`w-[121px] md:w-[223px] h-[40px] md:h-[40px] rounded-[6px] md:rounded-[38px] flex justify-center items-center ${attendance == 'attend' ? 'bg-transparent border-[0.5px] border-[#CDA96A]' : 'bg-[#CDA96A]'}`}>
                {/* {isMobile ? ( */}
                  <span className={`text-[14px] md:text-lg font-normal leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-white' : 'text-white'}`}>unable to <br /> attend</span>
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
            }} type="button" className="flex justify-center items-center w-[198px] md:w-[368px] h-[33px] md:h-[40px] rounded-[6px] md:rounded-[38px] bg-[#CDA96A] mx-auto">
              <span className="text-[14px] md:text-lg md font-normal leading-[14.96px] text-white uppercase">confirm not attend</span>
            </button>
          </div>
          <p className="md:hidden text-xs font-normal leading-[16px] mt-[54px] animate" data-animate="zoom-in">If you need assistance with your RSVP,</p>
          <p className="md:hidden text-xs font-normal leading-[16px] mt-0.5 animate" data-animate="zoom-in">please contact our support team.</p>

          <div className="mt-[33px] md:mt-[45px] animate" data-animate="zoom-in">
            <Link href="https://wa.me/6289671650843" target="_blank" className="flex justify-center items-center w-[198px] md:w-[212px] h-[33px] md:h-[40px] rounded-[6px] bg-[#12877B] mx-auto">
              <Image src="/images/kevin-dan-michelle/icon-whatsapp.png"  alt="Picture of Icon WhatsApp" width={16} height={16} className="mr-2" />
              <span className="font-ovo text-[14px] md:text-lg font-normal leading-[14.96px] md:leading-[26px] text-white uppercase">chat support</span>
            </Link>
          </div>

          {/* Image Absolute */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-rsvp-mobile.png" alt="Picture of tanaman kanan bawah" width={283} height={283} className="absolute -bottom-[107px] right-0 w-[193px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-rsvp-2-mobile.png" alt="Picture of tanaman kanan bawah" width={142} height={142} className="absolute -bottom-[65px] right-[55px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-bintang-bawah-rsvp-mobile.png" alt="Picture of bintang bawah" width={347} height={347} className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-rsvp-mobile.png" alt="Picture of bintang bawah" width={94} height={94} className="absolute -bottom-[20px] left-[80px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-rsvp-mobile.png" alt="Picture of tanaman kiri bawah" width={283} height={283} className="absolute -bottom-[110px] left-0 w-[190px] pointer-events-none" />
        </div>

        {/* Image Absolute */}
        <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-rsvp-mobile.png" alt="Picture of tanaman kiri atas" width={252} height={252} className="absolute -top-[75px] left-0 w-[225px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-bintang-atas-kanan-rsvp-mobile.png" alt="Picture of bintang kanan atas" width={485} height={485} className="absolute -top-[275px] right-0 w-[315px] pointer-events-none" />
      </div>


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