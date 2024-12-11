// src/store/uiStore.ts
import create from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  isAuthModalOpen: boolean;
  toggleSidebar: () => void;
  toggleAuthModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  isAuthModalOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleAuthModal: () => set((state) => ({ isAuthModalOpen: !state.isAuthModalOpen })),
}));
