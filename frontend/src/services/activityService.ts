// src/services/activityService.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});
import { Activity } from "@/types/activity";

export const getRecentActivities = async (
  userId: string
): Promise<Activity[]> => {
  const response = await api.get<Activity[]>(`/users/${userId}/activities`);
  return response.data;
};
