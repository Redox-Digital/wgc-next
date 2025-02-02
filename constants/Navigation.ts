export type NavLink = {
  url: string;
  label: string;
  icon?: string;
};

export const MainNavLinks: NavLink[] = [
  {
    url: '/',
    label: 'Clubhouse',
  },
  {
    url: '/leaderboards',
    label: 'Leaderboards',
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
    url: '/profile',
    label: 'Settings',
  },
  {
    url: '/profile/wallet',
    label: 'Wallet',
  },
];

export const LegalLinks: NavLink[] = [
  {
    url: '/privacy',
    label: 'Privacy policy',
  },
  {
    url: '/terms',
    label: 'Terms of agreement',
  },
];
