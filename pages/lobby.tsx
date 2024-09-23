import ContactCTA from '@/components/ContactCTA';
import css from './Lobby.module.scss';
import Hero from '@/components/Hero';
import PricePool from '@/components/PricePool';
export default function Lobby() {
  return (
    <>
      <Hero
        title={'EXTRACURRICULAR - HCP Single'}
        subtitle={'Net Stableford - 18 Holes - Ongoing'}
        source={'/layouts/placeholder2.jpg'}
        opacity={0.4}
      />
      <main>
        <PricePool alt />
        <ContactCTA />
      </main>
    </>
  );
}
