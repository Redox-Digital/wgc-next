import Button from '../navigation/Button';
import SectionTitle from './SectionTitle';
import css from './TopPlayers.module.scss';
import Image from 'next/image';

type Props = {
  first: Player;
  second: Player;
  third: Player;
};

export default function TopPlayers({ first, second, third }: Props) {
  return (
    <section className={css.topPlayers}>
      <SectionTitle title="Players of the month">
        <small>Placement resets on the 1st day of each month.</small>
      </SectionTitle>
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
      <Button href="/leaderboards" outline darkBg>
        All Leaderboards
      </Button>
    </section>
  );
}
