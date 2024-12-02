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
        <p>Placement resets on the 1st day of each month.</p>
      </SectionTitle>
      <div className={css.podium}>
        <div className={`${css.podiumStep} ${css.first}`}>
          <Image src={first.img} alt={''} width={80} height={80} />
          <h4 className={css.rank}>1</h4>
          <h4>
            {first.name} {first.flag}
          </h4>
          <p>{first.pointsScored} points scored</p>
          <p>{first.challengesWon} challenges won</p>
          <p>{first.moneyWon}$ won</p>
        </div>

        <div className={`${css.podiumStep} ${css.second}`}>
          <Image src={second.img} alt={''} width={80} height={80} />
          <h4 className={css.rank}>2</h4>
          <h4>
            {second.name} {second.flag}
          </h4>
          <p>{second.pointsScored} points scored</p>
          <p>{second.challengesWon} challenges won</p>
          <p>{second.moneyWon}$ won</p>
        </div>

        <div className={`${css.podiumStep} ${css.third}`}>
          <Image src={third.img} alt={''} width={80} height={80} />
          <h4 className={css.rank}>3</h4>
          <h4>
            {third.name} {third.flag}
          </h4>
          <p>{third.pointsScored} points scored</p>
          <p>{third.challengesWon} challenges won</p>
          <p>{third.moneyWon}$ won</p>
        </div>
      </div>
    </section>
  );
}
