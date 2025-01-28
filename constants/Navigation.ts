export type NavLink = {
  url: string;
  label: string;
  icon?: string;
};

export const MainNavLinks: NavLink[] = [
  {
    url: '/clubhouse',
    label: 'Clubhouse',
  },
  {
    url: '/leaderboard',
    label: 'Leaderboard',
  },
  {
    url: '/support',
    label: 'Support',
  },

  /*  {
    url: '/faq',
    label: 'FAQ',
  }, */
];

export const UserLinks: NavLink[] = [
  {
    url: '/settings',
    label: 'Settings',
  },
  {
    url: '/wallet',
    label: 'Wallet',
  },
];

export const LegalLinks: NavLink[] = [
  {
    url: '/privay',
    label: 'Privacy policy',
  },
  {
    url: '/terms',
    label: 'Terms of agreement',
  },
];
