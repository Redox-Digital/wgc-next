import css from './PricePool.module.scss';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import Button from '../navigation/Button';
import Link from 'next/link';

type Props = {
  amount?: number;
  prizes?: PriceType[];
  preview?: boolean;
  className?: string;
};

export default function PricePool({ preview, prizes, className }: Props) {
  return preview ? (
    <>
      <Link
        href="#pricepool"
        className={`${css.pricesPreview} ${className}`}
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

export function MoneyPool({ amount, className }: Props) {
  return (
    <div className={`${css.moneyPool} ${className}`}>
      <small>Price Pool</small>
      <h3>$ {amount?.toFixed(2)}</h3>
    </div>
  );
}
