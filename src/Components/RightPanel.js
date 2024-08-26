import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import Barchart from "./Barchart";
import TableComponent from "./TableComponent";
import TableComponentfirst from "./TableComponentfirst";

const RightPanel = () => {
  return (
    <>
      <div className="w-full bg-[#F3F3F3]">
        <div className=" w-[90%] m-auto flex flex-col">

          <Hero />

          <Main/>

          <Barchart/>

          <TableComponentfirst/>

          <TableComponent/>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
