import Link from 'next/link';
import css from './ChallengeRulesSection.module.scss';
import Image from 'next/image';

type Props = {
  light?: boolean;
};

export default function ChallengeRulesSection({ light }: Props) {
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

  return (
    <section className={`${css.rules} ${light && css.light}`}>
      <div className={css.title}>
        <h3>Game Rules</h3>
        <p>
          Your score must be an officially recognized by your national Federation (USGA, R&A, etc).
          We will be verifying winning scores.
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
  );
}
