import css from './Home.module.scss';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Button from '@/components/navigation/Button';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';
import Image from 'next/image';
import PricePool from '@/components/PricePool';
import Challenge from '@/components/Challenge';
import CardsSection from '@/components/CardsSection';

type ChallengeType = {
  url: string;
  img: string;
  title: string;
  dates: string;
  gameType: string;
  hcp: string;
  price?: number;
  currentPlayers: number;
};

export default function Home() {
  const howToSteps: { title: string; desc: string }[] = [
    { title: 'At your golf club 🏡⛳', desc: '✏️ Register to WGC Tournament' },
    {
      title: 'On www.wgc.gg 📲💻 ',
      desc: '📝 Create a free account online ✏️ Join for free the Challenge in your category of the date 📆 you are physically playing the WGC Tournament',
    },
    {
      title: 'At your golf club 🏡⛳',
      desc: '🏌 Have fun playing WGC Tournament 18 holes Net Stableford',
    },
    {
      title: 'On www.wgc.gg 📲💻',
      desc: '✏️ Enter your score on 📲 💻 www.wgc.gg after your round, the same day you played before 10pm CET🕙',
    },
    {
      title: 'On www.wgc.gg 📲💻',
      desc: '🏆 Check the Leaderboard section and wait until the WGC Tournament is finished (10pm / Aug 21st) to see your final position',
    },
  ];

  const challenges: ChallengeType[] = [
    {
      url: 'https://worldgolfchallenge-test.azurewebsites.net/lobby/3384',
      img: '/layouts/placeholder1.jpg',
      title: 'EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'single',
      currentPlayers: 11,
    },
    {
      url: 'https://worldgolfchallenge-test.azurewebsites.net/lobby/3384',
      img: '/logos/logoipsum.svg',
      title: 'EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'up to 18',
      currentPlayers: 8,
    },
    {
      url: 'https://worldgolfchallenge-test.azurewebsites.net/lobby/3384',
      img: '/layouts/placeholder1.jpg',
      title: 'EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'up to 54',
      currentPlayers: 0,
    },
  ];

  return (
    <>
      <Head>
        <title>EXTRACURRICULAR x WGC | Welcome</title>
      </Head>

      <Hero
        title={
          <>
            Playing golf physically&nbsp;
            <br />
            while competing digitally
          </>
        }
        home
        subtitle="Play in the club of your choice in real life while measuring yourself & your score, virtually against any other player in the world!"
        source="./layouts/placeholder1.jpg"
        opacity={0.4}
      />
      <main className={css.home}>
        <CardsSection
          title={'The concept'}
          desc={
            'World Golf Challenge is the first digital golf platform enabling all levels of amateurs players worldwide to compete in virtual Challenges online while playing on real courses.'
          }
          cards={[
            {
              icon: '/pictograms/clipboard.svg',
              title: 'Join a Challenge',
              desc: 'Any day, choose a Challenge on the screen',
            },
            {
              icon: '/pictograms/golf-white.svg',
              title: 'Go out, play golf',
              desc: 'Real action on the greens',
            },
            {
              icon: '/pictograms/pen.svg',
              title: 'Enter your score & win',
              desc: 'Lots of fun and great prizes',
            },
          ]}
        />

        <PricePool />

        <section className={css.ourChallenges}>
          <div className={css.titles}>
            <h2>Our Challenges</h2>
            <p>
              Choose the category that suits you the most and join our tournament against players
              from all around the world.
            </p>
          </div>
          <div className={css.challenges}>
            {challenges.map((challenge, key) => (
              <Challenge key={key} {...challenge} />
            ))}
          </div>
        </section>

        <section className={css.howtoplay}>
          <div className={css.titles}>
            <h2>How to play</h2>
            <p>
              Joining a challenge requires, like World Golf Challenge, some work in your Golf Club,
              and some work on your phone or computer.
            </p>
          </div>
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
      </main>
    </>
  );
}
