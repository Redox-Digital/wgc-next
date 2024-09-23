import ContactCTA from '@/components/ContactCTA';
import css from './Rankings.module.scss';
import Hero from '@/components/Hero';
import { RankingsWithPrices } from '@/components/Rankings';
import CardsSection from '@/components/CardsSection';
export default function Rankings() {
  return (
    <>
      <Hero
        title={'And the winner is...'}
        subtitle={''}
        source={'/layouts/placeholder1.jpg'}
        opacity={0.4}
      />
      <main>
        <section className={css.results}>
          <div className={css.titles}>
            <h2>The results</h2>
            <p>Congratulation for participating!</p>
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
              desc: 'Over 60 prices to reward you - including golf trip, watches, golf gears and more!',
            },
          ]}
        />
        <ContactCTA />
      </main>
    </>
  );
}
