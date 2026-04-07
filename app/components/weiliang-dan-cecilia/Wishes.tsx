'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

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

export default function Wishes({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-wishes-mobile.png" : "/images/weiliang-dan-cecillia/bg-wishes.png" : "/images/weiliang-dan-cecillia/bg-wishes-mobile.png"
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
      {isOpen ? (
        <section id="wishes" className="wishes relative w-full md:h-screen bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="relative overflow-hidden">
            <Image src="/images/weiliang-dan-cecillia/img-tiang-kanan-wishes.png" alt="Tiang Kanan" width={184} height={319} className={`absolute w-[154px] bottom-[-18px] right-0 animate`} data-animate="fade-left" />
            <Image src="/images/weiliang-dan-cecillia/img-tiang-kiri-wishes.png" alt="Tiang Kiri" width={194} height={319} className={`absolute w-[154px] bottom-[-18px] left-0 animate`} data-animate="fade-right" />
            <Image src="/images/weiliang-dan-cecillia/img-pengantin-wishes.png" alt="Pengantin" width={180} height={128} className={`absolute z-20 bottom-0 left-[106px] animate`} data-animate="fade-right-pengantin" style={{ animationDelay: '1s' }} />
            {!seeAllMessages ? (
              <div className="relative z-10 flex flex-col items-center pt-[82px] md:pt-[161px] pb-[182px] md:pb-[367px] h-full text-[#724232] text-center">
                <h3 className="font-channe text-2xl leading-[26px] uppercase animate" data-animate="zoom-in">your wishes</h3>
                <form onSubmit={save} className="flex flex-col items-center">
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`mt-[38px] w-[283px] h-[26px] border-[0.49px] border-[#AB6A7C] bg-transparent px-1 py-3 font-perpetua text-xs leading-[140%] text-[#724232]`} placeholder="Isi Nama Lengkap" />
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className={`mt-[20px] w-[283px] h-[106px] border-[0.49px] border-[#AB6A7C] bg-transparent px-1 py-2 font-perpetua text-xs leading-[140%] text-[#724232]`}></textarea>
                  <button type="submit" className={`mt-[20px] flex gap-2 justify-center items-center w-[283px] h-[30px] bg-[#AB6A7CBA] border-[0.49px] border-[#AB6A7C] font-perpetua font-normal text-xs leading-[140%] text-[#FEFBF0]`}>
                    Send Message
                  </button>
                </form>
                <div className={`mt-[20px] w-[284px] h-[160px] px-[13px] py-[18px] overflow-y-auto scroll-smooth bg-[#AB6A7CBA] border-[0.49px] border-[#AB6A7C]`}>
                  {wishes.length === 0 ? (
                    <p className="text-center text-xs text-[#FEFBF0]">
                      No message yet
                    </p>
                  ) : (
                    wishes.map((wish, i) => (
                      <div
                        key={i}
                        className="w-full pb-[13px] border-b-[0.49px] border-b-[#D9D9D9] font-perpetua text-left text-[#FEFBF0] mb-[7px]"
                      >
                        <p className="font-semibold text-xs leading-[140%]">
                          {wish.name}
                        </p>
                        <p className="font-normal text-xs leading-[140%] mt-[7px]">
                          {wish.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
                <button type="button" onClick={() => setSeeAllMessages(true)} className={`mt-[20px] flex gap-2 justify-center items-center w-[283px] h-[30px] bg-[#AB6A7CBA] border-[0.49px] border-[#AB6A7C] font-perpetua font-normal text-xs leading-[140%] text-[#FEFBF0]`}>
                  See All Message
                </button>
              </div>
            ) : (
              <div className="relative z-10 flex flex-col items-center pt-[82px] md:pt-[161px] pb-[182px] md:pb-[367px] h-full text-[#AB6A7C] text-center">
                <div className={`relative w-[340px] mt-[20px]`}>
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full h-[26px] rounded-[5px] pl-[14px] border-[0.49px] border-[#AB6A7C] bg-transparent font-perpetua font-normal text-xs leading-[140%] text-[#AB6A7C]" placeholder="Search" />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] h-[459.87px] overflow-y-auto">
                  {filtered.length === 0 ? (
                    <p className={`col-span-2 text-center text-sm text-[#AB6A7C]`}>
                      No message found
                    </p>
                  ) : (
                    filtered.map((wish, i) => (
                      <div
                        key={i}
                        
                        className={`relative w-[160px] h-[140.87px] rounded-[9.57px] bg-[#FEFBF0] border-[0.87px] border-[#AB6A7C] shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer`}
                        onClick={() => setSelectedWish(wish)}
                      >
                        <div className="w-full relative px-[9px]">
                          <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                            “
                          </p>
                          <p className="relative top-[34px] font-perpetua font-light text-xs leading-none text-[#AB6A7C]">
                            {wish.message}
                          </p>
                        </div>
                        <div className="bg-[#AB6A7CBA] flex absolute w-full h-[41px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                          <p className="font-perpetua font-medium text-xs leading-none text-[#FEFBF0] my-auto">
                            {wish.name}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <button onClick={() => setSeeAllMessages(false)} className={`mt-[38px] flex justify-center items-center w-[340px] h-[30px] bg-[#AB6A7C] border-[0.49px] border-[#AB6A7C] font-perpetua font-normal text-sx leading-[140%] text-[#FEFBF0]`}>
                  Back
                </button>
              </div>
            )}
            {selectedWish && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3B3B3B]/80">
                <div className="relative">
                  <div className="w-[340px] min-h-min py-[33px] px-[16px] bg-[#FEFBF078] border-[0.87px] border-[#adadad] shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] text-center">
                    <h3 className="font-channe font-medium text-[28px] leading-none text-[#FEFBF0] uppercase">
                      {selectedWish.name}
                    </h3>
                    <p className="font-perpetua font-light text-xs leading-none text-[#FEFBF0] my-[75px]">
                      {selectedWish.message}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedWish(null)}
                    className="mt-[20px] w-full h-[30px] bg-[#AB6A7C] border-[0.87px] border-[#AB6A7C] text-[#FEFBF0] font-perpetua font-normal text-xs leading-[140%]"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
          <Image src="/images/weiliang-dan-cecillia/img-tanaman-bawah-wishes.png" alt="Tumbuhan Bawah" width={419} height={298} className={`absolute z-10 w-full bottom-[-130px] right-0 animate`} data-animate="fade-up" />
        </section>
      ) : null}
    </>
  )
}