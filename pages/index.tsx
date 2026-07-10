import Button from '@/components/navigation/Button';
import css from './LandingPage.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import SweetAlert from '@/components/content/SweetAlert';
import { SweetAlertJoin } from '@/components/content/SweetAlert';

import logo from '@/public/logos/logo-wgc-full-accent-white.svg';
import { useEffect } from 'react';
import { ChangeBody } from '@/utils/changePageSettings';
import HowItWorksSection from '@/components/content/HowItWorksSection';

export default function LandingPage() {
  // DEV
  // const showPopup = () => SweetAlert();
  const showPopup = () => SweetAlertJoin();

  return (
    <>
      <ChangeBody color="#002F18" gradientBg />

      <main className={css.landingPage}>
        <Image
          src="/logos/logo-wgc-icon-dark.svg"
          alt=""
          width={1000}
          height={1630}
          className={css.backgroundDeco}
        />

        <section className={css.hero}>
          <div className={css.content}>
            <Image src={logo} alt="" width={800} height={250} priority />

            <div className={css.titles}>
              <h1>
                Compete against golfers <em>worldwide</em> <br />— from your home course.
              </h1>
              <p>
                Submit your official handicap scores and climb a global leaderboard. No travel
                needed.
              </p>
            </div>

            <div className={css.btns}>
              <Button href="/profile/create/">Register for free</Button>
              <Button href="/profile/login/" outline darkBg>
                Login
              </Button>
              |
              <Link className="textLink" href="/clubhouse">
                How it works
              </Link>
            </div>
          </div>
          <div className={css.deco}>
            <video autoPlay loop muted playsInline>
              <source src="/layouts/landing/wgc-landing-animation.webm" type="video/mp4" />
            </video>
          </div>
        </section>

        <HowItWorksSection className={css.fullWidthSct}></HowItWorksSection>
      </main>
    </>
  );
}
