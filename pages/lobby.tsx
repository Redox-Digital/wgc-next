import css from './Lobby.module.scss';
import Hero from '@/components/layouts/Hero';
import PricePool from '@/components/layouts/PricePool';
import Image from 'next/image';
import Button, { ReturnButton } from '@/components/navigation/Button';
import Link from 'next/link';
import CTA from '@/components/navigation/CTA';
import CopyLink from '@/components/inputs/CopyLink';
import { useState } from 'react';
import Modal from '@/components/layouts/Modal';
import { TextInput } from '@/components/inputs/Inputs';
import Leaderboard from '@/components/layouts/Leaderboard';
import { dummyLeaderboard } from '@/constants/DummyData';

export default function Lobby() {
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

  const [enterScore, showScoreModal] = useState<boolean>(false);

  return (
    <>
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
        <div className={css.topBtns}>
          <ReturnButton />
          <Link href="/private/edit" title="Edit Challenge" className={css.editBtn}>
            <Image src="/pictograms/settings-white.svg" alt="" width={24} height={24} />
          </Link>
        </div>

        <Image src="/layouts/clubhouse/clubhouse_hero.jpg" alt="" width={400} height={180} />
        <h1>Challenge #7607 - HCP Single</h1>
        <div className={css.timer}>
          <small>Ongoing – Ends in :</small>
          <small>1 Day 10:30:02</small>
        </div>
        <CopyLink text={'https://wgc.gg/extracurricular/lobby/7874'} />

        <PricePool moneyPool />

        <div className={css.btns}>
          <Button href="/lobby">Join Challenge</Button>
          <Button onClick={() => showScoreModal(true)}>Enter score</Button>
          <Button href="/" outline>
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
          <h3>Game Rules</h3>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          {rules.map((rule, key) => (
            <div key={key} className={css.rule}>
              <label className="xs">{rule.label}</label>
              <small>{rule.value}</small>
            </div>
          ))}
        </section>

        <Leaderboard players={dummyLeaderboard} title={'Leaderboard'} className={css.leaderboard} />

        <PricePool />

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
