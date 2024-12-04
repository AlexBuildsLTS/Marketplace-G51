// frontend/src/types/user.ts
export interface UserProfileResponse {
  email: string;
  name: string;
  role: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface UpdateProfileRequest {
  avatarUrl?: string;
  // Add other fields if necessary
}
