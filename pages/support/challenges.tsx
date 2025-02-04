import PageTitle from '@/components/content/PageTitle';
import Image from 'next/image';
import css from './SupportPages.module.scss';
import Carousel from '@/components/content/Carousel';
import Button from '@/components/navigation/Button';

export default function ChallengesSupportPage() {
  return (
    <main className={css.supportPage}>
      <PageTitle title="Challenges" returnBtn>
        <p>The concept is really simple</p>
      </PageTitle>
      <Carousel />
      <div className={css.btns}>
        <Button href="/challenges">I got it, let&apos;s join a Challenge</Button>
        <Button href="/support" outline>
          I need more explanations
        </Button>
      </div>
      <section></section>
    </main>
  );
}
