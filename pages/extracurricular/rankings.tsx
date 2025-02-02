import css from '@/pages/LeaderboardPage.module.scss';
import Head from 'next/head';
import CTA from '@/components/navigation/CTA';
import { useState } from 'react';
import PageTitle from '@/components/content/PageTitle';
import Leaderboard from '@/components/layouts/Leaderboard';
import { dummyLeaderboard } from '@/constants/DummyData';
import PricePool from '@/components/layouts/PricePool';
export default function Rankings() {
  const [hcpRadio, setHcpRadio] = useState<'single' | 'up to 18' | 'up to 54'>('single');

  return (
    <>
      <style jsx global>
        {`
          * {
            /* Overwriting Color Variables to fit the Sponsor's Identity */
            --black: #0d1720;
            --primary: #252c32;
            --accent: #d9e3f2;
          }
        `}
      </style>
      <Head>
        <title>Rankings | EXTRACURRICULAR x WGC</title>
      </Head>

      <header className={css.header}>
        <PageTitle title={'Leaderboards'} returnBtn className={css.title}>
          <p>Play well, play more, and climb up the EXTRACURRICULAR Challenges!</p>
        </PageTitle>

        <div className={css.toggles}>
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
        {hcpRadio === 'single' && (
          <Leaderboard
            players={dummyLeaderboard}
            title="Spring Challenge - EXTRACURRICULAR"
            description="HCP single"
          />
        )}

        {hcpRadio === 'up to 18' && (
          <Leaderboard
            players={dummyLeaderboard}
            title="Spring Challenge - EXTRACURRICULAR"
            description="HCP up to 18"
          />
        )}

        {hcpRadio === 'up to 54' && (
          <Leaderboard
            players={dummyLeaderboard}
            title="Spring Challenge - EXTRACURRICULAR"
            description="HCP up to 54"
          />
        )}

        <PricePool />

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
