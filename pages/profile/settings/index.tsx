import PageTitle from '@/components/content/PageTitle';
import css from '@/pages/profile/Profile.module.scss';
import { SettingButton } from '@/components/navigation/Button';

export default function SettingsPage() {
  return (
    <main className={css.page}>
      <PageTitle title="Settings" returnBtn />

      <section>
        <h6>Profile</h6>
        <SettingButton picto="/pictograms/gear-dark.svg" href="/profile/edit">
          Edit profile
        </SettingButton>
        <SettingButton picto="/pictograms/edit-dark.svg" href="/profile/gear">
          Edit bag
        </SettingButton>
        <SettingButton
          picto="/pictograms/notification-dark.svg"
          href="/profile/settings/notifications"
        >
          Notifications preferences
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
