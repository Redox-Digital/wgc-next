import PageTitle from '@/components/content/PageTitle';
import Image from 'next/image';
import css from './SupportPages.module.scss';

export default function MoneySupportPage() {
  return (
    <main className={css.supportPage}>
      <PageTitle title="Money" returnBtn className={css.pageTitle}>
        <Image src="https://picsum.photos/360/180" width={360} height={180} alt="" />
      </PageTitle>
      <section></section>
    </main>
  );
}
