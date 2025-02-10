import Link from 'next/link';
import css from './Footer.module.scss';
import { LegalLinks, MainNavLinks, socialLinks, UserLinks } from '@/constants/Navigation';
import Image from 'next/image';

type Props = {
  sponsored?: boolean;
};

export default function Footer({ sponsored }: Props) {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <small className={`${css.regionSelect} ${css.mobile}`}>
          Region :{' '}
          <select name="region" id="region">
            <option value="eu">Europe</option>
            <option value="am">Americas</option>
            <option value="as">Asia</option>
          </select>
        </small>
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

          <Image
            className={css.desktop}
            src={'/logos/logo-wgc-icon-gradient.svg'}
            alt={''}
            width={80}
            height={80}
          />

          <div className={`${css.col} ${css.mobile}`}>
            <h4>Socials</h4>
            <div className={css.socials}>
              {socialLinks.map((link) => (
                <Link href={link.url} key={link.url} target="_blank">
                  {link.icon ? (
                    <Image width={16} height={16} src={link.icon} alt={link.label} />
                  ) : (
                    link.label
                  )}
                </Link>
              ))}
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

          <small className={`${css.regionSelect} ${css.desktop}`}>
            Region :{' '}
            <select name="region" id="region">
              <option value="eu">Europe</option>
              <option value="am">Americas</option>
              <option value="as">Asia</option>
            </select>
          </small>

          <div className={`${css.socials} ${css.desktop}`}>
            {socialLinks.map((link) => (
              <Link href={link.url} key={link.url} target="_blank">
                {link.icon ? (
                  <Image width={16} height={16} src={link.icon} alt={link.label} />
                ) : (
                  link.label
                )}
              </Link>
            ))}
          </div>
          <Image
            className={css.mobile}
            src={'/logos/logo-wgc-icon-gradient.svg'}
            alt={''}
            width={80}
            height={80}
          />
        </div>
      </div>
    </footer>
  );
}
