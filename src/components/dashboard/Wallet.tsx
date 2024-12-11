// src/components/dashboard/Wallet.tsx
import React from "react";
import { useUserStore } from "@/store/userStore";
import { formatCurrency } from "@/lib/utils";

export const Wallet = () => {
  const { profile } = useUserStore();

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h4 className="mb-2 text-lg font-semibold">Wallet</h4>
      <p>Total Earnings: {formatCurrency(25000)}</p>
      <p>Available Balance: {formatCurrency(15000)}</p>
      {/* Add more wallet details as needed */}
    </div>
  );
};
