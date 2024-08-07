import React, { useState } from "react";
import DashSidePanel from "../../components/DashSidePanel";
import DashNav from "../../components/DashNav";

import { AiFillHome } from "react-icons/ai";

import DashHome from "../../components/DashHome";
import { BiTask } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
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
        <div className={` hidden md:block`}>
          {/* <div className={`  ${open ? "min-w-60" : "min-w-20"}`}> */}
          <DashSidePanel
            open={open}
            setOpen={setOpen}
            menuItems={menuItems}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="h-screen relative w-full">
          <div className="md:sticky top-0 left-0 w-full">
            <DashNav />
          </div>
          <div className="w-full">
            <DashHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
