'use client';
import css from './Leaderboard.module.scss';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import Button from '../navigation/Button';
import PricePool from './PricePool';
import Badge from '../content/LeagueBadge';

type LeaderboardProps = {
  players?: Player[];
  dark?: boolean;
  title: string;
  description?: string;
  className?: string;
  ongoing?: boolean;
  prizes?: PriceType[]; // For future usage.
  btn?: { link: string; label: string };
  xpLeaderboard?: boolean;
};

function numberAbbr(num: number): string {
  if (num >= 1000000) {
    return `${(Math.round((num / 1000000) * 100) / 100).toFixed(2)}M`;
  } else if (num >= 1000) {
    return `${(Math.round((num / 1000) * 100) / 100).toFixed(2)}k`;
  } else {
    return num.toString();
  }
}

export default function Leaderboard({
  players,
  dark,
  title,
  description,
  className,
  ongoing = true,
  prizes,
  btn,
  xpLeaderboard,
}: LeaderboardProps) {
  // If challenge not ongoing, we don't display the podium.
  // If there are less than 3 players, we don't display the podium.
  return (
    <div className={`${css.leaderboard} ${dark && css.dark} ${className}`}>
      <SectionTitle title={ongoing ? title : 'Players'} className={css.sctTitles}>
        {description && <small>{description}</small>}
      </SectionTitle>

      {prizes && prizes.length > 0 ? (
        <div className={css.pricesPreview}>
          <PricePool className={css.poolPreview} prizes={prizes} preview />
        </div>
      ) : (
        ''
      )}

      {(players && players.length < 3 && players.length > 0) ||
      (!ongoing && players?.length !== 0) ? (
        <>
          {players ? (
            <Rankings players={players} ongoing={ongoing} showLeagues={xpLeaderboard} />
          ) : (
            <p>
              <i>No score registered yet</i>
            </p>
          )}
        </>
      ) : players && players.length >= 3 ? (
        // DEV : design not great yet, if no player is ranked.
        <>
          <Podium
            first={players[0]}
            second={players[1]}
            third={players[2]}
            showLeagues={xpLeaderboard}
          />
          {players.length > 3 && (
            <Rankings
              players={players.slice(3)}
              startRank={4}
              ongoing={ongoing}
              showLeagues={xpLeaderboard}
            />
          )}
        </>
      ) : (
        ''
      )}

      {btn && (
        <Button href={btn.link} outline darkBg>
          {btn.label}
        </Button>
      )}
    </div>
  );
}

type PodiumProps = {
  first: Player;
  second: Player;
  third: Player;
  btn?: { link: string; label: string };
  showLeagues?: boolean;
};

type PodiumStepProps = {
  rank: number;
  player: Player;
  showLeagues?: boolean;
  className?: string;
};

function PodiumStep({ rank, player, showLeagues, className }: PodiumStepProps) {
  return (
    <div className={`${css.podiumStep} ${className}`}>
      <Image src={player.img} alt={''} width={40} height={40} />
      <span className={css.rank}>{rank}</span>
      <h5>
        {player.name} <span className={css.flag}>{player.flag}</span>
      </h5>
      {}
      {showLeagues ? (
        <>
          <p>{numberAbbr(player.xp)} XP</p>
          <p>Level {player.level}</p>
          <Badge userLevel={player.level} />
        </>
      ) : (
        <>
          <p>{player.pointsScored} pts</p>
          <p>{player.challengesWon} win(s)</p>
        </>
      )}
      {/* <p>$ {first.moneyWon} won</p> */}
    </div>
  );
}

function Podium({ first, second, third, btn, showLeagues }: PodiumProps) {
  return (
    <section className={css.podiumSection}>
      <div className={css.podium}>
        <PodiumStep rank={1} player={first} className={css.first} showLeagues={showLeagues} />
        <PodiumStep rank={2} player={second} className={css.second} showLeagues={showLeagues} />
        <PodiumStep rank={3} player={third} className={css.third} showLeagues={showLeagues} />
      </div>
    </section>
  );
}

type RankingsProps = {
  players: Player[];
  startRank?: number;
  ongoing?: boolean;
  showLeagues?: boolean;
};

export function Rankings({ players, startRank = 1, ongoing = true, showLeagues }: RankingsProps) {
  return (
    <section className={css.rankingsSct}>
      <table className={css.rankings}>
        <thead>
          <tr>
            <th>Pos.</th>
            <th className={css.name}>Name</th>
            {showLeagues ? (
              <>
                <th>XP</th>
                <th>League</th>
              </>
            ) : (
              <>
                <th>HCP</th>
                <th>Pts</th>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {players.map((p, key) => (
            <tr key={key + startRank}>
              <td className={css.img}>
                <Image src={p.img} alt={''} width={40} height={40} />
              </td>
              <td className={css.pos}>{ongoing ? `#${key + startRank}` : '-'}</td>
              <td className={css.name}>{p.name}</td>

              {showLeagues ? (
                <>
                  <td className={css.xp}>{numberAbbr(p.xp)}</td>
                  <td className={css.league}>
                    <Badge userLevel={p.level} dot />
                  </td>
                </>
              ) : (
                <>
                  <td className={css.hcp}>{p.hcp.toFixed(1)}</td>
                  <td className={css.score}>{p.pointsScored}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
