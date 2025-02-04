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
