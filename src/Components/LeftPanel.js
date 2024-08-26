import React from "react";

const LeftPanel = () => {
  return (
    <>
      <div className=" bg-[#575E6A]">
        <div className="w-[80%] m-auto flex flex-col">
          <div className="text-2xl font-bold text-white text-center pt-5">
            RPJ Consulting
          </div>
          <div className="flex flex-col items-center justify-center pt-8">
            <img className="size-[60px]" src="profile.svg" alt="" />
            <div className="text-white text-sm">João da Silva</div>
          </div>

          <div className="flex flex-col gap-[2720px] ">
            <div className="flex flex-col text-[#D4D4D4] text-sm w-[80%] m-auto pt-8 gap-6">
              <div className="flex gap-2 text-white font-bold">
                <img src="union.svg" alt="" /> Trading D1
              </div>
              <div className="flex gap-2">
                <img src="chart.svg" alt="" /> Trading Historico
              </div>
              <div className="flex gap-2">
                <img src="arrow-g.svg" alt="" /> Performances
              </div>
              <div className="flex gap-2">
                <img src="chart.svg" alt="" /> Activos
              </div>
              <div className="flex gap-2">
                <img src="star.svg" alt="" /> Menu Favoritos
              </div>
            </div>

            <div className="flex flex-col text-[#D4D4D4] text-sm w-[80%] py-8 m-auto">
              <div className="flex gap-2">
                <img className="size-[20px]" src="logout.svg" alt="" />
                Signout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
