import PageTitle from '@/components/content/PageTitle';
import css from '@/pages/profile/Profile.module.scss';

import BadgesList, { userBadges } from '@/components/content/Badges';

export default function BadgesPage() {
  return (
    <main className={css.leaguesPage}>
      <PageTitle title="Badges" returnBtn />

      <BadgesList badges={userBadges} />
    </main>
  );
}
