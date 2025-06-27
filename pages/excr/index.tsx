import css from '../extracurricular/SponsoredPages.module.scss';
import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import PricePool from '@/components/layouts/PricePool';
import CTA from '@/components/navigation/CTA';
import SectionTitle from '@/components/layouts/SectionTitle';
import ChallengePreview from '@/components/content/ChallengePreview';
import { ChangeBackgroundColor } from '../clubhouse';
import SponsoredPricesPreview from '@/components/content/SponsoredPricesPreview';

export default function SponsoredClubhouse() {
  const challenges: ChallengePreview[] = [
    {
      url: '/extracurricular/lobby',
      img: '/sponsors/EXCR/EXCR_4thJuly/excr_challenge_4thjuly.svg',
      name: 'EXCR Independence Day Challenge',
      dates: 'Jul. 4th to 6th',
      gameType: 'Net Strableford',
      hcp: 'single',
      players: 11,
      id: 0,
      pool: 0,
      fee: 0,
    },
    {
      url: '/extracurricular/lobby',
      img: '/sponsors/EXCR/EXCR_4thJuly/excr_challenge_4thjuly.svg',
      name: 'EXCR Independence Day Challenge',
      dates: 'Jul. 4th to 6th',
      gameType: 'Net Strableford',
      hcp: 'up to 18',
      players: 8,
      id: 1,
      pool: 0,
      fee: 0,
    },
    {
      url: '/extracurricular/lobby',
      img: '/sponsors/EXCR/EXCR_4thJuly/excr_challenge_4thjuly.svg',
      name: 'EXCR Independence Day Challenge',
      dates: 'Jul. 4th to 6th',
      gameType: 'Net Strableford',
      hcp: 'up to 54',
      players: 0,
      id: 2,
      pool: 0,
      fee: 0,
    },
  ];

  const prices: { title: string; url: string }[] = [
    { title: '$350 Gift Card', url: '/sponsors/EXCR/EXCR_4thJuly/WGC_EXCR_1stPrice.png' },
    { title: '$250 Gift Card', url: '/sponsors/EXCR/EXCR_4thJuly/WGC_EXCR_2ndPrice.png' },
    { title: '$150 Gift Card', url: '/sponsors/EXCR/EXCR_4thJuly/WGC_EXCR_3rdPrice.png' },
    {
      title: '30%-Off Gift Card',
      url: '/sponsors/EXCR/EXCR_4thJuly/WGC_EXCR_ParticipantPrice.png',
    },
    {
      title: 'Exclusive Taylormade Golf Bag',
      url: '/sponsors/EXCR/EXCR_4thJuly/WGC_EXCR_BonusPrice.png',
    },
  ];

  return (
    <>
      <style jsx global>
        {
          `
            * {
              /* Overwriting Color Variables to fit the Sponsor's Identity */
              --black: #000;
              --black-rgb: 0, 0, 0;
              --dark: rgb(40, 47, 66);
              --dark-rgb: 40, 47, 66;
              --primary: rgb(24, 49, 98);
              --primary-rgb: 24, 49, 98;
              --accent: rgb(74, 185, 255);
              --accent-rgb: 74, 185, 255;
            }
          ` /*`
           {
            --black: #000;
            --black-rgb: 0, 0, 0;
            --dark: rgb(31, 0, 74);
            --dark-rgb: 31, 0, 74;
            --primary: rgb(11, 210, 211);
            --primary-rgb: 11, 210, 211;
            --accent: rgb(255, 179, 242);
            --accent-rgb: 255, 179, 242;
          }
        `*/
        }
      </style>
      <Head>
        <title>EXCR x WGC | Welcome</title>
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
          title={'Celebrate Independence Day with Golf & Gear'}
          description={
            <p>
              Elevate your wardrobe by visiting our sponsor&apos;s e-shop, <b>Extracurricular</b>,
              and discover men&apos;s premium golf apparel including polos, hats, shorts, and pants.
            </p>
          }
          btnLabel={'The shop'}
          href={'https://ex-cr.com/?utm_source=wgc'}
          btnBlank
          img={'/sponsors/EXCR/excr_landing_cta.webp'}
          opacity={0.9}
        />
      </section>
    </>
  );
}
