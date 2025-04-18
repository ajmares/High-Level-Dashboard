'use client';

import React, { useState } from 'react';

interface CustomerDecline {
  name: string;
  previousRevenue: string;
  currentRevenue: string;
  decline: string;
}

interface RevenueDeclineListProps {
  title: string;
  customers: CustomerDecline[];
}

export const RevenueDeclineList: React.FC<RevenueDeclineListProps> = ({ title, customers }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedCustomers = isExpanded ? customers : customers.slice(0, 5);

  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {displayedCustomers.map((customer, index) => (
          <div key={index} className="customer-list-item">
            <div className="flex flex-col">
              <span className="text-gray-700 font-medium">{customer.name}</span>
              <span className="text-sm text-gray-500">
                {customer.previousRevenue} → {customer.currentRevenue}
              </span>
            </div>
            <span className="revenue-decline">{customer.decline}</span>
          </div>
        ))}
      </div>
      {customers.length > 5 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="show-more-button"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}; 