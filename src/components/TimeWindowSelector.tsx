'use client';

import React from 'react';

export const TimeWindowSelector: React.FC = () => {
  return (
    <div className="time-selector">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        This Week
      </button>
      <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
        This Month
      </button>
      <div className="flex items-center space-x-2">
        <input
          type="date"
          className="border rounded-md px-3 py-2"
        />
        <span>to</span>
        <input
          type="date"
          className="border rounded-md px-3 py-2"
        />
      </div>
    </div>
  );
}; 