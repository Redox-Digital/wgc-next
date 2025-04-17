import PageTitle from '@/components/content/PageTitle';
import { SelectInput, TextInput } from '@/components/inputs/Inputs';

import Button, { PrizeBtnProps, SettingButton } from '@/components/navigation/Button';
import css from './PrivateChallenges.module.scss';
import Modal from '@/components/layouts/Modal';
import { useState } from 'react';
import { dummyPrizes } from '@/constants/DummyData';

export default function EditPrivateChallenge() {
  // DEV: For demo purpose
  const staticPrizeList: PriceType[] = dummyPrizes;

  const [modal, setModal] = useState<boolean>(false);
  const [prize, setPrize] = useState<PriceType | undefined>(undefined);
  const [prizePoolType, setPrizePoolType] = useState<'cash' | 'goodies'>('cash');

  const editPrize = (prize: PriceType) => {
    setPrize(prize);
    setModal(true);
  };

  return (
    <main className={css.editPrivatePage}>
      <PageTitle title={'Edit your Challenge'} returnBtn />

      <form>
        {/* Address */}
        <TextInput id={'name'} label={'Challenge Name'} type={'text'} />
        <TextInput id={'description'} label={'Description (optional)'} type={'textarea'} />

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

        <TextInput id={'startDate'} label={'Start Date'} type={'date'} width="50" />
        <TextInput id={'endDate'} label={'End Date'} type={'date'} width="50" />
        {/* <Button onClick={() => null}>Add Challenge</Button>

        <TextInput id={'challengeNb'} label={'Challenge counted for Leaderboard'} type={'number'} /> */}

        <h3>Settings</h3>

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

        <TextInput id={'banner'} label={"Challenge's Banner"} type={'file'} />

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

          <h3>Prize Pool</h3>

          <div className={css.toggles}>
            <label htmlFor="toggleCash">
              <input
                type="radio"
                id="toggleCash"
                name="toggle"
                value="cash"
                checked={prizePoolType === 'cash'}
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
                checked={prizePoolType === 'goodies'}
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
