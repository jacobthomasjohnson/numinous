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
    </div>
  );
};

export default Journal;
