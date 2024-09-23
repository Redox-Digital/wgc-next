import css from './CardsSection.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  desc: string;
  cards: { icon: string; title: string; desc: string }[];
};

export default function CardsSection({ title, desc, cards }: Props) {
  return (
    <section className={css.section}>
      <div className={css.titles}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className={css.cards}>
        {cards.map((card, key) => (
          <div className={css.card} key={key}>
            <Image className={css.icon} src={card.icon} alt={''} width={40} height={40} />

            <b>{card.title}</b>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
