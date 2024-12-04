// frontend/src/pages/LoginPage.tsx
import React from 'react';
import LoginForm from '@/Auth/LoginForm';
import Layout from '@/components/Shared/Layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center bg-gray-100 p-4">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
          <h2 className="text-2xl mb-6 text-center">Login</h2>
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
