import Link from 'next/link';
import css from './YourChallengeFAB.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../layouts/Modal';
import Button from './Button';

import { challenges } from '@/constants/DummyData';
import ChallengePreview from '../content/ChallengePreview';

type Props = {
  modalOpen?: boolean;
  toggleModal: (open: boolean) => void;
};

export default function YourChallengeFAB({ modalOpen, toggleModal }: Props) {
  const yourChallenges = challenges.slice(0, 4);

  return (
    <>
      <Modal
        open={modalOpen}
        title={'Your Challenges'}
        closeModal={() => toggleModal(!modalOpen)}
        className={css.yourChallengesModal}
      >
        <div className={css.challenges}>
          {yourChallenges.map((challenge) => (
            <ChallengePreview key={challenge.id} {...challenge} yourChallenges />
          ))}
        </div>

        <Button href="/challenges">Join more Challenges</Button>
      </Modal>

      <button type="button" className={css.fab} onClick={() => toggleModal(!modalOpen)}>
        Your Challenges
      </button>
    </>
  );
}
