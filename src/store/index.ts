// src/store/index.ts
import { create } from "zustand";
import { storage } from "@/lib/utils";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role: string
  ) => Promise<void>;
  logout: () => void;
}

interface UIState {
  isSidebarOpen: boolean;
  isLoading: boolean;
  toggleSidebar: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: storage.get("user"),
  token: storage.get("token"),
  isAuthenticated: !!storage.get("token"),

  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      const { token, user } = response.data;
      storage.set("token", token);
      storage.set("user", user);
      set({ user, token, isAuthenticated: true });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  register: async (
    name: string,
    email: string,
    password: string,
    role: string
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          name,
          email,
          password,
          role,
        }
      );
      const { token, user } = response.data;
      storage.set("token", token);
      storage.set("user", user);
      set({ user, token, isAuthenticated: true });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  },

  logout: () => {
    storage.remove("token");
    storage.remove("user");
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export const useUI = create<UIState>((set) => ({
  isSidebarOpen: false,
  isLoading: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setLoading: (loading) => set({ isLoading: loading }),
}));
