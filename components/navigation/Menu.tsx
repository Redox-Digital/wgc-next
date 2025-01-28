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
  logged?: boolean;
  setLogged: (logged: boolean) => void;
};

export default function Menu({ logo, logoUrl, links, sponsored, logged, setLogged }: MenuProps) {
  //navbar scroll when active state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLog = () => setLogged(!logged);

  return (
    <>
      <nav className={`${css.menu} ${menuOpen ? css.open : ''}`}>
        <div className={css.mainMenu}>
          <div className={css.mainMenu__container}>
            <button
              className={`${burgerStyle.burger} ${menuOpen ? burgerStyle.burger__closed : ''}`}
              onClick={toggleMenu}
              aria-label="Ouvrir la navigation mobile"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <Link href="/" className={css.logo} aria-label="Accéder à la page d'accueil">
              <h4>{menuOpen ? 'Menu' : 'World Golf Challenge'}</h4>
              {/* <Image src={logo} alt="" width={85} height={50} className="logo" /> */}
            </Link>
            {/* 
                          {links.map((link) => (
                <Link key={link.url} href={link.url}>
                  {link.icon ? <Image src={link.icon} alt={''} width={20} height={20} /> : ''}
                  <span>{link.label}</span>
                </Link>
              ))}
            
            */}

            {logged ? (
              <Link href="/profile" className={css.profile}>
                <Image
                  src="https://wgc.gg/images/profile-picture.png"
                  width={40}
                  height={40}
                  alt="Username"
                />
              </Link>
            ) : (
              <>
                <Link href="/join" className={`${css.profile} ${css.notLogged}`}>
                  <Image src="/pictograms/user.svg" width={20} height={20} alt="Username" />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <MobileMenu
        open={menuOpen}
        toggleMenu={toggleMenu}
        toggleLogged={toggleLog}
        logged={logged}
      />
    </>
  );
}

type UserMenuType = {
  name: string;
  hcp: string;
  img: string;
  className?: string;
  flag?: string;
};

export function UserMenu({ name, img, hcp, className, flag = '🏳️' }: UserMenuType) {
  return (
    <div className={`${css.userMenu} ${className}`}>
      <Image src={img} alt={''} width={80} height={80} />
      <h2>
        {name} {flag}
      </h2>
      <small>HCP: {hcp} | Wallet : $100.00</small>
      <Button href={'/profile'} small>
        See your profile
      </Button>
    </div>
  );
}
