import PageTitle from '@/components/content/PageTitle';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';

import Button from '@/components/navigation/Button';
import css from './PrivateChallenges.module.scss';

export default function EditPrivateChallenge() {
  return (
    <main className={css.editPrivatePage}>
      <PageTitle title={'Edit your Challenge'} returnBtn />

      <form>
        {/* Address */}
        <TextInput id={'name'} label={'Challenge Name'} type={'text'} />
        <TextInput id={'description'} label={'Description (optional)'} type={'textarea'} />
        <TextInput id={'banner'} label={'Banner'} type={'file'} />
        <TextInput id={'prizes'} label={'Leaderboard Prizes'} type={'file'} />

        <TextInput id={'startDate'} label={'Start Date'} type={'date'} width="50" />
        <TextInput id={'endDate'} label={'End Date'} type={'date'} width="50" />
        <Button onClick={() => null}>Add Challenge</Button>

        <TextInput id={'challengeNb'} label={'Challenge counted for Leaderboard'} type={'number'} />
        <SelectInput
          id={'status'}
          label={'Status'}
          options={[
            {
              value: 'amateur',
              label: 'Amateur',
            },
            {
              value: 'pro',
              label: 'Pro',
            },
          ]}
        />
        <SelectInput
          id={'game'}
          label={'Game Type'}
          options={[
            {
              value: 'netsf',
              label: 'Net Stableford',
            },
          ]}
        />

        <SelectInput
          id={'fee'}
          label={'Fee Type'}
          options={[
            {
              value: 'buy',
              label: 'Buy-in',
            },
          ]}
          width="50"
        />
        <TextInput id={'cost'} label={'Cost to join (USD)'} type={'number'} width="50" />
      </form>

      <button className={css.deleteTextLink} onClick={() => history.back()}>
        Delete Challenge
      </button>

      <div className={css.btns}>
        {/* Used outside the form to avoid sending it, please edit as needed */}
        <Button outline>Cancel</Button>
        <Button>Save</Button>
      </div>
    </main>
  );
}
