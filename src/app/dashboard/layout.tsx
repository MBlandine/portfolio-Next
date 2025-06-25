import DashboardLayout from '../components/layout/DashboardLayout';
import '@/lib/api';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 