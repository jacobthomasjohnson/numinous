"use client";

import { useEffect, useRef } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import useStore from "../store";

export default function TitleBar() {
  const menuOpen = useStore((state) => state.menuOpen);
  const setMenuOpen = useStore((state) => state.setMenuOpen);
  const setTitleBarSpaceInPx = useStore((state) => state.setTitleBarSpaceInPx);
  const titleBar = useRef(null);

  const doToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.getElementById("min-btn").addEventListener("click", () => {
      window.electronAPI.minimizeWindow();
    });

    document.getElementById("close-btn").addEventListener("click", () => {
      window.electronAPI.closeWindow();
    });

    if (titleBar.current) {
      setTitleBarSpaceInPx(titleBar.current.clientHeight);
    }
  }, []);

  return (
    <div
      ref={titleBar}
      className="title-bar fixed top-0 w-full bg-[#181818] text-[#EFEFEF] flex items-center justify-between select-none p-4 px-6"
      style={{
        WebkitAppRegion: "drag",
      }}
    >
      <div className="text-base">numinous</div>
      <div className="flex items-center justify-center">
        <button id="menu-btn" style={menuButtonStyle} onClick={doToggleMenu}>
          {!menuOpen && <IoMenuOutline />}
          {menuOpen && <IoCloseSharp />}
        </button>
        <div className="title-button-separator w-[30px] text-[#515151] flex items-center justify-center">
          |
        </div>
        <button id="min-btn" style={buttonStyle}>
          —
        </button>
        <button id="close-btn" style={buttonStyle}>
          ✕
        </button>
      </div>
    </div>
  );
}

const menuButtonStyle = {
  background: "none",
  border: "none",
  color: "#EFEFEF",
  fontSize: "18px",
  cursor: "pointer",
  padding: "8px 5px",
  WebkitAppRegion: "no-drag",
};

const buttonStyle = {
  background: "none",
  border: "none",
  color: "#EFEFEF",
  fontSize: "12px",
  cursor: "pointer",
  padding: "8px",
  WebkitAppRegion: "no-drag",
};
