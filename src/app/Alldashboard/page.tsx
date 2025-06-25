// /app/dashboard/page.tsx
'use client';

import DashboardLayout from '../components/layout/DashboardLayout';
import DashboardCards from '../components/dashboard/DashboardCards';
import MessagesSection from '../components/dashboard/MessagesSection';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-home">
        <DashboardCards />
        <MessagesSection />
      </div>
    </DashboardLayout>
  );
}
