
import React, { useState } from 'react';
import { generateText } from '../services/geminiService';
import PerformanceChart from './PerformanceChart';
import { mockFunds } from '../services/mockData';

const DataAnalystView: React.FC = () => {
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const marketTrendData = mockFunds[0].performance.map((p, i) => ({
      date: p.date,
      value: (p.value + mockFunds[1].performance[i].value + mockFunds[2].performance[i].value) / 3
  }));

  const handleGenerateReport = async () => {
      setIsLoading(true);
      const dataSummary = mockFunds.map(f => ({
          name: f.name,
          category: f.category,
          '1Y_Return': f.oneYearReturn
      }));

      const prompt = `As a data analyst, write a concise summary of the current mutual fund market based on the following data points. Highlight any key trends, top-performing categories, and provide a brief outlook.\n\nData:\n${JSON.stringify(dataSummary, null, 2)}`;
      const generatedReport = await generateText(prompt);
      setReport(generatedReport);
      setIsLoading(false);
  }

  return (
    <div className="space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-dark mb-4">Market Trends</h2>
            <div className="h-96">
                <PerformanceChart data={marketTrendData} />
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-dark mb-4">Performance Reporting</h2>
             <div className="bg-blue-50 border-l-4 border-accent text-secondary p-4 rounded-r-lg mb-6">
              <p className="font-semibold">Analyze investment trends, update fund performance data, and generate reports.</p>
            </div>
            <button
                onClick={handleGenerateReport}
                disabled={isLoading}
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg transition duration-300 disabled:bg-slate-400 mb-4"
            >
                {isLoading ? 'Generating...' : 'Generate AI Summary Report'}
            </button>
            {report && (
                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h3 className="font-semibold text-dark mb-2">Generated Report:</h3>
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans">{report}</pre>
                </div>
            )}
        </div>
    </div>
  );
};

export default DataAnalystView;
