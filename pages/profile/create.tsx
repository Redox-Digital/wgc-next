import FormBuilder from '@/components/layouts/FormBuilder';
import css from './Onboarding.module.scss';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';
export default function Register() {
  const formSteps: FormStep[] = [
    {
      id: 0,
      title: 'Create your account',
      description: 'Join weekly golf challenges and climb the leaderboard.',
      body: (
        <>
          <TextInput id={'firstName'} label={'First Name'} type={'text'} />
          <TextInput id={'lastName'} label={'Last Name'} type={'text'} />

          <TextInput id={'mail'} label={'E-Mail'} type={'email'} />

          <TextInput id={'password'} label={'Password'} type={'password'} />
          <TextInput id={'confirmPassword'} label={'Confirm Password'} type={'password'} />
        </>
      ),
    },
    {
      id: 1,
      title: 'Personal infos',
      description: 'We need this to pay you.',
      body: (
        <>
          <TextInput id={'birth'} label={'Date of Birth'} type={'date'} />
          <SelectInput
            id={'gender'}
            label={'Gender'}
            options={[
              {
                value: 'm',
                label: 'Male',
              },
              {
                value: 'f',
                label: 'Female',
              },
              {
                value: 'other',
                label: 'Other',
              },
            ]}
          />
          <SelectInput
            id={'country'}
            label={'Country'}
            options={[
              {
                value: 'ch',
                label: 'Switzerland',
              },
            ]}
          />
          <TextInput id={'phone'} label={'Phone'} type={'text'} />
        </>
      ),
    },
    {
      id: 2,
      title: 'Let’s talk about golf',
      description: 'So we can define which challenge you can join.',
      body: (
        <>
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
          <TextInput id={'hcp'} label={'Handicap'} type={'number'} width="50" placeholder="1.0" />
          <TextInput
            id={'golfId'}
            label={'National Golf Id (optional)'}
            type={'text'}
            width="50"
            placeholder="..."
          />
        </>
      ),
    },
    {
      id: 3,
      title: 'Let’s talk gear',
      description:
        'We have a lot of partners, and we want to let you know when one of your gear’s brands is launching a Challenge!',
      body: <></>,
    },
    {
      id: 4,
      title: 'Add a Profile Picture',
      description: "You're almost finished...",
      body: <></>,
    },
  ];

  return (
    <main className={css.register}>
      <form>
        <FormBuilder steps={formSteps} confirmationUrl={'/profile/success'} />
      </form>
    </main>
  );
}
