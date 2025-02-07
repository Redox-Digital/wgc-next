import css from './Profile.module.scss';
import Image from 'next/image';
import { SettingButton } from '@/components/navigation/Button';

type StatProps = {
  title?: string;
  className?: string;
  elements: { name: string; value?: string | number; picto?: string }[];
};

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
    { name: 'Member since', value: '12/26/22', picto: '/pictograms/profile-date.svg' },
  ];
  return (
    <main className={css.profilePage}>
      <div className={`${css.user}`}>
        <label htmlFor="profilePicture" title="Change profile picture">
          <Image
            src={'https://wgc.gg/images/profile-picture.png'}
            alt={'Jonas Jaeggi'}
            width={80}
            height={80}
          />
          <span>
            <Image src="/pictograms/pen-black.svg" alt="" width={16} height={16} />
          </span>
          <input type="image" name="profilePicture" id="profilePicture" />
        </label>

        <h2>Jonas Jaeggi 🏳️</h2>
        <small>
          HCP: 16.0 |{' '}
          <span>
            <Image src="/pictograms/wallet-white.svg" alt="Wallet" width={15} height={15} />
            &nbsp;$100.00
          </span>
        </small>
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

export function StatBar({ title, elements, className }: StatProps) {
  return (
    <div className={`${css.statBar} ${className}`}>
      {title && <h6>{title}</h6>}
      <ul>
        {elements.map((item, key) => (
          <li key={key}>
            {item.picto && <Image src={item.picto} alt={item.name} width={24} height={24} />}
            <small>{item.name}</small>
            {item.value && <span>{item.value}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
