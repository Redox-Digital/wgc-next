import Header from './navigation/SponsoredMenu';
import Footer from './navigation/Footer';
import Menu from './navigation/Menu';
import { MainNavLinks } from '@/constants/Navigation';
import { useState } from 'react';

type Props = {
  children: string | JSX.Element;
};

export default function Layout({ children }: Props) {
  const [logged, setLogged] = useState<boolean>(true);

  return (
    <>
      <Menu
        logo={'/logos/logo-wgc.svg'}
        logoUrl={'/'}
        links={MainNavLinks}
        logged={logged}
        setLogged={setLogged}
      />
      {children}
      <Footer />
    </>
  );
}
