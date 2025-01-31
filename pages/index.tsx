import Hero from '@/components/layouts/Hero';
import css from './Clubhouse.module.scss';
import SponsorsSection from '@/components/layouts/SponsorsSection';
import TopPlayers from '@/components/layouts/TopPlayers';
import CTA from '@/components/navigation/CTA';
import Image from 'next/image';
import { useEffect } from 'react';
import YourChallengeFAB from '@/components/navigation/YourChallengeFAB';
import NextChallengeSection from '@/components/layouts/NextChallengesSection';

export default function Clubhouse() {
  const sponsors: Sponsor[] = [
    {
      name: 'Extracurricular',
      img: '/layouts/clubhouse/sponsors/sponsor_excr.png',
      runningChallenge: 2,
      url: '/lobby', // TBD
    },
    {
      name: 'Coca Cola',
      img: '/layouts/clubhouse/sponsors/sponsor_coca.png',
      runningChallenge: 4,
      url: '/lobby', // TBD
    },
    {
      name: 'TaylorMade',
      img: '/layouts/clubhouse/sponsors/sponsor_taylormade.png',
      runningChallenge: 0,
      url: '/lobby', // TBD
    },
    {
      name: '4Aces',
      img: '/layouts/clubhouse/sponsors/sponsor_4aces.png',
      runningChallenge: 2,
      url: '/lobby', // TBD
    },
    {
      name: 'Bridgestone',
      img: '/layouts/clubhouse/sponsors/sponsor_bridgestone.png',
      runningChallenge: 2,
      url: '/lobby', // TBD
    },
  ];

  const topPlayers: Player[] = [
    {
      name: 'J. Jaeggi',
      flag: '🇨🇭',
      pointsScored: 245,
      challengesWon: 3,
      moneyWon: 324,
      img: 'https://images.unsplash.com/photo-1494249120761-ea1225b46c05?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'A. Frischknecht',
      flag: '🇮🇸',
      pointsScored: 239,
      challengesWon: 1,
      moneyWon: 243,
      img: 'https://images.unsplash.com/photo-1671081904436-56b1b5c87f62?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'B. Anders',
      flag: '🇸🇪',
      pointsScored: 123,
      challengesWon: 2,
      moneyWon: 67,
      img: 'https://images.unsplash.com/photo-1593282153762-a41e3cceb06c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <>
      <ChangeBackgroundColor color="#002F18" />
      <Hero
        title={'Playing golf physically while competing digitally'}
        source={'/layouts/clubhouse/clubhouse_hero.jpg'}
        btns={[
          { text: 'Login', href: '/profile/login', plain: true },
          { text: 'Create an account', href: '/profile/create' },
          { text: 'How to play', href: '/support' },
        ]}
      >
        <p>Welcome to your favorite golf platform!</p>
        <p>What do you want to do today ?</p>
      </Hero>
      <main className={css.clubhouse}>
        <SponsorsSection sponsors={sponsors} />

        <NextChallengeSection />
      </main>

      <TopPlayers first={topPlayers[0]} second={topPlayers[1]} third={topPlayers[2]} />

      <section className={css.ctaSct}>
        <CTA
          title={'Challenge your friends!'}
          description={'Create one and invite your friends to start playing!'}
          btnLabel={'Create Private Challenge'}
          href={'/private/create'}
          img={'/layouts/clubhouse/private-cta.webp'}
          opacity={0.3}
        />
        <CTA
          title={'How to play'}
          description={'Playing golf physically while competing digitally.'}
          btnLabel={'Learn how to play'}
          href={'/support'}
          img={'/layouts/clubhouse/wgc-how-to.jpg'}
          opacity={0.15}
        />
      </section>

      <section className={css.logoSct}>
        <Image src="/logos/wgc-text.svg" alt="" fill />
      </section>

      <YourChallengeFAB />
    </>
  );
}

type ColorProps = {
  color: string;
};

// Weird function, but working. It changes the background color of the page.
export function ChangeBackgroundColor({ color }: ColorProps) {
  useEffect(() => {
    document.body.style.backgroundColor = color;

    // Cleanup function to reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  return null;
}
