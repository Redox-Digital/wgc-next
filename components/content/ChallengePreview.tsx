import { challenges } from '@/constants/DummyData';
import Button from '../navigation/Button';
import css from './ChallengePreview.module.scss';
import Image from 'next/image';

interface Props extends ChallengePreview {
  notification?: boolean; // Show red badge
  yourChallenges?: boolean; // When used in the "Challenges" Modal
}

// DEV : Tweak it as needed, so it uses the real users PP
function getPlayerPictures(n: number) {
  // Displays max 3 images, then +
  let userImages = [];

  if (n > 3) {
    for (let index = 0; index < 3; index++) {
      userImages.push(
        <li>
          <Image src="https://picsum.photos/32" alt="" width={32} height={32} />
          {index === 2 ? <span>{`+${n - 2}`}</span> : '' /* Only displayed on last element */}
        </li>
      );
    }
  } else {
    for (let index = 0; index < n; index++) {
      userImages.push(
        <li>
          <Image src="https://picsum.photos/32" alt="" width={32} height={32} />
        </li>
      );
    }
  }

  return userImages;
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
        <div className={css.head}>
          <div className={css.img}>
            {img ? <Image src={img} alt={''} width={60} height={40} /> : <h5>#{id}</h5>}
          </div>
          <h3>{name}</h3>
          <ul className={css.players}>{getPlayerPictures(players)}</ul>
        </div>

        <small className={css.timer}>Starts in: 2d 10h 39m 04s</small>

        <div className={css.body}>
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
            Price pool
            <br />
            <b>${pool.toFixed(2)}</b>
          </span>
        </div>
        <div className={css.foot}>
          <span className={css.fee}>{fee ? `Buy-in $${fee}` : 'Free'}</span>
          <Button small href={url || '/lobby'}>
            Join now{' '}
          </Button>{' '}
        </div>
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
              <span className={css.hcp}>HCP {hcp}</span>
              <span className={css.players}>
                {players}{' '}
                <Image src={'/pictograms/user-white.svg'} alt={''} width={12} height={12} />
              </span>
              <span className={css.timer}>Starts in: 2d 10h 39m 04s</span>
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
          </div>

          <Button small href={url || '/lobby'}>
            {fee ? `Buy-in ${fee}$` : 'Join for free'}
          </Button>
        </div>
      </details>
    </>
  );
}
