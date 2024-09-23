import Link from 'next/link';
import css from './Challenge.module.scss';
import btn from './navigation/Button.module.scss';
import Image from 'next/image';
import Button from './navigation/Button';

type ChallengeType = {
  url: string;
  img: string;
  title: string;
  dates: string;
  gameType: string;
  hcp: string;
  price?: number;
  currentPlayers: number;
};

export default function Challenge({
  url,
  img,
  title,
  dates,
  gameType,
  hcp,
  price,
  currentPlayers,
}: ChallengeType) {
  return (
    <div className={css.challenge}>
      <div className={css.head}>
        <Image src={img} alt={''} width={500} height={200} />
      </div>
      <div className={css.body}>
        <h3>{title}</h3>
        <p>{dates}</p>
        <p>
          Game type : <b>{gameType}</b>
        </p>
        <div className={css.copyBtn}>
          <input type="text" value={url} disabled />
          <button>
            <Image src={'/pictograms/copy.svg'} alt={'Copy Link'} width={20} height={20} />
          </button>
        </div>
      </div>
      <div className={css.banner}>HCP {hcp}</div>
      <div className={css.footer}>
        <span className={css.price}>{price || 'free'}</span>
        <span className={css.players}>{currentPlayers}</span>
        <Link className={btn.btn} href={url}>
          Join now
        </Link>
      </div>
    </div>
  );
}
