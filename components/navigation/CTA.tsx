import React from 'react';
import Button from './Button';
import css from './CTA.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  description: string | React.ReactNode;
  btnLabel: string;
  btnBlank?: boolean;
  href: string;
  img: string;
  opacity?: number;
};

export default function CTA({ title, description, btnLabel, href, img, opacity, btnBlank }: Props) {
  return (
    <div className={css.cta}>
      <Image src={img} alt="" fill />
      <div className={css.overlay} style={{ opacity: opacity || 0.3 }} />

      <div className={css.texts}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Button href={href} darkBg blank={btnBlank}>
        {btnLabel}
      </Button>
    </div>
  );
}
