import css from './PricePool.module.scss';
import Image from 'next/image';

type Props = {
  alt?: boolean;
  moneyPool?: boolean;
};

export default function PricePool({ alt, moneyPool }: Props) {
  const prices = [
    {
      img: '/layouts/excr/WGC-EXCR_price_1000.png',
      title: '1,000 $ GIFT CARD',
      desc: 'Price Description',
    },
    {
      img: '/layouts/excr/WGC-EXCR_price_500.png',
      title: '500 $ GIFT CARD',
      desc: 'Price Description',
    },
    {
      img: '/layouts/excr/WGC-EXCR_price_250.png',
      title: '250 $ GIFT CARD',
      desc: 'Price Description',
    },
    {
      img: '/layouts/excr/WGC-EXCR_price_50percents.png',
      title: '50% OFF GIFT CARD',
      desc: 'For every participant!',
    },
  ];

  return moneyPool ? (
    <>
      <div className={css.moneyPool}>
        <small>Price Pool</small>
        <h3>$ 102.00</h3>
      </div>
      <small>The price will be attributed at the end of the Challenge.</small>
    </>
  ) : (
    <section className={`${css.pricePool} ${alt && css.alt}`} id="pricepool">
      <h3>Price pool</h3>
      <div className={css.prices}>
        {moneyPool ? (
          <div className={css.price}>
            <h4>100$</h4>
            <p>The price will be attributed at the end of the Challenge.</p>
          </div>
        ) : (
          prices.map((p, key) => (
            <div className={css.price} key={key}>
              <Image src={p.img} alt={''} width={250} height={250} />
              <div className={css.texts}>
                <b>{p.title}</b>
                <p>{p.desc}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
