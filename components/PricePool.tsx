import css from './PricePool.module.scss';
import Image from 'next/image';
export default function PricePool() {
  const prices = [
    { img: '/layouts/placeholder2.jpg', title: 'Price Title', desc: 'Price Description' },
    { img: '/layouts/placeholder1.jpg', title: 'Price Title', desc: 'Price Description' },
    { img: '/layouts/placeholder2.jpg', title: 'Price Title', desc: 'Price Description' },
  ];
  return (
    <section className={css.pricePool}>
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
