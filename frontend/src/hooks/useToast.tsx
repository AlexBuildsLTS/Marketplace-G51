// frontend/src/hooks/useToast.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Toaster, toast } from 'sonner'; // Ensure 'sonner' is installed

// Define the CustomToastOptions type to include 'title'
interface CustomToastOptions {
  title?: string; // Add the 'title' property
  description: string;
  variant?: 'success' | 'error' | 'destructive' | 'default';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

interface ToastContextType {
  addToast: (options: CustomToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const addToast = (options: CustomToastOptions) => {
    const { title, description, variant = 'default', position = 'top-right' } = options;

    // Combine title and description if title is present
    const message = title ? `${title}: ${description}` : description;

    toast(message, {
      style: {
        backgroundColor:
            variant === 'success'
                ? '#4CAF50'
                : variant === 'error'
                    ? '#F44336'
                    : variant === 'destructive'
                        ? '#FF9800'
                        : '#2196F3', // Default (blue)
        color: '#FFFFFF',
      },
      position,
    });
  };

  return (
      <ToastContext.Provider value={{ addToast }}>
        {children}
        <Toaster richColors />
      </ToastContext.Provider>
  );
};

export const useToast = (): ((options: CustomToastOptions) => void) => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context.addToast;
};
