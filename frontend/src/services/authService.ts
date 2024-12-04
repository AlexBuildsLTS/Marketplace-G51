// frontend/src/services/authService.ts
import api from './api';
import { AuthRequest, RegisterRequest, AuthResponse } from '@/types/auth';

export const registerUser = (data: RegisterRequest) =>
  api.post<AuthResponse>('/auth/register', data);
export const loginUser = (data: AuthRequest) =>
  api.post<AuthResponse>('/auth/login', data);
