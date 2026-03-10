import css from './Profile.module.scss';
import Image from 'next/image';
import { SettingButton } from '@/components/navigation/Button';
import StatBar from '@/components/content/StatBar';
import Badge, { leagueFinder } from '@/components/content/LeagueBadge';
import ProgressBar from '@/components/content/ProgressBar';

export default function Profile() {
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
    { name: 'HCP', value: '16.0', picto: '/pictograms/profile-hcp.svg' },
    { name: 'Challenges played', value: 24, picto: '/pictograms/profile-challenges.svg' },
    { name: 'Wallet', value: '$100.00', picto: '/pictograms/wallet-gradient.svg' },
  ];

  return (
    <main className={css.profilePage}>
      <div className={`${css.user}`}>
        <Badge userLevel={3} href="/profile/leagues" />

        <label htmlFor="profilePicture" title="Change profile picture">
          <Image
            src={'https://wgc.gg/images/profile-picture.png'}
            alt={'Jonas Jaeggi'}
            width={80}
            height={80}
            className={leagueFinder(2).className}
          />
          <span>
            <Image src="/pictograms/pen-black.svg" alt="" width={16} height={16} />
          </span>
          <input type="image" name="profilePicture" id="profilePicture" />
        </label>

        <div className={css.username}>
          <h2>Jonas Jaeggi 🏳️</h2>
          <small>Member since 2022</small>
        </div>

        <ProgressBar
          currentScore={145}
          totalScore={205}
          labels={['Your Progress', `Level ${2}`, `${145} / ${205}`]}
          className={css.levelBar}
        />
      </div>
      <StatBar elements={stats} />
      <section>
        <StatBar title="Bag" elements={bag} className={css.bag} />
        <SettingButton picto="/pictograms/edit-dark.svg" href="/profile/gear">
          Edit bag
        </SettingButton>
      </section>

      <section>
        <h6>Profile</h6>
        <SettingButton picto="/pictograms/list-dark.svg" href="/profile/history">
          Challenge history
        </SettingButton>
        <SettingButton picto="/pictograms/gear-dark.svg" href="/profile/edit">
          Edit profile
        </SettingButton>
        <SettingButton picto="/pictograms/wallet-dark.svg" href="/profile/wallet">
          Wallet
        </SettingButton>
        <SettingButton picto="/pictograms/logout-danger.svg" className={css.danger}>
          Logout
        </SettingButton>
      </section>
    </main>
  );
}
