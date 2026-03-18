import css from './TextImgSection.module.scss';
import Image from 'next/image';

type Props = {
  img: string;
  children: React.ReactNode;
  inverted?: boolean;
  className?: string;
  lightBg?: boolean;
};

export default function TextImgSection({ img, children, inverted, className, lightBg }: Props) {
  return (
    <section
      className={`${css.section} ${inverted && css.inverted} ${lightBg && css.light} ${className}`}
    >
      <Image src={img} alt="" width={500} height={600} />
      <div className={css.content}>{children}</div>
    </section>
  );
}
