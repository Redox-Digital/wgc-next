import css from './CardsSection.module.scss';

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
            <i className={css.icon}>{card.icon}</i>
            <b>{card.title}</b>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
