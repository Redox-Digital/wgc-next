import Hero, { EventHero } from '@/components/layouts/Hero';
import css from './Clubhouse.module.scss';
import SponsorsSection from '@/components/layouts/SponsorsSection';
import CTA from '@/components/navigation/CTA';
import { useState } from 'react';
import YourChallengeFAB from '@/components/navigation/YourChallengeFAB';
import NextChallengeSection from '@/components/layouts/NextChallengesSection';
import { dummySponsors } from '@/constants/DummyData';
import Button from '@/components/navigation/Button';
import LogoSct from '@/components/content/LogoSct';
import CtaRow from '@/components/navigation/CtaRow';
import TextImgSection from '@/components/layouts/TextImgSection';
import { ChangeBackgroundColor } from '@/utils/changePageSettings';

const sponsors: Sponsor[] = dummySponsors;

export default function Clubhouse() {
  // DEV
  const [logged, setLogged] = useState<boolean>(true);
  const [yourChallengeModal, setModal] = useState<boolean>(false);

  return (
    <>
      <ChangeBackgroundColor color="var(--primary)" gradientBg />

      {/* DEV: Removing default Hero for JD x 4Aces Challenge
      
      logged ? (
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
      ) */}

      <EventHero
        title="Play golf, win big"
        description={
          <p>
            Join the exclusive <b>Jaquet Droz Challenge</b> to win a unique timepiece worth{' '}
            <b>€300’000.-</b> and <b>LIV Golf Pro-Am spots</b>.
          </p>
        }
        actions={[
          {
            label: 'The Jaquet Droz Challenge',
            href: '/jaquet-droz/',
          },
        ]}
        image={{ src: '/sponsors/JaquetDroz/JD-01-detour-zoomed.png' }}
        mainSponsor={{
          src: '/sponsors/JaquetDroz/blocmarque-BGUG_white.svg',
          alt: 'BLUEGREEN & UGOLF',
        }}
      />

      <main className={css.clubhouse}>
        <SponsorsSection sponsors={sponsors} />
        <NextChallengeSection />
        <CtaRow />
      </main>

      <TextImgSection img={'/layouts/clubhouse/wgc-the-best-cta.jpg'}>
        <>
          <h2>Challenge the legends, take on the world.</h2>
          <p>
            Join the international leaderboard and compete against the best in your category. Your
            official score may be all that separates you from Valderrama.
          </p>
          {/* DEV : If user not logged in, Register Page, if logged in -> Lobby */}
          <div className={css.textImgBtns}>
            {' '}
            {logged ? (
              <Button href="/jaquet-droz/">The Jaquet Droz Challenge</Button>
            ) : (
              <>
                <Button href="/profile/login">Sign in</Button>
                <Button href="/jaquet-droz/" outline darkBg>
                  The Jaquet Droz Challenge
                </Button>
              </>
            )}
          </div>
        </>
      </TextImgSection>

      {/* DEV : removing for now.
      <Leaderboard
        title={'Players of the month'}
        description="Placement resets on the 1st day of each month."
        players={dummyLeaderboard.slice(0, 3)}
        btn={{ link: '/leaderboards', label: 'All leaderboards' }}
        ongoing
      /> */}

      <LogoSct marginTop />

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

      <YourChallengeFAB
        toggleModal={() => setModal(!yourChallengeModal)}
        modalOpen={yourChallengeModal}
      />
    </>
  );
}
