"use client";

import useStore from "../store";
import Icons from "./ui/Icons";

export const Menu = () => {
  const menuOpen = useStore((state) => state.menuOpen);
  const setMenuOpen = useStore((state) => state.setMenuOpen);
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const doToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const doChangePage = (page) => {
    doToggleMenu();
    setCurrentPage(page);
  }
  return (
    <>
      <div
        className={`fixed left-0 w-full h-full z-40 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={doToggleMenu}
      ></div>
      <div
        className={`w-1/4 transition-all duration-500 ease-out fixed flex z-50 flex-col gap-2 right-0 bg-[#181818]`}
        style={{
          transform: menuOpen ? `translateX(0%)` : `translateX(100%)`,
        }}
      >
        <div
          className="p-4 bg-[#181818] border border-[#333333] mx-6 ml-0 mb-0 rounded-lg hover:bg-[#202020] hover:cursor-pointer transition-all duration-[10ms] ease-in flex items-center gap-2"
          onClick={() => doChangePage("dashboard")}
        >
          <Icons.Dashboard />
          Dashboard
        </div>
        <div
          className="p-4 bg-[#181818] border border-[#333333] mx-6 ml-0 mb-0 rounded-lg hover:bg-[#202020] hover:cursor-pointer transition-all duration-[10ms] ease-in flex items-center gap-2"
          onClick={() => doChangePage("journal")}
        >
          <Icons.Journal />
          Journal
        </div>
        <div
          className="p-4 bg-[#181818] border border-[#333333] mx-6 ml-0 mb-0 rounded-lg hover:bg-[#202020] hover:cursor-pointer transition-all duration-[10ms] ease-in flex items-center gap-2"
          onClick={() => doChangePage("analytics")}
        >
          <Icons.Analytics />
          Analytics
        </div>
        <div
          className="p-4 bg-[#181818] border border-[#333333] mx-6 ml-0 mb-0 rounded-lg hover:bg-[#202020] hover:cursor-pointer transition-all duration-[10ms] ease-in flex items-center gap-2"
          onClick={() => doChangePage("settings")}
        >
          <Icons.Settings />
          Settings
        </div>
      </div>
    </>
  );
};

export default Menu;
