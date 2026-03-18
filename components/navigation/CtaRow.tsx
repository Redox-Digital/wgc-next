import Link from 'next/link';
import css from './CtaRow.module.scss';
import Image from 'next/image';

const links: { label: string; href: string; img?: string }[] = [
  {
    label: 'Your Profile',
    href: '/profile',
    img: '/layouts/clubhouse/wgc-cta-profile.jpg',
  },
  {
    label: 'Terms of agreement',
    href: '/terms',
    img: '/layouts/clubhouse/wgc-cta-terms.jpg',
  },
  {
    label: 'Net Stableford',
    href: '/support/net-stableford',
    img: '/layouts/clubhouse/wgc-cta-netstableford.jpg',
  },
  {
    label: 'FAQ',
    href: '/support',
    img: '/layouts/clubhouse/wgc-contact-cta.jpg',
  },
];

// Static for now, no dynamic links
export default function CtaRow() {
  return (
    <div className={css.row}>
      {links.map((l) => (
        <Link className={css.cta} href={l.href}>
          {l.img && <Image src={l.img} alt="" fill />}
          <div className={css.overlay} />
          <span>{l.label}</span>
        </Link>
      ))}
    </div>
  );
}
