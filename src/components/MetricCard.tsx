import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive }) => {
  return (
    <div className="dashboard-card">
      <h3 className="metric-label">{title}</h3>
      <div className="metric-value">{value}</div>
      <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change} from previous period
      </div>
    </div>
  );
}; 