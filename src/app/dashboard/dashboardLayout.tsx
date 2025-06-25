// components/dashboard/DashboardLayout.tsx
import React from 'react'
import Head from 'next/head'
import Sidebar from '../dashboard/sidebar'    
import Uppernav from '../dashboard/uppernav'



interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title = 'Dashboard' 
}) => {
  return (
    <>
      <Head>
        <title>{title} | Your Portfolio</title>
      </Head>

      <div className="min-h-screen flex bg-gray-50">
        {/* Sidebar Section */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <Sidebar />
        </aside>

        {/* Main Section */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <nav className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-6">
            <h1 className="text-xl font-semibold text-gray-900">
              {title}
            </h1>
          </nav>

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Uppernav />
            {/* {children} */}
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
