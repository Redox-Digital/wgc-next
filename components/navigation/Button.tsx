import Link from 'next/link';
import css from './Button.module.scss';

type Props = {
  to: string;
  wgc?: boolean;
  white?: boolean;
  addClass?: string;
  blank?: boolean;
  onClick?: () => void;
  children?: string;
};

export default function Button({ to, children, wgc, white, addClass, blank, onClick }: Props) {
  return (
    <Link
      href={to}
      className={`${css.btn} ${wgc && css.btnWgc} ${white && css.white} ${addClass}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
