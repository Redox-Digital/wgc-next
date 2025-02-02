import css from './Leaderboard.module.scss';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import Button from '../navigation/Button';

type LeaderboardProps = {
  players?: Player[];
  dark?: boolean;
  hidePodium?: boolean;
  title: string;
  description?: string;
  className?: string;
};

export default function Leaderboard({
  players,
  dark,
  hidePodium,
  title,
  description,
  className,
}: LeaderboardProps) {
  return (
    <div className={`${css.leaderboard} ${dark && css.dark} ${className}`}>
      {hidePodium ? (
        <>
          <h2>{title}</h2>
          <small>{description}</small>
          {players ? (
            <Rankings players={players} />
          ) : (
            <p>
              <i>No score registered yet</i>
            </p>
          )}
        </>
      ) : players && players.length > 0 ? (
        // DEV : design not great yet, if no player is ranked.
        <>
          <Podium
            first={players[0]}
            second={players[1]}
            third={players[2]}
            title={title}
            description={description}
          />
          <Rankings players={players.slice(3)} startRank={4} />
        </>
      ) : (
        ''
      )}
    </div>
  );
}

type PodiumProps = {
  first: Player;
  second: Player;
  third: Player;
  title: string;
  description?: string;
  btn?: { link: string; label: string };
};

export function Podium({ first, second, third, title, description, btn }: PodiumProps) {
  return (
    <section className={css.podiumSection}>
      <SectionTitle title={title}>{description && <small>{description}</small>}</SectionTitle>
      <div className={css.podium}>
        <div className={`${css.podiumStep} ${css.first}`}>
          <Image src={first.img} alt={''} width={40} height={40} />
          <span className={css.rank}>1</span>
          <h5>
            {first.name} <span className={css.flag}>{first.flag}</span>
          </h5>
          <p>{first.pointsScored} pts</p>
          <p>{first.challengesWon} win(s)</p>
          <p>$ {first.moneyWon} won</p>
        </div>

        <div className={`${css.podiumStep} ${css.second}`}>
          <Image src={second.img} alt={''} width={40} height={40} />
          <span className={css.rank}>2</span>
          <h5>
            {second.name} <span className={css.flag}>{second.flag}</span>
          </h5>
          <p>{second.pointsScored} pts</p>
          <p>{second.challengesWon} win(s)</p>
          <p>$ {second.moneyWon} won</p>
        </div>

        <div className={`${css.podiumStep} ${css.third}`}>
          <Image src={third.img} alt={''} width={40} height={40} />
          <span className={css.rank}>3</span>
          <h5>
            {third.name} <span className={css.flag}>{third.flag}</span>
          </h5>
          <p>{third.pointsScored} pts</p>
          <p>{third.challengesWon} win(s)</p>
          <p>$ {third.moneyWon} won</p>
        </div>
      </div>
      {btn && (
        <Button href={btn.link} outline darkBg>
          {btn.label}
        </Button>
      )}
    </section>
  );
}

type RankingsProps = { players: Player[]; startRank?: number };

export function Rankings({ players, startRank = 1 }: RankingsProps) {
  return (
    <section className={css.rankingsSct}>
      <table className={css.rankings}>
        <thead>
          <tr>
            <th>Pos.</th>
            <th className={css.name}>Name</th>
            <th>HCP</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {players.map((p, key) => (
            <tr key={key + startRank}>
              <Image src={p.img} alt={''} width={40} height={40} />
              <td className={css.pos}>#{key + startRank}</td>
              <td className={css.name}>{p.name}</td>

              <td className={css.hcp}>{p.hcp.toFixed(1)}</td>
              <td className={css.score}>{p.pointsScored}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
