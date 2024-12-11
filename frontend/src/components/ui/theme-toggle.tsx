// src/components/ui/theme-toggle.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md p-2 bg-background text-primary hover:bg-primary hover:text-background",
        className
      )}
      {...props}>
      {/* Icon or text for theme toggle */}
      Toggle Theme
    </button>
  );
};
