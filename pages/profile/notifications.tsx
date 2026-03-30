import PageTitle from '@/components/content/PageTitle';
import css from '@/pages/profile/Profile.module.scss';
import { spawn } from 'child_process';
import { useState } from 'react';

export default function NotificationsPage() {
  // Static Data
  const [mailPref, setMailPref] = useState<boolean>(true);
  const [pushPref, setPushPref] = useState<boolean>(true);
  const [smsPref, setSmsPref] = useState<boolean>(false);

  return (
    <main className={css.page}>
      <PageTitle title="Notifications Preferences" returnBtn />

      <section className={css.settings}>
        <ul className={css.settingsList}>
          <li>
            <label htmlFor="email" className={css.switch}>
              Email notifications
              <input
                type="checkbox"
                name="email"
                id="email"
                checked={mailPref}
                onChange={() => setMailPref(!mailPref)}
              />
              <span />
            </label>
          </li>
          <li>
            <label htmlFor="push" className={css.switch}>
              Push notifications
              <input
                type="checkbox"
                name="push"
                id="push"
                checked={pushPref}
                onChange={() => setPushPref(!pushPref)}
              />
              <span />
            </label>
          </li>

          <li>
            <label htmlFor="sms" className={css.switch}>
              SMS notifications
              <input
                type="checkbox"
                name="sms"
                id="sms"
                checked={smsPref}
                onChange={() => setSmsPref(!smsPref)}
              />
              <span />
            </label>
          </li>
        </ul>
      </section>
    </main>
  );
}
