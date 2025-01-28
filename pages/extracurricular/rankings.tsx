import ContactCTA from '@/components/content/ContactCTA';
import css from './Rankings.module.scss';
import Hero from '@/components/layouts/Hero';
import { RankingsWithPrices } from '@/components/layouts/Rankings';
import CardsSection from '@/components/layouts/CardsSection';
import Head from 'next/head';
import Button from '@/components/navigation/Button';
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
          img="/layouts/clubhouse/private_cta.webp"
          altBackground
          title={<>Do you want more&nbsp;?</>}
        >
          <p>
            More Free and Buy-in Challenges available on wgc.gg & your own Challenges with friends,
            clients, club members to create!
          </p>
          <Button href={'https://wgc.gg'} blank>
            Visit wgc.gg
          </Button>
        </ContactCTA>
      </main>
    </>
  );
}
