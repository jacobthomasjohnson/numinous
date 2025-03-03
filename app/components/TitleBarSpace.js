"use client";

import useStore from "../store";
import { useEffect } from "react";

export const TitleBarSpace = () => {
  const titleBarSpaceInPx = useStore((state) => state.titleBarSpaceInPx);
  useEffect(() => {}, [titleBarSpaceInPx]);
  console.log(`titleBarSpaceInPx has been set to ${titleBarSpaceInPx}`);

  return (
    <div
      className="relative -z-50 bg-red-500 top-0 w-full"
      style={{
        height: `${titleBarSpaceInPx}px`,
      }}
    ></div>
  );
};

export default TitleBarSpace;
