import css from './PrivateChallenges.module.scss';
import Button, { SettingButton } from '@/components/navigation/Button';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';
import FormBuilder from '@/components/layouts/FormBuilder';
import Image from 'next/image';

export default function CreatePrivateChallenge() {
  const formSteps: FormStep[] = [
    {
      title: 'Create your private Challenge',
      description: 'Play with your friends.',
      body: (
        <>
          <TextInput id={'name'} label={'Challenge Name'} type={'text'} />
          <TextInput id={'description'} label={'Description (optional)'} type={'textarea'} />
          <TextInput id={'banner'} label={'Banner'} type={'file'} />
          <TextInput id={'prizes'} label={'Leaderboard Prizes'} type={'file'} />
        </>
      ),
      id: 0,
    },
    {
      title: 'Challenge dates',
      description: 'You can add one or more Challenges to create a Championship',
      body: (
        <>
          <div className={css.formRow}>
            <TextInput id={'startDate'} label={'Start Date'} type={'date'} width="50" />
            <TextInput
              id={'endDate'}
              label={'End Date'}
              type={'date'}
              width="50"
              errorMsg="Test test test"
            />
            <Button className={css.deleteBtn} onClick={() => null}>
              <Image src="/pictograms/trash.svg" alt="Delete" width={12} height={12} />
            </Button>
          </div>

          <div className={css.formRow}>
            <TextInput
              id={'startDate'}
              label={'Start Date'}
              type={'date'}
              width="50"
              errorMsg="Test test test"
            />
            <TextInput
              id={'endDate'}
              label={'End Date'}
              type={'date'}
              width="50"
              errorMsg="Test test test"
            />
            <Button className={css.deleteBtn} onClick={() => null}>
              <Image src="/pictograms/trash.svg" alt="Delete" width={12} height={12} />
            </Button>
          </div>

          <div className={css.formRow}>
            <TextInput
              id={'startDate'}
              label={'Start Date'}
              type={'date'}
              width="50"
              errorMsg="Test test test"
            />
            <TextInput
              id={'endDate'}
              label={'End Date'}
              type={'date'}
              width="50"
              errorMsg="Test test test"
            />
            <Button className={css.deleteBtn} onClick={() => null}>
              <Image src="/pictograms/trash.svg" alt="Delete" width={12} height={12} />
            </Button>
          </div>

          <Button onClick={() => null}>Add Challenge</Button>
        </>
      ),
      id: 1,
    },
    {
      title: 'Challenge Settings',
      description: 'Choose your HCP, and more.',
      body: (
        <>
          <TextInput
            id={'challengeNb'}
            label={'Challenge counted for Leaderboard'}
            type={'number'}
            placeholder="1"
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
            width="50t"
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
            width="50t"
          />
        </>
      ),
      id: 2,
    },
  ];

  return (
    <main className={css.createForm}>
      <form>
        <FormBuilder steps={formSteps} confirmationUrl={'/private/success'} />
      </form>
    </main>
  );
}
