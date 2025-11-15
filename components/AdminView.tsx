
import React from 'react';

const mockUsers = [
    { id: 1, name: 'Alice Johnson', role: 'Investor', lastActivity: '2 hours ago' },
    { id: 2, name: 'Bob Williams', role: 'Investor', lastActivity: '5 hours ago' },
    { id: 3, name: 'Charlie Brown', role: 'Financial Advisor', lastActivity: '1 day ago' },
    { id: 4, name: 'Diana Miller', role: 'Data Analyst', lastActivity: '30 minutes ago' },
];

const mockContent = [
    { id: 1, title: 'The Importance of Diversification', author: 'Charlie Brown', status: 'Published' },
    { id: 2, title: 'Understanding Expense Ratios', author: 'Charlie Brown', status: 'Draft' },
];


const AdminView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-dark mb-4">Platform Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">1,204</p>
                <p className="text-slate-500">Active Users</p>
            </div>
             <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">42</p>
                <p className="text-slate-500">Funds Tracked</p>
            </div>
             <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">15</p>
                <p className="text-slate-500">Content Pieces</p>
            </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-dark mb-4">User Management</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Role</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Last Activity</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    {mockUsers.map(user => (
                        <tr key={user.id} className="border-b">
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4">{user.role}</td>
                            <td className="py-3 px-4">{user.lastActivity}</td>
                            <td className="py-3 px-4">
                                <button className="text-accent hover:underline text-sm">Manage</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

       <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-dark mb-4">Content Updates</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Title</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Author</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    {mockContent.map(content => (
                        <tr key={content.id} className="border-b">
                            <td className="py-3 px-4">{content.title}</td>
                            <td className="py-3 px-4">{content.author}</td>
                            <td className="py-3 px-4">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${content.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {content.status}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <button className="text-accent hover:underline text-sm">Review</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
