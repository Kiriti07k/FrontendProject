
import React, { useState, useMemo } from 'react';
import { mockFunds } from '../services/mockData';
import { MutualFund } from '../types';
import FundCard from './FundCard';
import FundDetails from './FundDetails';
import Chatbot from './Chatbot';

const InvestorView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFund, setSelectedFund] = useState<MutualFund | null>(null);
  const [riskFilter, setRiskFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  
  const filteredFunds = useMemo(() => {
    return mockFunds.filter(fund => {
      const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase()) || fund.ticker.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRisk = riskFilter === 'All' || fund.riskLevel === riskFilter;
      const matchesCategory = categoryFilter === 'All' || fund.category === categoryFilter;
      return matchesSearch && matchesRisk && matchesCategory;
    });
  }, [searchTerm, riskFilter, categoryFilter]);

  const handleSelectFund = (fund: MutualFund) => {
    setSelectedFund(fund);
  };

  const handleBackToList = () => {
    setSelectedFund(null);
  };

  return (
    <div className="space-y-8">
      {selectedFund ? (
        <FundDetails fund={selectedFund} onBack={handleBackToList} />
      ) : (
        <>
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-dark mb-4">Explore Mutual Funds</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Search by name or ticker..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <select value={riskFilter} onChange={(e) => setRiskFilter(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="All">All Risk Levels</option>
                    <option value="Low">Low Risk</option>
                    <option value="Medium">Medium Risk</option>
                    <option value="High">High Risk</option>
                </select>
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="All">All Categories</option>
                    <option value="Equity">Equity</option>
                    <option value="Debt">Debt</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="International">International</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFunds.map(fund => (
                <FundCard key={fund.id} fund={fund} onSelect={handleSelectFund} />
            ))}
        </div>
        {filteredFunds.length === 0 && <p className="text-center text-slate-500">No funds match your criteria.</p>}
        </>
      )}
      <Chatbot />
    </div>
  );
};

export default InvestorView;
