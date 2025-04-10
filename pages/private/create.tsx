import css from './PrivateChallenges.module.scss';
import Button, { GearButton, PrizeBtnProps, SettingButton } from '@/components/navigation/Button';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';
import FormBuilder from '@/components/layouts/FormBuilder';
import Image from 'next/image';
import Modal from '@/components/layouts/Modal';
import { useState } from 'react';
import { dummyPrizes } from '@/constants/DummyData';

export default function CreatePrivateChallenge() {
  // DEV: For demo purpose
  const staticPrizeList: PriceType[] = dummyPrizes;

  const [modal, setModal] = useState<boolean>(false);
  const [prize, setPrize] = useState<PriceType | undefined>(undefined);
  const [prizePoolType, setPrizePoolType] = useState<'cash' | 'goodies'>('cash');

  const editPrize = (prize: PriceType) => {
    setPrize(prize);
    setModal(true);
  };

  const formSteps: FormStep[] = [
    {
      id: 0,
      title: 'Create your private Challenge',
      description: 'Play with your friends.',
      body: (
        <>
          <TextInput id={'name'} label={'Challenge Name'} type={'text'} />
          <TextInput id={'description'} label={'Description (optional)'} type={'textarea'} />
          <TextInput id={'banner'} label={'Banner'} type={'file'} />

          <SelectInput
            id={'fee'}
            label={'Fee Type'}
            options={[
              {
                value: 'buy',
                label: 'Buy-in',
              },

              {
                value: 'free',
                label: 'Free',
              },
            ]}
            width="50"
          />
          <TextInput
            id={'cost'}
            label={'Cost to join (USD)'}
            type={'number'}
            width="50"
            value="0"
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
    },
    {
      id: 1,
      title: 'Challenge dates',
      description: 'You can add one or more Challenges to create a Championship',
      body: (
        <>
          <TextInput
            id={'challengeNb'}
            label={'Challenge counted for Leaderboard'}
            type={'number'}
            placeholder="1"
            moreInfo="More infos about the Challenge's number (TBD)"
          />
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

          <Button onClick={() => null}>Add another Challenge</Button>
        </>
      ),
    },
    {
      id: 2,
      title: 'Prize Pool',
      description: 'What will your participants win ?',
      body: (
        <>
          <Modal
            open={modal}
            title={`${prize ? 'Edit' : 'Add'} prize`}
            closeModal={() => setModal(false)}
            className={css.prizeModal}
          >
            <SelectInput
              dark
              id={'rank'}
              label={'Prize Attribution'}
              options={[
                { value: '1', label: '1st Prize' },
                { value: '2', label: '2nd Prize' },
                { value: '3', label: '3rd Prize' },
                { value: '4', label: '4th Prize' },
                { value: '5', label: '5th Prize' },
                { value: 'all', label: 'For all participants' },
              ]}
              value={prize ? prize.title : ''}
            />
            <TextInput
              dark
              id={'desc'}
              label={'Prize Description'}
              type={'text'}
              value={prize ? prize.desc?.toString() : ''}
            />
            <TextInput id={'img'} label={'Prize Image'} type={'file'} />

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

          <div className={css.toggles}>
            <label htmlFor="toggleCash">
              <input
                type="radio"
                id="toggleCash"
                name="toggle"
                value="cash"
                onClick={() => setPrizePoolType('cash')}
              />
              <span>Cash</span>
            </label>

            <label htmlFor="toggleGoodies">
              <input
                type="radio"
                id="toggleGoodies"
                name="toggle"
                value="goodies"
                onClick={() => setPrizePoolType('goodies')}
              />
              <span>Goodies</span>
            </label>
          </div>

          {prizePoolType === 'cash' ? (
            <>
              {/* If it's a Buy-in challenge, display the ErrorMsg + disable the field */}
              <TextInput
                className={css.cashPrizeInput}
                id={'cashPrize'}
                label={'Total Amount (USD)'}
                type={'number'}
                placeholder="$ 0.00"
                errorMsg="In a 'Buy-in' Challenge, the Prize Pool is automatically defined by the number of participants."
                disabled
              />
              <small style={{ opacity: '0.7' }}>
                <b>Breakdown</b>
                <br />
                <span>1st : $ 10.00</span>
                <br />
                <span>2nd : $ 5.00</span>
                <br />
                <span>3rd : $ 3.00</span>
              </small>
            </>
          ) : (
            <div className={css.prizePool}>
              {staticPrizeList.map((prize, key) => (
                <PrizeBtnProps key={key} prize={prize} onClick={() => editPrize(prize)} />
              ))}
              <SettingButton picto="/pictograms/plus-accent.svg" onClick={() => setModal(true)}>
                Add prize
              </SettingButton>
              <small style={{ opacity: 0.7 }}>Tap on your prize to edit / delete it.</small>
            </div>
          )}
        </>
      ),
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
