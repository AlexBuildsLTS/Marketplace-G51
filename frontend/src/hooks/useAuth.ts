import { useCallback } from "react";
import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";
import type { LoginRequest, RegisterRequest } from "@/types/auth";
import { authService } from "@/services/authService";
import { Toast } from "@/components/ui/toast";

export const useAuth = () => {
  const {
    login: loginStore,
    register: registerStore,
    logout,
    isAuthenticated,
    user,
  } = useAuthStore();
  const { toggleAuthModal } = useUIStore();
  const { Toast } = useToast();

  const login = useCallback(
    async (data: LoginRequest) => {
      try {
        const response = await authService.login(data);
        loginStore(response.token, {
          ...response.user,
          role: response.user.role as "buyer" | "seller",
        });
        Toast({
          title: "Success",
          description: "Logged in successfully!",
          variant: "success",
        });
        toggleAuthModal();
      } catch (error: any) {
        Toast({
          title: "Login Failed",
          description:
            error.response?.data?.message || "An error occurred during login.",
          variant: "destructive",
        });
      }
    },
    [loginStore, toggleAuthModal, Toast]
  );

  const register = useCallback(
    async (data: RegisterRequest) => {
      try {
        const response = await authService.register(data);
        registerStore(response.token, {
          ...response.user,
          role: response.user.role as "buyer" | "seller",
        });
        Toast({
          title: "Success",
          description: "Registered successfully!",
          variant: "success",
        });
        toggleAuthModal();
      } catch (error: any) {
        Toast({
          title: "Registration Failed",
          description:
            error.response?.data?.message ||
            "An error occurred during registration.",
          variant: "destructive",
        });
      }
    },
    [registerStore, toggleAuthModal, Toast]
  );

  const handleLogout = useCallback(() => {
    logout();
    Toast({
      title: "Logged Out",
      description: "You have been logged out.",
      variant: "default",
    });
  }, [logout, Toast]);

  return {
    login,
    register,
    logout: handleLogout,
    isAuthenticated,
    user,
  };
};
const useToast = () => {
  const Toast = ({
    title,
    description,
    variant,
  }: {
    title: string;
    description: string;
    variant: "success" | "destructive" | "default";
  }) => {
    // Assuming you have a toast library or component to show the toast notifications
    // This is a placeholder implementation
    console.log(`[${variant.toUpperCase()}] ${title}: ${description}`);
  };

  return { Toast };
};
