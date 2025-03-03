"use client";

import { useEffect } from "react";
import useStore from "../store";

export const Settings = () => {
  const currentPage = useStore((state) => state.currentPage);
  useEffect(() => {

  }, [currentPage]);
  return (
    <div className={`page ${currentPage === "settings" ? "show" : ""}`}>
      <h1>Settings</h1>
    </div>
  );
};

export default Settings;
