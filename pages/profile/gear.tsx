import PageTitle from '@/components/content/PageTitle';
import css from './Profile.module.scss';
import Modal from '@/components/layouts/Modal';
import { useState } from 'react';
import Button, { GearButton, SettingButton } from '@/components/navigation/Button';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';
import { BrandOptions, GearOptions } from '@/constants/FormOptions';

export default function EditGear() {
  const bag: GearType[] = [
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

  return (
    <main className={css.editGearPage}>
      <PageTitle title="Edit bag" returnBtn />

      <Modal
        open={modal}
        title={`${gear ? 'Edit' : 'Add'} equipment`}
        closeModal={() => setModal(false)}
        className={css.modal}
      >
        <form>
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

          <button className={css.deleteTextLink} onClick={() => setModal(false)}>
            Delete item
          </button>
        </form>

        <div className={css.btns}>
          <Button onClick={() => setModal(false)} small outline darkBg>
            Cancel
          </Button>
          <Button onClick={() => setModal(false)} small>
            Save
          </Button>
        </div>
      </Modal>

      <section className={css.bag}>
        {bag.map((gear) => (
          <GearButton key={gear.id} gear={gear} onClick={() => editGear(gear)} />
        ))}
        <SettingButton picto="/pictograms/plus-accent.svg" onClick={() => setModal(true)}>
          Add equipment
        </SettingButton>
        <small style={{ opacity: 0.7 }}>Tap on your equipment to edit / delete it.</small>
      </section>
    </main>
  );
}
