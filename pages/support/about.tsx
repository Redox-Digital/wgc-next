import PageTitle from '@/components/content/PageTitle';
import css from './SupportPages.module.scss';
import Image from 'next/image';
import Button from '@/components/navigation/Button';

export default function About() {
  return (
    <main className={css.supportPage}>
      <PageTitle title="About World Golf Challenge" returnBtn>
        <Image src="https://picsum.photos/360/180" width={360} height={180} alt="" />
      </PageTitle>
      <section>
        <p>
          World Golf Challenge was created in 2021 by Jonas Jaeggi within the company KHEOX
          consulting Sàrl based on the shores of Lake Neuchâtel in Switzerland. This golf enthusiast
          combines activities in finance (for professional golfers among others) and golf sponsoring
          for the watch industry. To bring his project to life, Jonas Jaeggi collaborated with the
          Swedish company YONYFY, which developed the technological aspect of the World Golf
          Challenge platform and is known for having created the eSport challenge for Fortnite
          challenge.gg
        </p>
      </section>
      <section>
        <h3>The Reflexion</h3>
        <p>“Necessity is the mother of invention”.</p>
        <p>
          World Golf Challenge was born from my own needs and experience. At the start of a given
          week, I used to compare my weekend competition scores with those of my friends, both at
          home and abroad. When lockdown came and made it impossible to travel, I found it
          restrictive to be able to compete only with the members of my club and not to be able to
          track and cross-reference our results and performance.
        </p>
        <p>
          A year on, World Golf Challenge answers this need through a digital platform that gives
          golf and golfers a border-free playground enabling players to compete remotely while
          playing physically on the course of their choice. A way of opening up golfing borders and
          also of being challenged by going up against other players internationally. A great means
          of boosting progress and motivation.
        </p>
      </section>
      <Button>Back</Button>
    </main>
  );
}
