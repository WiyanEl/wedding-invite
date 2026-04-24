'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Location({ isOpen, isMobile }: Props) {
  return (
    <>
      {isOpen ? (
        <section id="location" className="location relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/ryan-dan-catarina/white-paper-texture.png')]">
          <div className="absolute inset-0 bg-[#fffdf8]/40" />
          <div className="text-center h-full pt-[87px] md:pt-[88px] pb-[97px] md:pb-[118px] font-bellmt text-[#60564D]">
            <h2 className="font-bickham text-[40px] md:text-[64px] font-bold leading-[111%] animate" data-animate="fade-up">Saturday, 16 May 2026</h2>
            <Image src="/images/ryan-dan-catarina/line-location.png" alt="Picture of Line Location" width={180} height={37} className="w-[116px] h-[24px] md:w-[180px] md:h-[37px] mx-auto mt-2.5 animate" data-animate="fade-up" />
            <div className="text-center mt-[48px] md:mt-[63px]">
              <h3 className="text-[20px] md:text-2xl font-bold leading-[18px] animate" data-animate="fade-up">Holy Matrimony</h3>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-5 md:mt-[40px] animate" data-animate="fade-up">13.00 WIB</p>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-[18px] md:mt-[40px] uppercase animate" data-animate="fade-up">abipraya cahya kawaluyan chapel</p>
              <p className="text-xs md:text-lg font-reguler leading-[20px] mt-1 md:mt-2.5 animate" data-animate="fade-up">
                <span>Jl. Parahyangan Km 3, Kota Baru Parahyangan,</span> <br />
                <span className="inline-block mt-1">Padalarang, Bandung</span>
              </p>
              <Link href="https://maps.app.goo.gl/9vjZkWzgwcpG4T777" target="_blank" className="inline-block border-b border-[#60564D] text-xs md:text-lg font-bold leading-[20px] italic mt-5 md:mt-7 animate" data-animate="fade-up">Guide to Location</Link>
            </div>
            <div className="text-center mt-[55px] md:mt-[64px]">
              <h3 className="text-[20px] md:text-2xl font-bold leading-[18px] animate" data-animate="fade-up">Mangulosi</h3>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-5 md:mt-[40px] animate" data-animate="fade-up">14.30 WIB</p>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-[18px] md:mt-[40px] uppercase animate" data-animate="fade-up">abipraya cahya kawaluyan chapel</p>
              <p className="text-xs md:text-lg font-reguler leading-[20px] mt-1 md:mt-2.5 animate" data-animate="fade-up">
                <span>Jl. Parahyangan Km 3, Kota Baru Parahyangan,</span> <br />
                <span className="inline-block mt-1">Padalarang, Bandung</span>
              </p>
              <Link href="https://maps.app.goo.gl/9vjZkWzgwcpG4T777" target="_blank" className="inline-block border-b border-[#60564D] text-xs md:text-lg font-bold leading-[20px] italic mt-5 md:mt-7 animate" data-animate="fade-up">Guide to Location</Link>
            </div>
            <div className="text-center mt-[55px] md:mt-[64px]">
              <h3 className="text-[20px] md:text-2xl font-bold leading-[18px] animate" data-animate="fade-up">Tea Pai</h3>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-5 md:mt-[40px] animate" data-animate="fade-up">16.00 WIB</p>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-[18px] md:mt-[40px] uppercase animate" data-animate="fade-up">
                <span>pine ballroom</span> <br />
                <span>mason pine hotel</span>
              </p>
              <p className="text-xs md:text-lg font-reguler leading-[20px] mt-1 md:mt-2.5 animate" data-animate="fade-up">
                <span>Jl. Parahyangan Km 1, Kota Baru Parahyangan,</span> <br />
                <span className="inline-block mt-1">Padalarang, Bandung</span>
              </p>
              <Link href="https://maps.app.goo.gl/dv26wkSUY2Qx7EJx7" target="_blank" className="inline-block border-b border-[#60564D] text-xs md:text-lg font-bold leading-[20px] italic mt-5 md:mt-7 animate" data-animate="fade-up">Guide to Location</Link>
            </div>
            <div className="text-center mt-[55px] md:mt-[64px]">
              <h3 className="text-[20px] md:text-2xl font-bold leading-[18px] animate" data-animate="fade-up">Dinner Reception</h3>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-5 md:mt-[40px] animate" data-animate="fade-up">18.00 WIB</p>
              <p className="text-[14px] md:text-[20px] font-bold leading-[20px] mt-[18px] md:mt-[40px] uppercase animate" data-animate="fade-up">
                <span>pine ballroom</span> <br />
                <span>mason pine hotel</span>
              </p>
              <p className="text-xs md:text-lg font-reguler leading-[20px] mt-1 md:mt-2.5 animate" data-animate="fade-up">
                <span>Jl. Parahyangan Km 1, Kota Baru Parahyangan,</span> <br />
                <span className="inline-block mt-1">Padalarang, Bandung</span>
              </p>
              <Link href="https://maps.app.goo.gl/dv26wkSUY2Qx7EJx7" target="_blank" className="inline-block border-b border-[#60564D] text-xs md:text-lg font-bold leading-[20px] italic mt-5 md:mt-7 animate" data-animate="fade-up">Guide to Location</Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}