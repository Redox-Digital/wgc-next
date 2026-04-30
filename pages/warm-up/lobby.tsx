import css from '@/pages/Lobby.module.scss'; // Using the main Lobby's CSS file
import PricePool, { MoneyPool } from '@/components/layouts/PricePool';
import Image from 'next/image';
import Button, { ReturnButton } from '@/components/navigation/Button';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { TextInput } from '@/components/inputs/Inputs';
import Modal from '@/components/layouts/Modal';
import CopyLink from '@/components/inputs/CopyLink';
import Leaderboard from '@/components/layouts/Leaderboard';
import { dummyLeaderboard } from '@/constants/DummyData';
import { warmUpPrizes } from '@/pages/warm-up/index';
import TextImgSection from '@/components/layouts/TextImgSection';
import LogoSct from '@/components/content/LogoSct';
import { PriceListShort } from '@/components/layouts/PriceList';

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

  const prizes = warmUpPrizes;

  const [enterScore, showScoreModal] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Lobby | WGC Warm-Up Challenge</title>
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
          <h1>WGC Warm-Up Challenge</h1>
        </div>

        <Image
          src="/sponsors/WGC/WGC_May2026/WarmUp-Cover.png"
          alt=""
          width={700}
          height={466}
        />

        <div className={css.introInfos}>
          <div className={css.timer}>
            <small>
              <b>Ongoing</b> – Ends in :
            </small>
            <small>1 Day 10:30:02</small>
          </div>
          <CopyLink text={'https://wgc.gg/warm-up/lobby'} />
        </div>

        {/* If cash price, show MoneyPool */}
        {prizes.length ? (
          <PricePool className={css.poolPreview} prizes={prizes} preview />
        ) : (
          <MoneyPool className={css.poolPreview} total={0} />
        )}

        <div className={css.btns}>
          <Button onClick={() => showScoreModal(true)}>Enter score</Button>
          <Button href="/clubhouse" outline>
            Unregister
          </Button>
        </div>
      </header>

      <main className={css.main}>
        <section className={css.rules}>
          <div className={css.title}>
            <h3>Game Rules</h3>
            <p>
              Your score must be officially recognized by your national Federation (USGA, R&A,
              etc). Post your best Net Stableford round — one entry per player.
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
          players={dummyLeaderboard}
          title={'Leaderboard'}
          className={css.leaderboard}
          ongoing={true}
        />

        <PriceListShort
          lightBg
          title="No entry fee. Zero risk. Just golf."
          description={
            <>
              Post your score and join the WGC community. Win exclusive WGC Premium balls and a
              signed Tour Bag in our exclusive draw.
            </>
          }
          prizes={prizes}
        />

        <TextImgSection img={'/layouts/clubhouse/wgc-how-to.jpg'} lightBg>
          <>
            <h2>How to play</h2>
            <p>Learn how to play in 4 simple steps</p>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', flexWrap: 'wrap' }}>
              <Button href="/support">Learn how to play</Button>
              <Button href="/terms" outline>
                Terms and conditions
              </Button>
            </div>
          </>
        </TextImgSection>

        <LogoSct lightBg />
      </main>
    </>
  );
}
