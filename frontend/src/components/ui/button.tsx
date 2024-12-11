import React from "react";
import { cn } from "@/lib/utils"; // Ensure this path is correct and the function is properly exported from utils

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const buttonVariants = {
  primary: "bg-primary hover:bg-primary-dark",
  secondary: "bg-secondary hover:bg-secondary-dark",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-white font-semibold",
        buttonVariants[variant],
        className
      )}
      {...props}>
      {children}
    </button>
  );
};
