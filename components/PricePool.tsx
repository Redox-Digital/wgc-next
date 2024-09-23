import css from './PricePool.module.scss';
import Image from 'next/image';

type Props = {
  alt?: boolean;
};

export default function PricePool({ alt }: Props) {
  const prices = [
    { img: '/layouts/polo1.webp', title: 'Price Title', desc: 'Price Description' },
    { img: '/layouts/polo2.webp', title: 'Price Title', desc: 'Price Description' },
    { img: '/layouts/hat.webp', title: 'Price Title', desc: 'Price Description' },
  ];
  return (
    <section className={`${css.pricePool} ${alt && css.alt}`}>
      <h3>Price pool</h3>
      <div className={css.prices}>
        {prices.map((p, key) => (
          <div className={css.price} key={key}>
            <Image src={p.img} alt={''} width={250} height={250} />
            <div className={css.texts}>
              <b>{p.title}</b>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
