import Image from 'next/image';
import css from './Hero.module.scss';
import Link from 'next/link';
import Button from '../navigation/Button';

type Props = {
  title: string | React.ReactNode;
  children?: string | React.ReactNode;
  source: string;
  home?: boolean;
  opacity?: number;
  btns?: { text: string; href: string; plain?: boolean }[];
};

const Hero = ({ title, children, source, home, opacity, btns }: Props) => {
  return (
    <>
      <header className={`${css.hero}`}>
        <h1>{title}</h1>
        <div className={css.content}>{children}</div>
        <div className={css.btns}>
          {btns &&
            btns.map((btn) => (
              <Button key={btn.href} href={btn.href} outline={!btn.plain} small darkBg>
                {btn.text}
              </Button>
            ))}
        </div>
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
};

export default Hero;
