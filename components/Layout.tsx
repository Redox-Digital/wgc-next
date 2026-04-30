import { usePathname } from 'next/navigation';
import Footer from './navigation/Footer';
import Menu from './navigation/menu/Menu';
import { MainNavLinks } from '@/constants/Navigation';
import { useState } from 'react';

type Props = {
  children: string | React.ReactNode;
};

export default function Layout({ children }: Props) {
  // DEV
  const [logged, setLogged] = useState<boolean>(true);

  const path = usePathname();

  const transparentMenuPages: string[] = [
    '/clubhouse/',
    '/jaquet-droz/',
    '/extracurricular/',
    '/4aces/',
  ];

  return (
    <>
      {path === '/' || (
        <Menu
          logo={'/logos/logo-wgc.svg'}
          logoUrl={'/clubhouse'}
          links={MainNavLinks}
          logged={logged}
          setLogged={setLogged}
          transparent={transparentMenuPages.includes(path)}
        />
      )}
      {children}
      {path === '/' || <Footer />}
    </>
  );
}
