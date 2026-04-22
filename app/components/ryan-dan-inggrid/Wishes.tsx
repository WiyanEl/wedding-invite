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

  const handleCopy = () => {
    navigator.clipboard.writeText('1234567891011');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <>
      {isOpen ? (
        <div className="bg-cover bg-center" style={{backgroundImage: "url('/images/ryan-dan-inggrid/bg-wishes-mobile.png')"}}>
          <section id="wishes" className="wishes relative w-full min-h-min">
            {!seeAllMessages ? (
              <div className="relative text-center pt-[90px] md:pt-[150px] font-lora text-[#FEFBF0]">
                <h2 className="font-kunstler text-[64px] md:text-[96px] font-normal leading-[22px] md:leading-[22px] animate fade-up" data-animate="fade-up">Your Wishes</h2>
                <form onSubmit={save} className="mx-auto mt-[73px] md:mt-[89px] animate fade-up" data-animate="fade-up">
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-[284px] md:w-[564px] h-[30px] md:h-[40px] rounded-[10px] md:rounded-[64px] border-[0.49px] border-[#FEFBF0] bg-transparent px-[13px] md:px-[23px] py-1 font-lora text-xs md:text-lg leading-[140%] text-[#FEFBF0] placeholder:text-[#FEFBF080] mx-auto" placeholder="Desy (Tester)" />
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-[284px] md:w-[564px] h-[106px] md:h-[261px] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#FEFBF0] bg-transparent px-[13px] md:px-[23px] py-1 font-lora text-xs md:text-lg leading-[140%] text-[#FEFBF0] mx-auto mt-4"></textarea>
                  <button type="submit" className="flex justify-center items-center w-[284px] md:w-[564px] h-[30px] md:h-[40px] bg-[#FEFBF0] rounded-[10px] border-[0.49px] border-[#FEFBF0] mx-auto mt-4">
                    <Image src="/images/ryan-dan-inggrid/icon-send.png" alt="Picture of Icon Send" width={25} height={31} className="hidden md:block mr-2" />
                    <span className="text-xs md:text-lg text-[#1B1C1D] font-normal leading-[140%] uppercase">send</span>
                  </button>
                </form>
                <div className="w-[284px] md:w-[564px] h-[320px] md:h-[526px] rounded-[10px] md:rounded-[20px] bg-[#FEFBF0] border-[0.49px] border-[#FEFBF0] py-[18px] md:py-[39px] px-[13px] md:px-[23px] mx-auto mt-4 md:mt-[40px] animate fade-up" data-animate="fade-up">
                  <div className="w-full h-full overflow-y-auto scroll-smooth">
                    {wishes.length === 0 ? (
                      <p className="text-center text-xs md:text-lg text-[#FEFBF0]">
                        No message yet
                      </p>
                    ) : (
                      wishes.map((wish, i) => (
                        <div
                          key={i}
                          className="w-full pb-[13px] border-b-[0.49px] border-b-[#1B1C1D] font-lora text-left text-[#1B1C1D] mb-[7px]"
                        >
                          <p className="font-semibold md:font-bold text-xs md:text-lg leading-[140%]">
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
                <button type="button" onClick={() => setSeeAllMessages(true)} className="flex justify-center items-center w-[284px] md:w-[564px] h-[30px] md:h-[40px] bg-[#FEFBF0] rounded-[10px] border-[0.49px] border-[#FEFBF0] mx-auto mt-4 animate fade-up" data-animate="fade-up">
                    <Image src="/images/ryan-dan-inggrid/icon-message.png" alt="Picture of Icon Send" width={23} height={28} className="hidden md:block mr-2" />
                    <span className="text-xs md:text-lg text-[#1B1C1D] font-normal leading-[140%] uppercase">see all message</span>
                  </button>
              </div>
            ) : (
              <div className="relative text-center pt-[90px] md:pt-[150px] text-[#3B3B3B]">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-[284px] md:w-[564px] h-[30px] md:h-[40px] rounded-[10px] md:rounded-[64px] border-[0.49px] border-[#FEFBF0] bg-transparent px-2 py-1 font-lora text-xs md:text-lg leading-[140%] text-[#FEFBF0] placeholder:text-[#FEFBF080] mx-auto animate fade-up" data-animate="fade-up" placeholder="Search" />
                <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] md:w-[564px] h-[459.87px] md:h-[638px] overflow-y-auto mx-auto">
                  {filtered.length === 0 ? (
                    <p className={`col-span-2 text-center text-sm text-[#4E4E4E] animate'}`}>
                      No message found
                    </p>
                  ) : (
                    filtered.map((wish, i) => (
                      <div
                        key={i}
                      
                        className="relative w-[160px] md:w-[252px] h-[140.87px] md:h-[252px] rounded-[9.57px] md:rounded-[20px] bg-[#FEFBF0] border-[0.87px] border-[#4E4E4E] shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer fade-up"
                        onClick={() => setSelectedWish(wish)}
                      >
                        <div className="w-full relative px-[9px]">
                          <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                            “
                          </p>
                          <p className="relative top-[34px] font-lora font-light text-xs md:text-lg leading-none text-[#4E4E4E]">
                            {wish.message}
                          </p>
                        </div>
                        <div className="bg-[#868686] flex absolute w-full h-[41px] md:h-[61px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                          <p className="font-lora font-medium text-xs md:text-lg leading-none text-[#FEFBF0] my-auto">
                            {wish.name}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <span data-animate="fade-up">
                  <button onClick={() => setSeeAllMessages(false)} className="flex justify-center items-center w-[340px] md:w-[564px] h-[30px] md:h-[40px] bg-[#FEFBF0] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#FEFBF0] mx-auto mt-5 animate fade-up" data-animate="fade-up">
                    <span className="text-xs md:text-lg text-[#1B1C1D] font-normal leading-[140%] uppercase">back</span>
                  </button>
                </span>
              </div>
            )}
            {selectedWish && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="relative w-[340px] md:w-[564px] scale-in">
                  <div className="relative py-8 px-5 bg-[#FEFBF0] rounded-[16px] border border-[#EDE7DC] shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center">
                    <h3 className="font-lora font-medium text-[24px] md:text-[32px] text-[#4E4E4E] uppercase tracking-wide">
                      {selectedWish.name}
                    </h3>
                    <div className="w-10 h-[1px] bg-[#D6D0C4] mx-auto my-4" />
                    <p className="font-lora font-light text-sm md:text-lg leading-relaxed text-[#4E4E4E] px-2">
                      {selectedWish.message}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedWish(null)}
                    className="flex justify-center items-center w-[340px] md:w-[564px] h-[30px] md:h-[40px] bg-[#FEFBF0] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#FEFBF0] mx-auto mt-5"
                  >
                    <span className="text-xs md:text-lg text-[#1B1C1D] font-normal leading-[140%] uppercase">back</span>
                  </button>

                </div>
              </div>
            )}
          </section>

          <section id="wedding-gift" className="wedding-gift relative w-full min-h-min">
            <div className="relative text-center pt-[95px] md:pt-[287px] pb-[74px] md:pb-[131px] font-lora text-[#FEFBF0]">
              <h2 className="font-kunstler text-[64px] md:text-[96px] font-normal leading-[22px] md:leading-[22px] ml-[-25px] animate fade-up" data-animate="fade-up">Wedding Gift</h2>
              <h6 className="text-xs md:text-lg font-medium leading-[20px] md:leading-[26px] uppercase mt-[57px] md:mt-[79px] animate" data-animate="fade-up">
                <span className="md:hidden">your prayers and presence will be the</span> <br />
                <span className="md:hidden">greatest blessing for us.</span>
                <span className="hidden md:inline-block">your prayers and presence will be the greatest</span> <br />
                <span className="hidden md:inline-block">blessing for us.</span>
              </h6>
              <h6 className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px] mt-3 md:mt-4 animate" data-animate="fade-up">
                <span className="md:hidden">Should you wish to express your love with a gift,</span> <br />
                <span className="md:hidden">kindly find the details below for your convenience.</span>
                <span className="hidden md:inline-block">Should you wish to express your love with a gift, kindly find the</span> <br />
                <span className="hidden md:inline-block">details below for your convenience.</span>
              </h6>
              <Image src="/images/ryan-dan-inggrid/logo-bca.png" alt="Picture of Logo BCA" width="64" height={23} className="md:w-[88px] md:h-[31px] mx-auto mt-[57px] animate" data-animate="fade-up" />
              <div className="flex gap-[25px] md:gap-[49px] justify-center items-center mt-[22px] animate" data-animate="fade-up">
                <span className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px]">1234567891011</span>
                <button
                  onClick={handleCopy}
                  className="w-[57px] md:w-[110px] h-[30px] md:h-[40px] flex items-center justify-center bg-[#FEFBF0] rounded-[51px] animate" data-animate="fade-up">
                    <span className="text-xs md:text-lg font-normal leading-[81%] md:leading-[26px] text-[#1B1C1D]">{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <p className="text-xs md:text-lg font-normal leading-[20px] md:leading-[26px] mt-[15px] md:mt-[18px] animate" data-animate="fade-up">Bank BCA - PROVITE</p>
            </div>
          </section>
        </div>
      ) : null}
    </>
  )
}