// src/pages/BuyerDashboard.tsx
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { BarChart } from "@/components/charts/BarChart";

export function BuyerDashboard() {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="mb-4 text-2xl">Buyer Dashboard</h2>
        <BarChart />
        {/* Add more dashboard components here */}
      </div>
    </Layout>
  );
}
