import css from './LeagueBadge.module.scss';
import { SweetAlertLeagues } from './SweetAlert';

type League = {
  title: string;
  className: string;
};

const leagues: League[] = [
  { title: 'Rookie', className: css.rookie },
  { title: 'Weekender', className: css.weekender },
  { title: 'Club Member', className: css.clubMember },
  { title: 'Iron Seeker', className: css.ironSeeker },
  { title: 'Club Champion', className: css.clubChampion },
  { title: 'Tour Prospect', className: css.tourProspect },
  { title: 'Tournament Ready', className: css.tournamentReady },
  { title: 'Clubhouse King', className: css.clubhouseKing },
  { title: 'PGA Champion', className: css.pgaChampion },
  { title: 'Grandmaster', className: css.grandmaster },
  { title: 'Golf Legend', className: css.golflegend },
];

type Props = {
  userLevel: number;
  dot?: boolean;
};

export function leagueFinder(lvl: number) {
  return leagues[Math.floor(Math.abs(lvl) / 10)] || leagues[0];
}

export default function Badge({ userLevel, dot }: Props) {
  if (dot) {
    return (
      <span
        onClick={() => SweetAlertLeagues()}
        className={`${css.leagueTag} ${css.dot} ${leagueFinder(userLevel).className}`}
        title={`${leagueFinder(userLevel).title}, Level ${userLevel}`}
      />
    );
  } else {
    return (
      <div
        onClick={() => SweetAlertLeagues()}
        className={`${css.leagueTag} ${leagueFinder(userLevel).className}`}
        title={`${leagueFinder(userLevel).title}, Level ${userLevel}`}
      >
        {leagueFinder(userLevel).title}
      </div>
    );
  }
}

type CarrouselProps = {
  userLevel?: number;
};

export function LeagueCarrousel({ userLevel }: CarrouselProps) {}
