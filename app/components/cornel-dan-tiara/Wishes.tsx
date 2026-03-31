'use client'

import { useState, useEffect } from 'react'
import { useInView } from '@/app/hooks/useInView'

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

export default function Wishes() {
  const { ref, isVisible } = useInView()
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
      <div className="w-full border-t border-[#4E4E4E40]" />
      <section id="wishes" className="reservation relative w-full min-h-min bg-[#F6F6F4]">
        {!seeAllMessages ? (
          <div className="relative z-10 flex flex-col items-center py-[82px] h-full text-[#3B3B3B] text-center">
            <h3 ref={ref} className={`font-canela font-thin text-[28px] leading-[18px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              your wishes
            </h3>
            <form onSubmit={save} className="flex flex-col items-center">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`mt-[38px] w-[283px] h-[26px] border-[0.49px] border-[#4E4E4E] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'} bg-transparent px-1 py-3 font-outfit text-xs leading-[140%] text-[#311704]`} />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className={`mt-[16px] w-[283px] h-[106px] border-[0.49px] border-[#4E4E4E] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'} bg-transparent px-1 py-2font-outfit text-xs leading-[140%] text-[#311704]`}></textarea>
              <button type="submit" className={`mt-[16px] flex gap-2 justify-center items-center w-[283px] h-[30px] bg-[#4E4E4E] border-[0.49px] border-[#4E4E4E] font-outfit font-normal text-xs leading-[140%] text-[#FEFBF0] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
                <img src="/images/cornel-dan-tiara/icon-send.png" alt="Icon send" className="w-[15px] h-[19px]" />
                <span>send</span>
              </button>
            </form>
            <div ref={ref} className={`mt-[16px] w-[284px] h-[320px] px-[13px] py-[18px] overflow-y-auto scroll-smooth bg-[#4E4E4E] border-[0.49px] border-[#4E4E4E] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              {wishes.length === 0 ? (
                <p className="text-center text-xs text-[#FEFBF0]">
                  No message yet
                </p>
              ) : (
                wishes.map((wish, i) => (
                  <div
                    key={i}
                    className="w-full pb-[13px] border-b-[0.49px] border-b-[#D9D9D9] font-outfit text-left text-[#FEFBF0] mb-[7px]"
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
            <button type="button" onClick={() => setSeeAllMessages(true)} className={`mt-[20px] flex gap-2 justify-center items-center w-[283px] h-[30px] bg-[#4E4E4E] border-[0.49px] border-[#4E4E4E] font-outfit font-normal text-xs leading-[140%] text-[#FEFBF0] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              <img src="/images/adam-dan-yohanna/icon-message.png" alt="Icon maps" className="w-[18px] h-[22px]" />
              <span>see all message</span>
            </button>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center pb-[82px] h-full text-[#3B3B3B] text-center">
            <div ref={ref} className={`relative w-[340px] mt-[20px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full h-[26px] rounded-[5px] pl-[14px] border-[0.49px] border-[#4E4E4E] bg-transparent font-outfit font-normal text-xs leading-[140%] text-[#4E4E4E]" placeholder="Search" />
              <img src="/images/cornel-dan-tiara/icon-search.png" className="absolute right-3 top-1 w-[16px] h-[20px] opacity-50" />
            </div>
            <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] h-[459.87px] overflow-y-auto">
              {filtered.length === 0 ? (
                <p ref={ref} className={`col-span-2 text-center text-sm text-[#4E4E4E] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
                  No message found
                </p>
              ) : (
                filtered.map((wish, i) => (
                  <div
                    key={i}
                    ref={ref}
                    className={`relative w-[160px] h-[140.87px] rounded-[9.57px] bg-[#FEFBF0] border-[0.87px] border-[#4E4E4E] shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}
                    onClick={() => setSelectedWish(wish)}
                  >
                    <div className="w-full relative px-[9px]">
                      <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                        “
                      </p>
                      <p className="relative top-[34px] font-outfit font-light text-xs leading-none text-[#4E4E4E]">
                        {wish.message}
                      </p>
                    </div>
                    <div className="bg-[#868686] flex absolute w-full h-[41px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                      <p className="font-outfit font-medium text-xs leading-none text-[#FEFBF0] my-auto">
                        {wish.name}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button onClick={() => setSeeAllMessages(false)} className={`mt-[38px] flex justify-center items-center w-[340px] h-[30px] bg-[#4E4E4E] border-[0.49px] border-[#4E4E4E] font-outfit font-normal text-sx leading-[140%] text-[#FEFBF0] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              back
            </button>
          </div>
        )}
        {selectedWish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3B3B3B]/80">
            <div className="relative">
              <div className="w-[340px] min-h-min py-[33px] px-[16px] bg-[#FEFBF078] border-[0.87px] border-[#adadad] shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] text-center">
                <h3 className="font-cormorant font-medium text-[28px] leading-none text-[#FEFBF0] uppercase">
                  {selectedWish.name}
                </h3>
                <p className="font-outfit font-light text-xs leading-none text-[#FEFBF0] my-[75px]">
                  {selectedWish.message}
                </p>
              </div>
              <button
                onClick={() => setSelectedWish(null)}
                className="mt-[20px] w-full h-[30px] bg-[#4E4E4E] border-[0.87px] border-[#4E4E4E] text-[#FEFBF0] font-outfit font-normal text-xs leading-[140%] uppercase"
              >
                back
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  )
}