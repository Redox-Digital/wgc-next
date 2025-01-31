import Link from 'next/link';
import css from './YourChallengeFAB.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../layouts/Modal';
import Button from './Button';

export default function YourChallengeFAB() {
  const [open, toggleOpen] = useState<boolean>(false);
  return (
    <>
      <Modal open={open} title={'Your Challenges'} closeModal={() => toggleOpen(false)}>
        <p>Challenge</p>
        <Button href="/challenges">Join more Challenges</Button>
      </Modal>

      <button type="button" className={css.fab} onClick={() => toggleOpen(true)}>
        Your Challenges
      </button>
    </>
  );
}
