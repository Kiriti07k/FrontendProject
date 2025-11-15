
import { MutualFund } from '../types';

const generatePerformanceData = (base: number): { date: string, value: number }[] => {
  const data = [];
  let currentValue = base;
  for (let i = 11; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const fluctuation = (Math.random() - 0.45) * (base / 20);
    currentValue += fluctuation;
    data.push({
      date: date.toLocaleString('default', { month: 'short', year: '2-digit' }),
      value: parseFloat(currentValue.toFixed(2)),
    });
  }
  return data;
};

export const mockFunds: MutualFund[] = [
  {
    id: '1',
    name: 'Tech Growth Innovators Fund',
    ticker: 'TGIFX',
    category: 'Equity',
    riskLevel: 'High',
    description: 'A fund focused on investing in high-growth technology companies with strong potential for market leadership.',
    oneYearReturn: 25.5,
    threeYearReturn: 18.2,
    fiveYearReturn: 22.1,
    nav: 150.75,
    assetsUnderManagement: '1.2B',
    expenseRatio: 0.85,
    performance: generatePerformanceData(120),
    structure: "Open-ended equity fund primarily investing in large-cap technology stocks listed on major US exchanges.",
    factors: ["Market Volatility", "Interest Rate Changes", "Sector-specific News", "Regulatory Changes"]
  },
  {
    id: '2',
    name: 'Stable Income Bond Fund',
    ticker: 'SIBFX',
    category: 'Debt',
    riskLevel: 'Low',
    description: 'Aims to provide a steady stream of income by investing in high-quality corporate and government bonds.',
    oneYearReturn: 5.8,
    threeYearReturn: 4.5,
    fiveYearReturn: 4.9,
    nav: 55.20,
    assetsUnderManagement: '2.5B',
    expenseRatio: 0.40,
    performance: generatePerformanceData(52),
    structure: "A portfolio of investment-grade government and corporate bonds with varying maturities.",
    factors: ["Interest Rate Risk", "Credit Risk", "Inflation"]
  },
  {
    id: '3',
    name: 'Balanced Advantage Fund',
    ticker: 'BAFVX',
    category: 'Hybrid',
    riskLevel: 'Medium',
    description: 'A balanced fund that dynamically allocates assets between equities and debt to optimize risk-adjusted returns.',
    oneYearReturn: 15.2,
    threeYearReturn: 10.1,
    fiveYearReturn: 12.5,
    nav: 89.45,
    assetsUnderManagement: '800M',
    expenseRatio: 0.95,
    performance: generatePerformanceData(75),
    structure: "A hybrid fund with a flexible mandate to invest in both stocks and bonds, adjusting allocation based on market conditions.",
    factors: ["Equity Market Risk", "Interest Rate Risk", "Asset Allocation Strategy"]
  },
  {
    id: '4',
    name: 'Global Opportunities Fund',
    ticker: 'GLOFX',
    category: 'International',
    riskLevel: 'High',
    description: 'Invests in companies across developed and emerging markets to capture global growth opportunities.',
    oneYearReturn: 18.9,
    threeYearReturn: 9.8,
    fiveYearReturn: 14.3,
    nav: 112.30,
    assetsUnderManagement: '550M',
    expenseRatio: 1.10,
    performance: generatePerformanceData(95),
    structure: "Invests in a diversified portfolio of international stocks across various countries and sectors.",
    factors: ["Currency Fluctuation", "Geopolitical Risks", "Global Economic Trends"]
  },
    {
    id: '5',
    name: 'Blue Chip Champions Fund',
    ticker: 'BCCFX',
    category: 'Equity',
    riskLevel: 'Medium',
    description: 'Focuses on large, well-established companies with a history of stable earnings and dividend payments.',
    oneYearReturn: 17.3,
    threeYearReturn: 12.5,
    fiveYearReturn: 15.8,
    nav: 210.50,
    assetsUnderManagement: '3.1B',
    expenseRatio: 0.65,
    performance: generatePerformanceData(180),
    structure: "A large-cap equity fund concentrating on industry-leading companies with strong brand recognition and financial health.",
    factors: ["Economic Cycles", "Company Performance", "Dividend Policy Changes"]
  },
  {
    id: '6',
    name: 'Emerging Markets Debt Fund',
    ticker: 'EMDFX',
    category: 'Debt',
    riskLevel: 'High',
    description: 'Seeks high yields by investing in government and corporate bonds from emerging market countries.',
    oneYearReturn: 8.5,
    threeYearReturn: 2.1,
    fiveYearReturn: 5.5,
    nav: 45.60,
    assetsUnderManagement: '300M',
    expenseRatio: 1.25,
    performance: generatePerformanceData(48),
    structure: "A portfolio of high-yield bonds issued by entities in developing economies.",
    factors: ["Political Instability", "Currency Devaluation", "Sovereign Default Risk"]
  },
];
