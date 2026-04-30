import { CSSProperties } from 'react';
import Button from '../navigation/Button';
import css from './Hero.module.scss';
import Image from 'next/image';

type Props = {
  title: string | React.ReactNode;
  gradient?: boolean;
  children?: string | React.ReactNode;
};

export default function Hero({ title, children, gradient }: Props) {
  return (
    <>
      <header className={`${css.hero} ${gradient && css.gradientBg}`}>
        <h1>{title}</h1>
        <div className={css.content}>{children}</div>
      </header>

      <span id="intro">{/* Anchor */}</span>
    </>
  );
}

type EventHeroProps = {
  title: string;
  description?: React.ReactNode;
  hideSponsors?: boolean;
  actions?: { label: string; href: string; secondary?: boolean }[];
  image?: { src: string; alt?: string; style?: CSSProperties };
  alt?: boolean;
  mainSponsor?: { src: string; alt?: string };
};

// DEV : static values for now.
export function EventHero({
  alt,
  hideSponsors,
  title,
  description,
  actions,
  image,
  mainSponsor,
}: EventHeroProps) {
  return (
    <>
      <header className={`${css.eventHero} ${alt && css.alt}`}>
        <div className={css.container}>
          {mainSponsor && (
            <Image
              className={css.mainSponsor}
              src={mainSponsor.src}
              alt={mainSponsor.alt || ''}
              width={300}
              height={90}
            />
          )}

          <div className={css.content}>
            <div className={css.texts}>
              <h1>{title}</h1>
              {description}
            </div>
            <div className={css.actions}>
              {actions?.map((action) => (
                <Button outline={action.secondary} href={action.href}>
                  {action.label}
                </Button>
              ))}

              {hideSponsors || (
                <div className={css.secondarySponsor}>
                  <small>proposed by</small>{' '}
                  <Image
                    src="/sponsors/JaquetDroz/JDx4A_white.svg"
                    alt="Jaquet Droz x 4Aces GC"
                    width={176}
                    height={32}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {image && (
          <Image
            src={image?.src}
            alt={image.alt || ''}
            width={550}
            height={550}
            className={css.sideImg}
            style={image.style}
          />
        )}
      </header>

      <span id="intro">{/* Anchor */}</span>
    </>
  );
}
