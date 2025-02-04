import FormBuilder from '@/components/layouts/FormBuilder';
import css from './Onboarding.module.scss';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';
import Image from 'next/image';
import Modal from '@/components/layouts/Modal';
import Button, { GearButton, SettingButton } from '@/components/navigation/Button';
import { BrandOptions, GearOptions } from '@/constants/FormOptions';

import { useState } from 'react';

export default function Register() {
  // DEV: For demo purpose
  const staticBag: GearType[] = [
    {
      id: 0,
      gear: 'balls',
      brand: 'tm',
      model: 'TP5 Stripe Golf Balls',
    },
    {
      id: 1,
      gear: 'irons',
      brand: 'br',
      model: 'TOUR B JGR HF 2 Irons',
    },
  ];

  const [modal, setModal] = useState<boolean>(false);
  const [gear, setGear] = useState<GearType | undefined>(undefined);

  const editGear = (gear: GearType) => {
    setGear(gear);
    setModal(true);
  };

  const formSteps: FormStep[] = [
    {
      id: 0,
      title: 'Create your account',
      description: 'Join weekly golf challenges and climb the leaderboard.',
      body: (
        <>
          <TextInput id={'firstName'} label={'First Name'} type={'text'} width="50t" />
          <TextInput id={'lastName'} label={'Last Name'} type={'text'} width="50t" />

          <TextInput id={'mail'} label={'E-Mail'} type={'email'} />

          <TextInput id={'password'} label={'Password'} type={'password'} width="50t" />
          <TextInput
            id={'confirmPassword'}
            label={'Confirm Password'}
            type={'password'}
            width="50t"
          />
        </>
      ),
    },
    {
      id: 1,
      title: 'Personal infos',
      description: 'We need this to pay you.',
      body: (
        <>
          <TextInput id={'birth'} label={'Date of Birth'} type={'date'} width="50t" />
          <SelectInput
            width="50t"
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
      body: (
        <>
          <Modal
            open={modal}
            title={`${gear ? 'Edit' : 'Add'} equipment`}
            closeModal={() => setModal(false)}
            className={css.gearModal}
          >
            <SelectInput
              dark
              id={'clubs'}
              label={'Clubs'}
              options={GearOptions}
              value={gear ? gear.gear : ''}
            />
            <SelectInput
              dark
              id={'brand'}
              label={'Brand'}
              options={BrandOptions}
              value={gear ? gear.brand : ''}
            />
            <TextInput
              dark
              id={'model'}
              label={'Model'}
              type={'text'}
              value={gear ? gear.model : ''}
            />

            <button type="button" className={css.deleteTextLink} onClick={() => setModal(false)}>
              Delete item
            </button>

            <div className={css.btns}>
              <Button onClick={() => setModal(false)} small outline darkBg>
                Cancel
              </Button>
              <Button onClick={() => setModal(false)} small>
                Save
              </Button>
            </div>
          </Modal>

          <div className={css.bag}>
            {staticBag.map((gear) => (
              <GearButton key={gear.id} gear={gear} onClick={() => editGear(gear)} />
            ))}
            <SettingButton picto="/pictograms/plus-accent.svg" onClick={() => setModal(true)}>
              Add equipment
            </SettingButton>
            <small style={{ opacity: 0.7 }}>Tap on your equipment to edit / delete it.</small>
          </div>
        </>
      ),
    },
    {
      id: 4,
      title: 'Add a profile picture',
      description: "You're almost finished...",
      body: (
        <>
          <label htmlFor="profilePicture" className={css.profilePicture}>
            <Image src="/pictograms/camera-grey.svg" alt="" height={120} width={120} />
            <input name="profilePicture" id="profilePicture" type="file" />
          </label>
        </>
      ),
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
