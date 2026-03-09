import PageTitle from '@/components/content/PageTitle';
import css from './LeaderboardPage.module.scss';
import { useState } from 'react';
import { dummyLeaderboard, dummyPrizes } from '@/constants/DummyData';
import Leaderboard from '@/components/layouts/Leaderboard';
import TogglesInput from '@/components/inputs/TogglesInput';

export default function LeaderboardPage() {
  const [leaderboardScope, setLeaderboardScope] = useState<string>('global');
  const [leaderboardType, setLeaderboardType] = useState<string>('xp');

  const setBothRadios = (arg1?: string, arg2?: string) => {
    arg1 && setLeaderboardScope(arg1);
    arg2 && setLeaderboardType(arg2);
  };

  return (
    <>
      <header className={css.header}>
        <PageTitle title={'Leaderboard'} returnBtn className={css.title}>
          <p>Play well, play more, and climb up the monthly and all-time leaderboards!</p>
        </PageTitle>

        <TogglesInput
          setBothRadios={setBothRadios}
          arg1={leaderboardScope}
          setArg1={setLeaderboardScope}
          arg2={leaderboardType}
          setArg2={setLeaderboardType}
        />
      </header>

      <main className={css.main}>
        {/* Global Leaderboards */}
        {leaderboardScope === 'global' && leaderboardType === 'xp' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="Hall of Fame"
            description="WGC’s most active Players"
            xpLeaderboard
            // prizes={dummyPrizes}
          />
        ) : (
          ''
        )}
        {leaderboardScope === 'global' && leaderboardType === 'score' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="Most active players"
            description="Commitment is the key to success !"
          />
        ) : (
          ''
        )}

        {/* Friends Leaderboards */}
        {leaderboardScope === 'friends' && leaderboardType === 'xp' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="Friends Hall of Fame"
            description="Your most active friends"
            xpLeaderboard
          />
        ) : (
          ''
        )}
        {leaderboardScope === 'friends' && leaderboardType === 'score' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="Most active players among your friends"
            description="Commitment is the key to success !"
          />
        ) : (
          ''
        )}

        {/* <CTA
          title={'Do you want more ?'}
          description={
            <p>
              More Free and Buy-in Challenges available on wgc.gg & your own Challenges with
              friends, clients, club members to create!
            </p>
          }
          btnLabel={'Visit wgc.gg'}
          btnBlank
          href={'https://wgc.gg'}
          img={'/layouts/clubhouse/lobby-cta.jpg'}
        /> */}
      </main>
    </>
  );
}
