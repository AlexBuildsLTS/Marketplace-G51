// src/services/userService.ts
import { api } from './api';
import { User } from '@/types/user';

export const userService = {
  getUserProfile: async (): Promise<User> => {
    const response = await api.get<User>('/users/profile');
    return response.data;
  },

  updateUserProfile: async (data: FormData): Promise<User> => {
    const response = await api.post<User>('/users/profile/avatar', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};
