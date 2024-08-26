import React from 'react'

const Main = () => {
  return (
    <>
    <div className="flex flex-col pt-4">
            <div className="flex w-[100%] bg-[#DCE9EE] rounded-t-lg ">
              <div className=" w-[50%] text-center py-2">Total by Assets</div>
              <div className=" w-[50%] text-center py-2 rounded-tr-lg bg-white font-bold">
                Tickets
              </div>
            </div>
            <div className="bg-white pt-4 text-2xl px-4">
              TOP 5 - Volume total por boleta
            </div>
            <div className="bg-white text-center grid grid-cols-4 gap-6 px-4 py-4 rounded-b-lg">
              <div>
                <div className="bg-[#79A08E] rounded-md py-2 text-white">
                  Deb. Institutional
                </div>
                <div className="text-sm pt-2 pb-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
              </div>
              <div>
                <div className="bg-[#43447C] rounded-md py-2 text-white">
                  Deb. Encouraged
                </div>
                <div className="text-sm pt-2 pb-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
              </div>
              <div>
                <div className="bg-[#F25B44] rounded-md py-2 text-white">
                  CRA
                </div>
                <div className="text-sm pt-2 pb-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
              </div>
              <div>
                <div className="bg-[#595F6B] rounded-md py-2 text-white">
                  CRI
                </div>
                <div className="text-sm pt-2 pb-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
                <div className="text-sm py-1">
                  ABCD12 <span className="text-[#F8540E]">R$ 23mi</span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Main