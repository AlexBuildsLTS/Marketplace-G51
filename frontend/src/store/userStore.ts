// frontend/src/store/userStore.ts
import create from 'zustand';
import { UserProfileResponse } from '@/types/user';

interface UserState {
    profile: UserProfileResponse | null;
    setProfile: (profile: UserProfileResponse) => void;
    clearProfile: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    profile: null,
    setProfile: (profile) => set({ profile }),
    clearProfile: () => set({ profile: null }),
}));
