'use client';

import { Users, Newspaper, ThumbsUp, MessageSquare } from 'lucide-react';

export default function DashboardCards() {
  return (
    <div className="dashboard-cards">
      <div className="card-item">
        <div className="card-details">
          <p>Users</p>
          <h1>00</h1>
        </div>
        <div className="card-icon users">
          <Users size={20} />
        </div>
      </div>

      <div className="card-item">
        <div className="card-details">
          <p>Blogs</p>
          <h1>00</h1>
        </div>
        <div className="card-icon blogs">
          <Newspaper size={20} />
        </div>
      </div>

      <div className="card-item">
        <div className="card-details">
          <p>Likes</p>
          <h1>00</h1>
        </div>
        <div className="card-icon likes">
          <ThumbsUp size={20} />
        </div>
      </div>

      <div className="card-item">
        <div className="card-details">
          <p>Comments</p>
          <h1>00</h1>
        </div>
        <div className="card-icon comments">
          <MessageSquare size={20} />
        </div>
      </div>
    </div>
  );
} 