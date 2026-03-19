import css from './SponsorsBanner.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  children?: string | React.ReactNode;
  logos: { title: string; src: string }[];
};

export default function SponsorsBanner({ title, children, logos }: Props) {
  return (
    <section className={css.section}>
      <h2>L'excellence reconnue par les plus grands</h2>
      <p>
        Un événement organisé en partenariat avec BLUEGREEN et UGOLF, leaders du golf en France, et
        soutenu par Jaquet Droz et les 4Aces.
      </p>
      <div className={css.logos}>
        {logos.map((l) => (
          <Image key={l.src} src={l.src} alt={l.title} width={500} height={80} />
        ))}
      </div>
    </section>
  );
}
