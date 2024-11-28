import Header from './navigation/SponsoredMenu';
import Footer from './navigation/Footer';
import Menu from './navigation/Menu';
import { MainNavLinks } from '@/constants/Navigation';

type Props = {
  children: string | JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Menu logo={'/logos/logo-wgc.svg'} logoUrl={'/'} links={MainNavLinks} />
      {children}
      <Footer />
    </>
  );
}
