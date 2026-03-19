import React from 'react';
import Button from './Button';
import css from './CTA.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  description: React.ReactNode;
  btnLabel: string;
  btnBlank?: boolean;
  href: string;
  img: string;
  opacity?: number;
};

export default function CTA({
  title,
  description,
  btnLabel,
  href,
  img,
  opacity = 0.45,
  btnBlank,
}: Props) {
  return (
    <div className={css.cta}>
      <Image src={img} alt="" fill />
      <div className={css.overlay} style={{ opacity: opacity }} />

      <div className={css.texts}>
        <h2>{title}</h2>
        {description}
      </div>
      <Button href={href} darkBg blank={btnBlank}>
        {btnLabel}
      </Button>
    </div>
  );
}

interface RichCtaProps extends Props {
  logo?: { src: string; title: string };
  badge?: string | React.ReactNode;
}

export function RichCTA({
  title,
  description,
  img,
  btnLabel,
  badge,
  href,
  btnBlank,
  logo,
}: RichCtaProps) {
  return (
    <section className={css.richCTA}>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.head}>
            <h2>{title}</h2>
            {logo && <Image src={logo.src} alt={logo.title} width={500} height={80} />}
          </div>
          <div className={css.body}>
            <p>{description}</p>
          </div>
          <div className={css.foot}>
            {/* If already logged in : Join now */}
            {
              <Button href={href} blank={btnBlank}>
                {btnLabel}
              </Button>
            }
            {badge && <span className={css.badge}>{badge}</span>}
          </div>
        </div>
        <Image src={img} alt="" width={500} height={80} />
      </div>
    </section>
  );
}
