import css from './Leaderboard.module.scss';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import Button from '../navigation/Button';
import PricePool from './PricePool';

type LeaderboardProps = {
  players?: Player[];
  dark?: boolean;
  title: string;
  description?: string;
  className?: string;
  ongoing?: boolean;
  prizes?: PriceType[];
};

export default function Leaderboard({
  players,
  dark,
  title,
  description,
  className,
  ongoing = true,
  prizes,
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
            <Rankings players={players} ongoing={ongoing} />
          ) : (
            <p>
              <i>No score registered yet</i>
            </p>
          )}
        </>
      ) : players && players.length > 3 ? (
        // DEV : design not great yet, if no player is ranked.
        <>
          <Podium first={players[0]} second={players[1]} third={players[2]} />
          <Rankings players={players.slice(3)} startRank={4} ongoing={ongoing} />
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
  btn?: { link: string; label: string };
};

export function Podium({ first, second, third, btn }: PodiumProps) {
  return (
    <section className={css.podiumSection}>
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

type RankingsProps = { players: Player[]; startRank?: number; ongoing?: boolean };

export function Rankings({ players, startRank = 1, ongoing = true }: RankingsProps) {
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
              <td className={css.pos}>{ongoing ? `#${key + startRank}` : '-'}</td>
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
