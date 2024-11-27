import { useState } from 'react';
import css from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';
import { NavLink, MainNavLinks } from '@/pages/constants/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

type MenuProps = {
  logo: string;
  logoUrl: string;
  links: NavLink[];
};

export default function Menu({ logo, logoUrl, links }: MenuProps) {
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
              <Image src={logo} alt="" width={85} height={50} className="logo" />
            </Link>

            <div className={css.menu__links}>
              {links.map((link) => (
                <Link key={link.url} href={link.url}>
                  {link.icon ? <i>{link.icon}</i> : ''}
                  <span>{link.label}</span>
                </Link>
              ))}
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
}
