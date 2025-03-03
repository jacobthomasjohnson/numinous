"use client";

import { useEffect } from "react";
import useStore from "../store";

export const Analytics = () => {
  const currentPage = useStore((state) => state.currentPage);
  useEffect(() => {

  }, [currentPage]);
  return (
    <div className={`page ${currentPage === "analytics" ? "show" : ""}`}>
      <h1>Analytics</h1>
    </div>
  );
};

export default Analytics;
