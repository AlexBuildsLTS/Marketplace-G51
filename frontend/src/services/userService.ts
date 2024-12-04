import api from './api';
import { UserProfileResponse, UpdateProfileRequest } from '@/types/user';

export const getUserProfile = () => api.get<UserProfileResponse>('/users/profile');
export const updateUserProfile = (data: UpdateProfileRequest) => api.put<UserProfileResponse>('/users/profile', data);
