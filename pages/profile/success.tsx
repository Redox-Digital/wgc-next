'use client';
import PageTitle from '@/components/content/PageTitle';
import css from './Onboarding.module.scss';
import Button from '@/components/navigation/Button';
import Carousel from '@/components/content/Carousel';
import { useState } from 'react';

// import Lottie from 'lottie-react';
import SuccessAnimation from '@/public/animations/animation_confetti_2.json';
import AnimationLottie from '@/components/content/AnimationLottie';

export default function ProfileSuccess() {
  const [overlay, hideOverlay] = useState<boolean>(false);

  return (
    <main className={css.success}>
      <section
        className={`${css.confirmation} ${overlay && css.hide}`}
        onClick={() => hideOverlay(true)}
      >
        <AnimationLottie animationPath={SuccessAnimation} className={css.animation} loop={false} />
        <PageTitle title="Your account was created successfully!" className={css.titles}>
          <p>
            You will recieve an e-mail confirmation soon.
            <br />
            In the meantime, let us show you around.
            <br />
            <br />
            <small>
              <u>Tap to continue</u>
            </small>
          </p>
        </PageTitle>
      </section>
      <section className={css.howToPlay}>
        <PageTitle title="How to play on WGC" className={css.titles}>
          <p>The concept is really simple</p>
        </PageTitle>
        <Carousel />
        <div className={css.btns}>
          <Button href="/challenges">I got it, let&apos;s join a Challenge</Button>
          <Button href="/support" outline>
            I need more explanations
          </Button>
        </div>
      </section>
    </main>
  );
}
