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

  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

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
          <Link href="/" onClick={toggleMenu} aria-label="Accéder à la page d'accueil">
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} aria-label="Accéder à la page d'à propos">
            About
          </Link>
          <Link href="/careers" onClick={toggleMenu} aria-label="Accéder à la page d'emplois">
            Careers
          </Link>
          <Link href="/contact" onClick={toggleMenu} aria-label="Accéder à la page de contact">
            Contact us
          </Link>
        </div>
      </nav>
    </>
  );
}
