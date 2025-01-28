import { ReturnButton } from '../navigation/Button';
import css from './PageTitle.module.scss';

type Props = {
  title: string;
  returnBtn?: boolean; // TBC
  children?: string | React.ReactElement;
};

export default function PageTitle({ title, returnBtn, children }: Props) {
  return (
    <div className={css.titles}>
      {returnBtn && <ReturnButton />}
      <h1>{title}</h1>
      {children}
    </div>
  );
}
