// src/components/ui/toast.tsx
import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

export const Toast: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ToastPrimitive.Provider>{children}</ToastPrimitive.Provider>;
};

export const ToastContent: React.FC<{
  className?: string;
  [key: string]: any;
}> = ({ className, ...props }) => {
  return (
    <ToastPrimitive.Root>
      <ToastPrimitive.Toast
        className={cn(
          "z-50 rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        {...props}
      />
    </ToastPrimitive.Root>
  );
};

export { ToastPrimitive };
