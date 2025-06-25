'use client';

import DashboardCards from '../components/dashboard/DashboardCards';
import MessagesSection from '../components/dashboard/MessagesSection';
import '@/lib/api';

export default function DashboardPage() {
  return (
    <div className="dashboard-home">
      <DashboardCards />
      <MessagesSection />
    </div>
  );
} 