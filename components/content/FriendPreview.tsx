import Link from 'next/link';
import css from './FriendPreview.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export type UserPreviewProps = {
  name: string;
  img: string;
  url: string;
  notFollowed?: boolean;
  pending?: boolean;
};

export function FriendPreview({ name, img, url, notFollowed, pending }: UserPreviewProps) {
  return (
    <div className={css.friendsPreview}>
      <Image src={img} alt={name} width={50} height={50} />
      <Link href={url}>{name}</Link>
      {notFollowed && <AddFriendButton pending={pending} />}
    </div>
  );
}

type BtnProps = {
  pending?: boolean;
};

export function AddFriendButton({ pending }: BtnProps) {
  // DEV : for dev purpose, to illustrate the state change.
  const [isPending, setPending] = useState<boolean>(pending || false);

  if (isPending)
    return (
      <button title="Request pending" className={css.addFriendBtn} disabled>
        Pending <Image src="/pictograms/pending-dark.svg" alt="" width={18} height={16} />
      </button>
    );

  return (
    <button
      title="Send friend request"
      className={css.addFriendBtn}
      onClick={() => setPending(!isPending)}
    >
      <Image src="/pictograms/friends-accent.svg" alt="" width={18} height={16} />
    </button>
  );
}
