import css from './HowToPlaySection.module.scss';
import SectionTitle from './SectionTitle';

export default function HowToPlaySection() {
  const howToSteps: { title: string; desc: string }[] = [
    /* { title: 'At your golf club 🏡⛳', desc: '✏️ Register to WGC Tournament' },*/
    {
      title: 'On www.wgc.gg 📲💻 ',
      desc: '📝 Create a free account online ✏️ Join for free the Challenge in your handicap category',
    },
    {
      title: 'On the golf course 🏡⛳',
      desc: '🏌 Have fun playing Extracurricular Challenge 18 holes Net Stableford',
    },
    {
      title: 'On www.wgc.gg 📲💻',
      desc: '✏️ Enter your score on www.wgc.gg after your round, the same day you played before 10pm CT🕙',
    },
    {
      title: 'On www.wgc.gg 📲💻',
      desc: '🏆 Check the Leaderboard section and wait until the Extracurricular Challenge is finished (10pm / Oct 24th) to see your final position',
    },
  ];

  return (
    <section className={css.howtoplay}>
      <SectionTitle title="How to play">
        <p>
          Joining a challenge requires, like World Golf Challenge, some work on your
          phone or computer.
        </p>
      </SectionTitle>
      <ol>
        {howToSteps.map((step, key) => (
          <li key={key}>
            <b>{step.title}</b>
            <span>{step.desc}</span>
          </li>
        ))}
      </ol>
      <div className={css.steps}>
        <div className={css.row}></div>
      </div>
    </section>
  );
}
