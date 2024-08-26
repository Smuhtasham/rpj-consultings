import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import Barchart from "./Barchart";

const RightPanel = () => {
  return (
    <>
      <div className="w-full bg-[#F3F3F3]">
        <div className=" w-[90%] m-auto flex flex-col">

          <Hero />

          <Main/>

          <Barchart/>
          
        </div>
      </div>
    </>
  );
};

export default RightPanel;
