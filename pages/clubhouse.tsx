import Hero from '@/components/layouts/Hero';
import css from './Clubhouse.module.scss';
import SectionTitle from '@/components/layouts/SectionTitle';
import SponsorsSection from '@/components/layouts/SponsorsSection';
import HowToPlaySection from '@/components/layouts/HowToPlaySection';
import CardsSection from '@/components/layouts/CardsSection';
import ContactCTA from '@/components/content/ContactCTA';
import Button from '@/components/navigation/Button';
import TopPlayers from '@/components/layouts/TopPlayers';
import ChallengeSection from '@/components/layouts/ChallengesSection';
import YourChallengeCTA from '@/components/navigation/YourChallengeCTA';

export default function Clubhouse() {
  const sponsors: Sponsor[] = [
    {
      name: 'Extracurricular',
      img: '/layouts/clubhouse/sponsors/sponsor_excr.png',
      runningChallenge: 2,
      url: 'extracurricular',
    },
    {
      name: 'Coca Cola',
      img: '/layouts/clubhouse/sponsors/sponsor_coca.png',
      runningChallenge: 4,
      url: 'extracurricular',
    },
    {
      name: 'TaylorMade',
      img: '/layouts/clubhouse/sponsors/sponsor_taylormade.png',
      runningChallenge: 0,
      url: 'extracurricular',
    },
    {
      name: '4Aces',
      img: '/layouts/clubhouse/sponsors/sponsor_4aces.png',
      runningChallenge: 2,
      url: 'extracurricular',
    },
    {
      name: 'Bridgestone',
      img: '/layouts/clubhouse/sponsors/sponsor_bridgestone.png',
      runningChallenge: 2,
      url: 'extracurricular',
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
      <Hero
        title={'Playing golf physically while competing digitally'}
        subtitle={''}
        source={'/layouts/clubhouse/clubhouse_hero.jpg'}
      />
      <main>
        <section className={css.introSct}>
          <SectionTitle title="Available challenges">
            <p>E-Meet, compete, and connect with golfers around the globe.</p>
          </SectionTitle>
        </section>
        {sponsors && <SponsorsSection sponsors={sponsors} />}

        <ChallengeSection />
        <CardsSection
          white
          title={'The concept'}
          desc={'World Golf Challenge is golf… just leveled up.'}
          cards={[
            {
              icon: '/pictograms/golf-white.svg',
              title: 'Join a Challenge',
              desc: 'Any day, choose a Challenge on the screen',
            },
            {
              icon: '/pictograms/genders.svg',
              title: 'Go out, play golf',
              desc: 'Real action on the greens',
            },
            {
              icon: '/pictograms/gift.svg',
              title: 'Enter your score & win',
              desc: 'Lots of fun and great prizes',
            },
            {
              icon: '/pictograms/gift.svg',
              title: 'Pay for your Challenge',
              desc: 'Easy & secure payments with Paypal',
            },
          ]}
        />
        <HowToPlaySection />
        <ContactCTA
          title="Challenge your friends!"
          img={'/layouts/clubhouse/private_cta.webp'}
          altBackground
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis, tellus eget
            accumsan lacinia, ipsum felis finibus erat, at pharetra nulla lacus sed leo. Curabitur
            at risus diam.
          </p>
          <Button to="/create-private">Create your own Challenge</Button>
        </ContactCTA>
        <TopPlayers first={topPlayers[0]} second={topPlayers[1]} third={topPlayers[2]} />
        <YourChallengeCTA />
      </main>
    </>
  );
}
