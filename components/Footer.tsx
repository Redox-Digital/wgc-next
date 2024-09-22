import Link from 'next/link';
import css from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={css.footer}>
      Copyright 2024 -&nbsp;
      <Link href={'https://wgc.gg'} target="_blank">
        World Golf Challenge
      </Link>
    </footer>
  );
}
