// frontend/src/types/user.ts
export interface UserProfileResponse {
    id: number;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
    createdAt: string;
}

export interface UpdateProfileRequest {
    name: string;
    avatarUrl?: string;
}
