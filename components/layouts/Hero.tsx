import Image from 'next/image';
import css from './Hero.module.scss';
import Link from 'next/link';
import Button from '../navigation/Button';

type Props = {
  title: string | React.ReactNode;
  children?: string | React.ReactNode;
};

const Hero = ({ title, children }: Props) => {
  return (
    <>
      <header className={`${css.hero}`}>
        <h1>{title}</h1>
        <div className={css.content}>{children}</div>
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
};

export default Hero;
