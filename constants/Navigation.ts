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
    url: '/challenges',
    label: 'All Challenges',
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

export const socialLinks: NavLink[] = [
  {
    url: '#',
    label: 'Instagram',
    icon: '/pictograms/instagram.svg',
  },
  {
    url: '#',
    label: 'Facebook',
    icon: '/pictograms/facebook.svg',
  },
  {
    url: '#',
    label: 'Linked In',
    icon: '/pictograms/linkedin.svg',
  },
  {
    url: '#',
    label: 'E-mail',
    icon: '/pictograms/envelope.svg',
  },
];
