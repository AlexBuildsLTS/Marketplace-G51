// frontend/src/components/Shared/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="bg-dark-navy p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          NorthMarket
        </Link>
        <div className="flex space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-white hover:underline">
                Login
              </Link>
              <Link to="/register" className="text-white hover:underline">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="text-white hover:underline">
                Profile
              </Link>
              <button onClick={logout} className="text-white hover:underline">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
