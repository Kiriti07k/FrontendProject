
import React from 'react';
import { Role } from '../types';

interface LoginProps {
  onRoleSelect: (role: Role) => void;
}

const roles = [
    { role: Role.Investor, icon: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z' },
    { role: Role.FinancialAdvisor, icon: 'M17 8h-2V6h2v2zm-4 8h-2v-2h2v2zm-4-4H7v-2h2v2zm10-6V4h-2v2h2zm-4-4h-2V2h2v2zm-4 12H7v-2h2v2zm-2 4h10v-2H5v2zm12-8h-2v-2h2v2zm-8-8H7V2h2v2z' },
    { role: Role.DataAnalyst, icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4-2h-2V7h2v6z' },
    { role: Role.Admin, icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' }
];

const RoleCard: React.FC<{ role: Role, iconPath: string, onClick: () => void }> = ({ role, iconPath, onClick }) => (
    <div 
        onClick={onClick}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 text-center cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-2 border-4 border-transparent hover:border-accent"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d={iconPath} />
        </svg>
        <h3 className="text-xl font-semibold text-dark mb-2">{role}</h3>
        <button className="text-accent font-semibold hover:underline">Select Role &rarr;</button>
    </div>
);

const Login: React.FC<LoginProps> = ({ onRoleSelect }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-accent p-4">
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Welcome to FundVerse</h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">Your intelligent platform for navigating the world of mutual funds. Please select your role to begin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
           <RoleCard role={Role.Investor} iconPath="M17 10H7v2h10v-2zm4-7h-3.33C17.17 1.42 15.17 0 13 0s-4.17 1.42-4.67 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8 16H5V5h14v14z" onClick={() => onRoleSelect(Role.Investor)} />
            <RoleCard role={Role.FinancialAdvisor} iconPath="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" onClick={() => onRoleSelect(Role.FinancialAdvisor)} />
            <RoleCard role={Role.DataAnalyst} iconPath="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H12v-1H5.5v-2H12v-1H5.5V9H12V8H5.5V6.5H12V6H5.5V5H12c.55 0 1 .45 1 1v1.5h1.5v2H13V12h1.5V10h1v2H17v1.5h-1.5v1H17v1.5h-1.5V17h-1v-1.5H13v-1h-1v2.5z" onClick={() => onRoleSelect(Role.DataAnalyst)} />
            <RoleCard role={Role.Admin} iconPath="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" onClick={() => onRoleSelect(Role.Admin)} />
        </div>
    </div>
  );
};

export default Login;
