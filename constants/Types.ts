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
  hcp: number;
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
  url?: string;
};

type GearType = {
  id: number;
  gear: string;
  brand: string;
  model: string;
};

type FormStep = {
  id: number;
  title: string;
  description: string;
  body: string | React.ReactNode;
};

type PriceType = {
  img: string;
  title:
    | '1st Prize'
    | '2nd Prize'
    | '3rd Prize'
    | '4th Prize'
    | '5th Prize'
    | 'For all participants';
  desc: string | React.ReactNode;
};
