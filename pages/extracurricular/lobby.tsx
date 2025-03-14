import css from '@/pages/Lobby.module.scss'; // Using the main Lobby's CSS file
import PricePool, { MoneyPool } from '@/components/layouts/PricePool';
import Image from 'next/image';
import Button, { ReturnButton } from '@/components/navigation/Button';
import Link from 'next/link';
import Head from 'next/head';
import CTA from '@/components/navigation/CTA';
import { useState } from 'react';
import { TextInput } from '@/components/inputs/Inputs';
import Modal from '@/components/layouts/Modal';
import CopyLink from '@/components/inputs/CopyLink';
import Leaderboard from '@/components/layouts/Leaderboard';
import { dummyLeaderboard, dummyPrizes } from '@/constants/DummyData';

export default function SponsoredLobby() {
  const rules: { label: string; value: string | React.ReactNode }[] = [
    {
      label: 'Game type',
      value: (
        <>
          Net Stableford{' '}
          <Link
            href="/support/net-stableford"
            title="Click to learn more about Net Stableford"
            target="_blank"
          >
            <Image src="/pictograms/info-white.svg" alt="" width={16} height={16} />
          </Link>
        </>
      ),
    },
    { label: 'Buy-in cost', value: 'Free' },
    { label: 'Course type', value: '18 holes' },
    { label: 'Player HCP', value: 'Up to 18' },
    { label: 'Player count min.', value: '0' },
    { label: 'Player count max.', value: '-' },
  ];

  const prizes: PriceType[] = dummyPrizes;

  const [enterScore, showScoreModal] = useState<boolean>(false);

  return (
    <>
      <style jsx global>
        {`
          * {
            /* Overwriting Color Variables to fit the Sponsor's Identity */
            --black: #0d1720;
            --black-rgb: 13, 23, 32;

            --primary: #252c32;
            --black-rgb: 27, 44, 50;

            --accent: #d9e3f2;
            --accent-rgb: 217, 227, 242;
          }
        `}
      </style>
      <Head>
        <title>Lobby | EXTRACURRICULAR x WGC</title>
      </Head>

      <Modal
        open={enterScore}
        title={<>Enter your score Net&nbsp;Stableford</>}
        closeModal={() => showScoreModal(false)}
        className={css.scoreModal}
      >
        <>
          <form>
            <TextInput id={'score'} label={'Score'} type={'number'} dark />

            <div className={css.btns}>
              <Button outline darkBg onClick={() => showScoreModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => showScoreModal(false)}>Confirm</Button>
            </div>
          </form>
        </>
      </Modal>

      <header className={css.header}>
        <div className={css.top}>
          <ReturnButton />
          <h1>Spring Challenge - EXTRACURRICULAR</h1>
        </div>

        <Image src="/sponsors/sponsor_excr.png" alt="" width={700} height={466} />

        <div className={css.introInfos}>
          <div className={css.timer}>
            <small>
              <b>Ongoing</b> – Ends in :
            </small>
            <small>1 Day 10:30:02</small>
          </div>
          <CopyLink text={'https://wgc.gg/extracurricular/lobby/7874'} />
        </div>

        {/* If cash price, show MoneyPool */}
        {prizes.length ? (
          <PricePool className={css.poolPreview} prizes={prizes} preview />
        ) : (
          <MoneyPool className={css.poolPreview} total={102} />
        )}

        <div className={css.btns}>
          {/* <Button href="/lobby">Join Challenge</Button> */}
          <Button onClick={() => showScoreModal(true)}>Enter score</Button>
          <Button href="/clubhouse" outline>
            Unregister
          </Button>
          {/* Show if it's a "goodies" Price Pool */}
          {/*<Button href="#pricepool" outline>
            See Price Pool
          </Button>*/}
        </div>
      </header>
      <main className={css.main}>
        <section className={css.rules}>
          <div className={css.title}>
            <h3>Game Rules</h3>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={css.boxes}>
            {rules.map((rule, key) => (
              <div key={key} className={css.rule}>
                <label className="xs">{rule.label}</label>
                <small>{rule.value}</small>
              </div>
            ))}
          </div>
        </section>

        <Leaderboard
          players={dummyLeaderboard.slice(0, 1)}
          title={'Leaderboard'}
          className={css.leaderboard}
          ongoing={true}
        />

        {prizes.length && <PricePool prizes={prizes} />}

        <section>
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
        </section>
      </main>
    </>
  );
}
