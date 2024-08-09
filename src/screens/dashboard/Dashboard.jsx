import React, { useState } from "react";
import DashSidePanel from "../../components/DashSidePanel";
import DashNav from "../../components/DashNav";

import { AiFillHome } from "react-icons/ai";

import DashHome from "../../components/DashHome";
import { BiTask } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import Stats from "./Stats";
import Task from "./Task";
import Wallet from "./Wallet";
import Shopping from "./Shopping";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const menuItems = [
    { label: "Dashboard", icon: AiFillHome },
    { label: "Stats", icon: RiBarChartBoxLine },

    { label: "Task", icon: BiTask },
    { label: "Wallet", icon: CiWallet },
    { label: "Shopping", icon: TbShoppingBagCheck },
  ];
  return (
    <div>
      <div className="flex w-full bg-darkBg ">
        <div className={` `}>
          {/* <div className={`  ${open ? "min-w-60" : "min-w-20"}`}> */}
          <DashSidePanel
            open={open}
            setOpen={setOpen}
            menuItems={menuItems}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="relative w-full h-screen">
          <div className="top-0 left-0 w-full md:sticky">
            <DashNav open={open} setOpen={setOpen} />
          </div>
          <div className="w-full ">
            {selectedItem === "Dashboard" ? (
              <DashHome />
            ) : selectedItem === "Stats" ? (
              <Stats />
            ) : selectedItem === "Task" ? (
              <Task />
            ) : selectedItem === "Wallet" ? (
              <Wallet />
            ) : selectedItem === "Shopping" ? (
              <Shopping />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
