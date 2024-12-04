// frontend/src/components/Shared/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-navy text-white py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} NorthMarket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
