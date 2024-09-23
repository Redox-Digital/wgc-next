import style from './MobileMenu.module.scss';
import menu from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  open: boolean;
  toggleMenu: () => void;
};

export default function MobileMenu(props: Props) {
  const { open, toggleMenu } = props;

  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <>
      <nav
        className={`${style.mobileMenu} ${
          open ? style.mobileMenu__open : style.mobileMenu__closed
        }`}
      >
        <div className={style.mobileMenu__links}>
          <Link href="/#challenges" onClick={toggleMenu}>
            Challenges
          </Link>
          <Link href="/lobby" onClick={toggleMenu}>
            Lobby
          </Link>
          <Link href="/rankings" onClick={toggleMenu}>
            Rankings
          </Link>
          <Link href="/#howtoplay" onClick={toggleMenu}>
            How To Play
          </Link>
        </div>
      </nav>
    </>
  );
}
