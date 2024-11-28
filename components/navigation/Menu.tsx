import { useState } from 'react';
import css from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';
import { NavLink, MainNavLinks, UserLinks } from '@/constants/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Button from './Button';

type MenuProps = {
  logo: string;
  logoUrl: string;
  links: NavLink[];
  sponsored?: boolean;
};

export default function Menu({ logo, logoUrl, links, sponsored }: MenuProps) {
  //navbar scroll when active state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLog = () => setLogged(!logged);

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
                  {link.icon ? <Image src={link.icon} alt={''} width={20} height={20} /> : ''}
                  <span>{link.label}</span>
                </Link>
              ))}
              <div className={css.btns}>
                {logged ? (
                  <UserMenu
                    name={'Mikaël Ruffieux'}
                    hcp={'16.0'}
                    img={'https://wgc.gg/images/profile-picture.png'}
                    toggleLog={toggleLog}
                  />
                ) : (
                  <>
                    <Button to={'#'} onClick={toggleLog} addClass={css.btn}>
                      Register
                    </Button>
                    <Button
                      white
                      to={'#'}
                      onClick={toggleLog}
                      addClass={`${css.btn} ${css.btn__white}`}
                    >
                      Login
                    </Button>
                  </>
                )}
              </div>
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

type UserMenuType = {
  name: string;
  hcp: string;
  img: string;
  toggleLog: () => void;
};

export function UserMenu({ name, img, hcp, toggleLog }: UserMenuType) {
  return (
    <div className={css.userMenu}>
      <Link href={'#'} onClick={toggleLog}>
        <small>
          {name}
          <br />
          HCP: {hcp}
        </small>
        <Image src={img} alt={''} width={35} height={35} />
      </Link>
    </div>
  );
}
