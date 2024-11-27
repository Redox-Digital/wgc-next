import css from './SectionTitle.module.scss';

type Props = {
  title: string | React.ReactNode;
  children?: string | React.ReactNode;
  className?: string;
};

export default function SectionTitle({ title, children, className }: Props) {
  return (
    <div className={`${css.sctTitles} ${className}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
