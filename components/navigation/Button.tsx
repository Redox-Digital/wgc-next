import Link from 'next/link';
import css from './Button.module.scss';
import Image from 'next/image';

type Props = {
  href?: string;
  outline?: boolean;
  small?: boolean;
  darkBg?: boolean;
  addClass?: string;
  blank?: boolean;
  onClick?: () => void;
  children?: string;
};

export default function Button({
  href,
  children,
  outline,
  darkBg,
  addClass,
  blank,
  small,
  onClick,
}: Props) {
  return href ? (
    <Link
      href={href}
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        darkBg && css.darkBg
      } ${addClass}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        darkBg && css.darkBg
      } ${addClass}`}
      onClick={() => history.back()} /* TBC */
    >
      {children}
    </button>
  );
}

export function ReturnButton() {
  return (
    <button onClick={() => history.back()} className={css.return}>
      <Image src="/pictograms/arrow-return.svg" alt="Return" width={12} height={12} />
    </button>
  );
}
