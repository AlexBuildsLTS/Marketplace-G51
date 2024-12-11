// src/components/ui/input.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        "flex-1 rounded-md border border-border/40 bg-secondary/50 px-3 py-2 text-sm placeholder-muted-foreground focus:border-brand-green focus:ring-1 focus:ring-brand-green",
        className
      )}
      {...props}
    />
  );
};
