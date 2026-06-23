'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function TravelGuard({ isOpen, isMobile }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const travels = [
    {
      title1: "Flight to Jakarta (CGK) +",
      title2: "Whoosh Train",
      summary: [
        "Best for Friday arrivals",
        "Total ~5-6 hrs"
      ],
      details: (
        <>
          <hr className="mt-[38px] mb-[37px] border-[#3C475E]" />

          <table className="w-full text-[14px] font-normal leading-[18px]">
            <tbody>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">1.</td>
                <td className="text-left pb-5">
                  <p>
                    Fly Singapore → Jakarta Soekarno-Hatta (CGK)
                  </p>
                  <p>
                    ~1.5 hrs flight time. Many daily flights available.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">2.</td>
                <td className="text-left pb-5">
                  <p>
                    Take a Grab from CGK airport to Halim Whoosh Station
                  </p>
                  <p>
                    ~45-60 min ride.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">3.</td>
                <td className="text-left pb-5">
                  <p>
                    Board the Whoosh high-speed train from Halim to Padalarang Station
                  </p>
                  <p>
                    ~30 min journey. LAST TRAIN departs at 21:25
                  </p>
                  <p>
                    Jakarta time — plan accordingly.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">4.</td>
                <td className="text-left pb-5">
                  <p>
                    Take a Grab from Padalarang Station to your hotel/venue in Bandung
                  </p>
                  <p>
                    ~20-40 min depending on destination.
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="text-left">
                  <p>
                    Note: Friday evening road traffic to Bandung is heavy. Whoosh avoids
                  </p>
                  <p>
                    this entirely — just make sure you catch it before the last train at 21:25.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )
    },

    {
      title1: "Flight to Jakarta (CGK) +",
      title2: "Car to Bandung",
      summary: [
        "Best for Saturday morning travel",
        "Total ~6 hrs"
      ],
      details: (
        <>
          <hr className="mt-[38px] mb-[37px] border-[#3C475E]" />

          <table className="w-full text-[14px] font-normal leading-[18px]">
            <tbody>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">1.</td>
                <td className="text-left pb-5">
                  <p>
                    Fly Singapore → Jakarta Soekarno-Hatta (CGK)
                  </p>
                  <p>
                    ~1.5 hrs flight time. Many daily flights available.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">2.</td>
                <td className="text-left pb-5">
                  <p>
                    Book a car or shuttle service from CGK to Bandung
                  </p>
                  <p>
                    ~150 km via Cipularang Toll Road.
                  </p>
                  <p>
                    ~2.5-3 hrs.
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="text-left">
                  <p>
                    Note: Not ideal for Friday night arrivals.
                  </p>
                  <p>
                    Better for early Saturday morning travel. 
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )
    },

    {
      title1: "Flight to Kertajati (KJT) +",
      title2: "Car to Bandung",
      summary: [
        "Best for Saturday arrivals",
        "Prefer not to travel on Friday",
        "Total ~4-5 hrs"
      ],
      details: (
        <>
          <hr className="mt-[38px] mb-[37px] border-[#3C475E]" />

          <table className="w-full text-[14px] font-normal leading-[18px]">
            <tbody>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">1.</td>
                <td className="text-left pb-5">
                  <p>
                    Fly Singapore → Kertajati Airport (KJT) on Saturday morning
                  </p>
                  <p>
                    Check schedules for exact timing — flight available on Saturdays.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="w-[5%] text-center align-top pb-5">2.</td>
                <td className="text-left pb-5">
                  <p>
                    Book a car or Grab from Kertajati to Bandung city
                  </p>
                  <p>
                    ~70 km, takes ~1-1.5 hrs.
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="text-left">
                  <p>
                    Note: A relaxed option — no Friday travel stress, shorter road leg than
                  </p>
                  <p>
                    from Jakarta, and you arrive fresh on Saturday morning. Return flights from Kertajati to Singapore are only available on Tuesdays.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )
    }
  ];

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section id="travel-guard" className="travel-guard z-10 w-full min-h-min overflow-hidden bg-[#596686]">
        <div className="relative z-10 text-center h-full pt-[90px] pb-[100px] font-century text-[#FFFFFF]">
          <h2 className="font-constantia text-2xl font-normal leading-[111.00000000000001%] uppercase animate" data-animate="zoom-in">wedding travel guard</h2>
          <h4 className="text-[14px] font-normal leading-[20px] uppercase mt-0.5 animate" data-animate="zoom-in">singapore → bandung</h4>
          <Image src="/images/steven-dan-bella/img-line-title-white.png" alt="Picture of Garis Bawah Judul" width={155} height={21} className="mx-auto mt-[11px] animate" data-animate="zoom-in" />

          <div className="grid gap-5 mt-[50px]">
            {travels.map((item, index) => (
              <div
                key={index}
                className="w-[340px] bg-white rounded-[15px]
                shadow-[1.51px_3.01px_7.13px_1px_#00000026]
                text-[#3C475E] py-[23px] px-6 mx-auto
                transition-all duration-300"
              >
                <h6 className="text-lg leading-[20px]">
                  {item.title1}
                </h6>

                <h6 className="text-lg leading-[20px] mt-0.5">
                  {item.title2}
                </h6>

                <div className="mt-6 text-xs space-y-1">
                  {item.summary.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>

                <button onClick={() => toggleCard(index)} className={`${openIndex === index ? 'hidden' : 'block'} w-[94px] h-[30px] rounded-[5px] border border-[#3C475E] mx-auto mt-6 flex justify-center items-center`}>
                  <span className="font-canela text-xs uppercase">
                    Detail
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? "max-h-[600px] opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}