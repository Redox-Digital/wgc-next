import css from './Modal.module.scss';

type ModalProps = {
  title: string;
  open?: boolean;
  className?: string;
  children?: React.ReactNode;
  closeModal: () => void;
};

export default function Modal({ title, open, children, className, closeModal }: ModalProps) {
  return (
    <dialog open={open} className={`${css.modal} ${className}`}>
      <div className={css.head}>
        <h2>{title}</h2>
        <button onClick={closeModal}>
          <span />
          <span />
        </button>
      </div>
      <div className={css.body}>{children}</div>
    </dialog>
  );
}
