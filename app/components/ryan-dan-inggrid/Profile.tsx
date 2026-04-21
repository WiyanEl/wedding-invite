'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Profile({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/ryan-dan-inggrid/bg-profile-mobile.png" : "/images/ryan-dan-inggrid/bg-profile.png" : "/images/ryan-dan-inggrid/bg-profile-mobile.png"

  return (
    <>
      {isOpen ? (
        <section id="profile" className="profile relative w-full min-h-screen" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="absolute inset-0 bg-[#EAE4DC] opacity-[0.35] mix-blend-multiply" />
          <div className="text-center h-full pt-[72px] md:pt-[109px] pb-[74px] md:pb-[113px] font-lora text-[#1B1C1D]">
            <Image src="/images/ryan-dan-inggrid/img-logo-ri-dark.png" alt="Picture of Ryan dan Inggrid" width={100} height={67} className="mx-auto md:w-[130px] md:h-[86px] animate" data-animate="fade-up" />
            <p className="text-xs md:text-lg font-normal leading-[20px] md:leading-[28px] mt-[33px] md:mt-[58px] animate" data-animate="fade-up">
              <span>We cordially request the honour</span> <br />
              <span>of your presence at the marriage of</span> <br />
              <span>our beloved son and daughter</span>
            </p>
            <div className="w-full md:max-w-[1140px] flex flex-col md:flex-row md:justify-between mx-auto mt-[65px] md:mt-[86px]">
              <div>
                <div className="relative w-[200px] md:w-[270px] mx-auto animate" data-animate="fade-up">
                  <div className="absolute inset-0 bg-[#00000059]" />
                  <Image src="/images/ryan-dan-inggrid/img-pengantin-pria.png" alt="Picture of Ryan" width={200} height={200} className="md:w-[270px] md:h-[280px]" />
                </div>
                <h2 className="font-kunstler text-5xl md:text-[64px] font-normal leading-none mt-5 md:mt-[26px] animate" data-animate="fade-up">Ryan Rahmadi</h2>
                <h6 className="text-xs md:text-lg font-medium leading-[20px] mt-[13px] md:mt-5 animate" data-animate="fade-up">The first son of two siblings</h6>
                <h6 className="text-xs md:text-lg font-normal leading-[16px] md:leading-[26px] mt-[13px] md:mt-5 animate" data-animate="fade-up">
                  <span>Mr. Bennie Santoso</span> <br />
                  <span>Mrs. Friska Irene Setiawan</span>
                </h6>
                <Link href="https://instagram.com/ryanrahmadi" target="_blank" className="relative z-10 flex items-center justify-center gap-2 w-[160px] md:w-[190px] h-[30px] md:h-[40px] bg-[#1B1C1D] rounded-[52px] mx-auto mt-[19px] md:mt-[52px] cursor-pointer animate" data-animate="fade-up">
                  <Image src="/images/ryan-dan-inggrid/icon-instagram.png" alt="Picture of Icon Instagram" width={13} height={16}  />
                  <span className="text-xs text-white leading-16px font-normal">ryanrahmadi</span>
                </Link>
              </div>
              <div className="mt-[60px] md:mt-0">
                <div className="relative w-[200px] md:w-[270px] mx-auto animate" data-animate="fade-up">
                  <div className="absolute inset-0 bg-[#00000059]" />
                  <Image src="/images/ryan-dan-inggrid/img-pengantin-wanita.png" alt="Picture of Ryan" width={200} height={200} className="md:w-[270px] md:h-[280px]" />
                </div>
                <h2 className="font-kunstler text-5xl md:text-[64px] font-normal leading-none mt-5 md:mt-[26px] animate" data-animate="fade-up">Beatrix Levina Inggrid</h2>
                <h6 className="text-xs md:text-lg font-medium leading-[20px] mt-[13px] md:mt-5 animate" data-animate="fade-up">The first daughter of two siblings</h6>
                <h6 className="text-xs md:text-lg font-normal leading-[16px] md:leading-[26px] mt-[13px] md:mt-5 animate" data-animate="fade-up">
                  <span>Mr. Heri Prasetyo</span> <br />
                  <span>Mrs. Julieta Apolline</span>
                </h6>
                <Link href="https://instagram.com/levinainggrid" target="_blank" className="relative z-10 flex items-center justify-center gap-2 w-[160px] md:w-[190px] h-[30px] md:h-[40px] bg-[#1B1C1D] rounded-[52px] mx-auto mt-[19px] md:mt-[52px] cursor-pointer animate" data-animate="fade-up">
                  <Image src="/images/ryan-dan-inggrid/icon-instagram.png" alt="Picture of Icon Instagram" width={13} height={16}  />
                  <span className="text-xs text-white leading-16px font-normal">levinainggrid</span>
                </Link>
              </div>
            </div>
            <p className="text-xs md:text-lg font-normal leading-[20px] md:leading-[28px] mt-[66px] md:mt-[51px] animate" data-animate="fade-up">
              <span>Our enjoy will be completed with</span> <br />
              <span>Your presence and blessings.</span>
            </p>
          </div>
        </section>
      ) : null}
    </>
  )
}