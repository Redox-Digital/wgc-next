import css from './SponsoredPages.module.scss';
import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import PricePool from '@/components/layouts/PricePool';
import CTA from '@/components/navigation/CTA';
import SectionTitle from '@/components/layouts/SectionTitle';
import ChallengePreview from '@/components/content/ChallengePreview';
import { ChangeBackgroundColor } from '../clubhouse';
import Button from '@/components/navigation/Button';
import SponsoredPricesPreview from '@/components/content/SponsoredPricesPreview';

export default function SponsoredClubhouse() {
  const challenges: ChallengePreview[] = [
    {
      url: '/extracurricular/lobby',
      img: '/logos/logo_excr.svg',
      name: 'Spring Challenge - EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'single',
      players: 11,
      id: 0,
      pool: 0,
      fee: 0,
    },
    {
      url: '/extracurricular/lobby',
      img: '/logos/logo_excr.svg',
      name: 'Spring Challenge - EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'up to 18',
      players: 8,
      id: 1,
      pool: 0,
      fee: 0,
    },
    {
      url: '/extracurricular/lobby',
      img: '/logos/logo_excr.svg',
      name: 'Spring Challenge - EXTRACURRICULAR',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'up to 54',
      players: 0,
      id: 2,
      pool: 0,
      fee: 0,
    },
  ];

  const prices: { title: string; url: string }[] = [
    { title: 'Extracurricular Cap', url: '/layouts/excr/prices/hat.webp' },
    { title: '50%-Off Gift Card', url: '/layouts/excr/prices/WGC-EXCR_price_50percents.png' },

    { title: 'Extracurricular Polo Shirt', url: '/layouts/excr/prices/polo1.webp' },
    { title: '1000$ Gift Card', url: '/layouts/excr/prices/WGC-EXCR_price_1000.png' },
    { title: 'Extracurricular Polo Shirt', url: '/layouts/excr/prices/polo2.webp' },
  ];

  return (
    <>
      <style jsx global>
        {`
          * {
            /* Overwriting Color Variables to fit the Sponsor's Identity */
            --black: #0d1720;
            --black-rgb: 13, 23, 32;
            --primary: #252c32;
            --primary-rgb: 27, 44, 50;
            --accent: #d9e3f2;
            --accent-rgb: 217, 227, 242;
          }
        `}
      </style>
      <Head>
        <title>EXTRACURRICULAR x WGC | Welcome</title>
        <link type="image/svg+xml" href="/logos/favicon_excr.svg" />
      </Head>
      {/* Insert below the hex code of the PRIMARY color */}
      <ChangeBackgroundColor color="var(--primary)" />

      <Hero
        title={
          <span>
            Playing golf physically&nbsp;
            <br />
            while competing digitally
          </span>
        }
        gradient
      >
        <p>
          Play in the club of your choice in real life while measuring yourself & your score,
          virtually against any other player in the world!
        </p>
      </Hero>

      <main className={css.clubhouse}>
        <SectionTitle title={'Our Challenges'}>
          <p>
            Choose the category that suits you the most and join players from all around the world.
          </p>
        </SectionTitle>
        <div className={css.challenges}>
          {challenges.map((c, key) => (
            <ChallengePreview key={key} {...c} />
          ))}
        </div>

        <SponsoredPricesPreview prices={prices} />
      </main>

      <section className={css.homeCTAs}>
        <CTA
          title={'How to play'}
          description={<p>Playing golf physically while competing digitally.</p>}
          btnLabel={'Learn how to play'}
          href={'/support'}
          img={'/layouts/clubhouse/wgc-how-to.jpg'}
          opacity={0.15}
        />
        <CTA
          title={'Look fresh on the greens'}
          description={
            <p>
              Elevate your wardrobe by visiting our sponsor&apos;s e-shop, <b>Extracurricular</b>,
              and discover men&apos;s premium golf apparel including polos, hats, shorts, and pants.
            </p>
          }
          btnLabel={'The shop'}
          href={'https://ex-cr.com/?utm_source=wgc'}
          btnBlank
          img={'/sponsors/4Aces/4Aces_landing_cta.webp'}
          opacity={0.4}
        />
      </section>
    </>
  );
}
