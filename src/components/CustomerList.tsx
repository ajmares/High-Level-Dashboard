import React from 'react';

interface Customer {
  name: string;
  revenue: string;
}

interface CustomerListProps {
  title: string;
  customers: Customer[];
}

export const CustomerList: React.FC<CustomerListProps> = ({ title, customers }) => {
  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {customers.map((customer, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-700">{customer.name}</span>
            <span className="font-semibold text-gray-900">{customer.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 