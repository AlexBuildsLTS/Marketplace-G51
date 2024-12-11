// src/pages/SellerDashboard.tsx
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Overview } from "@/components/dashboard/Overview";
import { CreateAd } from "@/components/dashboard/CreateAd";
import { Wallet } from "@/components/dashboard/Wallet";

export function SellerDashboard() {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="mb-4 text-2xl">Seller Dashboard</h2>
        <Overview />
        <CreateAd />
        <Wallet />
        {/* Add more dashboard components here */}
      </div>
    </Layout>
  );
}
