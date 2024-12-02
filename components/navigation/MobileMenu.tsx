import css from './MobileMenu.module.scss';
import menu from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';
import { NavLink, MainNavLinks, UserLinks } from '@/constants/Navigation';
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
        <div className={css.mobileMenu__links}>
          <div className={css.quickBtns}>
            {logged ? (
              <>
                <UserMenu
                  name={'Mikaël Ruffieux'}
                  hcp={'16.0'}
                  img={'https://wgc.gg/images/profile-picture.png'}
                  className={css.userProfile}
                />
              </>
            ) : (
              <>
                <Button to={'#'} onClick={toggleLogged}>
                  Register
                </Button>
                <Button to={'#'} white onClick={toggleLogged}>
                  Login
                </Button>
              </>
            )}
          </div>
          {MainNavLinks.map((l) => (
            <Link key={l.url} href={l.url} onClick={toggleMenu} className={css.link}>
              {l.icon && <Image src={l.icon} alt={''} width={20} height={20} />}
              {l.label}
            </Link>
          ))}

          {logged ? (
            <>
              <hr />
              {UserLinks.map((l) => (
                <Link key={`u-${l.url}`} href={l.url} onClick={toggleMenu} className={css.link}>
                  {l.icon && <Image src={l.icon} alt={''} width={20} height={20} />}
                  {l.label}
                </Link>
              ))}
              <Button to={'#'} addClass={css.danger} onClick={toggleLogged}>
                Sign Out
              </Button>
            </>
          ) : (
            ''
          )}
        </div>
      </nav>
    </>
  );
}
