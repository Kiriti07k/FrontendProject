
import React, { useState } from 'react';
import { generateText } from '../services/geminiService';

const FinancialAdvisorView: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateContent = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    const prompt = `As a financial advisor, write a clear and informative educational article for new investors on the topic: "${topic}". Explain key concepts, potential benefits, and risks involved.`;
    const generatedContent = await generateText(prompt);
    setContent(generatedContent);
    setIsLoading(false);
  };
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-dark">Content Creation Studio</h2>
      
      <div className="bg-blue-50 border-l-4 border-accent text-secondary p-4 rounded-r-lg">
          <p className="font-semibold">Provide advice, create educational content, and assist users in selecting the right mutual funds.</p>
      </div>
      
      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-1">Article Topic</label>
        <div className="flex gap-4">
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'The Importance of Diversification'"
            className="flex-grow px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={handleGenerateContent}
            disabled={isLoading}
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg transition duration-300 disabled:bg-slate-400"
          >
            {isLoading ? 'Generating...' : 'Generate with AI'}
          </button>
        </div>
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">Article Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Generated content will appear here..."
        />
      </div>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
          Publish Content
        </button>
    </div>
  );
};

export default FinancialAdvisorView;
