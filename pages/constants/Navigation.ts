export type NavLink = {
  url: string;
  label: string;
  icon?: string;
};

export const MainNavLinks: NavLink[] = [
  {
    url: '/clubhouse',
    label: 'Clubhouse',
    icon: 'fa-house',
  },
  {
    url: '/leaderboard',
    label: 'Leaderboard',
    icon: 'fa-bars',
  },
  {
    url: '/about',
    label: 'About',
    icon: 'fa-info-circle',
  },
  {
    url: '/faq',
    label: 'FAQ',
    icon: 'fa-speech-bubble-square',
  },
];
