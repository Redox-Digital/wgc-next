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
      name: 'Irons',
      picto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVTeSEJNav_cfoOOFEJdfxA53sMzY_FU3ag&s',
    },
    {
      name: 'Driver',
      picto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVTeSEJNav_cfoOOFEJdfxA53sMzY_FU3ag&s',
    },
    {
      name: 'Putter',
      picto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVTeSEJNav_cfoOOFEJdfxA53sMzY_FU3ag&s',
    },
    {
      name: 'Balls',
      picto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVTeSEJNav_cfoOOFEJdfxA53sMzY_FU3ag&s',
    },
  ];

  const stats = [
    { name: 'HCP', value: '16.0', picto: '/pictograms/golf.svg' },
    { name: 'Challenges played', value: 24, picto: '/pictograms/golf.svg' },
    { name: 'Member since', value: '12/26/22', picto: '/pictograms/golf.svg' },
  ];
  return (
    <main className={css.profilePage}>
      <div className={`${css.user}`}>
        <label htmlFor="profilePicture" title="Change profile picture">
          <Image
            src={'https://wgc.gg/images/profile-picture.png'}
            alt={'Mikael Ruffieux'}
            width={80}
            height={80}
          />
          <span>
            <Image src="/pictograms/pen-black.svg" alt="" width={16} height={16} />
          </span>
          <input type="file" name="profilePicture" id="profilePicture" />
        </label>

        <h2>Mikael Ruffieux 🏳️</h2>
        <small>
          HCP: 16.0 |{' '}
          <span>
            <Image src="/pictograms/wallet.png" alt="Wallet" width={15} height={15} />
            &nbsp;$100.00
          </span>
        </small>
      </div>
      <StatBar elements={stats} />
      <section>
        <StatBar title="Bag" elements={bag} className={css.bag} />
        <SettingButton picto="/pictograms/user.svg" href="/profile/gear">
          Edit Gear
        </SettingButton>
      </section>

      <section>
        <h6>Profile</h6>
        <SettingButton href="/profile/history" picto="/pictograms/user.svg">
          Challenge History
        </SettingButton>
        <SettingButton picto="/pictograms/user.svg" href="/profile/edit">
          Edit Profile
        </SettingButton>
        <SettingButton picto="/pictograms/user.svg" href="/profile/wallet">
          Wallet
        </SettingButton>
        <SettingButton picto="/pictograms/user.svg" className={css.danger}>
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
