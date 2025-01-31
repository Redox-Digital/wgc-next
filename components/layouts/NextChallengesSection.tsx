import css from './NextChallengeSection.module.scss';
import Button from '../navigation/Button';
import SectionTitle from './SectionTitle';
import ChallengePreview from '../content/ChallengePreview';

export default function NextChallengeSection() {
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

    {
      id: 1236,
      name: 'CocaCola Challenge',
      hcp: 'single',
      pool: 10,
      gameType: 'Net Stableford',
      players: 4,
      dates: 'Nov. 18th to Nov. 22nd',
      fee: 10,
      img: 'https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
    },
  ];
  return (
    <section className={css.section}>
      <SectionTitle title="Next Challenges">
        <p>Join your first Challenge, play your best and have fun!</p>
      </SectionTitle>
      <div className={css.challenges}>
        {challenges.map((challenge) => (
          <ChallengePreview key={challenge.id} {...challenge} />
        ))}
      </div>
      <div className={css.btns}>
        <Button href="/challenges">All Challenges</Button>
        <Button href="/challenges" outline>
          Your Private Challenges
        </Button>
      </div>
    </section>
  );
}
