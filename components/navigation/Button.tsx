import Link from 'next/link';
import css from './Button.module.scss';
import Image from 'next/image';

type Props = {
  href?: string;
  outline?: boolean;
  small?: boolean;
  darkBg?: boolean;
  title?: string;
  className?: string;
  blank?: boolean;
  onClick?: () => void;
  children?: string | React.ReactNode;
};

export default function Button({
  href,
  children,
  outline,
  darkBg,
  className,
  blank,
  title,
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
      title={title}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        darkBg && css.darkBg
      } ${className}`}
      onClick={onClick ? onClick : () => history.back()} /* TBC */
      title={title}
    >
      {children}
    </button>
  );
}

export function ReturnButton() {
  return (
    <button onClick={() => history.back()} className={css.return} type="button">
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
    <button type="button" onClick={onClick} className={`${css.settingBtn} ${className}`}>
      {picto && <Image src={picto} alt="" width={16} height={16} />}
      <span>{children}</span>
    </button>
  );
}

type GearBtnProps = {
  gear: GearType;
  className?: string;
  onClick?: () => void;
};

export function GearButton({ gear, className, onClick }: GearBtnProps) {
  return (
    <button type="button" className={`${css.gearBtn} ${className}`} onClick={onClick}>
      <Image src={`/brands/${gear.brand}.png`} alt={''} width={50} height={50} />
      <span>{gear.model}</span>
    </button>
  );
}

type PrizeBtnProps = {
  prize: PriceType;
  className?: string;
  onClick?: () => void;
};

export function PrizeBtnProps({ prize, className, onClick }: PrizeBtnProps) {
  return (
    <button type="button" className={`${css.gearBtn} ${className}`} onClick={onClick}>
      <Image src={prize.img} alt={''} width={50} height={50} />
      <span>{prize.title}</span>
    </button>
  );
}
