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
import TextImgSection from '@/components/layouts/TextImgSection';
import LogoSct from '@/components/content/LogoSct';
import PriceList, { prizes, PrizeType } from '@/components/layouts/PriceList';

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

  const prizesList: PrizeType[] = prizes; // dummyPrizes;

  const [enterScore, showScoreModal] = useState<boolean>(false);

  return (
    <>
      <style jsx global>
        {`
          * {
            /* Overwriting Color Variables to fit the Sponsor's Identity */
            /* Jaquet Droz Challenge */
            --black: #141414;
            --black-rgb: 20, 20, 20;
            --primary: #333333;
            --primary-rgb: 51, 51, 51;
            --accent: #b5991c;
            --accent-rgb: 181, 153, 28;
            --secondary: #fafafa;
            --secondary-rgb: 250, 250, 250;

            --gradient-accent: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
          }
        `}
      </style>
      <Head>
        <title>Lobby | Jaquet Droz Challenge</title>
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
          <h1>Jaquet Droz Challenge</h1>
        </div>

        <Image
          src="/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg"
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
          <CopyLink text={'https://wgc.gg/extracurricular/lobby/7874'} />
        </div>

        {/* If cash price, show MoneyPool */}
        {prizes.length ? (
          <PricePool className={css.poolPreview} prizes={prizesList} preview />
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
              Your score must be an officially recognized by your national Federation (USGA, R&A,
              etc). We will be verifying winning scores.
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

        <PriceList lightBg />

        {/* prizes.length && <PricePool prizes={prizes} /> */}

        {/*<section>
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
        </section> */}

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
