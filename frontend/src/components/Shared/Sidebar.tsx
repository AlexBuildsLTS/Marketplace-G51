// frontend/src/components/Shared/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-dark-navy text-white p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        <li className="mb-2">
          <Link to="/category/electronics" className="hover:text-blue-400">
            Electronics
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/category/fashion" className="hover:text-blue-400">
            Fashion
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/category/home" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        {/* Add more categories as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
