'use client';

import { Menu, MessageSquare, Bell, User } from 'lucide-react';
import { useState } from 'react';
import './layout.css';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="header">
      <button className="menu-button" onClick={onMenuClick}>
        <Menu size={24} />
      </button>

      <div className="header-message">
        <h1>Dashboard</h1>
        <p>Hi, welcome back!</p>
      </div>

      <div className="header-actions">
        <div className="notification-section">
          <div className="notification-icon">
            <span className="notification-badge message">12</span>
            <MessageSquare size={24} />
          </div>
          <div className="notification-icon">
            <span className="notification-badge alert">20</span>
            <Bell size={24} />
          </div>
        </div>

        <div className="profile-section">
          <button 
            className="profile-button"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="profile-image"
            />
          </button>

          {isProfileOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 