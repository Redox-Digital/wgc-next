import { useState } from 'react';
import css from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';
import { NavLink, MainNavLinks, UserLinks, LegalLinks, socialLinks } from '@/constants/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Button from './Button';
import StatBar from '../content/StatBar';

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
      <nav className={`${css.topMenu} ${menuOpen ? css.open : ''}`}>
        <div className={css.mainMenu}>
          <div className={css.mainMenu__container}>
            <button
              className={`${burgerStyle.burger} ${menuOpen ? burgerStyle.burger__closed : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {menuOpen ? (
              <h4 className={css.logo}>Menu</h4>
            ) : (
              <Link href={logoUrl} className={css.logo}>
                <Image src="/logos/logo-wgc-full-white.svg" alt="" width={250} height={70} />
              </Link>
            )}

            {logged ? (
              <Link href="/profile" className={css.profile} onClick={() => setMenuOpen(false)}>
                <Image
                  src="https://wgc.gg/images/profile-picture.png"
                  width={40}
                  height={40}
                  alt="Username"
                />
              </Link>
            ) : (
              <>
                <Link
                  href="/profile/login"
                  className={`${css.profile} ${css.notLogged}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <Image src="/pictograms/user-white.svg" width={16} height={16} alt="" />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <SideMenu toggleLogged={toggleLog} logged={logged} />

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
  onClick?: () => void;
};

export function UserMenu({ name, img, hcp, className, flag = '🏳️', onClick }: UserMenuType) {
  return (
    <div className={`${css.userMenu} ${className}`}>
      <Image src={img} alt={''} width={80} height={80} />
      <h2>
        {name} {flag}
      </h2>
      <small>
        HCP: {hcp} |{' '}
        <Image src="/pictograms/wallet-white.svg" alt="Wallet" width={15} height={10} />
        &nbsp;$100.00
      </small>
      <Button href={'/profile'} onClick={onClick}>
        See your profile
      </Button>
    </div>
  );
}

type SideMenuProps = {
  logged?: boolean;
  toggleLogged: () => void;
};

export function SideMenu({ logged, toggleLogged }: SideMenuProps) {
  return (
    <nav className={`${css.sideMenu}`}>
      <Link href="/clubhouse">
        <Image src="/logos/wgc-text.svg" alt="" width={300} height={80} />
      </Link>

      <div className={css.navigation}>
        <h4>Navigation</h4>
        {MainNavLinks.map((l) => (
          <Link key={l.url} href={l.url} className={css.link}>
            {l.icon && <Image src={l.icon} alt={''} width={20} height={20} />}
            {l.label}
          </Link>
        ))}
      </div>

      {logged ? (
        <UserMenu
          name={'Jonas Jaeggi'}
          hcp={'16.0'}
          img={'https://wgc.gg/images/profile-picture.png'}
        />
      ) : (
        <>
          <div className={css.btns}>
            <Button href={'/profile/login'}>Login</Button>
            <Button href={'/profile/create'} outline darkBg>
              Register
            </Button>
          </div>
        </>
      )}

      {logged && (
        <>
          <StatBar
            elements={[
              {
                name: 'Ongoing Challenges',
                value: 13,
                picto: '',
              },
              {
                name: 'Monthly rank',
                value: '#4',
                picto: '',
              },
            ]}
            className={css.stats}
          />

          <Button outline darkBg small onClick={toggleLogged} className={css.signOutBtn}>
            Sign out
          </Button>
        </>
      )}
      {/* 
      <div className={css.socials}>
        {socialLinks.map((link) => (
          <Link key={link.url} href={link.url} title={link.label}>
            <Image src={link.icon || ''} alt={link.label} height={18} width={18} />
          </Link>
        ))}
      </div>


      <div className={css.legal}>
        {LegalLinks.map((link) => (
          <Link key={link.url} href={link.url}>
            {link.label}
          </Link>
        ))}
      </div> */}
    </nav>
  );
}
