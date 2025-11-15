
import React from 'react';
import { MutualFund } from '../types';

interface FundCardProps {
  fund: MutualFund;
  onSelect: (fund: MutualFund) => void;
}

const getRiskColor = (risk: 'Low' | 'Medium' | 'High') => {
    switch (risk) {
        case 'Low': return 'bg-green-100 text-green-800';
        case 'Medium': return 'bg-yellow-100 text-yellow-800';
        case 'High': return 'bg-red-100 text-red-800';
    }
}

const FundCard: React.FC<FundCardProps> = ({ fund, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 h-full">
        <div className="flex-grow">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-dark">{fund.name}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getRiskColor(fund.riskLevel)}`}>{fund.riskLevel} Risk</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">{fund.ticker} &bull; {fund.category}</p>
            <p className="text-slate-600 text-sm mb-4">{fund.description}</p>
        </div>
      
        <div className="grid grid-cols-3 gap-4 text-center border-t pt-4 mt-4">
            <div>
                <p className="text-xs text-slate-500">1Y Return</p>
                <p className={`font-bold ${fund.oneYearReturn > 0 ? 'text-green-600' : 'text-red-600'}`}>{fund.oneYearReturn.toFixed(2)}%</p>
            </div>
            <div>
                <p className="text-xs text-slate-500">NAV</p>
                <p className="font-bold text-dark">${fund.nav.toFixed(2)}</p>
            </div>
            <div>
                <p className="text-xs text-slate-500">AUM</p>
                <p className="font-bold text-dark">{fund.assetsUnderManagement}</p>
            </div>
        </div>

        <button onClick={() => onSelect(fund)} className="mt-6 w-full bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            View Details
        </button>
    </div>
  );
};

export default FundCard;
