import Badge, { leagueFinder } from '@/components/content/LeagueBadge';
import Image from 'next/image';
import css from '@/pages/profile/Profile.module.scss';
import { useRouter } from 'next/router';
import StatBar from '@/components/content/StatBar';
import { BadgesPreviewList } from '@/components/content/Badges';
import { dummyLeaderboard } from '@/constants/DummyData';
import { userBadges } from '@/components/content/Badges';
import { FriendsBar } from '@/pages/profile/friends';
import { useState } from 'react';
import Button from '@/components/navigation/Button';

export default function UserPage() {
  const router = useRouter();

  const username = router.query.user || '';
  // DEV : static values
  const player = dummyLeaderboard[Math.floor(Math.random() * dummyLeaderboard.length)];
  const bag = [
    {
      name: 'Driver',
      picto: '/brands/wi.png',
    },
    {
      name: 'Irons',
      picto: '/brands/br.png',
    },
    {
      name: 'Putter',
      picto: '/brands/ni.png',
    },
    {
      name: 'Balls',
      picto: '/brands/tm.png',
    },
  ];

  const stats = [
    { name: 'HCP', value: player.hcp, picto: '/pictograms/profile-hcp.svg' },
    {
      name: 'Challenges played',
      value: player.challengesWon,
      picto: '/pictograms/profile-challenges.svg',
    },
  ];

  // DEV : static behaviour for friends request
  const [pendingRequest, setPendingRequest] = useState<boolean>(false);

  return (
    <main className={css.profilePage}>
      <div className={`${css.user}`}>
        <Badge userLevel={player.level} href="/profile/leagues" />

        <label>
          <Image
            src={player.img}
            alt={player.name}
            width={80}
            height={80}
            className={leagueFinder(player.level).className}
          />
        </label>

        <div className={css.username}>
          <h2>
            {player.name} {player.flag}
          </h2>
          <small>Member since 2022</small>
        </div>

        {/* 'Follow back' if user is following, else "Friend Request" */}
        <Button
          onClick={() => setPendingRequest(!pendingRequest)}
          outline={pendingRequest}
          disabled={pendingRequest}
        >
          {pendingRequest ? (
            <Image src="/pictograms/pending-dark.svg" alt="" width={16} height={16} />
          ) : (
            <Image src="/pictograms/friends-dark.svg" alt="" width={16} height={16} />
          )}{' '}
          {pendingRequest ? 'Pending Request' : 'Follow back'}
        </Button>
      </div>
      <StatBar elements={stats} />
      <section>
        <StatBar title="Bag" elements={bag} className={css.bag} />
      </section>
      <section>
        <h6>Social</h6>
        <FriendsBar following={20} followers={26} username={`${username}`} />
      </section>

      <section>
        <h6>Badges</h6>
        <BadgesPreviewList badges={userBadges} username={`${username}`} />
      </section>
    </main>
  );
}
