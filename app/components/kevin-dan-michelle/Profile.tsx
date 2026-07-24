'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Profile({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="profile" className="profile relative z-10 w-full min-h-screen">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorant text-[#DFD28F] pt-[179px] pb-[167px]">
          <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
            We request the honour of your presence <br /> at the wedding of <br /> our beloved son and daughter
          </p>

          <Image src="/images/kevin-dan-michelle/img-pengantin-pria-mobile.png" alt="Picture of Pengantin pria" width={200} height={262} className="w-[200px] mt-[60px] mx-auto animate" data-animate="zoom-in" />
          <h2 className="font-milyuna text-[26px] leading-[30px] mt-[36px] animate" data-animate="zoom-in">dr. Kevin Axel Laurent <br /> Susanto</h2>
          <p className="text-[14px] leading-[20px] font-light mt-5 animate" data-animate="fade-up">
            The Son of
          </p>
          <p className="text-[14px] leading-[24px] font-light mt-3 animate" data-animate="fade-up">
            Mr. Agus Susanto, SE and <br /> Mrs. Cin Mei
          </p>

          <Image src="/images/kevin-dan-michelle/img-pengantin-wanita-mobile.png" alt="Picture of Pengantin wanita" width={200} height={262} className="w-[200px] mt-[55px] mx-auto animate" data-animate="zoom-in" />
          <h2 className="font-milyuna text-[26px] leading-[30px] mt-[36px] animate" data-animate="zoom-in">dr. Michelle Cannissa <br /> Hendrawan</h2>
          <p className="text-[14px] leading-[20px] font-light mt-5 animate" data-animate="fade-up">
            The Daughter of
          </p>
          <p className="text-[14px] leading-[24px] font-light mt-3 animate" data-animate="fade-up">
            Mr. Iwan Hendrawan and <br /> Mrs. Rosmiati
          </p>

          <p className="text-[14px] leading-[20px] mt-[52px] animate" data-animate="fade-up">
            We would be honoured <br /> by your presence and blessing.
          </p>

          {/* Absoulte Image */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-profile-mobile.png" alt="Picture of tanaman kiri bawah" width={243} height={243} className="absolute -bottom-[100px] left-0 w-[217px]" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-profile-mobile.png" alt="Picture of tanaman kanan bawah" width={243} height={243} className="absolute -bottom-[80px] right-0 w-[177px]" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-profile-2-mobile.png" alt="Picture of tanaman kiri bawah" width={88} height={88} className="absolute -bottom-[40px] left-[50px]" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-profile-2-mobile.png" alt="Picture of tanaman kanan bawah" width={121} height={121} className="absolute -bottom-[55px] right-[45px]" />
          <Image src="/images/kevin-dan-michelle/img-bintang-bawah-profile-mobile.png" alt="Picture of bintang bawah" width={409} height={409} className="absolute -bottom-[250px] left-0" />
        </div>

        {/* Absolute Image */}
        <Image src="/images/kevin-dan-michelle/img-bintang-atas-profile-mobile.png" alt="Picture of bintang atas" width={359} height={359} className="absolute -top-[200px] left-0" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-profile-mobile.png" alt="Picture of tanaman atas kiri" width={318} height={390} className="absolute -top-[200px] left-0 w-[179px]" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-profile-mobile.png" alt="Picture of tanaman atas kanan" width={318} height={390} className="absolute -top-[200px] right-0 w-[179px]" />
        <Image src="/images/kevin-dan-michelle/img-bintang-atas-kanan-profile-mobile.png" alt="Picture of bintang atas kanan" width={359} height={359} className="absolute -top-[100px] right-0 w-[229px]" />
        <Image src="/images/kevin-dan-michelle/img-bintang-kiri-samping-pengantin-pria-mobile.png" alt="Picture of bintang samping pengantin pria" width={481} height={481} className="absolute top-[100px] left-0 w-[281px]" />
        <Image src="/images/kevin-dan-michelle/img-bintang-kanan-samping-pengantin-wanita-mobile.png" alt="Picture of bintang samping pengantin wanita" width={481} height={481} className="absolute top-[550px] right-0 w-[261px]" />
      </div>
    </>
  )
}