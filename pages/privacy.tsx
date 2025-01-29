import PageTitle from '@/components/content/PageTitle';
import css from '@/pages/support/SupportPages.module.scss';
import Image from 'next/image';
import Button from '@/components/navigation/Button';
import TableofContent from '@/components/navigation/TableofContent';
import { ChangeBackgroundColor } from '.';

export default function Privacy() {
  const anchors = [
    { title: 'General', id: 'general' },
    { title: 'Personal Data', id: 'data' },
    { title: 'Gamers', id: 'gamers' },
    { title: 'Contact Us', id: 'contact' },
  ];
  return (
    <>
      <ChangeBackgroundColor color="#fff" />
      <main className={css.supportPage}>
        <PageTitle title="Privacy Policy" returnBtn></PageTitle>
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
          <h3 id="general">General statement</h3>
          <p>
            KHEOX Consulting Sàrl (hereinafter “KHEOX Consulting”, “we”) is personally responsible
            for the personal data processed within the company. KHEOX Consulting determines the
            purpose of the treatment and the way in which treatment is to be done.
          </p>
          <p>
            Contact information for the data controller and data protection agent is at the end of
            this privacy policy.
          </p>
        </section>
        {/* Repeat this format for each section */}
        <section>
          <h3 id="data">What is personal duty and what contains processing of personal data?</h3>
          <p>
            Personal data are all kinds of information that can be linked directly or indirectly to
            a physical person in your life. Examples of personal data are name, paypal-account,
            e-mail address, phone number, pictures and IP-number. Processing of personal data means
            all types of personal data handling, such as collection, registration, storage, transfer
            and deletion.
          </p>
        </section>

        <Button>Back</Button>
      </main>
    </>
  );
}
