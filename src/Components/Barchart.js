import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

const Barchart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fev",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Abr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Mai",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Agu",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <>
      <div className=" flex flex-col mt-4 bg-white py-2 px-2 rounded-lg">
        <div className="w-[100%] px-2 flex justify-between">
          <div className="text-xl">Total Volume B3 x Maturities</div>
          <div className="flex border border-black py-1 px-6 rounded-3xl gap-2">
            <img src="filter.svg" alt="" />
            Filter
            <img src="drop.svg" alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-end pb-8 pl-4 w-[10%]">
            <div>Total</div>
          </div>
          <div className="flex flex-col w-[90%]">
            <BarChart
              className=""
              width={1000}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="none" axisLine={true} tickLine={false} />
              <Bar
                dataKey="pv"
                maxBarSize={45}
                barSize={45}
                stackId="a"
                fill="#43447C"
              />
              <Bar
                dataKey="uv"
                maxBarSize={45}
                barSize={45}
                radius={[10, 10, 0, 0]}
                stackId="a"
                fill="#D3DCF4"
              />
            </BarChart>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-end pb-8 pl-4 w-[10%]">
            <div>&gt;12 years</div>
          </div>
          <div className="flex flex-col w-[90%]">
            <BarChart
              className=""
              width={1000}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="none" axisLine={true} tickLine={false} />
              <Bar
                dataKey="pv"
                maxBarSize={45}
                barSize={45}
                stackId="a"
                fill="#43447C"
              />
              <Bar
                dataKey="uv"
                maxBarSize={45}
                barSize={45}
                radius={[10, 10, 0, 0]}
                stackId="a"
                fill="#D3DCF4"
              />
            </BarChart>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-end pb-8 pl-4 w-[10%]">
            <div>8-12 years</div>
          </div>
          <div className="flex flex-col w-[90%]">
            <BarChart
              className=""
              width={1000}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="none" axisLine={true} tickLine={false} />
              <Bar
                dataKey="pv"
                maxBarSize={45}
                barSize={45}
                stackId="a"
                fill="#43447C"
              />
              <Bar
                dataKey="uv"
                maxBarSize={45}
                barSize={45}
                radius={[10, 10, 0, 0]}
                stackId="a"
                fill="#D3DCF4"
              />
            </BarChart>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-end pb-8 pl-4 w-[10%]">
            <div>5-8 years</div>
          </div>
          <div className="flex flex-col w-[90%]">
            <BarChart
              className=""
              width={1000}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="none" axisLine={true} tickLine={false} />
              <Bar
                dataKey="pv"
                maxBarSize={45}
                barSize={45}
                stackId="a"
                fill="#43447C"
              />
              <Bar
                dataKey="uv"
                maxBarSize={45}
                barSize={45}
                radius={[10, 10, 0, 0]}
                stackId="a"
                fill="#D3DCF4"
              />
            </BarChart>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-end pb-8 pl-4 w-[10%]">
            <div>2-5 years</div>
          </div>
          <div className="flex flex-col w-[90%]">
            <BarChart
              className=""
              width={1000}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="none" axisLine={true} tickLine={false} />
              <Bar
                dataKey="pv"
                maxBarSize={45}
                barSize={45}
                stackId="a"
                fill="#43447C"
              />
              <Bar
                dataKey="uv"
                maxBarSize={45}
                barSize={45}
                radius={[10, 10, 0, 0]}
                stackId="a"
                fill="#D3DCF4"
              />
            </BarChart>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-end pb-8 pl-4 w-[10%]">
            <div>0-2 years</div>
          </div>
          <div className="flex flex-col w-[90%]">
            <BarChart
              className=""
              width={1000}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" axisLine={true} tickLine={false} />
              <Bar
                dataKey="pv"
                maxBarSize={45}
                barSize={45}
                stackId="a"
                fill="#43447C"
              />
              <Bar
                dataKey="uv"
                maxBarSize={45}
                barSize={45}
                radius={[10, 10, 0, 0]}
                stackId="a"
                fill="#D3DCF4"
              />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Barchart;
