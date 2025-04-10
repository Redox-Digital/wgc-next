import css from './PricePool.module.scss';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import Button from '../navigation/Button';
import Link from 'next/link';

type Props = {
  prizes?: PriceType[];
  preview?: boolean;
  privateChallenge?: boolean;
  className?: string;
};

export default function PricePool({ preview, prizes, className, privateChallenge }: Props) {
  return preview ? (
    <>
      <Link
        href="#pricepool"
        className={`${css.pricesPreview} ${privateChallenge && css.private} ${className}`}
        title="See Price Pool"
      >
        <small>Price Pool</small>

        {prizes &&
          prizes.slice(0, 3).map((p, key) => (
            <div className={css.price} key={key}>
              <Image src={p.img} alt={''} width={50} height={50} />
              <small className="xs">{p.title}</small>
            </div>
          ))}
      </Link>
    </>
  ) : (
    <section className={`${css.pricePool} ${className}`} id="pricepool">
      <SectionTitle title={'Prize Pool breakdown'}>
        <p>
          <small>The price will be attributed at the end of the Challenge.</small>
        </p>
      </SectionTitle>
      <div className={css.prices}>
        {prizes &&
          prizes.map((p, key) => (
            <div className={css.price} key={key}>
              <Image src={p.img} alt={''} width={250} height={250} />
              <div className={css.texts}>
                <h4>{p.title}</h4>
                <small>{p.desc}</small>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

type MoneyPoolType = {
  total: number;
  breakdown?: {
    first?: number;
    second?: number;
    third?: number;
  };
  className?: string;
};

export function MoneyPool({ total, breakdown, className }: MoneyPoolType) {
  return (
    <div className={`${css.moneyPool} ${className}`}>
      <div className={css.total}>
        <small>Price Pool</small>
        <h3>$ {total?.toFixed(2)}</h3>
      </div>
      {breakdown && (
        <div className={css.breakdown}>
          <small>Breakdown</small>
          <h4>
            1st : <b>$ {breakdown.first?.toFixed(2)}</b>
          </h4>
          <h4>
            2nd : <b>$ {breakdown.second?.toFixed(2)}</b>
          </h4>
          <h4>
            3rd : <b>$ {breakdown.third?.toFixed(2)}</b>
          </h4>
        </div>
      )}
    </div>
  );
}
