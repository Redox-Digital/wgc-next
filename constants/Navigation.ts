export type NavLink = {
  url: string;
  label: string;
  icon?: string;
};

export const MainNavLinks: NavLink[] = [
  {
    url: '/clubhouse',
    label: 'Clubhouse',
    icon: '/pictograms/house-flag-black.svg',
  },
  {
    url: '/leaderboard',
    label: 'Leaderboard',
    icon: '/pictograms/chart-column.svg',
  },
  {
    url: '/about',
    label: 'About',
    icon: '/pictograms/circle-info-black.svg',
  },
  {
    url: '/faq',
    label: 'FAQ',
    icon: '/pictograms/message.svg',
  },
];

export const UserLinks: NavLink[] = [
  {
    url: '/wallet',
    label: 'Wallet',
  },
  {
    url: '/settings',
    label: 'Settings',
  },
];
