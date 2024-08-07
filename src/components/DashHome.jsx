import {
  BsCartPlusFill,
  BsCartXFill,
  BsFillCartCheckFill,
  BsGraphDownArrow,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { PieChart } from '@mui/x-charts/PieChart';

import CountUp from "react-countup";

import { BarChart, pieArcLabelClasses } from "@mui/x-charts";
import { IoMdArrowDropup } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";

import { SlTarget } from "react-icons/sl";
import DetialsTable from "./DetailsTable";
import { GiHamburger } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

const DashHome = () => {
  return (
    <div className="h-[calc(100vh-5rem)] bg-darkMainBg w-full p-4 md:p-6 lg:p-8 rounded-t-2xl overflow-y-scroll">
      <p className="pb-3 text-xl font-semibold text-white ">Dashboard</p>
      <div className="grid w-full gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex flex-wrap items-start gap-2 md:col-span-2 md:flex-nowrap lg:w-full">
          <div className="px-4 py-3 rounded-lg bg-darkBg lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
            <div className="p-2 rounded-lg bg-blue-500/20 w-min ">
              <BsCartPlusFill className="text-2xl text-blue-600" />
            </div>
            <p className="py-2 text-sm">Total Orders</p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-3xl font-semibold">
                <CountUp start={0} end={75} duration={4} />
              </p>
              <p className="flex gap-0.5  font-bold text-green-700 items-center">
                <IoMdArrowDropup className="text-lg" /> 5%
              </p>
            </div>
          </div>
          <div className="px-4 py-3 rounded-lg bg-darkBg lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
            <div className="p-2 rounded-lg bg-green-500/20 w-min ">
              <BsFillCartCheckFill className="text-2xl text-green-600" />
            </div>

            <p className="py-2 text-sm">Total Delivered</p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-3xl font-semibold">
                <CountUp start={0} end={70} duration={4} />
              </p>
              <p className="flex gap-0.5  font-bold text-red-500 items-center">
                <IoMdArrowDropup className="text-lg rotate-180" /> 5%
              </p>
            </div>
          </div>
          <div className="px-4 py-3 rounded-lg bg-darkBg lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
            <div className="p-2 rounded-lg bg-red-500/20 w-min ">
              <BsCartXFill className="text-2xl text-red-400" />
            </div>

            <p className="py-2 text-sm">Total Cancelled</p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-3xl font-semibold">
                <CountUp start={0} end={5} duration={4} prefix="0" />
              </p>
              <p className="flex gap-0.5  font-bold text-green-700 items-center">
                <IoMdArrowDropup className="text-lg" /> 5%
              </p>
            </div>
          </div>
          <div className="px-4 py-3 rounded-lg bg-darkBg lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
            <div className="p-2 rounded-lg bg-pink-500/40 w-min ">
              <BsGraphDownArrow className="text-2xl text-pink-400" />
            </div>
            <p className="py-2 text-sm">Total Revenue</p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-3xl font-semibold">
                <CountUp
                  start={0}
                  end={12}
                  duration={4}
                  prefix="$"
                  suffix="k"
                />
              </p>
              <p className="flex gap-0.5  font-bold text-red-500 items-center">
                <IoMdArrowDropup className="text-lg" /> 5%
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 py-3 rounded-lg bg-darkBg lg:min-h-28 md:min-w-28 lg:w-full md:flex-row ">
          <div className="h-full ">
            <p className="py-2 text-sm">Net Profit</p>

            <p className="text-3xl font-semibold">
              <CountUp
                start={0}
                end={6759.25}
                duration={5}
                prefix="$"
                suffix="k"
              />
            </p>
            <p className="flex gap-0.5  font-bold text-green-500 items-center mt-2">
              <IoMdArrowDropup className="text-lg" /> 5%
            </p>
          </div>
          <div className="min-h-20">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 5, label: "cancelled ", color: "red" },
                    { id: 1, value: 70, label: "Delivered " },
                    // { id: 2, value: 20, label: "series C" },
                  ],
                  innerRadius: 25,
                  outerRadius: 40,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,

                  cx: 100,
                  cy: 50,

                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontWeight: "bold",
                  },
                },
              ]}
              width={300}
              height={100}
            />
          </div>
        </div>
        <div className="relative px-4 py-2 text-white rounded-lg md:col-span-2 min-h-72 bg-darkBg ">
          <select className="absolute z-10 px-2 py-1 text-xs rounded-lg outline-none cursor-pointer right-4 top-4 bg-lightHeader md:py-2 md:px-3 md:text-sm">
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
          <div className="h-full">
            <BasicBars />
          </div>
        </div>
        <div className="flex flex-col justify-between px-4 py-3 rounded-lg bg-darkBg lg:min-h-28 lg:min-w-28 md:w-full ">
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-lightHeader">
            <div className="flex items-center gap-2 md:gap-4 ">
              <div className="p-4 rounded-full w-min bg-red-500/20">
                <SlTarget className="text-2xl text-white" />
              </div>
              <p className="md:text-lg">Goal</p>
            </div>

            <div className="p-3 rounded-full bg-gray-500/20 w-min ">
              <MdNavigateNext />
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-lightHeader">
            <div className="flex items-center gap-2 md:gap-4 ">
              <div className="p-4 rounded-full w-min bg-blue-500/20">
                <GiHamburger className="text-2xl text-white" />
              </div>
              <p className="md:text-lg">Popular Dishes</p>
            </div>

            <div className="p-3 rounded-full bg-gray-500/20 w-min ">
              <MdNavigateNext />
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-lightHeader">
            <div className="flex items-center gap-2 md:gap-4 ">
              <div className="p-4 rounded-full w-min bg-cyan-500/20">
                <BiDish className="text-2xl text-white" />
              </div>
              <p className="md:text-lg">Menus</p>
            </div>

            <div className="p-3 rounded-full bg-gray-500/20 w-min ">
              <MdNavigateNext />
            </div>
          </div>
        </div>
        <div className="relative px-4 py-2 text-white rounded-lg md:col-span-2 min-h-72 bg-darkBg ">
          <p className="sticky top-0 py-3 font-semibold text-white bg-darkBg ">
            Recent Orders
          </p>
          <DetialsTable />
        </div>
        <div className="relative px-4  text-white rounded-lg min-h-72 max-h-[50vh] bg-darkBg overflow-y-scroll  ">
          <p className="sticky top-0 py-3 font-semibold text-white bg-darkBg ">
            Customer's Feedback
          </p>

          <ReviewsSection />
        </div>
      </div>
    </div>
  );
};

export default DashHome;

const BasicBars = () => {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          dataKey: "date",
          color: "white",
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
          ],
        },
      ]}
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.4",
          fill: "#fff",
        },
        // change all labels fontFamily shown on both xAxis and yAxis
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
          fontFamily: "Roboto",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.5",
          fill: "#fff",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          stroke: "#fff",
          strokeWidth: 0.4,
        },
        // leftAxis Line Styles
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          stroke: "#fff",
          strokeWidth: 0.4,
        },
      }}
      series={[
        {
          data: [
            4, 8, 5, 10, 2, 4, 10, 4, 8, 5, 4, 2, 4, 11, 4, 8, 5, 6, 2, 4, 13,
            4, 8, 5, 9, 2, 4, 12, 4, 8, 5, 8,
          ],
          color: "#7294ff",

          name: "Revenue",
          type: "bar",
        },
      ]} // Single series with data
      className="w-full min-w-20 min-h-20 "
      borderRadius={20}
      grid={{ horizontal: true }}

      // height={20}
    />
  );
};

const ReviewsSection = () => {
  const data = [
    {
      name: "Steve Jobs",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://i.pinimg.com/736x/f0/da/7b/f0da7b3ad9989546c968b17abc3fda9f.jpg",
    },
    {
      name: "Virat Kohli",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://m.media-amazon.com/images/I/515FUYorAeL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Rohit Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://w0.peakpx.com/wallpaper/554/757/HD-wallpaper-hitman-sharma-indian-cricket-rohit-sharma-thumbnail.jpg",
    },
    {
      name: "Suresh Raina",
      rating: 3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://pbs.twimg.com/profile_images/1465206230121521157/aN6JnuRL_400x400.jpg",
    },
    {
      name: "Sachin Tendulkar",
      rating: 2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://pbs.twimg.com/media/FZSXlWTaQAID1-W.jpg:large",
    },
    {
      name: "Johnny Wilson",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-600nw-2463868847.jpg",
    },
    {
      name: "Johnny Wilson",
      rating: 2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-600nw-2463868847.jpg",
    },
    {
      name: "Johnny Wilson",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-600nw-2463868847.jpg",
    },
    {
      name: "Johnny Wilson",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem.",
      img: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-600nw-2463868847.jpg",
    },
  ];

  return (
    <div className="py-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="px-4 py-2 mb-4 text-white border-b border-gray-500 bg-darkBg"
        >
          <div className="flex gap-2 ">
            <img
              src={item.img}
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className="">
              <p>{item.name}</p>
              <div className="flex gap-1 text-sm">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div>
                    {index < item.rating ? (
                      <BsStarFill className="text-yellow-400" />
                    ) : (
                      // ) : index === item.rating ? (
                      //   <BsStarHalf />
                      <BsStar />
                    )}
                  </div>
                ))}
              </div>
              <p className="pt-2 text-sm">{item.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
