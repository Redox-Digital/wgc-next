import Link from 'next/link';
import css from './Button.module.scss';
import Image from 'next/image';

type Props = {
  href?: string;
  outline?: boolean;
  small?: boolean;
  darkBg?: boolean;
  className?: string;
  blank?: boolean;
  onClick?: () => void;
  children?: string;
};

export default function Button({
  href,
  children,
  outline,
  darkBg,
  className,
  blank,
  small,
  onClick,
}: Props) {
  return href ? (
    <Link
      href={href}
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        darkBg && css.darkBg
      } ${className}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        darkBg && css.darkBg
      } ${className}`}
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

type SettingsBtnProps = {
  href?: string;
  className?: string;
  blank?: boolean;
  onClick?: () => void;
  picto?: string;
  children?: string | React.ReactNode;
};

export function SettingButton({
  href,
  className,
  blank,
  onClick,
  children,
  picto,
}: SettingsBtnProps) {
  return href ? (
    <Link
      href={href}
      className={`${css.settingBtn} ${className}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
    >
      {picto && <Image src={picto} alt="" width={16} height={16} />}
      <span>{children}</span>
      <Image src={'/pictograms/angle-black-right.svg'} alt="" width={10} height={10} />
    </Link>
  ) : (
    <button onClick={onClick} className={`${css.settingBtn} ${className}`}>
      {picto && <Image src={picto} alt="" width={16} height={16} />}
      <span>{children}</span>
    </button>
  );
}
