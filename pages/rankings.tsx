import ContactCTA from '@/components/ContactCTA';
import css from './Rankings.module.scss';
import Hero from '@/components/Hero';
import { RankingsWithPrices } from '@/components/Rankings';
import CardsSection from '@/components/CardsSection';
import Head from 'next/head';
export default function Rankings() {
  return (
    <>
      <Head>
        <title>Rankings | EXTRACURRICULAR x WGC</title>
      </Head>
      <Hero
        title={'And the winner is...'}
        subtitle={''}
        source={'/layouts/rankings_hero.webp'}
        opacity={0.3}
      />
      <main>
        <section className={css.results}>
          <div className={css.titles}>
            <h2>The results</h2>
            <p>Congratulations for playing!</p>
          </div>
          <div className={css.tables}>
            <RankingsWithPrices />
            <RankingsWithPrices />
            <RankingsWithPrices />
          </div>
        </section>
        <CardsSection
          title={'Redeem your prize'}
          desc={''}
          cards={[
            {
              icon: '/pictograms/golf-white.svg',
              title: 'Net Stableford, 18 holes',
              desc: 'Pick any course in the world & adjust your strokes. Only Net Stableford counts.',
            },
            {
              icon: '/pictograms/genders.svg',
              title: 'Only HCP matters',
              desc: 'Gender and age mixed into 3 different categories : Single / HCP 10 to 18 / HCP +18',
            },
            {
              icon: '/pictograms/gift.svg',
              title: 'A. lot. of. prizes.',
              desc: 'Extracurricular Prices to reward you - we will get in touch!',
            },
          ]}
        />
        <ContactCTA
          img="/layouts/contact-cta.webp"
          title={<>Do you want more&nbsp;?</>}
          desc="More Free and Buy-in Challenges available on wgc.gg & your own Challenges with friends, clients, club members to create!"
          btnLabel="Visit wgc.gg"
          btnLink="https://wgc.gg"
        />
      </main>
    </>
  );
}
