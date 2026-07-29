import css from './Notifications.module.scss';
import btnCss from '@/components/navigation/Button.module.scss';
import Image from 'next/image';
import { dummyNotifications } from '@/constants/DummyData';
import Button from '../Button';

import SuccessAnimation from '@/public/animations/animation_confetti_2.json';
import AnimationLottie from '@/components/content/AnimationLottie';
import { useEffect, useState } from 'react';

type ListProps = {
  isOpen?: boolean;
  toggle: () => void;
};

function DateToString(date: Date): string {
  // External function, can be edited if necessary.
  return date.toDateString();
}

export default function NotificationsList({ isOpen, toggle }: ListProps) {
  const [successAnimation, setAnimation] = useState<boolean>(false);

  const playAnimation = () => {
    setAnimation(true);
    setTimeout(() => setAnimation(false), 4000);
  };

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <aside className={`${css.list} ${isOpen && css.open}`}>
      {successAnimation && (
        <AnimationLottie animationPath={SuccessAnimation} className={css.animation} loop={false} />
      )}

      <div className={css.head}>
        <h2>Latest Notifications (9+)</h2>
        <button type="reset" onClick={toggle} className={`${btnCss.return} ${css.closeBtn}`}>
          <Image alt="" src="/pictograms/cross-dark.svg" width={12} height={12} />
        </button>
      </div>
      <div className={css.body}>
        {dummyNotifications.map((notif) => (
          <NotificationItem key={notif.id} {...notif} playAnimation={playAnimation} />
        ))}
      </div>
    </aside>
  );
}

interface NotificationItemType extends NotificationType {
  playAnimation?: () => void;
}

export function NotificationItem({
  id,
  img,
  text,
  unread,
  timestamp,
  type,
  playAnimation,
}: NotificationItemType) {
  const getNotifActions = (
    type: 'general' | 'follow' | 'cheerable' | 'reaction' | 'challenge'
  ): React.ReactNode | null => {
    switch (type) {
      case 'follow':
        // Functions do nothing, to be implemented by FH
        return (
          <>
            <Button xs onClick={() => null}>
              Follow back
            </Button>
            <Button xs outline onClick={() => null}>
              Decline
            </Button>
          </>
        );

      case 'cheerable':
        return (
          <Button xs onClick={playAnimation}>
            Cheers ! 👏🏻
          </Button>
        );

      case 'challenge':
        return (
          <Button href="/lobby" xs>
            Show Challenge
          </Button>
        );

      default:
        return null;
    }
  };
  return (
    <div className={css.notification} id={id}>
      <Image src={img || '/favicon/favicon.svg'} alt={''} width={48} height={48} />
      <div className={css.content}>
        <div className={css.texts}>
          <p>{text}</p>
          {type === 'reaction' || type === 'general' ? (
            ''
          ) : (
            <div className={css.actions}>{getNotifActions(type)}</div>
          )}
        </div>
        <div className={css.infos}>
          <small>{DateToString(timestamp)}</small>
          {unread && <span className={css.dot} />}
        </div>
      </div>
    </div>
  );
}

type BtnProps = {
  unreadNotif?: boolean;
  menuOpen?: boolean;
  className?: string;
  onClick?: () => void;
};

export function NotifButton({ unreadNotif, menuOpen, className, onClick }: BtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${css.btn} ${menuOpen && css.bgLight} ${className}`}
      title={unreadNotif ? `You have some unread notifications.` : ''}
    >
      {unreadNotif && <span className={css.dot} />}
      <svg
        width="24"
        height="24"
        viewBox="0 0 56 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.9945 0.0124974C26.3324 0.0124974 24.9951 1.34974 24.9951 3.01191V4.22417C14.8221 5.67389 6.99863 14.4347 6.99863 25.0076V26.8198C6.99863 31.5313 5.74888 36.1554 3.37434 40.2296L0.637375 44.9037C0.224956 45.6286 0 46.4409 0 47.2783C0 49.8903 2.11209 52.0023 4.72408 52.0023H51.265C53.877 52.0023 55.9891 49.8903 55.9891 47.2783C55.9891 46.4409 55.7641 45.6161 55.3517 44.9037L52.6147 40.2172C50.2402 36.1429 48.9904 31.5188 48.9904 26.8073V24.9951C48.9904 14.4222 41.167 5.66139 30.994 4.21168V2.99941C30.994 1.33724 29.6567 0 27.9945 0V0.0124974ZM49.0404 46.0035H6.93615L8.54833 43.2416C11.4603 38.255 12.9975 32.5811 12.9975 26.8198V25.0076C12.9975 16.7217 19.7087 10.0105 27.9945 10.0105C36.2804 10.0105 42.9916 16.7217 42.9916 25.0076V26.8198C42.9916 32.5936 44.5288 38.255 47.4282 43.2416L49.0404 46.0035ZM19.5087 58.0012C20.746 61.5005 24.0828 64 27.9945 64C31.9063 64 35.2431 61.5005 36.4804 58.0012H19.5087Z" />
      </svg>

      <span className={css.label}>{unreadNotif ? '12 unread Notifications' : 'Notifications'}</span>
    </button>
  );
}
