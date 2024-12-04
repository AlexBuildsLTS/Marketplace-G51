// frontend/src/pages/SellerDashboard.tsx
import React from 'react';
import Layout from '@/components/Shared/Layout';
import CreateAd from '@/components/Shared/CreateAd';

const SellerDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-2xl mb-4">Seller Dashboard</h2>
        <CreateAd />
        {/* Add more seller-specific components here */}
      </div>
    </Layout>
  );
};

export default SellerDashboard;
