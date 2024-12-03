import Button from '../navigation/Button';
import css from './ChallengePreview.module.scss';
import Image from 'next/image';

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
}: ChallengePreview) {
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
          {players}/10 <Image src={'/pictograms/user.svg'} alt={''} width={15} height={15} />
        </span>
        <span className={css.dates}>{dates}</span>
        <span className={css.btn}>
          <Button small to={'/lobby'}>
            {fee ? `Buy-in ${fee}$` : 'Join for free'}
          </Button>
        </span>
      </div>
      <details className={css.challengeMobile}>
        <summary>
          {img ? <Image src={img} alt={''} width={45} height={45} /> : <h6>#{id}</h6>}
          <div>
            <span className={css.name}>{name}</span>
            <span className={css.players}>
              {players}/10 <Image src={'/pictograms/user.svg'} alt={''} width={15} height={15} />
            </span>
          </div>

          <span className={css.pool}>{pool}$</span>

          <span className={css.arrow}>▼</span>
        </summary>
        <div className={css.body}>
          <p>
            Id : <span className={css.id}>#{id}</span>
          </p>
          <p>
            Game type : <span className={css.hcp}>{hcp}</span>
          </p>
          <p>
            HCP : <span className={css.gameType}>{gameType}</span>
          </p>
          <p>
            Dates : <span className={css.dates}>{dates}</span>
          </p>
          <div className={css.btn}>
            <Button small to={'/lobby'}>
              {fee ? `Buy-in ${fee}$` : 'Join for free'}
            </Button>
          </div>
        </div>
      </details>
    </>
  );
}
