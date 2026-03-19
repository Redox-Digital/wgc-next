import Button from '@/components/navigation/Button';
import css from './LandingPage.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import SweetAlert from '@/components/content/SweetAlert';
import { SweetAlertJoin } from '@/components/content/SweetAlert';

import logo from '@/public/logos/logo-wgc-full-accent-white.svg';
import { useEffect } from 'react';
import { ChangeBody } from '@/utils/changePageSettings';

export default function LandingPage() {
  // DEV
  // const showPopup = () => SweetAlert();
  const showPopup = () => SweetAlertJoin();

  return (
    <>
      <ChangeBody color="#002F18" gradientBg />

      <main className={css.landingPage}>
        <div className={css.container}>
          <Image
            src="/logos/logo-wgc-icon-dark.svg"
            alt=""
            width={1000}
            height={1630}
            className={css.backgroundDeco}
          />
          <div className={css.content}>
            <div className={css.title}>
              <Image src={logo} alt="" width={800} height={250} priority />
              <h1>World Golf Challenge</h1>
            </div>
            <p>
              Play in the club of your choice in real life while measuring yourself & your score,
              virtually against any other player in the world!
            </p>

            <div className={css.btns}>
              {/* Only for dev purpose, the Swal button isn't meant to be used here. 
              <Button onClick={showPopup}>Swal</Button> */}

              <Button href="/profile/login/">Login</Button>
              <Button href="/profile/create/" outline darkBg>
                Register
              </Button>
              <Link className="textLink" href="/clubhouse">
                To the Clubhouse
              </Link>
            </div>
          </div>
          <div className={css.deco}>
            <video autoPlay loop muted playsInline>
              <source src="/layouts/landing/wgc-landing-animation.webm" type="video/mp4" />
            </video>
          </div>
        </div>
        <Link href="/support/about" className={css.copy}>
          &copy; World Golf Challenge
        </Link>
      </main>
    </>
  );
}
