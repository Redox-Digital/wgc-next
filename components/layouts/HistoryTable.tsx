import Link from 'next/link';
import Button from '../navigation/Button';
import css from './HistoryTable.module.scss';
import Image from 'next/image';

type TableLineType = {};

type Props = {
  headers: string[];
  body: ChallengePreview[];
};
export default function HistoryTable({ headers, body }: Props) {
  return (
    <div className={`${css.historyTable} ${css.challengesList}`}>
      <div className={css.head}>
        {headers.map((elt, key) => (
          <small key={key}>{elt}</small>
        ))}
      </div>

      <div className={css.body}>
        {body.map((elt, key) => (
          <Link key={key} className={css.gain} href={elt.url || ''}>
            <span className={css.identifier}>
              {elt.name}
              <small className="xs">{elt.dates}</small>
            </span>
            {/* Money won or spent */}
            <span className={css.amount}>$&nbsp;120.00</span>

            <Image
              src="/pictograms/angle-accent-right.svg"
              alt="To the Challenge"
              title="To the Challenge"
              width={18}
              height={18}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

type WalletLineType = {
  date: string;
  amount: number;
  type: string;
};

type WalletProps = {
  headers: string[];
  body: WalletLineType[];
};

export function WalletTable({ headers, body }: WalletProps) {
  return (
    <div className={css.historyTable}>
      <div className={css.head}>
        {headers.map((elt, key) => (
          <small key={key}>{elt}</small>
        ))}
      </div>

      <ul className={css.body}>
        {body.map((elt, key) => (
          <li key={key} className={elt.amount > 0 ? css.gain : css.loss}>
            <span className={css.identifier}>
              {elt.type}
              <small className="xs">{elt.date}</small>
            </span>
            <span className={css.amount}>$ {elt.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
