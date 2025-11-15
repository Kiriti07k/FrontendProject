
import React from 'react';
import { MutualFund } from '../types';
import PerformanceChart from './PerformanceChart';

interface FundDetailsProps {
  fund: MutualFund;
  onBack: () => void;
}

const DetailItem: React.FC<{ label: string, value: string | number, className?: string }> = ({ label, value, className }) => (
    <div className="flex justify-between items-center py-2 border-b border-slate-200">
        <span className="text-slate-500">{label}</span>
        <span className={`font-semibold text-dark ${className}`}>{value}</span>
    </div>
)

const FundDetails: React.FC<FundDetailsProps> = ({ fund, onBack }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-dark">{fund.name}</h2>
          <p className="text-slate-500">{fund.ticker} &bull; {fund.category}</p>
        </div>
        <button onClick={onBack} className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to List
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-dark mb-4">Performance (12 Months)</h3>
            <div className="h-80 w-full">
                <PerformanceChart data={fund.performance} />
            </div>
            
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-dark mb-4">Fund Information</h3>
                <p className="text-slate-600 mb-4">{fund.description}</p>
                 <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-dark mb-2">Structure</h4>
                    <p className="text-slate-600 text-sm mb-4">{fund.structure}</p>
                    <h4 className="font-semibold text-dark mb-2">Key Investment Factors</h4>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                        {fund.factors.map(factor => <li key={factor}>{factor}</li>)}
                    </ul>
                 </div>
            </div>
        </div>

        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-dark mb-2">Key Metrics</h3>
            <div className="bg-slate-50 p-4 rounded-lg">
                <DetailItem label="NAV" value={`$${fund.nav.toFixed(2)}`} />
                <DetailItem label="Risk Level" value={fund.riskLevel} />
                <DetailItem label="Expense Ratio" value={`${fund.expenseRatio}%`} />
                <DetailItem label="AUM" value={fund.assetsUnderManagement} />
                <DetailItem label="1-Year Return" value={`${fund.oneYearReturn.toFixed(2)}%`} className={fund.oneYearReturn > 0 ? 'text-green-600' : 'text-red-600'} />
                <DetailItem label="3-Year Return" value={`${fund.threeYearReturn.toFixed(2)}%`} className={fund.threeYearReturn > 0 ? 'text-green-600' : 'text-red-600'} />
                <DetailItem label="5-Year Return" value={`${fund.fiveYearReturn.toFixed(2)}%`} className={fund.fiveYearReturn > 0 ? 'text-green-600' : 'text-red-600'} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default FundDetails;
