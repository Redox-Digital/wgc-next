import Button from '../navigation/Button';
import css from './Hero.module.scss';
import Image from 'next/image';

type Props = {
  title: string | React.ReactNode;
  gradient?: boolean;
  children?: string | React.ReactNode;
};

export default function Hero({ title, children, gradient }: Props) {
  return (
    <>
      <header className={`${css.hero} ${gradient && css.gradientBg}`}>
        <h1>{title}</h1>
        <div className={css.content}>{children}</div>
      </header>

      <span id="intro">{/* Anchor */}</span>
    </>
  );
}

type EventHeroProps = {
  alt?: boolean;
};

// DEV : static values for now.
export function EventHero({ alt }: EventHeroProps) {
  return (
    <>
      <header className={`${css.eventHero} ${alt && css.alt}`}>
        <div className={css.container}>
          <Image
            className={css.mainSponsor}
            // DEV : update file to svg
            src="/sponsors/JaquetDroz/blocmarque-BGUG_white.svg"
            alt="BLUEGREEN & UGOLF"
            width={300}
            height={90}
          />

          <div className={css.content}>
            <div className={css.texts}>
              {alt ? <h1>Visez l'exceptionnel</h1> : <h1>Play golf, win big</h1>}
              {alt ? (
                <p>
                  <b>Une montre à € 300’000 et votre place lors du LIV Pro-Am.</b>
                  <br />
                  Jaquet Droz Challenge, le premier tournoi international où votre passion compte
                  plus que votre score.
                </p>
              ) : (
                <p>
                  Join the exclusive <b>Jaquet Droz Challenge</b> to win a unique timepiece worth{' '}
                  <b>€300’000.-</b> and <b>LIV Golf Pro-Am spots</b>.
                </p>
              )}
            </div>
            <div className={css.actions}>
              {alt ? (
                /* If user already logged in : don't show. */
                <Button href="/profile/login">Sign in</Button>
              ) : (
                <Button href="/jaquet-droz/">The Jaquet Droz Challenge</Button>
              )}

              <div className={css.secondarySponsor}>
                <small>proposed by</small>{' '}
                <Image
                  src="/sponsors/JaquetDroz/JDx4A_white.svg"
                  alt="Jaquet Droz x 4Aces GC"
                  width={176}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>

        {alt ? (
          <Image
            src="/sponsors/JaquetDroz/JD-03-detour-sq.png"
            alt=""
            width={550}
            height={550}
            className={css.sideImg}
          />
        ) : (
          <Image
            src="/sponsors/JaquetDroz/JD-01-detour-zoomed.png"
            alt=""
            width={550}
            height={550}
            className={css.sideImg}
          />
        )}
      </header>

      <span id="intro">{/* Anchor */}</span>
    </>
  );
}
