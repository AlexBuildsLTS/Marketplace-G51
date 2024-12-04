// frontend/src/store/authStore.ts
import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    email: string;
    name: string;
    role: string;
  } | null;
  login: (
    token: string,
    user: { email: string; name: string; role: string }
  ) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  user: null,
  login: (token, user) => set({ isAuthenticated: true, token, user }),
  logout: () => set({ isAuthenticated: false, token: null, user: null }),
}));
