type Sponsor = {
  name: string;
  img: string;
  runningChallenge: number;
  url: string;
};

type Player = {
  name: string;
  flag: string;
  img: string;
  pointsScored: number;
  challengesWon: number;
  moneyWon: number;
};

type ChallengePreview = {
  id: number;
  img?: string;
  hcp: 'single' | 'up to 18' | 'up to 54';
  name: string;
  pool: number;
  gameType: string;
  players: number;
  dates: string;
  fee: number;
};

type GearType = {
  id: number;
  gear: string;
  brand: string;
  model: string;
};
