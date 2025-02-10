import PageTitle from '@/components/content/PageTitle';
import Button from '@/components/navigation/Button';
import css from './Wallet.module.scss';
import { useState } from 'react';
import Modal from '@/components/layouts/Modal';
import Image from 'next/image';
import { Checkbox, TextInput } from '@/components/inputs/Inputs';
import HistoryTable, { WalletTable } from '@/components/layouts/HistoryTable';

export default function Wallet() {
  const transactions = [
    { date: '15/10/24', amount: 100.0, type: 'Deposit' },
    { date: '13/10/24', amount: -40.0, type: 'Withdraw' },
    { date: '12/10/24', amount: 12.32, type: 'Win' },
    { date: '10/10/24', amount: -23.2, type: 'Buy-in' },
    { date: '08/10/24', amount: 100.0, type: 'Deposit' },
  ];

  const [modal, setModal] = useState<'withdraw' | 'deposit' | undefined>(undefined);

  return (
    <main className={css.walletPage}>
      <Modal
        title="Withdraw"
        className={`${css.modal} ${css.withdraw}`}
        open={modal === 'withdraw'}
        closeModal={() => setModal(undefined)}
      >
        <form>
          <TextInput id={'amount'} label={'Amount'} type={'number'} dark />
          <TextInput id={'mail'} label={'PayPal E-Mail'} type={'text'} dark />
        </form>
        <Button onClick={() => setModal(undefined)}>Request widthdrawal</Button>
      </Modal>

      <Modal
        title="Deposit"
        className={`${css.modal} ${css.deposit}`}
        open={modal === 'deposit'}
        closeModal={() => setModal(undefined)}
      >
        <form>
          <TextInput id={'amount'} label={'Amount'} type={'number'} dark />
          <small>
            <span>Provider fee (3.5%)</span>
            <span>$ 0.35</span>
          </small>
          <p>
            <span>Total Cost</span>
            <span>$ 10.35</span>
          </p>
          <Checkbox id={'adult'}>I am over 18 years of age.</Checkbox>
        </form>

        <Button onClick={() => setModal(undefined)}>
          Pay with PayPal <Image src="/pictograms/paypal-dark.svg" alt="" width={12} height={20} />
        </Button>
      </Modal>

      <PageTitle title={'Wallet'} returnBtn>
        <p>
          Check your wallet to monitor your earnings and investments across the various challenges.
        </p>
      </PageTitle>

      <section className={css.walletSct}>
        <div className={css.wallet}>
          <small>Your Money</small>
          <h2>$ 100.00</h2>
        </div>

        <div className={css.btns}>
          <Button onClick={() => setModal('deposit')}>Deposit</Button>
          <Button outline onClick={() => setModal('withdraw')}>
            Withdraw
          </Button>
        </div>
      </section>

      <WalletTable headers={['Transaction History', 'Amount']} body={transactions} />
    </main>
  );
}
