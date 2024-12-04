// frontend/src/pages/HomePage.tsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import Layout from '@/components/Shared/Layout';
import TestToast from '@/components/Shared/TestToast'; // Ensure TestToast exists at this path

const HomePage: React.FC = () => {
    const { isAuthenticated, user } = useAuthStore();
    const divRef = useRef<HTMLDivElement | null>(null);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" ref={divRef}>
                <h1 className="text-4xl mb-6 text-blue-600">Welcome to NorthMarket</h1>
                {isAuthenticated && <TestToast />}
                {!isAuthenticated ? (
                    <div className="flex space-x-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Register
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <p className="mb-4">Hello, {user?.name}!</p>
                        <Link
                            to="/profile"
                            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 mb-2"
                        >
                            View Profile
                        </Link>
                        <Link
                            to="/dashboard/buyer"
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mb-2"
                        >
                            Buyer Dashboard
                        </Link>
                        <Link
                            to="/dashboard/seller"
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Seller Dashboard
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default HomePage;
