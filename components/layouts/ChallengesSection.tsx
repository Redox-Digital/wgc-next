import { useState } from 'react';
import css from './ChallengeSection.module.scss';
import btnCss from '../navigation/Button.module.scss';
import Image from 'next/image';
import Button from '../navigation/Button';
import SectionTitle from './SectionTitle';
import { SelectInput } from '@/pages/create-private';
import ChallengePreview from '../content/ChallengePreview';

export default function ChallengeSection() {
  const [showPrivate, setShowPrivate] = useState<boolean>(false);
  const [hcpFilter, setHcpFilter] = useState<'single' | 'up to 18' | 'up to 54' | undefined>(
    undefined
  );

  const toggleView = () => setShowPrivate(!showPrivate);

  const challenges: ChallengePreview[] = [
    {
      id: 1234,
      name: 'Challenge Name',
      hcp: 'single',
      pool: 10,
      gameType: 'Net Stableford',
      players: 4,
      dates: 'Nov. 18th to Nov. 22nd',
      fee: 10,
      img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
    },
    {
      id: 1235,
      name: 'Extraccurricular Spring Challenge',
      pool: 100,
      hcp: 'up to 54',
      gameType: 'Net Stableford',
      players: 10,
      dates: 'Nov. 18th to Nov. 22nd',
      fee: 0,
    },
  ];

  const invites: { id: number; name: string }[] = [{ id: 123, name: 'Hello' }];

  // const invites: { id: number; name: string }[] = [];

  return (
    <section className={css.section}>
      <div className={css.radioBtns}>
        <button
          className={`${btnCss.btn} ${showPrivate && btnCss.white}`}
          onClick={toggleView}
          disabled={!showPrivate}
        >
          Available Challenges
        </button>
        <button
          onClick={toggleView}
          className={`${btnCss.btn} ${showPrivate || btnCss.white}`}
          disabled={showPrivate}
        >
          Private Challenges
        </button>
      </div>
      {showPrivate ? (
        <div className={`${css.challenges} ${css.private}`}>
          <SectionTitle title="Your Challenges"></SectionTitle>
          <div className={css.head}>
            <span className={css.id}>Id</span>
            <span></span>
            <span className={css.name}>Name</span>
            <span className={css.hcp}>HCP</span>
            <span className={css.pool}>Pool</span>
            <span className={css.gameType}>Game Type</span>
            <span className={css.players}>Players</span>
            <span className={css.dates}>Dates</span>
            <span></span>
          </div>
          <div className={css.body}>
            {challenges.map((c) => (
              <ChallengePreview key={c.id} {...c} />
            ))}
          </div>
          <div className={css.cards}>
            <div className={css.card}>
              <h4>Private challenge</h4>
              <p>Create one and invite your friends to start playing!</p>
              <Button to={'/create-private'}>Create your own challenge</Button>
            </div>
            <div className={css.card}>
              <h4>Invitations</h4>
              {invites.length > 0 ? (
                <ul>
                  {invites.map((i) => (
                    <li key={i.id}>
                      #{i.id} {i.name} <Button to="/lobby">Join</Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <i>You have no active invitation.</i>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={css.challenges}>
          <div className={css.challenges__header}>
            <SelectInput
              id={'filters'}
              label={''}
              options={[
                {
                  value: '',
                  label: 'All',
                },
                {
                  value: 'single',
                  label: 'Single',
                },
                {
                  value: 'up to 18',
                  label: 'Up to 18',
                },
                {
                  value: 'up to 54',
                  label: 'Up to 54',
                },
              ]}
              className={css.filter}
            />
            <SelectInput
              id={'sortBy'}
              label={''}
              options={[
                {
                  value: 'dateAsc',
                  label: 'By date - ascending',
                },
                {
                  value: 'dateDesc',
                  label: 'By date - descending',
                },
                {
                  value: 'priceAsc',
                  label: 'By price pool - ascending',
                },
                {
                  value: 'priceDesc',
                  label: 'By price pool - descending',
                },
              ]}
              className={css.filter}
            />
          </div>
          {/* 8 cols */}
          <div className={css.head}>
            <span className={css.id}>Id</span>
            <span></span>
            <span className={css.name}>Name</span>
            <span className={css.hcp}>HCP</span>
            <span className={css.pool}>Pool</span>
            <span className={css.gameType}>Game Type</span>
            <span className={css.players}>Players</span>
            <span className={css.dates}>Dates</span>
            <span></span>
          </div>
          <div className={css.body}>
            {challenges.map((c) =>
              !hcpFilter || hcpFilter === c.hcp ? <ChallengePreview key={c.id} {...c} /> : ''
            )}
          </div>
          <Button to={'#'} white>
            Show more
          </Button>
        </div>
      )}
    </section>
  );
}
