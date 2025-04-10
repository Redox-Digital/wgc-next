import css from './Lobby.module.scss';
import PricePool, { MoneyPool } from '@/components/layouts/PricePool';
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
  const prizes: PriceType[] = [];

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
        <div className={css.top}>
          <ReturnButton />
          <h1>Challenge #7607 - HCP Single</h1>
          <Link href="/private/edit" title="Edit Challenge" className={css.editBtn}>
            <Image src="/pictograms/settings-white.svg" alt="" width={24} height={24} />
          </Link>
        </div>

        <Image
          src="/sponsors/4Aces/4Aces_Mar2025/4aces_challenge_mar2025.png"
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
          <PricePool className={css.poolPreview} prizes={prizes} preview />
        ) : (
          <MoneyPool
            className={css.poolPreview}
            total={102}
            breakdown={{ first: 50, second: 30, third: 22 }}
          />
        )}

        <div className={css.btns}>
          <Button href="/lobby">Join Challenge</Button>
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

        <Leaderboard players={dummyLeaderboard} title={'Leaderboard'} className={css.leaderboard} />

        <PricePool prizes={prizes} />

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
      </main>
    </>
  );
}
