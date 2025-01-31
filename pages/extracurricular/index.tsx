import css from './Home.module.scss';
import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import Button from '@/components/navigation/Button';
import Link from 'next/link';
import Image from 'next/image';
import PricePool from '@/components/layouts/PricePool';
import Challenge from '@/components/content/Challenge';
import CardsSection from '@/components/layouts/CardsSection';
import YourChallengeCTA from '@/components/navigation/YourChallengeFAB';
import HowToPlaySection from '@/components/layouts/HowToPlaySection';
import CTA from '@/components/navigation/CTA';

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
          <span>
            Playing golf physically&nbsp;
            <br />
            while competing digitally
          </span>
        }
        home
        source="/layouts/home_hero.webp"
        opacity={0.25}
      >
        <p>
          Play in the club of your choice in real life while measuring yourself & your score,
          virtually against any other player in the world!
        </p>
      </Hero>
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

        <HowToPlaySection />
        <CTA
          title={'Look fresh on the greens'}
          description={
            <>
              Elevate your wardrobe by visiting our sponsor&apos;s e-shop, <b>Extracurricular</b>,
              and discover men&apos;s premium golf apparel including polos, hats, shorts, and pants.
            </>
          }
          btnLabel={'The shop'}
          href={'https://ex-cr.com/?utm_source=wgc'}
          btnBlank
          img={'/layouts/home_excr-cta.jpg'}
        ></CTA>
      </main>
    </>
  );
}
