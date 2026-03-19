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
              {alt ? <h1>Jaquet Droz Challenge</h1> : <h1>Play golf, win big</h1>}
              {alt ? (
                <p>
                  Play in the club of your choice in real life while measuring yourself & your
                  score, virtually against any other player in the world!
                </p>
              ) : (
                <p>
                  Join the exclusive <b>Jaquet Droz Challenge</b> to win a unique timepiece worth
                  <b>€300’000.-</b> and <b>LIV Golf Pro-Am spots</b>.
                </p>
              )}
            </div>
            <div className={css.actions}>
              {alt || <Button href="/jaquet-droz">Join the Challenge</Button>}

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
            src="/sponsors/JaquetDroz/JD_tourbillon_2_square.png"
            alt=""
            width={550}
            height={550}
            className={css.sideImg}
          />
        ) : (
          <Image
            src="/sponsors/JaquetDroz/JD_tourbillon_square.png"
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
