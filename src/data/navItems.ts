import { NavItem } from '../types';

export const navItems: NavItem[] = [
    {
        label: 'Overview',
        to: '/dashboard',
        icon: 'LayoutDashboard'
    },
    {
        label: 'Analytics',
        to: '/dashboard/analytics',
        icon: 'BarChart'
    },
    {
        label: 'Projects',
        to: '/dashboard/projects',
        icon: 'FolderKanban'
    },
    {
        label: 'Tasks',
        to: '/dashboard/tasks',
        icon: 'CheckSquare'
    },
    {
        label: 'Calendar',
        to: '/dashboard/calendar',
        icon: 'Calendar'
    },
    {
        label: 'Messages',
        to: '/dashboard/messages',
        icon: 'MessageSquare'
    },
    {
        label: 'Settings',
        to: '/dashboard/settings',
        icon: 'Settings'
    }
];