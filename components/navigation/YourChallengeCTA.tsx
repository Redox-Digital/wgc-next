import Link from 'next/link';
import css from './YourChallengeCTA.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function YourChallengeCTA() {
  const [open, toggleOpen] = useState<boolean>(false);
  return (
    <div className={`${css.cta} ${open && css.open}`}>
      <button type="button" onClick={() => toggleOpen(!open)}>
        <span>Your Challenges</span>
        <Image src={'/pictograms/angle-up.svg'} alt={''} width={16} height={16} />
      </button>
      <div className={css.content}>
        <div className={css.head}>
          EXTRACURRICULAR Challenge
          <br />
          Oct. 7th to 14th
        </div>
        <div className={css.body}>
          <b>1 player registered</b>
          <br />
          <span>No score entered</span>
        </div>
        <Link href="#">Go to lobby</Link>
      </div>
    </div>
  );
}
