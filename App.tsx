
import React, { useState } from 'react';
import { Role } from './types';
import Login from './components/Login';
import Header from './components/Header';
import InvestorView from './components/InvestorView';
import FinancialAdvisorView from './components/FinancialAdvisorView';
import DataAnalystView from './components/DataAnalystView';
import AdminView from './components/AdminView';

const App: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<Role | null>(null);

  const handleRoleSelect = (role: Role) => {
    setCurrentRole(role);
  };

  const handleLogout = () => {
    setCurrentRole(null);
  };

  const renderViewForRole = () => {
    switch (currentRole) {
      case Role.Investor:
        return <InvestorView />;
      case Role.FinancialAdvisor:
        return <FinancialAdvisorView />;
      case Role.DataAnalyst:
        return <DataAnalystView />;
      case Role.Admin:
        return <AdminView />;
      default:
        return <Login onRoleSelect={handleRoleSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {currentRole ? (
        <>
          <Header currentRole={currentRole} onLogout={handleLogout} />
          <main className="p-4 md:p-8">
            {renderViewForRole()}
          </main>
        </>
      ) : (
        <Login onRoleSelect={handleRoleSelect} />
      )}
    </div>
  );
};

export default App;
