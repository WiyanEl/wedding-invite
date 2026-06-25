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
  const [copied, setCopied] = useState(false)
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
      <section id="wishes" className="wishes wedding-gift relative z-10 w-full min-h-screen overflow-hidden md:bg-[#F2EFE8]">
        <div className="absolute inset-0 bg-[#7A86A114]" />
        <div className="relative z-10 text-center h-full pt-[171px] md:pt-[186px] pb-[173px] md:pb-[254px] font-century text-[#3C475E] overflow-hidden">
          <h2 className="font-constantia text-2xl md:text-[48px] font-normal leading-[111.00000000000001%] uppercase animate" data-animate="zoom-in">share your wishes</h2>
          <Image src="/images/steven-dan-bella/img-line-title.png" alt="Picture of Garis Bawah Judul" width={276} height={37} className="w-[155px] md:w-[276px] mx-auto mt-2 md:mt-4 animate" data-animate="zoom-in" />

          {!seeAllMessages ? (
            <div className="relative text-center">
              <form onSubmit={save} className="mx-auto mt-[37px] md:mt-[50px] animate zoom-in" data-animate="zoom-in">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-[284px] md:w-[564px] h-[30px] md:h-[40px] rounded-[15px] md:rounded-[64px] border-[1px] border-[#3C475E] bg-transparent px-[13px] md:px-[23px] py-1 text-[14px] md:text-lg leading-[140%] text-[#3C475E] placeholder:text-[#3C475E80] mx-auto" placeholder="Desy (Tester)" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-[284px] md:w-[564px] h-[106px] md:h-[261px] rounded-[15px] md:rounded-[20px] border-[1px] border-[#3C475E] bg-transparent px-[13px] md:px-[23px] py-1 text-[14px] md:text-lg leading-[140%] text-[#3C475E] mx-auto mt-4"></textarea>
                <button type="submit" className="flex justify-center items-center w-[284px] md:w-[564px] h-[30px] md:h-[40px] bg-[#3C475E] rounded-[37px] border-[0.49px] border-[#3C475E] mx-auto mt-4">
                  <Image src="/images/steven-dan-bella/icon-send.png" alt="Picture of Icon Send" width={15} height={19} className="md:w-[24px] mr-2" />
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">send</span>
                </button>
              </form>
              <div className="w-[284px] md:w-[564px] h-[332px] md:h-[526px] rounded-[15px] md:rounded-[20px] bg-[#3C475E] border-[0.49px] border-[#3C475E] py-[18px] md:py-[39px] px-[13px] md:px-[23px] mx-auto mt-4 md:mt-[40px] animate zoom-in" data-animate="zoom-in">
                <div className="w-full h-full overflow-y-auto scroll-smooth">
                  {wishes.length === 0 ? (
                    <p className="text-center text-[14px] md:text-lg text-[#3C475E]">
                      No message yet
                    </p>
                  ) : (
                    wishes.map((wish, i) => (
                      <div
                        key={i}
                        className="w-full pb-[13px] border-b-[0.49px] border-b-white text-left text-white mb-[7px]"
                      >
                        <p className="font-normal md:font-bold text-[14px] md:text-lg leading-[140%]">
                          {wish.name}
                        </p>
                        <p className="font-normal text-[14px] md:text-lg leading-[140%] mt-[7px]">
                          {wish.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <button type="button" onClick={() => setSeeAllMessages(true)} className="flex justify-center items-center w-[284px] md:w-[564px] h-[30px] md:h-[40px] bg-[#3C475E] rounded-[33px] border-[0.49px] border-[#3C475E] mx-auto mt-4 animate zoom-in" data-animate="zoom-in">
                  <Image src="/images/steven-dan-bella/icon-message.png" alt="Picture of Icon Send" width={17} height={22} className="md:w-[26px] mr-2" />
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">see all message</span>
                </button>
            </div>
          ) : (
            <div className="relative text-center text-[#3B3B3B] mt-[47px] md:mt-[89px]">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-[340px] md:w-[564px] h-[30px] md:h-[40px] rounded-[15px] md:rounded-[64px] border-[0.49px] border-[#3C475E] bg-transparent px-2 py-1 text-[14px] md:text-lg leading-[140%] text-[#3C475E] placeholder:text-[#3C475E80] mx-auto animate zoom-in" data-animate="zoom-in" placeholder="Search" />
              <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] md:w-[564px] h-[459.87px] md:h-[638px] overflow-y-auto mx-auto">
                {filtered.length === 0 ? (
                  <p className={`col-span-2 text-center text-sm text-white animate'}`}>
                    No message found
                  </p>
                ) : (
                  filtered.map((wish, i) => (
                    <div
                      key={i}
                    
                      className="relative w-[160px] md:w-[252px] h-[140.87px] md:h-[252px] rounded-[9.57px] md:rounded-[20px] bg-[#3C475E] border-[0.87px] border-white shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer zoom-in"
                      onClick={() => setSelectedWish(wish)}
                    >
                      <div className="w-full relative px-[9px]">
                        <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                          “
                        </p>
                        <p className="relative top-[34px] font-light text-[14px] md:text-lg leading-none text-white">
                          {wish.message}
                        </p>
                      </div>
                      <div className="bg-[#868686] flex absolute w-full h-[41px] md:h-[61px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                        <p className="font-medium text-[14px] md:text-lg leading-none text-[#3C475E] my-auto">
                          {wish.name}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <span data-animate="zoom-in">
                <button onClick={() => setSeeAllMessages(false)} className="flex justify-center items-center w-[340px] md:w-[564px] h-[30px] md:h-[40px] bg-[#3C475E] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#3C475E] mx-auto mt-5 animate zoom-in" data-animate="zoom-in">
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">back</span>
                </button>
              </span>
            </div>
          )}
          {selectedWish && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative w-[340px] md:w-[564px] scale-in">
                <div className="relative py-8 px-5 bg-[#3C475E] rounded-[16px] border border-[#3C475E] shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center">
                  <h3 className="font-medium text-[24px] md:text-[32px] text-white uppercase tracking-wide">
                    {selectedWish.name}
                  </h3>
                  <div className="w-10 h-[1px] bg-[#D6D0C4] mx-auto my-4" />
                  <p className="font-light text-sm md:text-lg leading-relaxed text-white px-2">
                    {selectedWish.message}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedWish(null)}
                  className="flex justify-center items-center w-[340px] md:w-[564px] h-[30px] md:h-[40px] bg-[#3C475E] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#3C475E] mx-auto mt-5"
                >
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">back</span>
                </button>

              </div>
            </div>
          )}
        </div>

        {/* Image Absolute */}
        <Image src="/images/steven-dan-bella/img-tanaman-kiri-atas-wishes.png" alt="Picture of Tanaman Kiri Atas Wishes" width={259} height={357} className="absolute top-0 left-0 w-[95px] md:w-[190px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-atas-wishes.png" alt="Picture of Tanaman Kanan Atas Wishes" width={259} height={357} className="absolute top-0 right-0 w-[95px] md:w-[190px] animate" data-animate="fade-left" />

        <Image src="/images/steven-dan-bella/img-tanaman-kiri-bawah-wishes.png" alt="Picture of Tanaman Kiri Bawah Wishes" width={457} height={581} className="absolute -bottom-[35px] md:-bottom-[60px] left-0 w-[171px] md:w-[271px] animate" data-animate="fade-right" />
        <Image src="/images/steven-dan-bella/img-tanaman-kanan-bawah-wishes.png" alt="Picture of Tanaman Kanan Bawah Wishes" width={457} height={581} className="absolute -bottom-[35px] md:-bottom-[60px] right-0 w-[171px] md:w-[271px] animate" data-animate="fade-left" />

        {/* Gif */}
        <div className="md:hidden absolute bottom-[143px] left-[8px] -rotate-45">
          <Image src="/images/steven-dan-bella/animasi-kupu-kupu-1.gif" alt="Animasi Kupu-kupu" width={51} height={51} className="animate" data-animate="fade-right-butterfly" />
        </div>
        <div className="md:hidden absolute bottom-[103px] right-[64px] -scale-x-100">
          <Image src="/images/steven-dan-bella/animasi-kupu-kupu-2.gif" alt="Animasi Kupu-kupu" width={42} height={42} className="animate" data-animate="fade-left-butterfly" />
        </div>
      </section>
    </>
  )
}