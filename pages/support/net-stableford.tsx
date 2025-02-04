import PageTitle from '@/components/content/PageTitle';
import css from './SupportPages.module.scss';
import Image from 'next/image';
import Button from '@/components/navigation/Button';

export default function NetStableford() {
  const rules = [
    {
      text: 'Net Double Bogey or worse',
      sub: '2 or more strokes above net par',
      pts: 0,
    },
    {
      text: 'Net Bogey',
      sub: '1 stroke above net par',
      pts: 1,
    },
    {
      text: 'Net Par',
      sub: 'Equal to net par',
      pts: 2,
    },
    {
      text: 'Net Birdie',
      sub: '1 stroke below net par',
      pts: 3,
    },
    {
      text: 'Net Eagle',
      sub: '2 stroke below net par',
      pts: 4,
    },
    {
      text: 'Net Albatross or better',
      sub: '3 strokes below net par',
      pts: 5,
    },
  ];
  return (
    <main className={css.supportPage}>
      <PageTitle title="Net Stableford" returnBtn className={css.pageTitle}>
        <Image
          src="/layouts/wgc-support-netstableford.jpg"
          width={720}
          height={240}
          alt=""
          style={{ objectPosition: '50% 50%' }}
        />
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
        <table className={css.table}>
          {rules.map((rule) => (
            <tr key={rule.pts}>
              <td>
                <h5>{rule.text}</h5>
                <small>{rule.sub}</small>
              </td>
              <td>{rule.pts} pts</td>
            </tr>
          ))}
        </table>

        <p>Net par = par + extra strokes received due to the player&apos;s handicap.</p>
      </section>
      <Button>Back</Button>
    </main>
  );
}
