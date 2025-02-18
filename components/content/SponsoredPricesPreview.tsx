import SectionTitle from '../layouts/SectionTitle';
import css from './SponsoredPricesPreview.module.scss';
import Image from 'next/image';

type Props = {
  prices: { title: string; url: string }[];
};

export default function SponsoredPricesPreview({ prices }: Props) {
  return (
    <section className={css.section}>
      <SectionTitle title={'Play golf, win prizes...'} className={css.title}>
        <p>The more you play, the greater are your chances to win some amazing goodies.</p>
      </SectionTitle>

      <div className={css.prices}>
        {/* Only selects 5 elements */}
        {prices.slice(0, 5).map((price, key) => (
          <Image
            key={key}
            src={price.url}
            alt={price.title}
            title={price.title}
            height={100}
            width={200}
          />
        ))}
        <h3>and many more...</h3>
      </div>
    </section>
  );
}
