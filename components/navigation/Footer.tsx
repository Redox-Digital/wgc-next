import Link from 'next/link';
import css from './Footer.module.scss';
import { LegalLinks, MainNavLinks, UserLinks } from '@/constants/Navigation';
import Image from 'next/image';

type Props = {
  sponsored?: boolean;
};

export default function Footer({ sponsored }: Props) {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.body}>
          <div className={css.col}>
            <h4>Navigation</h4>
            {MainNavLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={`${css.col} ${css.userLinks}`}>
            <h4>Profile</h4>
            {UserLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={css.col}>
            <h4>Legal</h4>
            {LegalLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={css.col}>
            <h4>Socials</h4>
            <div className={css.socials}>
              <Link href={'#'}>
                <Image width={16} height={16} src={'/pictograms/instagram.svg'} alt={'Instagram'} />
              </Link>
              <Link href={'#'}>
                <Image width={16} height={16} src={'/pictograms/facebook.svg'} alt={'Facebook'} />
              </Link>
              <Link href={'#'}>
                <Image width={16} height={16} src={'/pictograms/linkedin.svg'} alt={'LinkedIn'} />
              </Link>
              <Link href={'#'}>
                <Image width={16} height={16} src={'/pictograms/envelope.svg'} alt={'Newsletter'} />
              </Link>

              <small className={css.regionSelect}>
                Region :{' '}
                <select name="region" id="region">
                  <option value="eu">Europe</option>
                  <option value="am">Americas</option>
                  <option value="as">Asia</option>
                </select>
              </small>
            </div>
          </div>
        </div>
        <div className={css.foot}>
          <span>
            &copy; 2025{' '}
            <Link href={'https://wgc.gg'} target="_blank">
              World Golf Challenge
            </Link>
          </span>
          <Image src={'/logos/logo-wgc-icon-gradient.svg'} alt={''} width={80} height={80} />
        </div>
      </div>
    </footer>
  );
}
