// frontend/src/hooks/useToast.ts
import React, { createContext, useContext } from 'react';
import { Toaster, toast, ToastProps } from 'sonner';

interface ToastContextType {
    addToast: (props: ToastProps) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const addToast = (props: ToastProps) => {
        toast(props);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
    {children}
    <Toaster position="top-right" richColors />
    </ToastContext.Provider>
);
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context.addToast;
};
