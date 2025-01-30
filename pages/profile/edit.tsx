import PageTitle from '@/components/content/PageTitle';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';

import Button from '@/components/navigation/Button';
import css from './Profile.module.scss';

export default function EditProfile() {
  return (
    <main className={css.editProfilePage}>
      <PageTitle title={'Edit Profile'} returnBtn />

      <form>
        {/* Address */}
        <TextInput id={'firstName'} label={'First Name'} type={'text'} />
        <TextInput id={'lastName'} label={'Last Name'} type={'text'} />
        <TextInput id={'address1'} label={'Address 1'} type={'text'} />
        <TextInput id={'address2'} label={'Address 2'} type={'text'} />

        <TextInput id={'postalNb'} label={'Postal Number'} type={'number'} width="33" />
        <TextInput id={'city'} label={'City'} type={'text'} width="66" />
        <TextInput id={'state'} label={'State'} type={'text'} />
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

        <TextInput id={'mail'} label={'Address 1'} type={'text'} />

        {/* I know you use a special component for the Phone Number, 
        with the flags dropdown. I'll let you implement your version :) */}
        <TextInput id={'phone'} label={'Address 2'} type={'text'} />

        {/* .Address */}
        {/* WGC Settings */}

        <SelectInput
          id={'region'}
          label={'Display Challenges from region'}
          options={[
            {
              value: 'eu',
              label: 'Europe',
            },
            {
              value: 'am',
              label: 'Americas',
            },
            {
              value: 'as',
              label: 'Asia',
            },
          ]}
        />
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
        <TextInput id={'hcp'} label={'Handicap'} type={'number'} width="50" />
        <TextInput id={'golfId'} label={'National Golf Id'} type={'text'} width="50" />

        {/* .WGC Settings */}
      </form>

      <div className={css.btns}>
        {/* Used outside the form to avoid sending it, please edit as needed */}
        <Button outline>Cancel</Button>
        <Button>Save</Button>
      </div>
    </main>
  );
}
