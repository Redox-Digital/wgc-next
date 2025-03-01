import Link from 'next/link';
import Image from 'next/image';
import css from './SponsorsSection.module.scss';
import SectionTitle from './SectionTitle';

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
      <SectionTitle title="Available challenges">
        <p>
          E-Meet, compete, and connect with golfers around the globe.
          <br />
          <b>Scores must be officially recorded by your recognized golf Federation</b>
        </p>
      </SectionTitle>
      <ul>
        {sponsors.map((s, key) => (
          <li key={key}>
            <Link href={s.url}>
              <Image src={s.img} alt={''} height={250} width={250} />
              <div className={css.texts}>
                <h4>{s.name}</h4>
                <small className="xs">{s.runningChallenge} running Challenge(s)</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
