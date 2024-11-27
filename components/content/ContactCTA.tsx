import css from './ContactCTA.module.scss';
import Button from '../navigation/Button';
import Image from 'next/image';

type Props = {
  title: React.ReactNode;
  children?: string | React.ReactNode;
  img: string;
  altBackground?: boolean;
};

export default function ContactCTA({ title, img, children, altBackground }: Props) {
  return (
    <section className={`${css.contactCTA} ${altBackground && css.altBg}`}>
      <div className={css.contactCTA__texts}>
        <h2>{title}</h2>
        {children}
      </div>
      <div className={css.contactCTA__img}>
        <Image src={img} alt={''} fill />
      </div>
    </section>
  );
}
