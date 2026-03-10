import Link from 'next/link';
import css from './Badges.module.scss';
import Image from 'next/image';
import { SweetAlertBadge } from './SweetAlert';

export type BadgeType = {
  img: string;
  title: string;
  description: string;
};

export const badges: BadgeType[] = [
  {
    title: 'A new start...',
    description: 'Sign up',
    img: '/badges/newStart.png',
  },
  {
    title: 'Gear Freak',
    description: 'Complete your golf bag in your profile',
    img: '/badges/gearFreak.png',
  },
  {
    title: 'Welcome aboard',
    description: 'Complete the onboarding Tutorial',
    img: '/badges/welcomeAboard.png',
  },
  {
    title: 'First Swing',
    description: 'Join your first challenge',
    img: '/badges/firstSwing.png',
  },
  {
    title: 'Best of the Bunch',
    description: 'First top 10',
    img: '/badges/bestOfTheBunch.png',
  },
  {
    title: 'Podium Truster',
    description: 'First top 3',
    img: '/badges/podiumTruster.png',
  },
  {
    title: 'First-time Winner',
    description: 'First win',
    img: '/badges/firstTimeWinner.png',
  },
  {
    title: 'Birdie Breaker',
    description: 'Play 36 pts for the first time',
    img: '/badges/birdieBreaker.png',
  },
  {
    title: 'Steady Striker',
    description: 'Complete 10 challenges',
    img: '/badges/steadyStriker.png',
  },
  {
    title: 'Green Grinder',
    description: 'Reach Level 25',
    img: '/badges/greenGrinder.png',
  },
  {
    title: 'Legend in the Making',
    description: 'Reach Level 50',
    img: '/badges/legendInTheMaking.png',
  },
  {
    title: 'Mentor',
    description: 'Invite a friend who registers (for the first time)',
    img: '/badges/mentor.png',
  },
  {
    title: 'Social Golfer',
    description: 'First post on the social Feed',
    img: '/badges/socialGolfer.png',
  },
  {
    title: 'Clubhouse Creator',
    description: 'Create your own private challenge',
    img: '/badges/clubhouseCreator.png',
  },
  {
    title: 'Style Icon',
    description: 'Customize your profile + avatar',
    img: '/badges/styleIcon.png',
  },
  {
    title: 'One Month In',
    description: 'Stay active for 30 days',
    img: '/badges/oneMonthIn.png',
  },
  {
    title: 'Quarter Club',
    description: 'Stay active 3 months',
    img: '/badges/quarterClub.png',
  },
  {
    title: 'Half-Year Hero',
    description: '6 months of regular activity',
    img: '/badges/halfYearHero.png',
  },
  {
    title: 'WGC Veteran',
    description: '1 year registered',
    img: '/badges/wgcVeteran.png',
  },
  {
    title: 'True Believer',
    description: 'Complete a challenge each month for 12 months',
    img: '/badges/trueBeliever.png',
  },
  {
    title: 'OG-Player',
    description: 'For the users registered before 01.01.2024.',
    img: '/badges/ogPlayer.png',
  },
  {
    title: 'Independence Day Warrior',
    description: 'Join the July 4th Challenge',
    img: '/badges/independenceDayWarrior.png',
  },
  {
    title: 'Holiday Swinger',
    description: 'Join a December/holiday event',
    img: '/badges/holidaySwinger.png',
  },

  {
    title: 'Lucky Shot',
    description: 'Win a random draw prize (e.g. TM bag)',
    img: '/badges/luckyShot.png',
  },
];

export interface UserBadgeType extends BadgeType {
  owned?: boolean;
  date: Date;
}

// DEV : Static values
export const userBadges: UserBadgeType[] = badges.map((b) => ({
  owned: Math.random() < 0.5,
  date: new Date(),
  ...b,
}));

type ListProps = {
  badges: UserBadgeType[];
  username?: string;
};

export function BadgesPreviewList({ badges, username }: ListProps) {
  return (
    <div className={css.previewList}>
      {badges.slice(0, 4).map((b) => (
        <Image
          key={b.img}
          className={b.owned ? '' : css.lockedBadge}
          src={b.img}
          alt={b.title}
          title={b.title}
          width={80}
          height={80}
        />
      ))}
      <Link
        className={css.arrowLink}
        href={username ? `/users/${username}/badges` : '/profile/badges'}
      >
        <Image src="/pictograms/arrow-return.svg" width={16} height={16} alt="" />
      </Link>
    </div>
  );
}

export default function BadgesList({ badges }: ListProps) {
  return (
    <section className={css.badgesList}>
      <p style={{ opacity: 0.75, width: '100%' }}>
        Play golf, take part in challenges, invite friends, and win unique badges!
      </p>
      {badges.map((b, key) => (
        <BadgePreview key={key} badge={b} />
      ))}
    </section>
  );
}

type PreviewProps = {
  badge: UserBadgeType;
};

export function BadgePreview({ badge }: PreviewProps) {
  return (
    <div
      className={`${css.badgePreview} ${badge.owned ? '' : css.lockedBadge}`}
      onClick={() => (badge.owned ? SweetAlertBadge({ ...badge }) : null)}
    >
      <Image src={badge.img} width={150} height={150} alt={badge.title} />
      <h4>{badge.title}</h4>
    </div>
  );
}
