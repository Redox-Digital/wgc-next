import css from './PricePool.module.scss';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

type Props = {
  moneyPool?: boolean;
};

export default function PricePool({ moneyPool }: Props) {
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
    <section className={css.pricePool} id="pricepool">
      <SectionTitle title={'Prize Pool break-down'}>
        <p>
          <small>The price will be attributed at the end of the Challenge.</small>
        </p>
      </SectionTitle>
      <div className={css.prices}>
        {prices.map((p, key) => (
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
