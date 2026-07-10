import css from './HowItWorksSection.module.scss';

type Props = {
  className?: string;
};

export default function HowItWorksSection({ className }: Props) {
  const cards: CardProps[] = [
    {
      number: 1,
      title: 'Register & connect',
      description:
        'Link your golf federation account so your official handicap and scores count automatically.',
    },
    {
      number: 2,
      title: 'Join a global challenge',
      description:
        "Pick an open tournament and you're instantly on the same board as players around the world.",
    },
    {
      number: 3,
      title: 'Play, submit, rank',
      description:
        'Play your round at your local club, submit your score, and watch where you land worldwide.',
    },
  ];
  return (
    <section className={`${css.howToSection} ${className}`}>
      <div className={css.container}>
        <div className={css.titles}>
          <h2>How it works</h2>
          <p>Three steps from your local club to the global standings.</p>
        </div>

        <div className={css.cardsRow}>
          {cards.map((card) => (
            <Card {...card} key={card.number} />
          ))}
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  number: number;
  title: string;
  description: React.ReactNode;
};

function Card({ number, title, description }: CardProps) {
  return (
    <div className={css.card}>
      <span>{number}</span>
      <h3>{title}</h3>
      <small>{description}</small>
    </div>
  );
}
