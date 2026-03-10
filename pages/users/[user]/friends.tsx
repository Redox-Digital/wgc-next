import PageTitle from '@/components/content/PageTitle';
import css from '@/pages/profile/friends/Friends.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FriendsToggleInput } from '@/components/inputs/TogglesInput';
import { dummyLeaderboard } from '@/constants/DummyData';
import { FriendPreview, UserPreviewProps } from '@/components/content/FriendPreview';
import { useParams } from 'next/navigation';

export default function FriendsIndex() {
  // DEV : implement dyn filter
  const [filter, setFilter] = useState<string>('followers');

  // DEV : Static Data
  const friends: UserPreviewProps[] = dummyLeaderboard.map((user) => ({
    name: `${user.name} ${user.flag}`,
    img: user.img,
    url: '/profile',
    notFollowed: false,
  }));

  return (
    <main className={css.page}>
      <PageTitle title="Friends" returnBtn />

      <section className={css.friendsList}>
        <FriendsToggleInput arg={filter} setArg={setFilter} className={css.toggle} />
        {filter === 'followers' ? (
          <div className={css.list}>
            {/* DEV : 'reverse' only for dev purpose, remove in prod */}
            {friends.reverse().map((f, key) => (
              <FriendPreview key={key} {...f} />
            ))}
          </div>
        ) : (
          <div className={css.list}>
            {friends.map((f, key) => (
              <FriendPreview key={key} {...f} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

type BarProps = {
  following: number;
  followers: number;
  username?: string;
};

export function FriendsBar({ following, followers, username }: BarProps) {
  return (
    <div className={css.friendsBar}>
      <Link href={username ? `/users/${username}/friends#following` : '/profile/friends#following'}>
        <h3>{following}</h3>
        <small>Following</small>
      </Link>
      <Link href={username ? `/users/${username}/friends#followers` : '/profile/friends#followers'}>
        <h3>{followers}</h3>
        <small>Followers</small>
      </Link>
    </div>
  );
}
