import Link from 'next/link';
import Image from 'next/image';
import css from './SponsorsSection.module.scss';

type Sponsor = {
  name: string;
  img: string;
  url: string;
  runningChallenge: number;
};

type Props = {
  sponsors: Sponsor[];
};

export default function SponsorsSection({ sponsors }: Props) {
  return (
    <section className={css.section}>
      <ul>
        {sponsors.map((s, key) => (
          <li key={key}>
            <Link href={s.url}>
              <Image src={s.img} alt={''} height={250} width={250} />
              <h5>{s.name}</h5>
              <p>{s.runningChallenge} running Challenge(s)</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
