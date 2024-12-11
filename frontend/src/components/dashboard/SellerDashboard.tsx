import { Layout } from "@/components/layout/Layout";
import { StatCard } from "./StatCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Package, 
  ShoppingCart, 
  Users,
  BarChart2,
  ArrowUpRight
} from "lucide-react";

export function SellerDashboard() {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <Button>
            <Package className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$12,345"
            icon={DollarSign}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Active Products"
            value="45"
            icon={Package}
          />
          <StatCard
            title="Total Orders"
            value="128"
            icon={ShoppingCart}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Total Customers"
            value="1,234"
            icon={Users}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Recent Sales</h3>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </div>
            {/* Sales chart would go here */}
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Top Products</h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </div>
            {/* Top products list would go here */}
          </Card>
        </div>
      </div>
    </Layout>
  );
}