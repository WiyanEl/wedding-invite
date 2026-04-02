'use client'

import { useInView } from '@/app/hooks/useInView'
import Link from 'next/link'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Profile({ isOpen, isMobile }: Props) {
  return (
    <>
      {isOpen ? (
        <section id="profile" className="profile relative w-full min-h-min bg-[#F6F6F4]">
          <div className="flex flex-col items-center pt-[76px] md:pt-[71px] pb-[76px] md:pb-[75px] h-full text-[#3B3B3B] text-center font-outfit font-normal">
            <p className="font-medium text-xs leading-[18px] animate" data-animate="zoom-in">
              Together with their families <br />
              invite you to celebrate <br />
              their marriage
            </p>
            <div>
              <img src="/images/cornel-dan-tiara/img-profile-cornel.png" alt="Gambar Cornel" className="w-[200px] mt-[50px] animate" data-animate="zoom-in" />
            </div>
            <h3 className="font-canela font-light text-[28px] leading-[26px] mt-6 animate" data-animate="zoom-in">
              Cornelius <br />
              Kurnia Yonathan
            </h3>
            <p className="font-medium text-xs leading-[20px] mt-[11px] animate" data-animate="zoom-in">
              The Son of
            </p>
            <p className="text-xs leading-[20px] animate" data-animate="zoom-in">
              Mr. Daniel Jonatan and <br />
              Mrs. Tjoa Giok Lan
            </p>
            <div className="mt-[30px] animate" data-animate="zoom-in">
              <Link href="https://instagram.com/cornel.kurnia" target="_blank" className="flex gap-2 items-center justify-center cursor-pointer w-[160px] h-[30px] bg-[#D9D9D9]">
                <img src="/images/cornel-dan-tiara/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
                <p className="text-xs leading-[16px]">
                  cornel.kurnia
                </p>
              </Link>
            </div>
            <div>
              <img src="/images/cornel-dan-tiara/img-profile-tiara.png" alt="Gambar Tiara" className="w-[200px] mt-[40px] animate" data-animate="zoom-in" />
            </div>
            <h3 className="font-canela font-light text-[28px] leading-[26px] mt-6 animate" data-animate="zoom-in">
              Tiara <br />
              Aprilia Purnomo
            </h3>
            <p className="font-medium text-xs leading-[20px] mt-[11px] animate" data-animate="zoom-in">
              The Daughter of
            </p>
            <p className="text-xs leading-[20px] animate" data-animate="zoom-in">
              Mr. Billy Purnomo and <br />
              Angelina Paskahwati 
            </p>
            <div className="mt-[30px] animate" data-animate="zoom-in">
              <Link href="https://instagram.com/tiatiaraaprilia" target="_blank" className="flex gap-2 items-center justify-center cursor-pointer w-[160px] h-[30px] bg-[#D9D9D9]">
                <img src="/images/cornel-dan-tiara/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
                <p className="text-xs leading-[16px]">
                  tiatiaraaprilia
                </p>
              </Link>
            </div>
            <p className="font-medium text-xs leading-[18px] mt-[56px] animate" data-animate="zoom-in">
              Your presence and blessings <br />
              would mean the world to us.
            </p>
          </div>
        </section>
      ) : null}
    </>
  )
}