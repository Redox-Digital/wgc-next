import Link from 'next/link';
import css from './Footer.module.scss';
import { MainNavLinks, UserLinks } from '@/constants/Navigation';
import Image from 'next/image';

type Props = {
  sponsored?: boolean;
};

export default function Footer({ sponsored }: Props) {
  if (sponsored)
    return (
      <footer className={css.footerSponsored}>
        Copyright 2024 -&nbsp;
        <Link href={'https://wgc.gg'} target="_blank">
          World Golf Challenge
        </Link>
      </footer>
    );
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        {' '}
        <div className={css.body}>
          <div className={css.col}>
            <Image src={'/logos/logo-wgc.svg'} alt={''} width={150} height={100} />
            <div className={css.socials}>
              <Link href={'#'}>
                <Image width={20} height={20} src={'/pictograms/instagram.svg'} alt={'Instagram'} />
              </Link>
              <Link href={'#'}>
                <Image width={20} height={20} src={'/pictograms/facebook.svg'} alt={'Facebook'} />
              </Link>
              <Link href={'#'}>
                <Image width={20} height={20} src={'/pictograms/linkedin.svg'} alt={'LinkedIn'} />
              </Link>
              <Link href={'#'}>
                <Image width={20} height={20} src={'/pictograms/envelope.svg'} alt={'Newsletter'} />
              </Link>
            </div>
          </div>
          <div className={css.col}>
            {MainNavLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={`${css.col} ${css.userLinks}`}>
            {UserLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={css.col}>
            <Image src={'/layouts/home/paypal.png'} alt={''} width={90} height={50} />
          </div>
        </div>
        <span className={css.spacer}></span>
        <div className={css.foot}>
          <span>
            Copyright 2024 -&nbsp;
            <Link href={'https://wgc.gg'} target="_blank">
              World Golf Challenge
            </Link>
          </span>
          |
          <span>
            <Link href={'#'}>Privacy Policy</Link>
          </span>
          |
          <span>
            <Link href={'#'}>Terms of agreement</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
