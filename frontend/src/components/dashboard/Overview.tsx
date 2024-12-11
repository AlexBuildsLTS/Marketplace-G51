// src/components/dashboard/Overview.tsx
import { StatCard } from "@/components/dashboard/StatCard";
import {
  LucidePhoneIncoming,
  LucideDollarSign,
  LucideList,
  LucideStar,
} from "lucide-react";

export const Overview = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Total Sales" value="$25,000" icon={LucideDollarSign} />
      <StatCard title="Active Listings" value="120" icon={LucideList} />
      <StatCard title="Pending Orders" value="15" icon={LucidePhoneIncoming} />
      <StatCard title="Customer Reviews" value="98%" icon={LucideStar} />
    </div>
  );
};
