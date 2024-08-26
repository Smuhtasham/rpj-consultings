import React from "react";
import { Table, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Active",
    dataIndex: "active",
    sorter: true,
  },
  {
    title: "Surname",
    dataIndex: "surname",
    sorter: true,
  },
  {
    title: "Risk",
    dataIndex: "risk",
    sorter: true,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    sorter: true,
  },
  {
    title: "Vcto",
    dataIndex: "vcto",
    sorter: true,
  },
  {
    title: "Taxa",
    dataIndex: "taxa",
    sorter: true,
  },
  {
    title: "Anbima",
    dataIndex: "anbima",
    sorter: true,
  },
  {
    title: "Spread",
    dataIndex: "spread",
    sorter: true,
  },
  {
    title: "Volume",
    dataIndex: "volume",
    sorter: true,
  },
  {
    title: "Time",
    dataIndex: "time",
    sorter: true,
  },
];

const data = [
  {
    key: "1",
    active: "AAAA11",
    surname: "Apellido ABCD",
    risk: "Risco ABCD",
    duration: "4,4",
    vcto: "15/May/20240",
    taxa: "5.55%",
    anbima: "6.66%",
    spread: "70 bps",
    volume: "1.000.000,00",
    time: "12:30",
  },
  {
    key: "1",
    active: "AAAA11",
    surname: "Apellido ABCD",
    risk: "Risco ABCD",
    duration: "4,4",
    vcto: "15/May/20240",
    taxa: "5.55%",
    anbima: "6.66%",
    spread: "70 bps",
    volume: "1.000.000,00",
    time: "12:30",
  },
  {
    key: "1",
    active: "AAAA11",
    surname: "Apellido ABCD",
    risk: "Risco ABCD",
    duration: "4,4",
    vcto: "15/May/20240",
    taxa: "5.55%",
    anbima: "6.66%",
    spread: "70 bps",
    volume: "1.000.000,00",
    time: "12:30",
  },
  {
    key: "1",
    active: "AAAA11",
    surname: "Apellido ABCD",
    risk: "Risco ABCD",
    duration: "4,4",
    vcto: "15/May/20240",
    taxa: "5.55%",
    anbima: "6.66%",
    spread: "70 bps",
    volume: "1.000.000,00",
    time: "12:30",
  },
];

const TableComponentfirst = () => {
  const handleTableChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
  };

  return (
    <div className="bg-white rounded-lg mt-4 p-4">
      <div className="flex justify-between"><h2 className="text-2xl">Overview</h2>
      <div className="flex border border-black py-1 px-4 rounded-3xl items-center gap-2">
            <img src="filter.svg" alt="" />
            Filter
            <img src="drop.svg" alt="" />
          </div>
        </div><Table
        columns={columns}
        dataSource={data}
        onChange={handleTableChange}
        pagination={false}
      />
      <div className="flex justify-between mt-[16px]">
        <span></span>
        
      </div>
    </div>
  );
};

export default TableComponentfirst;
