import { useEffect } from 'react';
import css from './Modal.module.scss';

type ModalProps = {
  title: string | React.ReactNode;
  open?: boolean;
  className?: string;
  children?: React.ReactNode;
  closeModal: () => void;
};

export default function Modal({ title, open, children, className, closeModal }: ModalProps) {
  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <dialog open={open} className={`${css.modal} ${open && css.show}`}>
      <div className={`${css.box} ${className}`}>
        <div className={css.head}>
          <h2>{title}</h2>
          <button onClick={closeModal}>
            <span />
            <span />
          </button>
        </div>
        <div className={css.body}>{children}</div>
      </div>
    </dialog>
  );
}
