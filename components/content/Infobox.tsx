import css from './Infobox.module.scss';

type Props = {
  children: React.ReactNode;
};
export default function Infobox({ children }: Props) {
  return <div className={css.infobox}>{children}</div>;
}
