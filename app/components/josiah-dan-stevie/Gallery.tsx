'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";

import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'

import 'swiper/css'
import 'swiper/css/pagination'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

type Wish = {
  name: string
  message: string
}

const DEFAULT_WISHES: Wish[] = [
  {
    name: "Yeremia (TESTER)",
    message: "Selamat menempuh Hidup Baru, Gbu",
  },
  {
    name: "Hani",
    message: "Darren dan Given Selamat berbahagia Tuhan selalu Memberkati kehidupan kalian🙏",
  },
  {
    name: "Sinyo",
    message: "Happy wedding ya, semoga menjadi keluarga yg harmonis dan selalu dalam penyertaan Tuhan Yesus amin",
  },
  {
    name: "Kel. Ivan Gladwin Harliono",
    message: "Selamat ya daren and given Bahagia selalu and happy in new chapters Luv to the moon and back",
  },
  {
    name: "Yeremia (TESTER)",
    message: "Selamat menempuh Hidup Baru, Gbu",
  },
  {
    name: "Hani",
    message: "Darren dan Given Selamat berbahagia Tuhan selalu Memberkati kehidupan kalian🙏",
  },
  {
    name: "Sinyo",
    message: "Happy wedding ya, semoga menjadi keluarga yg harmonis dan selalu dalam penyertaan Tuhan Yesus amin",
  },
  {
    name: "Kel. Ivan Gladwin Harliono",
    message: "Selamat ya daren and given Bahagia selalu and happy in new chapters Luv to the moon and back",
  },
]

type Props = {
  isOpen: boolean
  isMobile: boolean
  params: string
}

export default function Gallery({ isOpen, isMobile, params }: Props) {
  const galleryRef = useRef<any>(null)
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copied2, setCopied2] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [wishes, setWishes] = useState<Wish[]>([])
  const [seeAllMessages, setSeeAllMessages] = useState(false)
  const [search, setSearch] = useState('')
  const filtered = wishes.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.message.toLowerCase().includes(search.toLowerCase())
  )
  const [selectedWish, setSelectedWish] = useState<Wish | null>(null)

  let images = []

  if (isMobile) {
    images = [
      {
        src: '/images/josiah-dan-stevie/img-gallery-1.jpg',
        thumb: '/images/josiah-dan-stevie/img-gallery-1.jpg'
      },
      {
        src: '/images/josiah-dan-stevie/img-gallery-2.jpg',
        thumb: '/images/josiah-dan-stevie/img-gallery-2.jpg'
      }
    ]
  } else {
    images = [
      {
        src: '/images/josiah-dan-stevie/img-gallery-d-1.png',
        thumb: '/images/josiah-dan-stevie/img-gallery-d-1.png'
      },
      {
        src: '/images/josiah-dan-stevie/img-gallery-d-1.png',
        thumb: '/images/josiah-dan-stevie/img-gallery-d-1.png'
      }
    ]
  }

  const openGallery = (index: number) => {
    galleryRef.current?.openGallery(index)
  }

  const handleCopy = (norek:string) => {
    navigator.clipboard.writeText(norek);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  const handleCopy2 = (norek:string) => {
    navigator.clipboard.writeText(norek);
    setCopied2(true);

    setTimeout(() => {
      setCopied2(false);
    }, 10000);
  };

  useEffect(() => {
    const saved = localStorage.getItem('wishes')

    if (saved) {
      setWishes(JSON.parse(saved))
    } else {
      setWishes(DEFAULT_WISHES)
    }
  }, [])

  useEffect(() => {
    if (wishes.length) {
      localStorage.setItem('wishes', JSON.stringify(wishes))
    }
  }, [wishes])

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) return

    const newWish = { name, message }

    setWishes(prev => [newWish, ...prev])

    setName('')
    setMessage('')
  }
  return (
    <> 
      <div className="relative z-10 w-full min-h-screen">
        <section id="gallery" className="gallery -mt-[75px] md:-mt-[395px] bg-cover bg-no-repeat bg-[url('/images/josiah-dan-stevie/bg-gallery-mobile.png')] md:bg-[url('/images/josiah-dan-stevie/bg-gelombang-atas.png')] pt-[142px] md:pt-[475px] md:pb-[50px]">
          <div className="w-full h-full">
            <div className="w-[340px] md:w-[1149px] h-[460px] md:h-[875px] mx-auto shadow-[0px_7px_16.9px_0px_#0000008F] overflow-hidden">
              <Swiper
                navigation
                modules={[Navigation]}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="cursor-pointer"
                      onClick={() => openGallery(i)}
                    >
                      <Image
                        src={img.src}
                        alt={`Gallery ${i}`}
                        width={1149}
                        height={875}
                        className="w-[340px] md:w-[1149px] h-[460px] md:h-[875px] object-cover object-top"
                        quality={100}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <LightGallery
                onInit={(ref) => (galleryRef.current = ref.instance)}
                dynamic
                dynamicEl={images}
                plugins={[lgZoom, lgThumbnail]}
                speed={500}
              />
            </div>
          </div>
        </section>

        <section id="reservation" className="reservation relative w-full min-h-min bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
          <div className="relative z-20 text-center h-full pt-[110.04px] md:pt-[113px] font-sorts text-[#22352F] overflow-hidden">
            <h3 className="font-romantic font-normal text-[32px] md:text-[48px] leading-[22px] animate" data-animate="fade-up">Rsvp</h3>
            <h6 className="text-xs md:text-lg font-medium leading-[15px] mt-[49px] md:mt-[65px] animate" data-animate="fade-up">Dear Mr. /Mrs. / Ms.</h6>
            <h6 className="text-xs md:text-lg font-medium leading-[15px] capitalize mt-[26px] md:mt-[48px] animate" data-animate="fade-up">{params ?? '.......'}</h6>
            <p className="text-xs md:text-lg font-medium leading-[20px] mt-[24px] md:mt-[48px] animate" data-animate="fade-up">Kindly confirm your attendance before</p>
            <p className="text-xs md:text-lg font-medium leading-[20px] mt-1 animate" data-animate="fade-up">04 July 2026</p>
            <div className="flex justify-between w-[314px] md:w-[368px] mx-auto mt-[34px] md:mt-[47px] animate" data-animate="fade-up">
              <button type="button" onClick={() => {
                setAttendance('attend')
                setShowModal(true)
                }} className={`w-[146px] md:w-[172px] h-[33px] md:h-[40px] rounded-[71px] md:rounded-[38px] flex justify-center items-center pt-1 ${attendance == 'attend' ? 'bg-[#22352F]' : 'bg-transparent border-[0.5px] border-[#22352F]'}`}>
                  <span className={`text-xs md:text-lg font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#FEF8EF]' : 'text-[#22352F]'}`}>attend</span>
              </button>
              <button type="button" onClick={() => {
                setAttendance('not')
                setShowModal(true)
                }} className={`md:hidden w-[148px] md:w-[172px] h-[33px] md:h-[40px] rounded-[71px] md:rounded-[38px] flex justify-center items-center pt-1 ${attendance == 'attend' ? 'bg-transparent border-[0.5px] border-[#22352F]' : 'bg-[#22352F]'}`}>
                  {isMobile ? (
                    <span className={`text-xs md:text-lg font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#22352F]' : 'text-[#FEF8EF]'}`}>unable to attend</span>
                  ) : (
                    <span className={`text-xs md:text-lg font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#22352F]' : 'text-[#FEF8EF]'}`}>unable to attend</span>
                  )}
              </button>
              <button type="button" onClick={() => {
                setAttendance('not')
                setShowModal(true)
                }} className={`hidden md:flex w-[148px] md:w-[172px] h-[33px] md:h-[40px] rounded-[71px] md:rounded-[38px] justify-center items-center pt-1 ${attendance == 'attend' ? 'bg-transparent border-[0.5px] border-[#22352F]' : 'bg-[#22352F]'}`}>
                  {isMobile ? (
                    <span className={`text-xs md:text-lg font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#22352F]' : 'text-[#FEF8EF]'}`}>not attend</span>
                  ) : (
                    <span className={`text-xs md:text-lg font-medium leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-[#22352F]' : 'text-[#FEF8EF]'}`}>not attend</span>
                  )}
              </button>
            </div>
            <p className="text-xs md:text-lg font-medium leading-[12.96px] mt-[37px] md:mt-[54px] animate" data-animate="fade-up">Confirm your selection?</p>
            <div className="mt-[43px] animate" data-animate="fade-up">
              <button onClick={() => {
                setAttendance('not')
                setShowModal(true)
              }} type="button" className="flex justify-center items-center w-[222px] md:w-[368px] h-[33px] md:h-[40px] rounded-[71px] md:rounded-[38px] bg-[#22352F] pt-1 mx-auto">
                <span className="text-xs md:text-lg font-medium leading-[14.96px] text-[#FEF8EF] uppercase">confirm not attend</span>
              </button>
            </div>
            <p className="md:hidden text-[10px] font-medium leading-[16px] mt-[54px] animate" data-animate="fade-up">If you need assistance with your RSVP,</p>
            <p className="md:hidden text-[10px] font-medium leading-[16px] mt-1 animate" data-animate="fade-up">please contact our support team.</p>
            <p className="hidden md:block text-lg font-medium leading-[14.96px] mt-[96px] animate" data-animate="fade-up">Having trouble with RSVP?</p>
            <div className="mt-[24px] md:mt-[44px] animate" data-animate="fade-up">
              <Link href="https://wa.me/6289671650843" target="_blank" className="flex justify-center items-center w-[160px] md:w-[212px] h-[33px] md:h-[40px] rounded-[55px] bg-[#12877B] mx-auto">
                <Image src="/images/josiah-dan-stevie/logo-whatsapp.png"  alt="Picture of Icon WhatsApp" width={16} height={16} className="md:w-[17px] md:h-[17px] mr-2" />
                <span className="font-trajan text-xs md:text-base font-semibold leading-[14.96px] md:leading-[26px] text-[#FEF8EF] mt-1 uppercase">chat support</span>
              </Link>
            </div>
          </div>

          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-2.png" alt="Picture of Tanaman Kiri" width={632} height={632} className="absolute top-0 md:-top-[100px] -left-[185px] md:-left-[325px] rotate-[25deg] w-[336px] md:w-[632px]" />
          <Image src="/images/josiah-dan-stevie/img-bercak-kanan-rsvp.png" alt="Picture of Bercak Kanan" width={604} height={604} className="md:hidden absolute z-10 -bottom-[300px] right-0" />
          <Image src="/images/josiah-dan-stevie/img-bercak-kanan-rsvp-dekstop.png" alt="Picture of Bercak Kanan" width={1427} height={1427} className="hidden md:block absolute z-10 -top-[300px] right-0" />
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

        <section id="weeding-gift" className="relative w-full min-h-min overflow-hidden bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
          <div className="relative z-10 text-center h-full pt-[140px] pb-[10px] font-sorts text-[#22352F] overflow-hidden">
            <h3 className="font-romantic font-normal text-[32px] md:text-[48px] leading-[22px] animate" data-animate="fade-up">Wedding Gift</h3>
            <div className="md:hidden">
              <p className="text-xs font-medium leading-[20px] mt-[40px] animate" data-animate="fade-up">Whether celebrating with us in person or from afar,</p>
              <p className="text-xs font-medium leading-[20px] mt-1 animate" data-animate="fade-up">your thoughts and and prayers are the greatest</p>
              <p className="text-xs font-medium leading-[20px] mt-1 animate" data-animate="fade-up">blessing to us.</p>
              <p className="text-xs font-medium leading-[20px] mt-[30px] animate" data-animate="fade-up">If you would like to kindly give us a gift as we begin</p>
              <p className="text-xs font-medium leading-[20px] mt-1 animate" data-animate="fade-up">married life, our bank details are below.</p>
            </div>
            <div className="hidden md:block">
              <p className="text-lg font-medium leading-[30px] mt-[57px] animate" data-animate="fade-up">Whether celebrating with us in person or from afar, your</p>
              <p className="text-lg font-medium leading-[30px] mt-1 animate" data-animate="fade-up">thoughts and and prayers are the greatest blessing to us.</p>
              <p className="text-lg font-medium leading-[30px] mt-[27px] animate" data-animate="fade-up">If you would like to kindly give us a gift as we begin</p>
              <p className="text-lg font-medium leading-[30px] mt-1 animate" data-animate="fade-up">married life, our bank details are below.</p>
            </div>
            <div className="flex justify-between items-center w-[227] md:w-[368px] border-b border-[#22352F] pb-3 mx-auto mt-[30px] md:mt-[90px] animate" data-animate="fade-up">
              <p className="text-left text-xs md:text-base font-normal leading-[14px] md:leading-[20px]">
                <span>IDR</span> <br />
                <span className="mt-1">BCA - 3462610405</span> <br />
                <span className="mt-1">Josiah Anthony Mendes</span>
              </p>
              <button onClick={() => handleCopy('3462610405')} className="w-[50px] h-[30px] border-b border-[#22352F] text-center" data-animate="fade-up">
                <span className="text-[10px] md:text-base font-normal leading-[81%] uppercase">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <div className="flex justify-between items-center w-[227] md:w-[368px] border-b border-[#22352F] pb-3 mx-auto mt-[30px] md:mt-[42px] animate" data-animate="fade-up">
              <p className="text-left text-xs md:text-base font-normal leading-[14px] md:leading-[20px]">
                <span>SGD</span> <br />
                <span className="mt-1">DBS Bank (Singapore) - 249483079</span> <br />
                <span className="mt-1">Josiah Anthony Mendes</span>
              </p>
              <button onClick={() => handleCopy2('249483079')} className="w-[50px] h-[30px] border-b border-[#22352F] text-center" data-animate="fade-up">
                <span className="text-[10px] md:text-base font-normal leading-[81%] uppercase">{copied2 ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-1.png" alt="Picture of Tanaman Kanan" width={799} height={799} className="absolute z-20 -top-[65px] md:-top-[85px] -right-[220px] md:-right-[415px] -rotate-[25deg] w-[350px] md:w-[799px]" />
        </section>

        <section id="wishes" className="relative overflow-y-hidden w-full min-h-screen overflow-hidden bg-[url('/images/josiah-dan-stevie/white-paper-texture.png')]">
          {!seeAllMessages ? (
            <div className="relative z-20 text-center pt-[162px] md:pt-[150px] pb-[97px] font-sorts text-[#22352F]">
              <h3 className="font-romantic font-normal text-[32px] md:text-[48px] leading-[22px] md:leading-none animate fade-up" data-animate="fade-up">Share Your Wishes</h3>
              <form onSubmit={save} className="mx-auto mt-[38px] animate fade-up" data-animate="fade-up">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="relative z-10 block w-[284px] md:w-[564px] h-[30px] md:h-[40px] rounded-[33px] md:rounded-[64px] border-[1px] border-[#22352F80] bg-transparent px-[13px] md:px-[23px] py-1 font-sorts text-xs md:text-lg leading-[140%] text-[#22352F] placeholder:text-[#22352F80] mx-auto" placeholder="Desy (Tester)" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="relative z-10 block w-[284px] md:w-[564px] h-[60px] md:h-[261px] rounded-[15px] md:rounded-[20px] border-[1px] border-[#22352F80] bg-transparent px-[13px] md:px-[23px] py-1 font-sorts text-xs md:text-lg leading-[140%] text-[#22352F] mx-auto mt-4"></textarea>
                <button type="submit" className="flex justify-center items-center w-[284px] md:w-[564px] h-[33px] md:h-[40px] bg-[#22352F] rounded-[37px] border-[0.49px] border-[#22352F] mx-auto mt-4">
                  <Image src="/images/josiah-dan-stevie/icon-send.png" alt="Picture of Icon Send" width={15} height={19} className="md:w-[24px] md:h-[30px] mr-2" />
                  <span className="inline-block mt-1 text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">send</span>
                </button>
              </form>
              <div className="w-[284px] md:w-[564px] h-[334px] md:h-[526px] rounded-[15px] md:rounded-[20px] bg-[#22352F] border-[0.49px] border-[#22352F] py-[18px] md:py-[39px] px-[13px] md:px-[23px] mx-auto mt-4 md:mt-[40px] animate fade-up" data-animate="fade-up">
                <div className="w-full h-full overflow-y-auto scroll-smooth">
                  {wishes.length === 0 ? (
                    <p className="text-center text-xs md:text-lg text-[#DADAD9]">
                      No message yet
                    </p>
                  ) : (
                    wishes.map((wish, i) => (
                      <div
                        key={i}
                        className="w-full pb-[13px] border-b-[0.49px] border-b-[#DADAD9] font-sorts text-left text-[#DADAD9] mb-[7px]"
                      >
                        <p className="font-bold md:font-bold text-xs md:text-lg leading-[140%]">
                          {wish.name}
                        </p>
                        <p className="font-normal text-xs md:text-lg leading-[140%] mt-[7px]">
                          {wish.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <button type="button" onClick={() => setSeeAllMessages(true)} className="flex justify-center items-center w-[284px] md:w-[564px] h-[33px] md:h-[40px] bg-[#22352F] rounded-[33px] border-[0.49px] border-[#22352F] mx-auto mt-4 animate fade-up" data-animate="fade-up">
                  <Image src="/images/josiah-dan-stevie/icon-message.png" alt="Picture of Icon Send" width={18} height={22} className="md:w-[20px] md:h-[25px] mr-2" />
                  <span className="inline-block mt-1 text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">view all message</span>
                </button>
            </div>
          ) : (
            <div className="relative z-20 text-center pt-[162px] md:pt-[150px] pb-[97px] font-sorts text-[#22352F]">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-[340px] md:w-[564px] h-[33px] md:h-[40px] rounded-[10px] md:rounded-[64px] border-[1px] border-[#22352F80] bg-transparent px-3 py-2 font-sorts text-xs md:text-lg leading-[140%] text-#22352F] placeholder:text-[#22352F80] mx-auto animate fade-up" data-animate="fade-up" placeholder="Search" />
              <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] md:w-[564px] h-[459.87px] md:h-[638px] overflow-y-auto mx-auto">
                {filtered.length === 0 ? (
                  <p className={`col-span-2 text-center text-sm text-[#4E4E4E] animate'}`}>
                    No message found
                  </p>
                ) : (
                  filtered.map((wish, i) => (
                    <div
                      key={i}
                    
                      className="relative w-[160px] md:w-[252px] h-[140.87px] md:h-[252px] rounded-[9.57px] md:rounded-[20px] bg-[#22352F] border-[0.87px] border-[#4E4E4E] shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer fade-up"
                      onClick={() => setSelectedWish(wish)}
                    >
                      <div className="w-full relative px-[9px]">
                        <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                          “
                        </p>
                        <p className="relative top-[34px] font-sorts font-light text-xs md:text-lg leading-none text-[#DADAD9]">
                          {wish.message}
                        </p>
                      </div>
                      <div className="bg-[#868686] flex absolute w-full h-[41px] md:h-[61px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                        <p className="font-sorts font-medium text-xs md:text-lg leading-none text-[#DADAD9] my-auto">
                          {wish.name}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <span data-animate="fade-up">
                <button onClick={() => setSeeAllMessages(false)} className="flex justify-center items-center w-[340px] md:w-[564px] h-[33px] md:h-[40px] bg-[#22352F] rounded-[37px] border-[0.49px] border-[#22352F] mx-auto mt-4 animate fade-up" data-animate="fade-up">
                  <span className="text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">back</span>
                </button>
              </span>
            </div>
          )}
          {selectedWish && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative w-[340px] md:w-[564px] scale-in">
                <div className="relative py-8 px-5 bg-[#22352F] rounded-[16px] border border-[#22352F] shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center">
                  <h3 className="font-sorts font-medium text-[24px] md:text-[32px] text-[#DADAD9] uppercase tracking-wide">
                    {selectedWish.name}
                  </h3>
                  <div className="w-10 h-[1px] bg-[#D6D0C4] mx-auto my-4" />
                  <p className="font-sorts font-light text-sm md:text-lg leading-relaxed text-[#DADAD9] px-2">
                    {selectedWish.message}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedWish(null)}
                  className="flex justify-center items-center w-[340px] md:w-[564px] h-[30px] md:h-[40px] bg-[#22352F] rounded-[33px] md:rounded-[20px] border-[0.49px] border-[#22352F] mx-auto mt-5"
                >
                  <span className="text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">back</span>
                </button>

              </div>
            </div>
          )}

          {/* Image Absolute */}
          <Image src="/images/josiah-dan-stevie/img-1.png" alt="Picture of Tanaman Kiri" width={692} height={692} className="absolute -top-[45px] -left-[190px] md:-left-[220px] rotate-[25deg] w-[325px] md:w-[525px]" />
          <Image src="/images/josiah-dan-stevie/img-bercak-wishes.png" alt="Picture of Tanaman Kiri" width={713} height={713} className="md:hidden absolute -top-[170px] left-0" />
          <Image src="/images/josiah-dan-stevie/img-bercak-wishes-dekstop.png" alt="Picture of Tanaman Kiri" width={1384} height={1384} className="hidden md:block absolute -top-[400px] left-0" />
          <Image src="/images/josiah-dan-stevie/img-1-left.png" alt="Picture of Tanaman Kiri" width={654} height={654} className="absolute -bottom-[195px] md:-bottom-[310px] -left-[215px] md:-left-[315px] rotate-12 w-[356px] md:w-[654px]" />
          <Image src="/images/josiah-dan-stevie/img-2.png" alt="Picture of Tanaman Kiri" width={738} height={738} className="absolute -bottom-[135px] md:-bottom-[350px] -right-[175px] md:-right-[305px] rotate-[25deg] w-[362px] md:w-[738px]"  />
        </section>

      </div>
    </>
  )
}