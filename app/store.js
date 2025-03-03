"use client";

import { create } from "zustand";

export const useStore = create((set) => ({
  titleBarSpaceInPx: 0,
  setTitleBarSpaceInPx: (amount) => set({ titleBarSpaceInPx: amount }),
  menuOpen: false,
  setMenuOpen: (operation) => set({ menuOpen: operation }),
  currentPage: "dashboard",
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useStore;
