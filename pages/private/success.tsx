import PageTitle from '@/components/content/PageTitle';
import Button from '@/components/navigation/Button';
import css from './PrivateChallenges.module.scss';
import CopyLink from '@/components/inputs/CopyLink';

import SuccessAnimation from '@/public/animations/animation_confetti_2.json';
import AnimationLottie from '@/components/content/AnimationLottie';

export default function CreatePrivateSuccess() {
  return (
    <main className={css.successPage}>
      <AnimationLottie animationPath={SuccessAnimation} className={css.animation} loop={true} />

      <PageTitle title={'Your Challenge was created successfuly'} className={css.titles} center>
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
