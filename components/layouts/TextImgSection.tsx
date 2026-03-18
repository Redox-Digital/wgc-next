import css from './TextImgSection.module.scss';
import Image from 'next/image';

type Props = {
  img: string;
  children: React.ReactNode;
  inverted?: boolean;
  className?: string;
};

export default function TextImgSection({ img, children, inverted, className }: Props) {
  return (
    <section className={`${css.section} ${inverted && css.inverted} ${className}`}>
      <Image src={img} alt="" width={500} height={600} />
      <div className={css.content}>{children}</div>
    </section>
  );
}
