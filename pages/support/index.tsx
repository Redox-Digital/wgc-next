import PageTitle from '@/components/content/PageTitle';
import css from './SupportPages.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Faq from '@/components/content/Faq';
import CTA from '@/components/navigation/CTA';

export default function Support() {
  const btns = [
    {
      label: 'Challenges',
      href: '/support/challenges',
      icon: '/pictograms/support-challenge.svg',
    },
    {
      label: 'Net Stableford',
      href: '/support/net-stableford',
      icon: '/pictograms/support-netstableford.svg',
    },
    { label: 'Money', href: '/support/money', icon: '/pictograms/support-money.svg' },
    { label: 'About WGC', href: '/support/about', icon: '/pictograms/support-about.svg' },
  ];

  return (
    <main className={css.supportPage}>
      <PageTitle title="Support" returnBtn>
        <p>What can we help you with ?</p>
      </PageTitle>
      <div className={css.navBtns}>
        {btns.map((btn) => (
          <Link key={btn.label} href={btn.href}>
            <Image src={btn.icon} alt="" width={20} height={20} />
            <h4>{btn.label}</h4>
          </Link>
        ))}
      </div>
      <section>
        <h2>Frequently Asked Questions</h2>
        <Faq />
      </section>

      <div>
        <CTA
          title={'We are here for you'}
          description={'If you have any question, or need further assistance, we are here for you.'}
          btnLabel={'hello@wgc.gg'}
          href={'mailto:hello@wgc.gg'}
          img={'https://picsum.photos/300/300'}
        />
      </div>
    </main>
  );
}
