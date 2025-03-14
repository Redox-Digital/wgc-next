import Link from 'next/link';

export const challenges: ChallengePreview[] = [
  {
    id: 1234,
    name: 'WGC April Challenge',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
    url: '/lobby',
  },
  {
    id: 1235,
    name: 'Extraccurricular Spring Challenge',
    pool: 100,
    hcp: 'up to 54',
    gameType: 'Net Stableford',
    players: 10,
    dates: '18.11 - 22.11.25',
    fee: 0,
    img: '/logos/logo_excr_small.svg',
    url: '/lobby',
  },
  {
    id: 1236,
    name: 'Coca Cola Challenge',
    hcp: 'up to 54',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg',
    url: '/lobby',
  },
  {
    id: 1237,
    name: 'Challenge Name',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
    url: '/lobby',
  },
  {
    id: 1238,
    name: 'Bridgestone Masters Challenge',
    hcp: 'up to 18',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
    url: '/lobby',
  },
  {
    id: 1239,
    name: 'Challenge Name',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
    url: '/lobby',
  },
];

export const privateChallenges: ChallengePreview[] = [
  {
    id: 203,
    name: 'My Challenge Name',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
  },
  {
    id: 540,
    name: 'My Friends Challenge',
    pool: 100,
    hcp: 'up to 54',
    gameType: 'Net Stableford',
    players: 10,
    dates: '18.11 - 22.11.25',
    fee: 0,
  },
];

const getRandInt = (max: number, min: number): number =>
  Math.floor(Math.random() * (max - min) + min);

const randomNames = [
  'Jonas Jaeggi',
  'Guadalupe Bullock',
  'Deena Roth',
  'Malik Murphy',
  'Eric Bolton',
  'Bernard Mercado',
  'Shannon Meyers',
  'Osvaldo Wise',
  'Bernadine Schwartz',
  'Laura Walton',
];

const randomFlags = ['🏳️', '🇺🇸', '🇨🇭', '🇸🇪', '🇨🇦'];
const randomImgs = [
  'https://picsum.photos/50',
  'https://picsum.photos/49',
  'https://picsum.photos/51',
  'https://picsum.photos/52',
  'https://picsum.photos/48',
];

export const dummyLeaderboard: Player[] = [
  {
    name: 'Jonas Jaeggi',
    flag: '🇨🇭',
    pointsScored: 521,
    challengesWon: 4,
    moneyWon: 269,
    img: 'https://picsum.photos/52',
    hcp: 6,
  },
  {
    name: 'Guadalupe Bullock',
    flag: '🇸🇪',
    pointsScored: 205,
    challengesWon: 8,
    moneyWon: 66,
    img: 'https://picsum.photos/49',
    hcp: 0,
  },
  {
    name: 'Deena Roth',
    flag: '🇨🇭',
    pointsScored: 118,
    challengesWon: 5,
    moneyWon: 158,
    img: 'https://picsum.photos/50',
    hcp: 33,
  },
  {
    name: 'Malik Murphy',
    flag: '🇸🇪',
    pointsScored: 288,
    challengesWon: 5,
    moneyWon: 239,
    img: 'https://picsum.photos/52',
    hcp: 26,
  },
  {
    name: 'Eric Bolton',
    flag: '🏳️',
    pointsScored: 154,
    challengesWon: 7,
    moneyWon: 219,
    img: 'https://picsum.photos/50',
    hcp: 11,
  },
  {
    name: 'Bernard Mercado',
    flag: '🇨🇭',
    pointsScored: 282,
    challengesWon: 4,
    moneyWon: 118,
    img: 'https://picsum.photos/51',
    hcp: 0,
  },
  {
    name: 'Shannon Meyers',
    flag: '🇺🇸',
    pointsScored: 4,
    challengesWon: 6,
    moneyWon: 62,
    img: 'https://picsum.photos/49',
    hcp: 25,
  },
  {
    name: 'Osvaldo Wise',
    flag: '🇺🇸',
    pointsScored: 199,
    challengesWon: 7,
    moneyWon: 87,
    img: 'https://picsum.photos/52',
    hcp: 0,
  },
  {
    name: 'Bernadine Schwartz',
    flag: '🇸🇪',
    pointsScored: 194,
    challengesWon: 2,
    moneyWon: 134,
    img: 'https://picsum.photos/49',
    hcp: 20,
  },
  {
    name: 'Laura Walton',
    flag: '🏳️',
    pointsScored: 128,
    challengesWon: 3,
    moneyWon: 224,
    img: 'https://picsum.photos/52',
    hcp: 34,
  },
];

export const dummyPrizes: PriceType[] = [
  {
    img: '/sponsors/4ACES_Mar2025/WGC_4ACES_1stPrice.png',
    title: '1st Price',
    desc: '$500 EXCR gift card + signed 4Aces Miami basketball jersey',
  },
  {
    img: '/sponsors/4ACES_Mar2025/WGC_4ACES_2ndPrice.png',
    title: '2nd Price',
    desc: '$250 EXCR gift card + 4Aces Miami capsule',
  },
  {
    img: '/sponsors/4ACES_Mar2025/WGC_4ACES_3rdPrice.png',
    title: '3rd Price',
    desc: '$150 EXCR gift card + 4Aces Miami hat',
  },
  {
    img: '/sponsors/4ACES_Mar2025/WGC_4ACES_ParticipantPrice.png',
    title: 'For all participants',
    desc: (
      <>
        All entrants get 25% off 4Aces + Extracurricular gear at{' '}
        <Link href="https://ex-cr.com" target="_blank">
          ex-cr.com
        </Link>{' '}
        PLUS a free Aces hat on any order over $100
      </>
    ),
  },
];

/* Dummy Data with randomly generated numbers 

export const dummyLeaderboard: Player[] = randomNames.map((p) => ({
  name: p,
  flag: randomFlags[getRandInt(0, randomFlags.length - 1)],
  pointsScored: getRandInt(1, 300),
  challengesWon: getRandInt(1, 10),
  moneyWon: getRandInt(1, 300),
  img: randomImgs[getRandInt(0, randomImgs.length - 1)],
  hcp: getRandInt(0, 54),
}));
*/
