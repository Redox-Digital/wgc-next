import { Countdown } from '../content/Countdown';
import css from './SectionTitle.module.scss';

type Props = {
  title: string | React.ReactNode;
  // countdown?: { title: string; description?: string /* targetTimestamp: Date */ };
  children?: string | React.ReactNode;
  darkBg?: boolean;
  className?: string;
};

export default function SectionTitle({
  title,
  children,
  darkBg,
  className /* countdown */,
}: Props) {
  return (
    <div className={`${css.sctTitles} ${darkBg && css.dark} ${className}`}>
      <div className={css.titles}>
        <h2>{title}</h2>
        {children}
      </div>

      {/* countdown ? (
        <div className={css.countdown}>
          <div className={css.countdownTitle}>
            <h3>{countdown.title}</h3>
          </div>
          {countdown.description ? (
            <small className={css.countdownDesc}>{countdown.description}</small>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      ) */}
    </div>
  );
}
