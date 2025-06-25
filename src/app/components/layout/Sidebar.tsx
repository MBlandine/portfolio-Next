'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './layout.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: 'gauge'
    },
    {
      name: 'Blogs',
      href: '/dashboard/posts',
      icon: 'newspaper'
    },
    {
      name: 'Add a blog',
      href: '/dashboard/posts/create',
      icon: 'pen-to-square'
    }
  ];

  return (
    <>
      {/* Mobile sidebar */}
      <div className="sidebar-mobile">
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={onClose}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <div className="sidebar">
                    <div className="sidebar-header">
                      <div className="logo-container">
                        <h1 className="logo-text">
                          <a href="/">Blandine.</a>
                        </h1>
                      </div>
                      <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                      >
                        <X className="icon" />
                      </button>
                    </div>

                    <nav className="nav-list">
                      <ul className="nav-items">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={`nav-link ${
                                pathname === item.href ? 'active' : ''
                              }`}
                            >
                              <i className={`fa-solid fa-${item.icon.toLowerCase()} side-icon`}></i>
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      {/* Desktop sidebar */}
      <div className="sidebar-desktop">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo-container">
              <h1 className="logo-text">
                <a href="/">Blandine.</a>
              </h1>
            </div>
          </div>

          <nav className="nav-list">
            <ul className="nav-items">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      pathname === item.href ? 'active' : ''
                    }`}
                  >
                    <i className={`fa-solid fa-${item.icon.toLowerCase()} side-icon`}></i>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
} 