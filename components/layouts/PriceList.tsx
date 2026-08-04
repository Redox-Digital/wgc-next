import css from './PriceList.module.scss';
import leagueCss from '@/components/content/LeagueBadge.module.scss';
import Image from 'next/image';

export type PrizeType = {
  logo?: string;
  invertLogo?: boolean;
  title: string;
  description?: string | React.ReactNode;
  img?: string;
  imgContain?: boolean;
  className?: string;
  largeCard?: boolean;
  badge?: {
    title: string;
    className?: string;
  };
};

type Props = {
  lightTheme?: boolean;
  lightBg?: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  prizes: PrizeType[];
};

export default function PriceList({
  lightTheme,
  lightBg,
  title,
  description,
  prizes: prizeList,
}: Props) {
  return (
    <section
      className={`${css.section} ${css.shortListSection} ${lightBg && css.lightBg} ${lightTheme && css.light}`}
      id="pricepool"
    >
      <div className={css.sctTitle}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ul className={css.shortList}>
        {prizeList.map((prize, key) =>
          prize.largeCard ? <PrizeLine key={key} {...prize} /> : <PrizeCard key={key} {...prize} />
        )}
      </ul>
    </section>
  );
}

export function PrizeLine({
  logo,
  invertLogo,
  title,
  description,
  img,
  imgContain,
  badge,
  className,
}: PrizeType) {
  return (
    <li className={`${css.prize} ${className}`}>
      <div className={css.content}>
        {logo && (
          <Image
            className={`${css.logo} ${invertLogo && css.invert}`}
            src={logo}
            alt=""
            width={80}
            height={32}
          />
        )}

        <div className={css.texts}>
          {badge ? (
            <span className={`${css.badge} ${badge.className || leagueCss.rookie}`}>
              {badge.title}
            </span>
          ) : (
            ''
          )}
          <h3>{title}</h3>
          {description && <small>{description}</small>}
        </div>
      </div>

      {img && (
        <Image
          className={`${css.image} ${imgContain && css.contain}`}
          src={img}
          alt=""
          width={270}
          height={270}
        />
      )}
    </li>
  );
}

export function PrizeCard({
  logo,
  invertLogo,
  title,
  description,
  img,
  imgContain,
  badge,
  className,
}: PrizeType) {
  return (
    <li className={`${css.prize} ${css.card} ${className}`}>
      <div className={css.content}>
        {logo && (
          <Image
            className={`${css.logo} ${invertLogo && css.invert}`}
            src={logo}
            alt=""
            width={80}
            height={32}
          />
        )}

        <div className={css.texts}>
          {badge ? (
            <span className={`${css.badge} ${badge.className || leagueCss.rookie}`}>
              {badge.title}
            </span>
          ) : (
            ''
          )}
          <h3>{title}</h3>
          {description && <small>{description}</small>}
        </div>
      </div>

      {img && <Image className={`${css.image}`} src={img} alt="" width={360} height={180} />}
    </li>
  );
}
