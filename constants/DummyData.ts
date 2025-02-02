export const challenges: ChallengePreview[] = [
  {
    id: 1234,
    name: 'Challenge Name',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: 'Nov. 18th to Nov. 22nd',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
  },
  {
    id: 1235,
    name: 'Extraccurricular Spring Challenge',
    pool: 100,
    hcp: 'up to 54',
    gameType: 'Net Stableford',
    players: 10,
    dates: 'Nov. 18th to Nov. 22nd',
    fee: 0,
  },
  {
    id: 1236,
    name: 'CocaCola Challenge',
    hcp: 'up to 54',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: 'Nov. 18th to Nov. 22nd',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
  },
  {
    id: 1237,
    name: 'Challenge Name',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: 'Nov. 18th to Nov. 22nd',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
  },
  {
    id: 1238,
    name: 'Bridgestone Masters Challenge',
    hcp: 'up to 18',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: 'Nov. 18th to Nov. 22nd',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
  },
  {
    id: 1239,
    name: 'Challenge Name',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: 'Nov. 18th to Nov. 22nd',
    fee: 10,
    img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
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
    dates: 'Nov. 18th to Nov. 22nd',
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
    dates: 'Nov. 18th to Nov. 22nd',
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

export const dummyLeaderboard: Player[] = randomNames.map((p) => ({
  name: p,
  flag: randomFlags[getRandInt(0, randomFlags.length - 1)],
  pointsScored: getRandInt(1, 300),
  challengesWon: getRandInt(1, 10),
  moneyWon: getRandInt(1, 300),
  img: randomImgs[getRandInt(0, randomImgs.length - 1)],
  hcp: getRandInt(0, 54),
}));
