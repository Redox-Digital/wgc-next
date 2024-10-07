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
import YourChallengeCTA from '@/components/navigation/YourChallengeCTA';

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

  const challenges: ChallengeType[] = [
    {
      url: 'https://worldgolfchallenge-test.azurewebsites.net/lobby/3384',
      img: '/logos/logo_excr.svg',
      title: 'EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'single',
      currentPlayers: 11,
    },
    {
      url: 'https://worldgolfchallenge-test.azurewebsites.net/lobby/3384',
      img: '/logos/logo_excr.svg',
      title: 'EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'up to 18',
      currentPlayers: 8,
    },
    {
      url: 'https://worldgolfchallenge-test.azurewebsites.net/lobby/3384',
      img: '/logos/logo_excr.svg',
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
        <meta
          name="keywords"
          content="golf, challenge, golf course, golf challenge, extracurricular"
        />
        <meta
          name="description"
          content="Playing golf physically while competing digitally, Extracurricular Prices to reward you!"
        />
        <meta name="author" content="Redox Digital" />
        <meta property="og:title" content="EXTRACURRICULAR x World Golf Challenge" />
        <meta
          property="og:description"
          content="Playing golf physically while competing digitally, Extracurricular Prices to reward you!"
        />
        <meta property="og:image" content={`https://wgc.rdox.ch/socials/social_thumbnail.jpg`} />
        {/*<!-- Update domain -->*/}
        <meta property="og:url" content="https://wgc.rdox.ch" /> {/*<!-- Update domain -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EXTRACURRICULAR x World Golf Challenge" />
        <meta
          name="twitter:description"
          content="Playing golf physically while competing digitally, Extracurricular Prices to reward you!"
        />
        <meta name="twitter:image" content={`https://wgc.rdox.ch/socials/social_thumbnail.jpg`} />
        {/*<!-- Update domain -->*/}
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
        source="./layouts/home_hero.webp"
        opacity={0.25}
      />
      <YourChallengeCTA />
      <main className={css.home}>
        <section className={css.ourChallenges}>
          <div className={css.titles}>
            <h2>Our Challenges</h2>
            <p>
              Choose the category that suits you the most and join players from all around the
              world.
            </p>
          </div>
          <div className={css.challenges}>
            {challenges.map((challenge, key) => (
              <Challenge key={key} {...challenge} />
            ))}
          </div>
        </section>

        <PricePool />

        <CardsSection
          title={'The concept'}
          desc={
            'World Golf Challenge is the first digital golf platform enabling all levels of amateur players worldwide to compete in virtual Challenges online while playing on real courses.'
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

        <section className={css.howtoplay}>
          <div className={css.titles}>
            <h2>How to play</h2>
            <p>
              Joining a challenge requires, like World Golf Challenge, some work on your
              phone or computer.
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
