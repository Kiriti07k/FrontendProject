
export enum Role {
  Admin = 'Admin',
  Investor = 'Investor',
  FinancialAdvisor = 'Financial Advisor',
  DataAnalyst = 'Data Analyst',
}

export type PerformanceDataPoint = {
  date: string;
  value: number;
};

export type MutualFund = {
  id: string;
  name: string;
  ticker: string;
  category: 'Equity' | 'Debt' | 'Hybrid' | 'International';
  riskLevel: 'Low' | 'Medium' | 'High';
  description: string;
  oneYearReturn: number;
  threeYearReturn: number;
  fiveYearReturn: number;
  nav: number;
  assetsUnderManagement: string;
  expenseRatio: number;
  performance: PerformanceDataPoint[];
  structure: string;
  factors: string[];
};

export type ChatMessage = {
  sender: 'user' | 'ai';
  text: string;
};
