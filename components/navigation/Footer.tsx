import Link from 'next/link';
import css from './Footer.module.scss';
import { LegalLinks, MainNavLinks, socialLinks, UserLinks } from '@/constants/Navigation';
import Image from 'next/image';
import RegionSelect, { LangSelect } from './LocalesSelectors';
import Logo from '../content/Logo';

type Props = {
  light?: boolean;
  sponsored?: boolean;
};

export default function Footer({ light, sponsored }: Props) {
  return (
    <footer className={`${css.footer} ${light && css.light}`}>
      <div className={css.container}>
        <small className={`${css.localesSelects} ${css.mobile}`}>
          <LangSelect />
          <RegionSelect />
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

          <Logo className={`${css.desktop}`} />

          <div className={`${css.col} ${css.mobile}`}>
            <h4>Socials</h4>
            <div className={css.socials}>
              {socialLinks.map((link) => (
                <Link href={link.url} key={link.url} target="_blank">
                  {link.svg || link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={css.foot}>
          <span>
            &copy; 2026{' '}
            <Link href={'https://wgc.gg'} target="_blank">
              World Golf Challenge
            </Link>
          </span>

          <small className={`${css.localesSelects} ${css.desktop}`}>
            <LangSelect />
            <RegionSelect />
          </small>

          <div className={`${css.socials} ${css.desktop}`}>
            {socialLinks.map((link) => (
              <Link href={link.url} key={link.url} target="_blank">
                {link.svg || link.label}
              </Link>
            ))}
          </div>
          <Logo className={css.mobile} />
        </div>
      </div>
    </footer>
  );
}
