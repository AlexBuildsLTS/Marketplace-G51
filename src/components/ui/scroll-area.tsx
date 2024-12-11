// src/components/ui/scroll-area.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("overflow-auto", className)} {...props} />
  );
};
