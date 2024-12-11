// src/components/dashboard/StatCard.tsx
import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};
