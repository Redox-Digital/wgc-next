import PageTitle from '@/components/content/PageTitle';
import css from './Profile.module.scss';
import Badge, { leagues, leagueFinder } from '@/components/content/LeagueBadge';
import Image from 'next/image';

export default function LeaguesPage() {
  return (
    <main className={css.leaguesPage}>
      <PageTitle title="Leagues" returnBtn />

      <LeaguesCarousel userLevel={45} />

      <section>
        <p>Enter your scores, participates in challenges, win and have fun ! </p>
        <p>Move up the leagues and show the world that you mean business on the green.</p>
      </section>
    </main>
  );
}

type CarouselProps = {
  userLevel: number;
};

function LeaguesCarousel({ userLevel }: CarouselProps) {
  return (
    <div className={css.carouselWrapper}>
      <div className={css.carousel}>
        {leagues.map((league, key) => (
          <CarouselItem
            key={key}
            title={league.title}
            img={userLevel < key * 10 ? '/leagues/Locked.svg' : league.badgeUrl}
            badge={<Badge userLevel={10 * key} locked={userLevel < key * 10} />}
            locked={userLevel < key * 10}
          />
        ))}
      </div>
    </div>
  );
}

type ItemProps = {
  img: string;
  title: string;
  badge: React.ReactNode;
  locked?: boolean;
};

function CarouselItem({ img, title, badge, locked }: ItemProps) {
  return (
    <div className={`${css.item} ${locked && css.locked}`}>
      <Image src={img} alt={title} width={86} height={86} />
      {badge}
    </div>
  );
}
