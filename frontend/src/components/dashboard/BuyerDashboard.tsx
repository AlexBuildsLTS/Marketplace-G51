import { Layout } from "@/components/layout/Layout";
import { StatCard } from "./StatCard";
import { Card } from "@/components/ui/card";
import {
  CreditCard,
  Clock,
  Package,
  Bell,
  DollarSign
} from "lucide-react";

export function BuyerDashboard() {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Account</h1>
          <div className="relative">
            <Bell className="h-6 w-6 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Spent"
            value="$1,234.56"
            icon={DollarSign}
            description="Last 30 days"
          />
          <StatCard
            title="Active Orders"
            value="3"
            icon={Package}
          />
          <StatCard
            title="Pending Reviews"
            value="2"
            icon={Clock}
          />
          <StatCard
            title="Saved Items"
            value="12"
            icon={CreditCard}
          />
        </div>

        <div className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
            {/* Recent orders list would go here */}
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Saved Items</h3>
            {/* Saved items would go here */}
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Recent Reviews</h3>
            {/* Recent reviews would go here */}
          </Card>
        </div>
      </div>
    </Layout>
  );
}