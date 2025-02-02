import Button from '../navigation/Button';
import css from './ChallengePreview.module.scss';
import Image from 'next/image';

interface Props extends ChallengePreview {
  notification?: boolean; // Show red badge
  yourChallenges?: boolean; // When used in the "Challenges" Modal
}

export default function ChallengePreview({
  id,
  img,
  hcp,
  name,
  pool,
  gameType,
  players,
  dates,
  fee,
  notification,
  yourChallenges,
  url,
}: Props) {
  return (
    <>
      <div className={css.challengeDesktop}>
        <span className={css.id}>#{id}</span>
        <span className={css.img}>
          {img && <Image src={img} alt={''} width={45} height={45} />}
        </span>
        <span className={css.name}>{name}</span>
        <span className={css.hcp}>{hcp}</span>
        <span className={css.pool}>{pool}$</span>
        <span className={css.gameType}>{gameType}</span>
        <span className={css.players}>
          {players}/10 <Image src={'/pictograms/user-white.svg'} alt={''} width={15} height={15} />
        </span>
        <span className={css.dates}>{dates}</span>
        <span className={css.btn}>
          <Button small href={'/lobby'}>
            {fee ? `Buy-in ${fee}$` : 'Join for free'}
          </Button>
        </span>
      </div>
      {/* .Destkop */}
      {/* Mobile */}

      <details className={`${css.challengeMobile} ${yourChallenges && css.yourChallenges}`}>
        <summary>
          {notification && <div className={css.badge} />}
          <div className={css.img}>
            {img ? <Image src={img} alt={''} width={60} height={40} /> : <h5>#{id}</h5>}
          </div>

          <div className={css.content}>
            <div className={css.topLine}>
              <span className={css.name}>{name}</span>
              <span className={css.pool}>{pool}$</span>
            </div>
            <div className={css.bottomLine}>
              <span className={css.players}>
                {players}{' '}
                <Image src={'/pictograms/user-white.svg'} alt={''} width={15} height={15} />
              </span>
              <span className={css.timer}>Starting in : 10h39m04s</span>
            </div>
          </div>

          <span className={css.arrow}>
            <Image src={'/pictograms/angle-accent-right.svg'} alt={''} width={15} height={15} />
          </span>
        </summary>

        <div className={css.body}>
          <div className={css.stats}>
            <span>
              ID
              <br />
              <b>#{id}</b>
            </span>
            <span>
              Dates
              <br />
              <b>{dates}</b>
            </span>
            <span>
              Game type
              <br />
              <b>{gameType}</b>
            </span>
            <span>
              HCP
              <br />
              <b>{hcp}</b>
            </span>
          </div>

          <Button small href={url || '/lobby'}>
            {fee ? `Buy-in ${fee}$` : 'Join for free'}
          </Button>
        </div>
      </details>
    </>
  );
}
