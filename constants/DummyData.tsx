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
    img: '/sponsors/WGC/WGC_Mar2025/wgc_challenge_mar2025.svg',
    url: '/lobby',
  },
  {
    id: 1235,
    name: '4Aces Extraccurricular Miami',
    pool: 100,
    hcp: 'up to 54',
    gameType: 'Net Stableford',
    players: 10,
    dates: '18.11 - 22.11.25',
    fee: 0,
    img: '/sponsors/4Aces/4Aces_Mar2025/4aces_challenge_mar2025.png',
    url: '/lobby',
  },
  {
    id: 1236,
    name: 'Teabo Challenge',
    hcp: 'up to 54',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: '/sponsors/Teabo/Teabo_Mar2025/teabo_challenge_mar2025.svg',
    url: '/lobby',
  },
  {
    id: 1237,
    name: 'Théobroma Challenge',
    hcp: 'single',
    pool: 10,
    gameType: 'Net Stableford',
    players: 4,
    dates: '18.11 - 22.11.25',
    fee: 10,
    img: '/sponsors/Theobroma/Theobroma_Mar2025/theobroma_challenge_mar2025.png',
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
    img: '/sponsors/Teabo/Teabo_Mar2025/teabo_challenge_mar2025.svg',
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
    img: '/sponsors/WGC/WGC_Mar2025/wgc_challenge_mar2025.svg',
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
    img: '/layouts/private_challenge_placeholder.svg',
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

export const dummyLeaderboard: Player[] = [
  {
    name: 'Jonas Jaeggi',
    flag: '🇨🇭',
    pointsScored: 521,
    challengesWon: 4,
    challengesPlayed: 10,
    moneyWon: 269,
    img: 'https://picsum.photos/52',
    hcp: 6,
    xp: 252098,
    level: 100,
  },
  {
    name: 'Fredrik Hansen',
    flag: '🇸🇪',
    pointsScored: 205,
    challengesWon: 8,
    challengesPlayed: 10,
    moneyWon: 66,
    img: 'https://picsum.photos/49',
    hcp: 1,
    xp: 200123,
    level: 95,
  },
  {
    name: 'Guadalupe Bullock',
    flag: '🇸🇪',
    pointsScored: 205,
    challengesWon: 8,
    challengesPlayed: 10,
    moneyWon: 66,
    img: 'https://picsum.photos/49',
    hcp: 0,
    xp: 144001,
    level: 89,
  },
  {
    name: 'Deena Roth',
    flag: '🇨🇭',
    pointsScored: 118,
    challengesWon: 5,
    challengesPlayed: 10,
    moneyWon: 158,
    img: 'https://picsum.photos/50',
    hcp: 33,
    xp: 63546,
    level: 78,
  },
  {
    name: 'Malik Murphy',
    flag: '🇸🇪',
    pointsScored: 288,
    challengesWon: 5,
    challengesPlayed: 10,
    moneyWon: 239,
    img: 'https://picsum.photos/52',
    hcp: 26,
    xp: 39000,
    level: 67,
  },
  {
    name: 'Eric Bolton',
    flag: '🏳️',
    pointsScored: 154,
    challengesWon: 7,
    challengesPlayed: 10,
    moneyWon: 219,
    img: 'https://picsum.photos/50',
    hcp: 11,
    xp: 27654,
    level: 56,
  },
  {
    name: 'Bernard Mercado',
    flag: '🇨🇭',
    pointsScored: 282,
    challengesWon: 4,
    challengesPlayed: 10,
    moneyWon: 118,
    img: 'https://picsum.photos/51',
    hcp: 0,
    xp: 12046,
    level: 45,
  },
  {
    name: 'Shannon Meyers',
    flag: '🇺🇸',
    pointsScored: 4,
    challengesWon: 6,
    challengesPlayed: 10,
    moneyWon: 62,
    img: 'https://picsum.photos/49',
    hcp: 25,
    xp: 7023,
    level: 34,
  },
  {
    name: 'Osvaldo Wise',
    flag: '🇺🇸',
    pointsScored: 199,
    challengesWon: 7,
    challengesPlayed: 10,
    moneyWon: 87,
    img: 'https://picsum.photos/52',
    hcp: 0,
    xp: 3900,
    level: 23,
  },
  {
    name: 'Bernadine Schwartz',
    flag: '🇸🇪',
    pointsScored: 194,
    challengesWon: 2,
    challengesPlayed: 10,
    moneyWon: 134,
    img: 'https://picsum.photos/49',
    hcp: 20,
    xp: 1800,
    level: 15,
  },
  {
    name: 'Laura Walton',
    flag: '🏳️',
    pointsScored: 128,
    challengesWon: 3,
    challengesPlayed: 10,
    moneyWon: 224,
    img: 'https://picsum.photos/52',
    hcp: 34,
    xp: 430,
    level: 5,
  },
];

export const dummyPrizes: PriceType[] = [
  {
    img: '/sponsors/4Aces/4Aces_Mar2025/WGC_4ACES_1stPrice.png',
    title: '1st Prize',
    desc: '$500 EXCR gift card + signed 4Aces Miami basketball jersey',
  },
  {
    img: '/sponsors/4Aces/4Aces_Mar2025/WGC_4ACES_2ndPrice.png',
    title: '2nd Prize',
    desc: '$250 EXCR gift card + 4Aces Miami capsule',
  },
  {
    img: '/sponsors/4Aces/4Aces_Mar2025/WGC_4ACES_3rdPrice.png',
    title: '3rd Prize',
    desc: '$150 EXCR gift card + 4Aces Miami hat',
  },
  {
    img: '/sponsors/4Aces/4Aces_Mar2025/WGC_4ACES_ParticipantPrice.png',
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

export const dummySponsors: Sponsor[] = [
  {
    name: 'Jaquet Droz',
    img: '/sponsors/JaquetDroz/JD-monogram.svg',
    runningChallenge: 4,
    url: '/jaquet-droz',
  },
  {
    name: 'World Golf Challenge',
    img: '/sponsors/WGC/wgc_sponsor.png',
    runningChallenge: 0,
    url: '/extracurricular',
  },
  /*
  {
    name: '4ACES',
    img: '/sponsors/4Aces/4aces_sponsor.png',
    runningChallenge: 2,
    url: '/4aces',
  },
  {
    name: 'THÉOBROMA',
    img: '/sponsors/Theobroma/theobroma_sponsor.png',
    runningChallenge: 2,
    url: '/extracurricular',
  },
  {
    name: 'Teabo',
    img: '/sponsors/Teabo/teabo_sponsor.png',
    runningChallenge: 2,
    url: '/extracurricular',
  },
  {
    name: 'Extracurricular',
    img: '/sponsors/z_MockUps/excr_sponsor.png',
    runningChallenge: 2,
    url: '/extracurricular',
  },*/
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

export const dummyNotifications: NotificationType[] = [
  {
    id: '1',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> followed you.
      </>
    ),
    unread: true,
    timestamp: new Date(2022, 1, 1),
    type: 'follow',
  },
  {
    id: '2',
    text: (
      <>
        <b>Masters Week</b> : double XP for everyone ! ⛳
      </>
    ),
    unread: true,

    timestamp: new Date(2022, 4, 1),
    type: 'general',
  },
  {
    id: '3',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> won the <b>4Aces Miami Vice Challenge</b> ! 🏆
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 4, 12),
    type: 'cheerable',
  },
  {
    id: '4',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> cheered <b>your promotion</b> 👏🏻
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 7, 25),
    type: 'reaction',
  },
  {
    id: '5',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Winter Challenge</b>! 📝
      </>
    ),
    unread: true,
    timestamp: new Date(2025, 1, 1),
    type: 'challenge',
  },
  {
    id: '6',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> has reached a new rank : <b>PGA Champion</b>
      </>
    ),
    timestamp: new Date(2023, 7, 25),
    type: 'cheerable',
  },
  {
    id: '7',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Miami Vice Challenge</b>! 📝
      </>
    ),
    timestamp: new Date(2022, 1, 1),
    type: 'challenge',
  },
  // END OF TEST
  /*
  {
    id: '1',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> followed you.
      </>
    ),
    unread: true,
    timestamp: new Date(2022, 1, 1),
    type: 'follow',
  },
  {
    id: '2',
    text: (
      <>
        <b>Masters Week</b> : double XP for everyone ! ⛳
      </>
    ),
    unread: true,

    timestamp: new Date(2022, 4, 1),
    type: 'general',
  },
  {
    id: '3',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> won the <b>4Aces Miami Vice Challenge</b> ! 🏆
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 4, 12),
    type: 'cheerable',
  },
  {
    id: '4',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> cheered <b>your promotion</b> 👏🏻
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 7, 25),
    type: 'reaction',
  },
  {
    id: '5',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Winter Challenge</b>! 📝
      </>
    ),
    unread: true,
    timestamp: new Date(2025, 1, 1),
    type: 'challenge',
  },
  {
    id: '6',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> has reached a new rank : <b>PGA Champion</b>
      </>
    ),
    timestamp: new Date(2023, 7, 25),
    type: 'cheerable',
  },
  {
    id: '7',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Miami Vice Challenge</b>! 📝
      </>
    ),
    timestamp: new Date(2022, 1, 1),
    type: 'challenge',
  },
  {
    id: '1',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> followed you.
      </>
    ),
    unread: true,
    timestamp: new Date(2022, 1, 1),
    type: 'follow',
  },
  {
    id: '2',
    text: (
      <>
        <b>Masters Week</b> : double XP for everyone ! ⛳
      </>
    ),
    unread: true,

    timestamp: new Date(2022, 4, 1),
    type: 'general',
  },
  {
    id: '3',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> won the <b>4Aces Miami Vice Challenge</b> ! 🏆
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 4, 12),
    type: 'cheerable',
  },
  {
    id: '4',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> cheered <b>your promotion</b> 👏🏻
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 7, 25),
    type: 'reaction',
  },
  {
    id: '5',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Winter Challenge</b>! 📝
      </>
    ),
    unread: true,
    timestamp: new Date(2025, 1, 1),
    type: 'challenge',
  },
  {
    id: '6',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> has reached a new rank : <b>PGA Champion</b>
      </>
    ),
    timestamp: new Date(2023, 7, 25),
    type: 'cheerable',
  },
  {
    id: '7',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Miami Vice Challenge</b>! 📝
      </>
    ),
    timestamp: new Date(2022, 1, 1),
    type: 'challenge',
  },
  {
    id: '1',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> followed you.
      </>
    ),
    unread: true,
    timestamp: new Date(2022, 1, 1),
    type: 'follow',
  },
  {
    id: '2',
    text: (
      <>
        <b>Masters Week</b> : double XP for everyone ! ⛳
      </>
    ),
    unread: true,

    timestamp: new Date(2022, 4, 1),
    type: 'general',
  },
  {
    id: '3',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> won the <b>4Aces Miami Vice Challenge</b> ! 🏆
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 4, 12),
    type: 'cheerable',
  },
  {
    id: '4',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> cheered <b>your promotion</b> 👏🏻
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 7, 25),
    type: 'reaction',
  },
  {
    id: '5',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Winter Challenge</b>! 📝
      </>
    ),
    unread: true,
    timestamp: new Date(2025, 1, 1),
    type: 'challenge',
  },
  {
    id: '6',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> has reached a new rank : <b>PGA Champion</b>
      </>
    ),
    timestamp: new Date(2023, 7, 25),
    type: 'cheerable',
  },
  {
    id: '7',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Miami Vice Challenge</b>! 📝
      </>
    ),
    timestamp: new Date(2022, 1, 1),
    type: 'challenge',
  },
  {
    id: '1',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> followed you.
      </>
    ),
    unread: true,
    timestamp: new Date(2022, 1, 1),
    type: 'follow',
  },
  {
    id: '2',
    text: (
      <>
        <b>Masters Week</b> : double XP for everyone ! ⛳
      </>
    ),
    unread: true,

    timestamp: new Date(2022, 4, 1),
    type: 'general',
  },
  {
    id: '3',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> won the <b>4Aces Miami Vice Challenge</b> ! 🏆
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 4, 12),
    type: 'cheerable',
  },
  {
    id: '4',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> cheered <b>your promotion</b> 👏🏻
      </>
    ),
    unread: true,

    timestamp: new Date(2023, 7, 25),
    type: 'reaction',
  },
  {
    id: '5',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Winter Challenge</b>! 📝
      </>
    ),
    unread: true,
    timestamp: new Date(2025, 1, 1),
    type: 'challenge',
  },
  {
    id: '6',
    img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    text: (
      <>
        <b>Jonas Jaeggi</b> has reached a new rank : <b>PGA Champion</b>
      </>
    ),
    timestamp: new Date(2023, 7, 25),
    type: 'cheerable',
  },
  {
    id: '7',
    img: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    text: (
      <>
        <b>Mikaël Ruffieux</b> joined the <b>4Aces Miami Vice Challenge</b>! 📝
      </>
    ),
    timestamp: new Date(2022, 1, 1),
    type: 'challenge',
  }, */
];
