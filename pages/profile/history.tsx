import PageTitle from '@/components/content/PageTitle';
import HistoryTable from '@/components/layouts/HistoryTable';

import { challenges } from '@/constants/DummyData';

import css from './Profile.module.scss';

export default function ChallengeHistory() {
  return (
    <main className={css.historyPage}>
      <PageTitle title={'Challenge history'} returnBtn>
        <p>
          We keep everything in tab. Be proud of your successes, and learn from your past mistakes.
        </p>
      </PageTitle>

      <HistoryTable body={challenges} headers={['Challenges']} />
    </main>
  );
}
