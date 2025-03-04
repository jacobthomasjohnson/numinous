"use client";

import { useEffect } from "react";
import useStore from "../store";

import Icons from "../components/ui/Icons";

export const Dashboard = () => {
  const currentPage = useStore((state) => state.currentPage);
  useEffect(() => {}, [currentPage]);
  return (
    <div className={`page ${currentPage === "dashboard" ? "show" : ""}`}>
      <h1>Welcome! Do you already have an account?</h1>
      <div className="w-full flex flex-col">
        <div className="py-6 text-green-400 hover:px-6 hover:bg-neutral-900 border border-transparent hover:border-neutral-700 transition-all duration-100 ease-out rounded-xl">
          No, I'd like to make one now!
        </div>
        <div className="py-6 text-neutral-200 hover:px-6 hover:bg-neutral-900 border border-transparent hover:border-neutral-700 transition-all duration-100 ease-out rounded-xl">
          Yes, I will sign in.
        </div>
      </div>
      {/* <div className="flex w-full gap-4 h-[200px] justify-between">
        <div className="border w-full border-[#252525] p-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-75 hover:bg-[#3e5664] hover:cursor-pointer">
          <Icons.Journal />
          Add Journal Entry
        </div>
        <div className="border w-full border-[#252525] p-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-75 hover:bg-[#3d5b4a] hover:cursor-pointer">
          <Icons.Tracking />
          Track Your Mood
        </div>
        <div className="border w-full border-[#252525] p-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-75 hover:bg-[#7a577d] hover:cursor-pointer">
          <Icons.Analytics />
          Check Your Analytics
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
