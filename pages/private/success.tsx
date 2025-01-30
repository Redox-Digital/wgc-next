import PageTitle from '@/components/content/PageTitle';
import Button from '@/components/navigation/Button';
import css from './PrivateChallenges.module.scss';
import CopyLink from '@/components/inputs/CopyLink';

export default function CreatePrivateSuccess() {
  return (
    <main className={css.successPage}>
      <PageTitle title={'Your Challenge was created successfuly'} center>
        <p>Invite your friends and don&apos;t forget to join!</p>
      </PageTitle>
      <div className={css.btns}>
        <CopyLink text={'https://wgc.gg/extracurricular/lobby/7874'} />
        <Button href="/lobby">To the Challenge&apos;s Lobby</Button>
        <Button href="/" outline>
          Back to Clubhouse
        </Button>
      </div>
    </main>
  );
}
