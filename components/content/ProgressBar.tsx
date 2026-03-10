import css from './ProgressBar.module.scss';

type ProgressType = {
  labels?: string[];
  currentScore: number;
  totalScore: number;
  className?: string;
};

export default function ProgressBar({ labels, totalScore, currentScore, className }: ProgressType) {
  return (
    <div className={`${css.progressBar} ${className}`}>
      <span className={css.bar}>
        <span
          className={css.progress}
          style={{ width: `${((currentScore + 1) / totalScore) * 100}%` }}
        />
      </span>
      {labels && labels.length > 0 ? (
        <div className={css.texts}>
          {labels.map((l, key) => (
            <small key={key}>{l}</small>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
