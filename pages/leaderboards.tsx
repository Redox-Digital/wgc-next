import PageTitle from '@/components/content/PageTitle';
import css from './LeaderboardPage.module.scss';
import { useState } from 'react';
import { dummyLeaderboard } from '@/constants/DummyData';
import CTA from '@/components/navigation/CTA';
import Leaderboard from '@/components/layouts/Leaderboard';

export default function LeaderboardPage() {
  const [timeRadio, setTimeRadio] = useState<'month' | 'all-time'>('month');
  const [hcpRadio, setHcpRadio] = useState<'single' | 'up to 18' | 'up to 54'>('single');

  const setBothRadios = (time?: 'month' | 'all-time', hcp?: 'single' | 'up to 18' | 'up to 54') => {
    time && setTimeRadio(time);
    hcp && setHcpRadio(hcp);
  };

  return (
    <>
      <header className={css.header}>
        <PageTitle title={'Leaderboard'} returnBtn className={css.title}>
          <p>Play well, play more, and climb up the monthly and all-time leaderboards!</p>
        </PageTitle>

        <div className={`${css.toggles} ${css.desktop}`}>
          <label htmlFor="m-single">
            <input
              type="radio"
              name="toggleDesktop"
              id="m-single"
              onClick={() => setBothRadios('month', 'single')}
              checked={timeRadio === 'month' && hcpRadio === 'single'}
            />
            <span>Monthly – HCP Single</span>
          </label>
          <label htmlFor="m-18">
            <input
              type="radio"
              name="toggleDesktop"
              id="m-18"
              onClick={() => setBothRadios('month', 'up to 18')}
              checked={timeRadio === 'month' && hcpRadio === 'up to 18'}
            />
            <span>Monthly – HCP up to 18</span>
          </label>
          <label htmlFor="m-54">
            <input
              type="radio"
              name="toggleDesktop"
              id="m-54"
              onClick={() => setBothRadios('month', 'up to 54')}
              checked={timeRadio === 'month' && hcpRadio === 'up to 54'}
            />
            <span>Monthly – HCP up to 54</span>
          </label>
          <label htmlFor="a-single">
            <input
              type="radio"
              name="toggleDesktop"
              id="a-single"
              onClick={() => setBothRadios('all-time', 'single')}
              checked={timeRadio === 'all-time' && hcpRadio === 'single'}
            />
            <span>All-Time – HCP Single</span>
          </label>
          <label htmlFor="a-18">
            <input
              type="radio"
              name="toggleDesktop"
              id="a-18"
              onClick={() => setBothRadios('all-time', 'up to 18')}
              checked={timeRadio === 'all-time' && hcpRadio === 'up to 18'}
            />
            <span>All-Time – HCP up to 18</span>
          </label>
          <label htmlFor="a-54">
            <input
              type="radio"
              name="toggleDesktop"
              id="a-54"
              onClick={() => setBothRadios('all-time', 'up to 54')}
              checked={timeRadio === 'all-time' && hcpRadio === 'up to 54'}
            />
            <span>All-Time – HCP up to 54</span>
          </label>
        </div>

        <div className={`${css.toggles} ${css.mobile}`}>
          <div className={css.timeRadio}>
            <label htmlFor="monthly">
              <input
                type="radio"
                name="timeRadio"
                id="monthly"
                onClick={() => setTimeRadio('month')}
                checked={timeRadio === 'month'}
              />
              <span>Monthly leaderboard</span>
            </label>
            <label htmlFor="all-time">
              <input
                type="radio"
                name="timeRadio"
                id="all-time"
                onClick={() => setTimeRadio('all-time')}
                checked={timeRadio === 'all-time'}
              />
              <span>All-time leaderboard</span>
            </label>
          </div>

          <div className={css.hcpRadio}>
            <label htmlFor="hcpSingle">
              <input
                type="radio"
                name="hcpRadio"
                id="hcpSingle"
                onClick={() => setHcpRadio('single')}
                checked={hcpRadio === 'single'}
              />
              <span>HCP single</span>
            </label>
            <label htmlFor="hcp18">
              <input
                type="radio"
                name="hcpRadio"
                id="hcp18"
                onClick={() => setHcpRadio('up to 18')}
                checked={hcpRadio === 'up to 18'}
              />
              <span>HCP up to 18</span>
            </label>
            <label htmlFor="hcp54">
              <input
                type="radio"
                name="hcpRadio"
                id="hcp54"
                onClick={() => setHcpRadio('up to 54')}
                checked={hcpRadio === 'up to 54'}
              />
              <span>HCP up to 54</span>
            </label>
          </div>
        </div>
      </header>

      <main className={css.main}>
        {hcpRadio === 'single' && timeRadio === 'month' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="Players of the Month"
            description="HCP single"
          />
        ) : (
          ''
        )}
        {hcpRadio === 'single' && timeRadio === 'all-time' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="All-time Leaderboard"
            description="HCP single"
          />
        ) : (
          ''
        )}
        {hcpRadio === 'up to 18' && timeRadio === 'month' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="Players of the Month"
            description="HCP up to 18"
          />
        ) : (
          ''
        )}
        {hcpRadio === 'up to 18' && timeRadio === 'all-time' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="All-time Leaderboard"
            description="HCP up to 18"
          />
        ) : (
          ''
        )}
        {hcpRadio === 'up to 54' && timeRadio === 'month' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="Players of the Month"
            description="HCP up to 54"
          />
        ) : (
          ''
        )}
        {hcpRadio === 'up to 54' && timeRadio === 'all-time' ? (
          <Leaderboard
            players={dummyLeaderboard}
            title="All-time Leaderboard"
            description="HCP up to 54"
          />
        ) : (
          ''
        )}

        <CTA
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
        />
      </main>
    </>
  );
}
