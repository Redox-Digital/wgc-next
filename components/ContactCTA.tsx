import css from './ContactCTA.module.scss';
import Button from './navigation/Button';
import Image from 'next/image';

type Props = {
  title: React.ReactNode;
  desc: React.ReactNode;
  btnLink?: string;
  btnLabel?: string;
  img: string;
  grey?: boolean;
};

export default function ContactCTA({ title, desc, btnLink, btnLabel, grey, img }: Props) {
  return (
    <section className={`${css.contactCTA} ${grey && css.grey}`}>
      <div className={css.contactCTA__texts}>
        <h2>{title}</h2>
        <p>{desc}</p>
        {btnLink && (
          <Button to={btnLink} blank>
            {btnLabel || 'Learn more'}
          </Button>
        )}
      </div>
      <div className={css.contactCTA__img}>
        <Image src={img} alt={''} fill />
      </div>
    </section>
  );
}
