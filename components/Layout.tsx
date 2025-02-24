import { usePathname } from 'next/navigation';
import Footer from './navigation/Footer';
import Menu from './navigation/Menu';
import { MainNavLinks } from '@/constants/Navigation';
import { useState } from 'react';

type Props = {
  children: string | JSX.Element;
};

export default function Layout({ children }: Props) {
  // DEV
  const [logged, setLogged] = useState<boolean>(true);

  const path = usePathname();

  return (
    <>
      {path === '/' || (
        <Menu
          logo={'/logos/logo-wgc.svg'}
          logoUrl={'/clubhouse'}
          links={MainNavLinks}
          logged={logged}
          setLogged={setLogged}
        />
      )}
      {children}
      {path === '/' || <Footer />}
    </>
  );
}
