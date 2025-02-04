import PageTitle from '@/components/content/PageTitle';
import css from '@/pages/support/SupportPages.module.scss';
import Image from 'next/image';
import Button from '@/components/navigation/Button';
import TableofContent from '@/components/navigation/TableofContent';
import { ChangeBackgroundColor } from '.';

export default function Terms() {
  const anchors = [
    { title: 'Copyright Infringements', id: 'copyright' },
    { title: 'Copyright Infringements 2', id: 'copyright2' },
  ];
  return (
    <>
      <ChangeBackgroundColor color="#fff" />

      <main className={css.supportPage}>
        <PageTitle title="Terms of agreement" returnBtn className={css.pageTitle}></PageTitle>
        <TableofContent title="Table of content">
          <ul>
            {anchors.map((anchor) => (
              <li key={anchor.id}>
                <a href={`#${anchor.id}`}>{anchor.title}</a>
              </li>
            ))}
          </ul>
        </TableofContent>
        <section>
          <h3 id="copyright">Copyright Infringements</h3>
          <p>
            We respect the intellectual property rights of others. If you believe that any material
            available on or through the Site infringes upon any copyright you own or control, please
            immediately notify us using the contact information provided below (a “Notification”). A
            copy of your Notification will be sent to the person who posted or stored the material
            addressed in the Notification. Please be advised that pursuant to applicable law you may
            be held liable for damages if you make material misrepresentations in a Notification.
            Thus, if you are not sure that material located on or linked to by the Site infringes
            your copyright, you should consider first contacting an attorney.
          </p>
        </section>
        {/* Repeat this format for each section */}
        <section>
          <h3 id="copyright2">Copyright Infringements</h3>
          <p>
            We respect the intellectual property rights of others. If you believe that any material
            available on or through the Site infringes upon any copyright you own or control, please
            immediately notify us using the contact information provided below (a “Notification”). A
            copy of your Notification will be sent to the person who posted or stored the material
            addressed in the Notification. Please be advised that pursuant to applicable law you may
            be held liable for damages if you make material misrepresentations in a Notification.
            Thus, if you are not sure that material located on or linked to by the Site infringes
            your copyright, you should consider first contacting an attorney.
          </p>
        </section>
      </main>
    </>
  );
}
