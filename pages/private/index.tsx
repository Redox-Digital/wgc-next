import SectionTitle from '@/components/layouts/SectionTitle';
import css from './PrivateChallenges.module.scss';
import btnCss from '@/components/navigation/Button.module.scss';
import Button from '@/components/navigation/Button';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';

export default function PrivateChallenges() {
  // Not working, only for dev purpose
  const [dates, setDates] = useState<number[]>([1]);

  const addDate = () => setDates([...dates, 1]);
  const removeDate = () => setDates(dates.slice(0, -1));

  return (
    <main className={css.private}>
      <SectionTitle title={'Create your own Challenge'}></SectionTitle>

      <form action="">
        <fieldset>
          <TextInput
            id="name"
            label="Name"
            type="text"
            placeholder="Choose a name for your Challenge"
          />

          <TextInput
            id="desc"
            label="Description"
            type="textarea"
            placeholder="Enter a description for your Challenge"
          />

          <TextInput id="banner" label="Banner Image" type="file" />
          <TextInput id="leaderboard" label="Leaderboard Prize Image" type="file" />
        </fieldset>
        <fieldset>
          <button type="button" className={btnCss.btn} onClick={addDate}>
            Add dates
          </button>
          <ul className={css.dates}>
            {dates.map((d, key) => (
              <li className={css.dateLine} key={key}>
                <TextInput id={'startDate'} type="date" label={'Start Date'} className={css.date} />
                <TextInput id={'endDate'} type="date" label={'End Date'} className={css.date} />
                {key !== 0 && (
                  <button
                    className={`${btnCss.btn} ${btnCss.small} ${css.delBtn}`}
                    type="button"
                    onClick={removeDate}
                  >
                    <Image src={'/pictograms/trash.svg'} alt={''} width={20} height={20} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <TextInput
            id="nb"
            label="Challenge counted for leaderboard"
            type="number"
            placeholder="1"
          />
          <SelectInput
            id={'status'}
            label={'Status'}
            half
            options={[
              {
                value: 'all',
                label: 'Amateur & Pro',
              },
              {
                value: 'pro',
                label: 'Pros only',
              },
              {
                value: 'amateur',
                label: 'Amateurs only',
              },
            ]}
          />
          <SelectInput
            id={'gameType'}
            label={'Game Type'}
            half
            options={[
              {
                value: 'ns',
                label: 'Net Stableford',
              },
            ]}
          />
          <SelectInput
            id={'fee'}
            label={'Fee Type'}
            half
            options={[
              {
                value: 'buy-in',
                label: 'Buy-in',
              },
              {
                value: 'free',
                label: 'Free',
              },
            ]}
          />
          <TextInput
            id="cost"
            label="Cost to join (USD)"
            type="number"
            placeholder="Choose amount (in $)"
            half
          />
        </fieldset>
        <button className={btnCss.btn} type="submit">
          Create your challenge
        </button>
      </form>
      <Link href="/clubhouse" className={css.textLink}>
        Return to Clubhouse
      </Link>
    </main>
  );
}
