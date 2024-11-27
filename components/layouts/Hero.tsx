import Image from 'next/image';
import css from './Hero.module.scss';
import Link from 'next/link';
import Button from '../navigation/Button';

type Props = {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  source: string;
  home?: boolean;
  sponsored?: boolean;
  opacity?: number;
};

const Hero = ({ title, subtitle, source, home, opacity, sponsored }: Props) => {
  return (
    <>
      <header
        className={`${css.hero} ${home ? css.hero__home : ''}`}
        style={{ backgroundImage: `url(${source})` }}
      >
        <div
          className={`${css.hero__overlay} ${sponsored && css.sponsored}`}
          style={{ opacity: opacity || 0.5 }}
        />
        <div className={css.hero__content}>
          <h1 className={css.title}>{title}</h1>

          {subtitle && <p className={css.subtitle}>{subtitle}</p>}

          <div className={css.btns}>
            <Button to={'#challenges'}>The Challenges</Button>
            <Button to={'#howtoplay'} white>
              How To Play
            </Button>
          </div>
        </div>
        {sponsored && (
          <Link className={css.badge} href={'https://wgc.gg'}>
            <p>Powered by</p>
            <Image src="/logos/logo-wgc.svg" alt={''} width={200} height={200} />
          </Link>
        )}
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
};

export default Hero;
