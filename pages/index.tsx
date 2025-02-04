import Hero from '@/components/layouts/Hero';
import css from './Clubhouse.module.scss';
import SponsorsSection from '@/components/layouts/SponsorsSection';
import CTA from '@/components/navigation/CTA';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import YourChallengeFAB from '@/components/navigation/YourChallengeFAB';
import NextChallengeSection from '@/components/layouts/NextChallengesSection';
import { dummyLeaderboard } from '@/constants/DummyData';
import { Podium } from '@/components/layouts/Leaderboard';
import Button from '@/components/navigation/Button';
import { StatBar } from './profile';

const sponsors: Sponsor[] = [
  {
    name: 'Extracurricular',
    img: '/layouts/clubhouse/sponsors/sponsor_excr.png',
    runningChallenge: 2,
    url: '/extracurricular',
  },
  {
    name: 'Coca Cola',
    img: '/layouts/clubhouse/sponsors/sponsor_coca.png',
    runningChallenge: 4,
    url: '/extracurricular',
  },
  {
    name: 'TaylorMade',
    img: '/layouts/clubhouse/sponsors/sponsor_taylormade.png',
    runningChallenge: 0,
    url: '/extracurricular',
  },
  {
    name: '4Aces',
    img: '/layouts/clubhouse/sponsors/sponsor_4aces.png',
    runningChallenge: 2,
    url: '/extracurricular',
  },
  {
    name: 'Bridgestone',
    img: '/layouts/clubhouse/sponsors/sponsor_bridgestone.png',
    runningChallenge: 2,
    url: '/extracurricular',
  },
];

export default function Clubhouse() {
  // DEV
  const [logged, setLogged] = useState<boolean>(true);
  const [yourChallengeModal, setModal] = useState<boolean>(false);

  return (
    <>
      <ChangeBackgroundColor color="#002F18" />
      {logged ? (
        <Hero
          title={
            <>
              Welcome back,&nbsp;
              <br />
              Jonas Jaeggi
            </>
          }
          gradient
        >
          <p>
            Nice to see you on your favorite golf platform!
            <br />
            What do you want to do today ?
          </p>
          <div className={css.heroBtns}>
            <Button href={'/challenges'} darkBg>
              Join a Challenge
            </Button>
            {/* Opens "Your Challenges Modal" */}
            <Button onClick={() => setModal(!yourChallengeModal)} outline darkBg>
              Enter a score
            </Button>
            <Button href={'/profile'} outline darkBg>
              Check your profile
            </Button>
          </div>
          <StatBar
            elements={[
              { name: 'Joined Challenges', value: 2 },
              { name: 'Ongoing Challenges', value: 13 },
              { name: 'Monthly rank', value: '#4' },
            ]}
            className={css.userStatBar}
          />
        </Hero>
      ) : (
        <Hero title={<>Playing golf physically while competing digitally</>} gradient>
          <p>
            Welcome to your favorite golf platform!
            <br />
            What do you want to do today ?
          </p>
          <div className={css.heroBtns}>
            <Button href={'/profile/login'} darkBg>
              Login
            </Button>
            <Button href={'/profile/create'} outline darkBg>
              Create an account
            </Button>
            <Button href={'/support'} outline darkBg>
              How to play
            </Button>
          </div>
        </Hero>
      )}

      <main className={css.clubhouse}>
        <SponsorsSection sponsors={sponsors} />
        <NextChallengeSection />
      </main>

      <Podium
        title="Players of the month"
        description="Placement resets on the 1st day of each month."
        first={dummyLeaderboard[0]}
        second={dummyLeaderboard[1]}
        third={dummyLeaderboard[2]}
        btn={{ link: '/leaderboards', label: 'All leaderboards' }}
      />

      <section className={css.ctaSct}>
        <CTA
          title={'Challenge your friends!'}
          description={<p>Create one and invite your friends to start playing!</p>}
          btnLabel={'Create private Challenge'}
          href={'/private/create'}
          img={'/layouts/clubhouse/private-cta.webp'}
          opacity={0.3}
        />
        <CTA
          title={'How to play'}
          description={<p>Playing golf physically while competing digitally.</p>}
          btnLabel={'Learn how to play'}
          href={'/support'}
          img={'/layouts/clubhouse/wgc-how-to.jpg'}
          opacity={0.15}
        />
      </section>

      <section className={css.logoSct}>
        <Image src="/logos/wgc-text.svg" alt="" fill />
      </section>

      <YourChallengeFAB
        toggleModal={() => setModal(!yourChallengeModal)}
        modalOpen={yourChallengeModal}
      />
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
