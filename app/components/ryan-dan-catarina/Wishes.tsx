'use client'

import { useState, useEffect } from 'react'
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
        <section id="wishes" className="wishes relative w-full min-h-min bg-[#DADAD9] overflow-hidden">
          <Image src="/images/ryan-dan-catarina/img-bunga-kiri-atas-wishes.png" alt="Picture of Bunga Kiri Atas" width={866} height={866} className="absolute top-0 left-0 w-[558px] h-[558px] md:w-[1173.8106631826397] md:h-[1173.8106631826397]" />
          <Image src="/images/ryan-dan-catarina/img-bunga-kanan-bawah-wishes.png" alt="Picture of Bunga Kanan Bawah" width={866} height={866} className="md:hidden absolute bottom-[-290px] right-0 w-[509px] h-[509px] md:w-[1173.8106631826397] md:h-[1173.8106631826397]" />
          {!seeAllMessages ? (
            <div className="relative text-center pt-[90px] md:pt-[150px] pb-[97px] font-lora text-[#60564D]">
              <h2 className="font-bickham text-[64px] md:text-[64px] font-bold leading-[22px] md:leading-[22px] animate fade-up" data-animate="fade-up">Share Your Wishes</h2>
              <Image src="/images/ryan-dan-catarina/line-location.png" alt="Picture of Line" width={180} height={37} className="w-[116px] h-[24px] md:w-[180px] md:h-[37px] mx-auto mt-[36px] animate fade-up" data-animate="fade-up" />
              <form onSubmit={save} className="mx-auto mt-[55px] animate fade-up" data-animate="fade-up">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="relative z-10 block w-[284px] md:w-[564px] h-[30px] md:h-[40px] rounded-[33px] md:rounded-[64px] border-[0.49px] border-[#60564D] bg-transparent px-[13px] md:px-[23px] py-1 font-lora text-xs md:text-lg leading-[140%] text-[#60564D] placeholder:text-[#60564D80] mx-auto" placeholder="Desy (Tester)" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="relative z-10 block w-[284px] md:w-[564px] h-[60px] md:h-[261px] rounded-[15px] md:rounded-[20px] border-[0.49px] border-[#60564D] bg-transparent px-[13px] md:px-[23px] py-1 font-lora text-xs md:text-lg leading-[140%] text-[#60564D] mx-auto mt-4"></textarea>
                <button type="submit" className="flex justify-center items-center w-[284px] md:w-[564px] h-[33px] md:h-[40px] bg-[#60564D] rounded-[37px] border-[0.49px] border-[#60564D] mx-auto mt-4">
                  <Image src="/images/ryan-dan-catarina/icon-send.png" alt="Picture of Icon Send" width={12} height={17} className="md:w-[24px] md:h-[30px] mr-2" />
                  <span className="text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">send</span>
                </button>
              </form>
              <div className="w-[284px] md:w-[564px] h-[334px] md:h-[526px] rounded-[15px] md:rounded-[20px] bg-[#60564D] border-[0.49px] border-[#60564D] py-[18px] md:py-[39px] px-[13px] md:px-[23px] mx-auto mt-4 md:mt-[40px] animate fade-up" data-animate="fade-up">
                <div className="w-full h-full overflow-y-auto scroll-smooth">
                  {wishes.length === 0 ? (
                    <p className="text-center text-xs md:text-lg text-[#DADAD9]">
                      No message yet
                    </p>
                  ) : (
                    wishes.map((wish, i) => (
                      <div
                        key={i}
                        className="w-full pb-[13px] border-b-[0.49px] border-b-[#DADAD9] font-lora text-left text-[#DADAD9] mb-[7px]"
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
              <button type="button" onClick={() => setSeeAllMessages(true)} className="flex justify-center items-center w-[284px] md:w-[564px] h-[33px] md:h-[40px] bg-[#60564D] rounded-[33px] border-[0.49px] border-[#60564D] mx-auto mt-4 animate fade-up" data-animate="fade-up">
                  <Image src="/images/ryan-dan-catarina/icon-message.png" alt="Picture of Icon Send" width={18} height={22} className="md:w-[20px] md:h-[25px] mr-2" />
                  <span className="text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">view all message</span>
                </button>
            </div>
          ) : (
            <div className="relative text-center pt-[90px] md:pt-[150px] pb-[97px] font-lora text-[#60564D]">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-[340px] md:w-[564px] h-[33px] md:h-[40px] rounded-[10px] md:rounded-[64px] border-[0.49px] border-[#60564D] bg-transparent px-2 py-1 font-lora text-xs md:text-lg leading-[140%] text-[60564D] placeholder:text-[#60564D80] mx-auto animate fade-up" data-animate="fade-up" placeholder="Search" />
              <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] md:w-[564px] h-[459.87px] md:h-[638px] overflow-y-auto mx-auto">
                {filtered.length === 0 ? (
                  <p className={`col-span-2 text-center text-sm text-[#4E4E4E] animate'}`}>
                    No message found
                  </p>
                ) : (
                  filtered.map((wish, i) => (
                    <div
                      key={i}
                    
                      className="relative w-[160px] md:w-[252px] h-[140.87px] md:h-[252px] rounded-[9.57px] md:rounded-[20px] bg-[#60564D] border-[0.87px] border-[#4E4E4E] shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer fade-up"
                      onClick={() => setSelectedWish(wish)}
                    >
                      <div className="w-full relative px-[9px]">
                        <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                          “
                        </p>
                        <p className="relative top-[34px] font-lora font-light text-xs md:text-lg leading-none text-[#DADAD9]">
                          {wish.message}
                        </p>
                      </div>
                      <div className="bg-[#868686] flex absolute w-full h-[41px] md:h-[61px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                        <p className="font-lora font-medium text-xs md:text-lg leading-none text-[#DADAD9] my-auto">
                          {wish.name}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <span data-animate="fade-up">
                <button onClick={() => setSeeAllMessages(false)} className="flex justify-center items-center w-[340px] md:w-[564px] h-[33px] md:h-[40px] bg-[#60564D] rounded-[37px] border-[0.49px] border-[#60564D] mx-auto mt-4 animate fade-up" data-animate="fade-up">
                  <span className="text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">back</span>
                </button>
              </span>
            </div>
          )}
          {selectedWish && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative w-[340px] md:w-[564px] scale-in">
                <div className="relative py-8 px-5 bg-[#60564D] rounded-[16px] border border-[#60564D] shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center">
                  <h3 className="font-lora font-medium text-[24px] md:text-[32px] text-[#DADAD9] uppercase tracking-wide">
                    {selectedWish.name}
                  </h3>
                  <div className="w-10 h-[1px] bg-[#D6D0C4] mx-auto my-4" />
                  <p className="font-lora font-light text-sm md:text-lg leading-relaxed text-[#DADAD9] px-2">
                    {selectedWish.message}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedWish(null)}
                  className="flex justify-center items-center w-[340px] md:w-[564px] h-[30px] md:h-[40px] bg-[#60564D] rounded-[33px] md:rounded-[20px] border-[0.49px] border-[#60564D] mx-auto mt-5"
                >
                  <span className="text-xs md:text-lg text-[#DADAD9] font-normal leading-[140%] uppercase">back</span>
                </button>

              </div>
            </div>
          )}
        </section>
      ) : null}
    </>
  )
}