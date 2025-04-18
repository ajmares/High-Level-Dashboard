import React from 'react';

export const TestStats: React.FC = () => {
  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Statistics</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Top 3 Tests This Week</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Test Type A</span>
            <span className="font-semibold">150 orders</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Test Type B</span>
            <span className="font-semibold">120 orders</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Test Type C</span>
            <span className="font-semibold">90 orders</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">In-House Testing</h4>
        <div className="flex items-center space-x-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <span className="text-sm font-semibold">75%</span>
        </div>
      </div>
    </div>
  );
}; 