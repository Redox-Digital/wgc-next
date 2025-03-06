'use client';

import { useState } from 'react';
import css from './ChallengesPage.module.scss';
import { useSearchParams } from 'next/navigation';
import PageTitle from '@/components/content/PageTitle';
import { challenges, privateChallenges } from '@/constants/DummyData';
import ChallengePreview from '@/components/content/ChallengePreview';
import CTA from '@/components/navigation/CTA';

const pendingInvitations: ChallengePreview[] = [
  {
    id: 24,
    hcp: 'single',
    name: 'Pending Invitation Challenge',
    pool: 0,
    gameType: 'Net Stableford',
    players: 3,
    dates: 'Oct. 5th to Oct. 22nd',
    fee: 0,
  },
];

export default function ChallengesPage() {
  const [showPrivate, setPrivate] = useState<boolean>(false);

  return (
    <main className={css.challengesPage}>
      <div className={css.toggleBtns}>
        <label htmlFor="challenges">
          <input
            type="radio"
            name="toggle"
            id="challenges"
            onClick={() => setPrivate(false)}
            checked={!showPrivate}
          />
          <span>Available Challenges</span>
        </label>
        <label htmlFor="private">
          <input
            type="radio"
            name="toggle"
            id="private"
            onClick={() => setPrivate(true)}
            checked={showPrivate}
          />
          <span>Private Challenges</span>
        </label>
      </div>

      <section className={`${css.private} ${showPrivate && css.show}`}>
        <PageTitle title={'Private Challenges'} returnBtn>
          <p>Here, you can accept invitations from your friends or create a challenge for them.</p>
        </PageTitle>
        <div className={css.challengesList}>
          {/* Add edit="true" if it's the player's own Challenge */}
          {privateChallenges.map((challenge) => (
            <ChallengePreview key={challenge.id} {...challenge} edit />
          ))}
        </div>
        <div className={css.challengesList}>
          <h3>Pending Invitations</h3>
          <p style={{ opacity: '0.7' }}>
            Join your first challenges and try to win against your opponents !
          </p>
          {pendingInvitations.map((challenge) => (
            <ChallengePreview key={challenge.id} {...challenge} notification />
          ))}
        </div>
        <CTA
          title={'Challenge your friends!'}
          description={'Create one and invite your friends to start playing!'}
          btnLabel={'Create private Challenge'}
          href={'/private/create'}
          img={'/layouts/clubhouse/private-cta.webp'}
          opacity={0.3}
        />
      </section>

      <section className={`${css.challenges}  ${showPrivate || css.show}`}>
        <PageTitle title={'Available Challenges'} returnBtn>
          <p>
            Browse the available challenges and register for your favorites. Start your adventure
            now !
          </p>
        </PageTitle>
        <div className={css.challengesList}>
          {challenges.map((challenge) => (
            <ChallengePreview key={challenge.id} {...challenge} />
          ))}
        </div>
      </section>
    </main>
  );
}
