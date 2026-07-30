import css from '@/pages/Lobby.module.scss'; // Using the main Lobby's CSS file
import PriceList from './PriceList';
import { SponsorChallengeConfig } from './SponsorPageLayout';
import TextImgSection from './TextImgSection';
import Button, { ReturnButton } from '../navigation/Button';
import LogoSct from '../content/LogoSct';
import Leaderboard from './Leaderboard';
import { dummyLeaderboard } from '@/constants/DummyData';
import PricePool, { MoneyPool } from './PricePool';
import CopyLink from '../inputs/CopyLink';
import Modal from './Modal';
import { TextInput } from '../inputs/Inputs';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';
import ChallengeRulesSection from '../content/ChallengeRulesSection';

export type SponsorLobbyLayoutProps = SponsorChallengeConfig;

export default function SponsorLobbyLayout({
  style,
  challengeTitle,
  light,
  children,
  txtImgSct,
  prices,
  challengeImage,
  lobbyUrl,
}: SponsorLobbyLayoutProps) {
  const [enterScore, showScoreModal] = useState<boolean>(false);

  return (
    <>
      <style jsx global>
        {style}
      </style>
      <Head>
        <title>{challengeTitle} | Lobby</title>
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
          <h1>{challengeTitle}</h1>
        </div>

        <Image
          src={challengeImage ?? '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg'}
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
          <CopyLink text={lobbyUrl ?? 'https://wgc.gg/extracurricular/lobby/7874'} />
        </div>

        {/* If cash price, show MoneyPool */}
        {prices.list.length ? (
          <PricePool className={css.poolPreview} prizes={prices.list} preview />
        ) : (
          <MoneyPool className={css.poolPreview} total={102} />
        )}

        <div className={css.btns}>
          {/* <Button href="/lobby">Join Challenge</Button> */}
          <Button onClick={() => showScoreModal(true)}>Enter score</Button>
          <Button href="/clubhouse" outline>
            Unregister
          </Button>
        </div>
      </header>
      <main className={css.main}>
        <ChallengeRulesSection light={light} />

        <Leaderboard
          players={dummyLeaderboard}
          title={'Leaderboard'}
          className={css.leaderboard}
          ongoing={true}
          light={light}
        />

        <PriceList
          lightTheme={light}
          lightBg
          title={prices.title || 'A. Lot. Of. Prizes.'}
          description={
            prices.description ||
            'Submit your score and join the WGC Community. Win exclusive prizes from our sponsors.'
          }
          prizes={prices.list}
        />

        <TextImgSection img={txtImgSct.image || '/layouts/home/hcp-single.JPG'} lightBg={light}>
          {txtImgSct.content}
        </TextImgSection>

        {/* For challenge's specific sections */}
        {children}

        <LogoSct lightBg />
      </main>
    </>
  );
}
