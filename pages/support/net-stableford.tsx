import PageTitle from '@/components/content/PageTitle';
import css from './SupportPages.module.scss';
import Image from 'next/image';
import Button from '@/components/navigation/Button';

export default function NetStableford() {
  return (
    <main className={css.supportPage}>
      <PageTitle title="Net Stableford" returnBtn>
        <Image src="https://picsum.photos/360/180" width={360} height={180} alt="" />
      </PageTitle>
      <section>
        <p>
          While both Stroke Play and Stableford scoring use the concept of a net score, they apply
          it differently. Stroke Play adjusts the raw stroke count by subtracting the player&apos;s
          handicap, whereas Stableford calculates points based on performance relative to a
          predetermined standard for each hole.
        </p>
      </section>
      <section>
        <h3>Points Breakdown</h3>
        <p>
          In Stableford scoring, the points awarded for each hole are typically based on the
          player&apos;s score relative to par. Here&apos;s a common breakdown:
        </p>
        <ul>
          <li>Net Double Bogey or worse: 0 points</li>
          <li>Net Bogey: 1 point</li>
          <li>Net Par: 2 points</li>
          <li>Net Birdie: 3 points</li>
          <li>Net Eagle: 4 points</li>
          <li>Net Albatross or better: 5 points</li>
        </ul>

        <p>Net par = par + extra strokes received due to the player&apos;s handicap.</p>
      </section>
      <Button>Back</Button>
    </main>
  );
}
