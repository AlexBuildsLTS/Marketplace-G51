// src/store/userStore.ts
import { create } from "zustand";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
  createdAt: string;
}

interface UserState {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile) => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));
