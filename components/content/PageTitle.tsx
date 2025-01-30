import { ReturnButton } from '../navigation/Button';
import css from './PageTitle.module.scss';

type Props = {
  title: string;
  returnBtn?: boolean; // TBC
  center?: boolean;
  children?: string | React.ReactElement;
  className?: string;
};

export default function PageTitle({ title, returnBtn, children, center, className }: Props) {
  return (
    <div className={`${css.titles} ${center && css.center} ${className}`}>
      {returnBtn && <ReturnButton />}
      <h1>{title}</h1>
      {children}
    </div>
  );
}
