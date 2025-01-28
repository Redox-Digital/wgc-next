import Button from './Button';
import css from './CTA.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  btnLabel: string;
  href: string;
  img: string;
};

export default function CTA({ title, description, btnLabel, href, img }: Props) {
  return (
    <div className={css.cta}>
      <Image src={img} alt="" fill />
      <div className={css.overlay} />

      <div className={css.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <Button href={href}>{btnLabel}</Button>
    </div>
  );
}
