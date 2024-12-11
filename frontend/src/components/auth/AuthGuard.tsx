import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useUIStore } from '@/store/uiStore';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuthStore();
  const { toggleAuthModal } = useUIStore();

  useEffect(() => {
    if (!isAuthenticated) {
      toggleAuthModal();
    }
  }, [isAuthenticated, toggleAuthModal]);

  return <>{children}</>;
}