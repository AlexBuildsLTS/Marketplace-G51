import axiosInstance from "../axios";
import type { User } from "@/types/user";

export const getUserProfile = async (): Promise<User> => {
  const response = await axiosInstance.get("/users/profile");
  return response.data;
};

export const updateUserProfile = async (data: Partial<User>): Promise<User> => {
  const response = await axiosInstance.put("/users/profile", data);
  return response.data;
};
