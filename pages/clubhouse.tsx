import Hero from '@/components/layouts/Hero';
import css from './Clubhouse.module.scss';
import SponsorsSection from '@/components/layouts/SponsorsSection';
import CTA from '@/components/navigation/CTA';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import YourChallengeFAB from '@/components/navigation/YourChallengeFAB';
import NextChallengeSection from '@/components/layouts/NextChallengesSection';
import { dummyLeaderboard, dummySponsors } from '@/constants/DummyData';
import Leaderboard from '@/components/layouts/Leaderboard';
import Button from '@/components/navigation/Button';
import StatBar from '@/components/content/StatBar';

const sponsors: Sponsor[] = dummySponsors;

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
            <Button href={'/private/create/'} outline darkBg>
              Create your own Challenge
            </Button>
          </div>
          <StatBar
            elements={[
              { name: 'HCP', value: '16.0' },
              { name: 'Ongoing Challenges', value: 13 }, // Active Challenge in total
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

      <Leaderboard
        title={'Players of the month'}
        description="Placement resets on the 1st day of each month."
        players={dummyLeaderboard.slice(0, 3)}
        btn={{ link: '/leaderboards', label: 'All leaderboards' }}
        ongoing
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
