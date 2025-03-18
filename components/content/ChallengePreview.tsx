import { challenges } from '@/constants/DummyData';
import Button from '../navigation/Button';
import css from './ChallengePreview.module.scss';
import Image from 'next/image';

interface Props extends ChallengePreview {
  notification?: boolean; // Show red badge
  yourChallenges?: boolean; // When used in the "Challenges" Modal
  edit?: boolean; // When used in the Privage Challenge previews
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
  edit,
}: Props) {
  return (
    <>
      <div className={css.challengeDesktop}>
        <div className={css.head}>
          <div className={css.img}>
            {img ? <Image src={img} alt={''} width={72} height={40} /> : <h5>#{id}</h5>}
          </div>
          <h3>{name}</h3>
          <span className={css.players}>
            <small>{players}</small>{' '}
            <Image src={'/pictograms/user-white.svg'} alt={''} width={16} height={16} />
          </span>
        </div>

        <div className={css.subhead}>
          <small className={css.timer}>Starts in: 2d 10h 39m 04s</small>
          <span className={css.hcp}>HCP {hcp}</span>
        </div>

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
          {edit && (
            <Button
              small
              outline
              darkBg
              className={css.editBtn}
              href="/private/edit"
              title="Edit Challenge"
            >
              <Image src="/pictograms/settings-white.svg" alt="" width={14} height={14} />
            </Button>
          )}
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
            {img ? <Image src={img} alt={''} width={72} height={40} /> : <h5>#{id}</h5>}
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
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 6 10">
              <g>
                <g id="Layer_1">
                  <path d="M.9.9l4.1,4.1L.9,9.1" />
                </g>
              </g>
            </svg>
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

          {edit && (
            <Button small outline darkBg href="/private/edit">
              <Image src="/pictograms/settings-white.svg" alt="" width={14} height={14} />
              <span>Edit Challenge</span>
            </Button>
          )}

          <Button small href={url || '/lobby'}>
            {fee ? `Buy-in ${fee}$` : 'Join for free'}
          </Button>
        </div>
      </details>
    </>
  );
}
