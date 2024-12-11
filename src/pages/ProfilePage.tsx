import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useUserStore } from "@/store/userStore";
import { useToast } from "@/hooks/use-toast";
import { userService } from "@/services/userService";
// import { Button } from "@/components/ui/button";

export function ProfilePage() {
  const { profile, setProfile } = useUserStore();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const userProfile = await userService.getUserProfile();
        setProfile({
          ...userProfile,
          createdAt: new Date().toISOString(), // Assuming you want to set a default value
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description:
            error.response?.data?.message || "Failed to fetch profile.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [setProfile, toast]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0] && profile) {
      const file = files[0];
      const formData = new FormData();
      formData.append("avatar", file);

      try {
        const updatedProfile = await userService.updateUserProfile(formData);
        setProfile({
          ...updatedProfile,
          createdAt: profile.createdAt,
        });
        toast({
          title: "Success",
          description: "Profile updated successfully!",
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.response?.data?.message || "Update failed.",
        });
      }
    }
  };

  if (isLoading || !profile) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex items-center justify-center p-4 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
          <h2 className="mb-4 text-2xl text-center">User Profile</h2>
          <div className="mb-4 text-center">
            {profile.avatarUrl ?
              <img
                src={profile.avatarUrl}
                alt="Avatar"
                className="w-24 h-24 mx-auto mb-2 rounded-full"
              />
            : <div className="flex items-center justify-center w-24 h-24 mx-auto mb-2 text-2xl text-white bg-gray-300 rounded-full">
                {profile.name.charAt(0).toUpperCase()}
              </div>
            }
            <input type="file" accept="image/*" onChange={handleAvatarUpload} />
          </div>
          <div className="mb-2">
            <strong>Name:</strong> {profile.name}
          </div>
          <div className="mb-2">
            <strong>Email:</strong> {profile.email}
          </div>
          <div className="mb-2">
            <strong>Role:</strong> {profile.role}
          </div>
          <div className="mb-2">
            <strong>Joined:</strong>{" "}
            {new Date(profile.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Layout>
  );
}
