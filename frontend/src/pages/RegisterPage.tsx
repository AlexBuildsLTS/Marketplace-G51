// frontend/src/pages/RegisterPage.tsx
import React from 'react';
import Footer from '@/components/Shared/Footer';

const RegisterPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex justify-center items-center bg-gray-100 p-4">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
                    <h2 className="text-2xl mb-6 text-center">Register</h2>
                    {/* Add the correct RegisterForm import */}
                    {/* <RegisterForm /> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegisterPage;
