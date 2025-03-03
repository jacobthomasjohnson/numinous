"use client";

import { useEffect } from "react";
import useStore from "../store";

export const Journal = () => {
  const currentPage = useStore((state) => state.currentPage);
  useEffect(() => {

  }, [currentPage]);
  return (
    <div className={`page ${currentPage === "journal" ? "show" : ""}`}>
      <h1>Journal</h1>
      <textarea className="w-full min-h-[400px] focus:outline-none hover:bg-[#202020] rounded-xl p-6 transition-all duration-75 resize-none border border-[#444444]" placeholder="How are you feeling today? What's on your mind?"></textarea>
      <p>
        Rate your day <span className="text-[#444444]">(out of 10)</span>
      </p>
      <div className="w-full flex gap-6 h-[100px]">
        <div className="rate-your-day-button">
          0
        </div>
        <div className="rate-your-day-button">
          1
        </div>
        <div className="rate-your-day-button">
          2
        </div>
        <div className="rate-your-day-button">
          3
        </div>
        <div className="rate-your-day-button">
          4
        </div>
        <div className="rate-your-day-button">
          5
        </div>
        <div className="rate-your-day-button">
          6
        </div>
        <div className="rate-your-day-button">
          7
        </div>
        <div className="rate-your-day-button">
          8
        </div>
        <div className="rate-your-day-button">
          9
        </div>
        <div className="rate-your-day-button">
          10
        </div>
      </div>
    </div>
  );
};

export default Journal;
