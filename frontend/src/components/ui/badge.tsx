// src/components/ui/badge.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "primary" | "secondary";
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-gray-200 text-gray-800": variant === "default",
          "bg-accent text-white": variant === "accent",
          "bg-primary text-white": variant === "primary",
          "bg-secondary text-white": variant === "secondary",
        },
        className
      )}
      {...props}>
      {children}
    </span>
  );
};
