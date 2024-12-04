// frontend/src/hooks/useAuth.ts
import { useState } from 'react';
import { useToast } from '@/hooks/useToast';
import { useAuthStore } from '@/store/authStore';
import { registerUser, loginUser } from '@/services/authService';
import { AuthRequest, RegisterRequest, AuthResponse } from '@/types/auth';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const addToast = useToast();
  const { login, logout } = useAuthStore();

  const register = async (data: RegisterRequest) => {
    setIsLoading(true);
    try {
      const response: AuthResponse = await registerUser(data).then(
          (res) => res.data
      );
      localStorage.setItem('token', response.token);
      login(response.token, {
        email: response.email,
        name: response.name,
        role: response.role,
      });
      addToast({
        title: 'Success',
        description: 'Registered successfully!',
        variant: 'success',
      });
    } catch (error: any) {
      addToast({
        title: 'Error',
        description: error.response?.data?.message || 'Registration failed.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loginUserFunc = async (data: AuthRequest) => {
    setIsLoading(true);
    try {
      const response: AuthResponse = await loginUser(data).then(
          (res) => res.data
      );
      localStorage.setItem('token', response.token);
      login(response.token, {
        email: response.email,
        name: response.name,
        role: response.role,
      });
      addToast({
        title: 'Success',
        description: 'Logged in successfully!',
        variant: 'success',
      });
    } catch (error: any) {
      addToast({
        title: 'Error',
        description: error.response?.data?.message || 'Login failed.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    logout();
    addToast({
      title: 'Logged Out',
      description: 'You have been logged out.',
      variant: 'default',
    });
  };

  return {
    isLoading,
    register,
    login: loginUserFunc,
    logout: logoutUser,
  };
}
