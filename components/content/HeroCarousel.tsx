import css from './HeroCarousel.module.scss';
import Image from 'next/image';

type FuturePriceType = { title: string; url: string };
type Props = {
  prices: FuturePriceType[];
};

export default function HeroCarousel({ prices }: Props) {
  return (
    <div className={css.heroCarousel}>
      <h4>Upcoming Challenges</h4>

      <div className={css.carousel}>
        {prices.map((price, index) => (
          <div key={index} className={css.priceItem}>
            <Image src={price.url} alt={price.title} width={200} height={200} />
            <small>
              <b>{price.title}</b>
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
