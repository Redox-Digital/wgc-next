import { CSSProperties } from 'react';
import Button from '../navigation/Button';
import css from './Hero.module.scss';
import Image from 'next/image';

type Props = {
  title: string | React.ReactNode;
  gradient?: boolean;
  children?: string | React.ReactNode;
};

export default function SimpleHero({ title, children, gradient }: Props) {
  return (
    <>
      <header className={`${css.hero} ${css.simpleHero} ${gradient && css.gradientBg}`}>
        <h1>{title}</h1>
        <div className={css.content}>{children}</div>
      </header>

      <span id="intro">{/* Anchor */}</span>
    </>
  );
}

type EventHeroProps = {
  light?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  hideSponsors?: boolean;
  actions?: { label: string; href: string; secondary?: boolean }[];
  image?: { src: string; alt?: string; style?: CSSProperties };
  alt?: boolean;
  mainSponsor?: { src: string; alt?: string };
};

export function EventHero({
  light,
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
      <header className={`${css.hero} ${css.eventHero} ${alt && css.alt} ${light && css.light}`}>
        <div className={css.container}>
          {mainSponsor && (
            <Image
              className={css.mainSponsor}
              src={mainSponsor.src}
              alt={mainSponsor.alt || ''}
              width={240}
              height={90}
            />
          )}

          <div className={css.content}>
            <div className={css.texts}>
              <h1>{title}</h1>
              {description}
            </div>
            {actions && hideSponsors ? (
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
                      src="/sponsors/JaquetDroz/4Aces_Logo_white.svg"
                      alt="Jaquet Droz x 4Aces GC"
                      width={176}
                      height={32}
                    />
                  </div>
                )}
              </div>
            ) : (
              ''
            )}
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
