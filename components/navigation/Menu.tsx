import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logos/logoipsum.svg';
import css from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';
import Button from './Button';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  //navbar scroll when active state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <>
      <nav className={`${css.menu} ${menuOpen ? css.menu__open : ''}`}>
        <div className={css.mainMenu}>
          <div className={css.mainMenu__container}>
            <Link href="/" className={css.logo} aria-label="Accéder à la page d'accueil">
              <Image src={logo} alt="" height={30} className="logo" />
            </Link>

            <div className={css.menu__links}>
              <Link href="/" aria-label="Accéder à la page d'accueil">
                Home
              </Link>
              <Link
                href="#"
                scroll={false}
                className={css.submenu}
                aria-label="Afficher nos services"
              >
                Services
              </Link>

              <Link href="/about" aria-label="Accéder à la page d'à propos">
                About
              </Link>
              <Link href="/careers" aria-label="Accéder à la page d'emplois">
                Careers
              </Link>
              <Button
                ariaLabel="Vers le formulaire de contact"
                to="/contact"
                size="small"
                addClass="btn"
              >
                Contact us
              </Button>
            </div>
            <button
              className={`${burgerStyle.burger} ${menuOpen ? burgerStyle.burger__closed : ''}`}
              onClick={toggleMenu}
              aria-label="Ouvrir la navigation mobile"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu open={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
