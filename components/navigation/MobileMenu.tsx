import css from './MobileMenu.module.scss';
import menu from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';
import { NavLink, MainNavLinks, UserLinks, LegalLinks } from '@/constants/Navigation';
import Image from 'next/image';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './Button';
import { UserMenu } from './Menu';

type Props = {
  open: boolean;
  logged?: boolean;
  toggleLogged: () => void;
  toggleMenu: () => void;
};

export default function MobileMenu({ open, toggleMenu, toggleLogged, logged }: Props) {
  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <>
      <nav className={`${css.mobileMenu} ${open ? css.mobileMenu__open : css.mobileMenu__closed}`}>
        <div className={css.head}>
          {logged ? (
            <>
              <UserMenu
                name={'Mikaël Ruffieux'}
                hcp={'16.0'}
                img={'https://wgc.gg/images/profile-picture.png'}
                className={css.userProfile}
                onClick={toggleMenu}
              />
            </>
          ) : (
            <>
              <Button href={'/login'}>Login</Button>
              <Button href={'/register'} outline darkBg>
                Register
              </Button>
            </>
          )}
        </div>
        <div className={css.body}>
          <div className={css.item}>
            <h4>Navigation</h4>
            {MainNavLinks.map((l) => (
              <Link key={l.url} href={l.url} onClick={toggleMenu} className={css.link}>
                {l.icon && <Image src={l.icon} alt={''} width={20} height={20} />}
                {l.label}
              </Link>
            ))}
          </div>

          <div className={`${css.item} ${css.userLinks}`}>
            <h4>Profile</h4>

            {logged ? (
              <>
                {UserLinks.map((l) => (
                  <Link key={`u-${l.url}`} href={l.url} onClick={toggleMenu} className={css.link}>
                    {l.icon && <Image src={l.icon} alt={''} width={20} height={20} />}
                    {l.label}
                  </Link>
                ))}
                <Link href={'#'} onClick={toggleLogged} className={css.danger}>
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            )}
          </div>

          <div className={css.item}>
            <h4>Legal</h4>
            {LegalLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>

          <small>
            Region :{' '}
            <select name="region" id="region">
              <option value="eu">Europe</option>
              <option value="am">Americas</option>
              <option value="as">Asia</option>
            </select>
          </small>
        </div>
      </nav>
    </>
  );
}
