// frontend/src/pages/BuyerDashboard.tsx
import React from 'react';
import Layout from '@/components/Shared/Layout';
import Charts from '@/components/Shared/Charts';

const BuyerDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-2xl mb-4">Buyer Dashboard</h2>
        <Charts />
        {/* Add more dashboard components here */}
      </div>
    </Layout>
  );
};

export default BuyerDashboard;
