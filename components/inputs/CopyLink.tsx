import { useState } from 'react';
import css from './CopyLink.module.scss';
import Image from 'next/image';

type Props = {
  text: string;
};

export default function CopyLink({ text }: Props) {
  const [alert, showAlert] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showAlert(!alert);
  };

  return (
    <div className={css.copyLink}>
      <small className={`${css.alert} ${alert && css.show}`} aria-disabled={!alert}>
        Successfuly copied
      </small>

      <input type="text" value={text} disabled />
      <button onClick={() => copyToClipboard(text)}>
        <Image src="/pictograms/copy-dark.svg" alt="" width={20} height={20} />
      </button>
    </div>
  );
}
