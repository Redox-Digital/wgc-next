import css from './NextChallengeSection.module.scss';
import Button from '../navigation/Button';
import SectionTitle from './SectionTitle';
import ChallengePreview from '../content/ChallengePreview';
import { challenges } from '@/constants/DummyData';

export default function NextChallengeSection() {
  const nextChallenges: ChallengePreview[] = challenges.slice(0, 3); // Get the 3 next Challenges
  return (
    <section className={css.section}>
      <SectionTitle title="Next Challenges">
        <p>Join your first Challenge, play your best and have fun!</p>
      </SectionTitle>
      <div className={css.challenges}>
        {nextChallenges.map((challenge) => (
          <ChallengePreview key={challenge.id} {...challenge} />
        ))}
      </div>
      <div className={css.btns}>
        <Button href="/challenges">All Challenges</Button>
        <Button href="/challenges#private" outline>
          Your private Challenges
        </Button>
      </div>
    </section>
  );
}
