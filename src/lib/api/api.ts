import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export const register = (name: string, email: string, password: string, role: string = 'BUYER') =>
  api.post('/auth/register', { name, email, password, role });

// User Profile APIs
export const getUserProfile = () => 
  api.get('/users/profile');

export const updateUserProfile = (data: { name: string; avatarUrl?: string }) =>
  api.put('/users/profile', data);

export default api;