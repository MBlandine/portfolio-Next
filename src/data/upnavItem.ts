export interface DashboardItem{
    to:string;
    label: string;
    icon: string;
}
export const dashboardItems: DashboardItem[] = [
    {
        to: '/logout',
        label: 'Logout',
        icon: 'BsPlus',
    },
    {
        to: '#',
        label: 'Menu',
        icon: 'CiMenuKebab', 
    },
]