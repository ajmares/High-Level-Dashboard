'use client';

import { TimeWindowSelector } from '@/components/TimeWindowSelector';
import { MetricCard } from '@/components/MetricCard';
import { CustomerList } from '@/components/CustomerList';
import { TestStats } from '@/components/TestStats';
import { RevenueDeclineList } from '@/components/RevenueDeclineList';

export default function Dashboard() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Business Dashboard</h1>
          <TimeWindowSelector />
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard 
            title="Weekly Revenue"
            value="$50,000"
            change="+12%"
            isPositive={true}
          />
          <MetricCard 
            title="Monthly Revenue"
            value="$200,000"
            change="+8%"
            isPositive={true}
          />
          <MetricCard 
            title="Average Order Value"
            value="$1,200"
            change="+5%"
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CustomerList 
            title="Top 5 Customers (This Week)"
            customers={[
              { name: "Customer A", revenue: "$15,000" },
              { name: "Customer B", revenue: "$12,000" },
              { name: "Customer C", revenue: "$10,000" },
              { name: "Customer D", revenue: "$8,000" },
              { name: "Customer E", revenue: "$5,000" },
            ]}
          />
          <TestStats />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <RevenueDeclineList
            key="revenue-decline-list"
            title="Customers with Revenue Decline"
            customers={[
              { name: "Customer F", previousRevenue: "$20,000", currentRevenue: "$12,000", decline: "-$8,000" },
              { name: "Customer G", previousRevenue: "$15,000", currentRevenue: "$9,000", decline: "-$6,000" },
              { name: "Customer H", previousRevenue: "$12,000", currentRevenue: "$8,000", decline: "-$4,000" },
              { name: "Customer I", previousRevenue: "$10,000", currentRevenue: "$7,000", decline: "-$3,000" },
              { name: "Customer J", previousRevenue: "$8,000", currentRevenue: "$6,000", decline: "-$2,000" },
              { name: "Customer K", previousRevenue: "$7,000", currentRevenue: "$5,000", decline: "-$2,000" },
              { name: "Customer L", previousRevenue: "$6,000", currentRevenue: "$4,500", decline: "-$1,500" },
              { name: "Customer M", previousRevenue: "$5,000", currentRevenue: "$4,000", decline: "-$1,000" },
            ]}
          />
        </div>
      </div>
    </main>
  );
} 