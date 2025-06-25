"use client"
// pages/dashboard/blogs/index.tsx
import React, { useState } from 'react'
import DashboardLayout from '../dashboardLayout'
import type { NextPage } from 'next'

interface BlogPost {
  id: number
  title: string
  status: 'published' | 'draft'
  createdAt: string
}

const BlogsManagement: NextPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Getting Started with Next.js",
      status: "published",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      status: "draft",
      createdAt: "2024-01-10"
    }
  ])

  return (
    <DashboardLayout title="Manage Blogs">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Blog Posts
          </h2>
          <button className="dashboard-button">
            + New Post
          </button>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {blogs.map((blog) => (
              <li key={blog.id}>
                <div className="px-4 py-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Created: {blog.createdAt}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      blog.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default BlogsManagement