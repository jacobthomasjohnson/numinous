"use client";

import { useEffect } from "react";
import useStore from "../store";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineTrackChanges } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";

export const Dashboard = () => {
  const currentPage = useStore((state) => state.currentPage);
  useEffect(() => {}, [currentPage]);
  return (
    <div className={`page ${currentPage === "dashboard" ? "show" : ""}`}>
      <h1>Dashboard</h1>
      <div className="flex w-full gap-4 h-[200px] justify-between">
        <div className="border w-full border-[#252525] p-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-75 hover:bg-[#3e5664] hover:cursor-pointer">
          <IoMdAdd />
          Add Journal Entry
        </div>
        <div className="border w-full border-[#252525] p-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-75 hover:bg-[#3d5b4a] hover:cursor-pointer">
          <MdOutlineTrackChanges />
          Track Your Mood
        </div>
        <div className="border w-full border-[#252525] p-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-75 hover:bg-[#7a577d] hover:cursor-pointer">
          <IoStatsChartSharp />
          Check Your Analytics
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
