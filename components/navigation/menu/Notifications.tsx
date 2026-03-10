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
      {menuOpen ? (
        <Image src="/pictograms/notification-dark.svg" width={24} height={24} alt="" />
      ) : (
        <Image src="/pictograms/notification-white.svg" width={24} height={24} alt="" />
      )}
      <span className={css.label}>{unreadNotif ? '12 unread Notifications' : 'Notifications'}</span>
    </button>
  );
}
