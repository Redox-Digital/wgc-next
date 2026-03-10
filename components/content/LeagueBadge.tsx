import Link from 'next/link';
import css from './LeagueBadge.module.scss';
import { SweetAlertLeagues } from './SweetAlert';

type League = {
  title: string;
  className: string;
  badgeUrl: string;
};

export const leagues: League[] = [
  { title: 'Rookie', className: css.rookie, badgeUrl: '/leagues/Rookie.svg' },
  { title: 'Weekender', className: css.weekender, badgeUrl: '/leagues/Weekender.svg' },
  { title: 'Club Member', className: css.clubMember, badgeUrl: '/leagues/ClubMember.svg' },
  { title: 'Iron Seeker', className: css.ironSeeker, badgeUrl: '/leagues/IronSeeker.svg' },
  { title: 'Club Champion', className: css.clubChampion, badgeUrl: '/leagues/ClubChampion.svg' },
  { title: 'Tour Prospect', className: css.tourProspect, badgeUrl: '/leagues/TourProspect.svg' },
  {
    title: 'Tournament Ready',
    className: css.tournamentReady,
    badgeUrl: '/leagues/TournamentReady.svg',
  },
  { title: 'Clubhouse King', className: css.clubhouseKing, badgeUrl: '/leagues/ClubhouseKing.svg' },
  { title: 'PGA Champion', className: css.pgaChampion, badgeUrl: '/leagues/PgaChampion.svg' },
  { title: 'Grandmaster', className: css.grandmaster, badgeUrl: '/leagues/Grandmaster.svg' },
  { title: 'Golf Legend', className: css.golflegend, badgeUrl: '/leagues/GolfLegend.svg' },
];

export function leagueFinder(lvl: number) {
  return leagues[Math.floor(Math.abs(lvl) / 10)] || leagues[0];
}

type Props = {
  userLevel: number;
  href?: string;
  modal?: boolean;
  dot?: boolean;
  locked?: boolean;
};

export default function Badge({ userLevel, dot, modal, locked, href }: Props) {
  if (dot) {
    return (
      <span
        onClick={() => SweetAlertLeagues()}
        className={`${css.leagueTag} ${css.dot} ${leagueFinder(userLevel).className} ${locked && css.locked}`}
        title={`${leagueFinder(userLevel).title}, Level ${userLevel}`}
      />
    );
  } else if (modal) {
    return (
      <div
        onClick={() => SweetAlertLeagues()}
        className={`${css.leagueTag} ${leagueFinder(userLevel).className} ${locked && css.locked}`}
        title={`${leagueFinder(userLevel).title}, Level ${userLevel}`}
      >
        {leagueFinder(userLevel).title}
      </div>
    );
  } else if (href) {
    return (
      <Link
        className={`${css.leagueTag} ${leagueFinder(userLevel).className} ${locked && css.locked}`}
        title={`${leagueFinder(userLevel).title}, Level ${userLevel}`}
        href={'/profile/leagues'}
      >
        {leagueFinder(userLevel).title}
      </Link>
    );
  } else {
    return (
      <span
        className={`${css.leagueTag} ${css.span} ${leagueFinder(userLevel).className} ${locked && css.locked}`}
      >
        {leagueFinder(userLevel).title}
      </span>
    );
  }
}

type CarrouselProps = {
  userLevel?: number;
};

export function LeagueCarrousel({ userLevel }: CarrouselProps) {}
