import PageTitle from '@/components/content/PageTitle';
import Button from '@/components/navigation/Button';
import css from './Wallet.module.scss';
import { useState } from 'react';
import Modal from '@/components/layouts/Modal';

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
        open={modal === 'withdraw'}
        closeModal={() => setModal(undefined)}
      ></Modal>

      <Modal title="Deposit" open={modal === 'deposit'} closeModal={() => setModal(undefined)}>
        <div className={css.body}></div>
      </Modal>

      <PageTitle title={'Challenge History'} returnBtn>
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
          <Button outline onClick={() => setModal('withdraw')}>
            Withdraw
          </Button>
          <Button onClick={() => setModal('deposit')}>Deposit</Button>
        </div>
      </section>

      <div className={css.transactions}>
        <div className={css.head}>
          <small>Transaction History</small>
          <small>Amount</small>
        </div>
        <ul className={css.body}>
          {transactions.map((elt, key) => (
            <li key={key} className={elt.amount > 0 ? css.gain : css.loss}>
              <span className={css.identifier}>
                {elt.type}
                <small className="xs">{elt.date}</small>
              </span>
              <span className={css.amount}>$ {elt.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
