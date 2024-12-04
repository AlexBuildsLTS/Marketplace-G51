// frontend/src/pages/ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import { useUserStore } from '@/store/userStore';
import { useToast } from '@/hooks/useToast';
import { getUserProfile, updateUserProfile} from '@/services/userService';
import Layout from '@/components/Shared/Layout';
import api from '@/services/api';

const ProfilePage: React.FC = () => {
  const { profile, setProfile } = useUserStore();
  const addToast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const response = await getUserProfile();
        setProfile(response.data);
      } catch (error: any) {
        addToast({
          title: 'Error',
          description:
              error.response?.data?.message || 'Failed to fetch profile.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [setProfile, addToast]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await api.post('/users/profile/avatar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setProfile(response.data);
        addToast({
          title: 'Success',
          description: 'Profile updated successfully!',
          variant: 'success',
        });
      } catch (error: any) {
        addToast({
          title: 'Error',
          description: error.response?.data?.message || 'Update failed.',
          variant: 'destructive',
        });
      }
    }
  };

  if (isLoading || !profile) {
    return (
        <Layout>
          <div className="flex justify-center items-center min-h-screen">
            Loading...
          </div>
        </Layout>
    );
  }

  return (
      <Layout>
        <div className="flex justify-center items-center bg-gray-100 p-4">
          <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl mb-4 text-center">User Profile</h2>
            <div className="mb-4 text-center">
              {profile.avatarUrl ? (
                  <img
                      src={profile.avatarUrl}
                      alt="Avatar"
                      className="w-24 h-24 rounded-full mx-auto mb-2"
                  />
              ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-2 flex items-center justify-center text-white text-2xl">
                    {profile.name.charAt(0).toUpperCase()}
                  </div>
              )}
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
              <strong>Joined:</strong>{' '}
              {new Date(profile.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default ProfilePage;
