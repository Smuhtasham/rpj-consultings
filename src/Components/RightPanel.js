import React from "react";

const RightPanel = () => {
  return (
    <>
      <div className="w-full bg-[#F3F3F3]">
        <div className=" w-[90%] m-auto flex flex-col">
          <div className="flex pt-5 w-[100%] gap-4 justify-between">
            <div className="w-[20%] text-[32px]">
              B3 Registered Operations in D-1
            </div>
            <div className="w-[75%]">
              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col bg-[#79A08E] text-white py-3 px-3 rounded-[30px]">
                  <img className="size-[40px]" src="grid1.svg" alt="" />
                  <div className="pt-4">Institutional Debentures</div>
                  <div className="pt-2">
                    <span className="font-bold text-3xl">R$603</span>
                  </div>
                  <div> Millions</div>
                  <div className="pt-2 text-xs font-light text-center">
                    1,2MM MTD | 5,8MM YTD
                  </div>
                </div>
                <div className="flex flex-col bg-[#43447C] text-white py-3 px-3 rounded-[30px]">
                  <img className="size-[40px]" src="grid1.svg" alt="" />
                  <div className="pt-4">Institutional Debentures</div>
                  <div className="pt-2">
                    <span className="font-bold text-3xl">R$603</span>
                  </div>
                  <div> Millions</div>
                  <div className="pt-2 text-xs font-light text-center">
                    1,2MM MTD | 5,8MM YTD
                  </div>
                </div>
                <div className="flex flex-col bg-[#F25B44] text-white py-3 px-3 rounded-[30px]">
                  <img className="size-[40px]" src="grid1.svg" alt="" />
                  <div className="pt-4">Institutional Debentures</div>
                  <div className="pt-2">
                    <span className="font-bold text-3xl">R$603</span>
                  </div>
                  <div> Millions</div>
                  <div className="pt-2 text-xs font-light text-center">
                    1,2MM MTD | 5,8MM YTD
                  </div>
                </div>
                <div className="flex flex-col bg-[#595F6B] text-white py-3 px-3 rounded-[30px]">
                  <img className="size-[40px]" src="grid1.svg" alt="" />
                  <div className="pt-4">Institutional Debentures</div>
                  <div className="pt-2">
                    <span className="font-bold text-3xl">R$603</span>
                  </div>
                  <div> Millions</div>
                  <div className="pt-2 text-xs font-light text-center">
                    1,2MM MTD | 5,8MM YTD
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="flex flex-col pt-4">
                <div className="flex w-[100%] bg-[#DCE9EE] rounded-t-lg ">
                    <div className=" w-[50%] text-center py-2">Total by Assets</div>
                    <div className=" w-[50%] text-center py-2 rounded-tr-lg bg-white font-bold">Tickets</div>
                </div>
                <div className="bg-white pt-4 text-xl px-4">TOP 5 - Volume total por boleta</div>
                <div className="bg-white text-center grid grid-cols-4 gap-6 px-4 py-4 rounded-b-lg">
                    <div>
                        <div className="bg-[#79A08E] rounded-md py-2 text-white">Deb. Institutional</div>
                        <div className="text-sm pt-2 pb-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        
                    </div>
                    <div>
                        <div className="bg-[#43447C] rounded-md py-2 text-white">Deb. Encouraged</div>
                        <div className="text-sm pt-2 pb-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        
                    </div>
                    <div>
                        <div className="bg-[#F25B44] rounded-md py-2 text-white">CRA</div>
                        <div className="text-sm pt-2 pb-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        
                    </div>
                        <div>
                            <div className="bg-[#595F6B] rounded-md py-2 text-white">CRI</div>
                            <div className="text-sm pt-2 pb-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                            <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                            <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                            <div className="text-sm py-1">ABCD12 <span className="text-[#F8540E]">R$ 23mi</span></div>
                        </div>
                </div>
            </div>


            <div className=" flex flex-col mt-4 bg-white py-2 px-2 rounded-lg">
                <div className="w-[100%] px-2 flex justify-between">
                    <div className="text-xl">Total Volume B3 x Maturities</div>
                    <div className="">Filter</div>
                </div>
                <div>
                    
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default RightPanel;
