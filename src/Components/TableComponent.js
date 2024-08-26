import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "ABCD12", value: 2.3 },
  { name: "ABCD13", value: 1.8 },
  { name: "ABCD14", value: 1.3 },
  { name: "ABCD15", value: 0.9 },
  { name: "ABCD16", value: 0.3 },
  { name: "ABCD16", value: -0.3 },
  { name: "ABCD15", value: -0.9 },
  { name: "ABCD14", value: -1.3 },
  { name: "ABCD13", value: -1.8 },
  { name: "ABCD12", value: -2.3 },
];

const CustomBarLabel = (props) => {
  const { x, y, width, value, name } = props;
  const offset = value < 0 ? -5 : 5;
  return (
    <text
      x={x + width + offset}
      y={y + 10}
      textAnchor={value < 0 ? "end" : "start"}
      fontSize={14}
    >
      {`${value > 0 ? "+" : ""}${value}% ${name}`}
    </text>
  );
};

const CustomBarChart = ({ title }) => (
  <div className="w-full h-[400px] mb-5">
    <h3 className="mb-3 text-center font-semibold text-lg">{title}</h3>
    <div className="w-full h-1/2">
      <ResponsiveContainer width="90%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis
            type="number"
            dataKey=""
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            hide
          />
          <Bar
            dataKey="value"
            barSize={20}
            label={<CustomBarLabel />}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value > 0 ? "#43447C" : "#D72B2B"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const TableComponent = () => (
  <div className="p-6 flex flex-col bg-white my-6 rounded-xl">
    <div className="flex justify-between pb-4">
      <h2 className="text-3xl">Customize your dashboard</h2>
      <div className="flex border border-black py-1 px-4 rounded-3xl gap-2 items-center">
            <img src="filter.svg" alt="" />
            Filter
            <img className="size-5" src="drop.svg" alt="" />
          </div>
        </div>
    <div className="flex flex-wrap justify-evenly">
      <div className="w-full md:w-[48%]">
        <CustomBarChart title="Product - Deb Incentivized" />
      </div>
      <div className="w-full md:w-[48%]">
        <CustomBarChart title="Sector - Energy" />
      </div>
      <div className="w-full md:w-[48%]">
        <CustomBarChart title="Rating - AAA, AA+ e AA" />
      </div>
      <div className="w-full md:w-[48%]">
        <CustomBarChart title="My favorites" />
      </div>
    </div>
  </div>
);

export default TableComponent;
