
import React from 'react';
import { Role } from '../types';

interface HeaderProps {
  currentRole: Role;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentRole, onLogout }) => {
  return (
    <header className="bg-dark text-white shadow-lg">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
          </svg>
          <h1 className="text-2xl font-bold tracking-wider">FundVerse</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline bg-primary px-3 py-1 rounded-full text-sm font-medium">{currentRole} Portal</span>
          <button
            onClick={onLogout}
            className="bg-accent hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Switch Role
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
