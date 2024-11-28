import css from './CardsSection.module.scss';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

type Props = {
  title: string;
  desc: string;
  cards: { icon: string; title: string; desc: string }[];
  white?: boolean;
};

export default function CardsSection({ title, desc, cards, white }: Props) {
  return (
    <section className={`${css.section} ${white && css.white}`}>
      <SectionTitle title={title}>
        <p>{desc}</p>
      </SectionTitle>
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
