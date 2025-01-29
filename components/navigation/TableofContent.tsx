import css from './TableofContent.module.scss';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function TableofContent({ title, children }: Props) {
  return (
    <aside className={css.tableOfContent}>
      <details>
        <summary>
          <span>{title}</span>
          <div className={css.sign}>
            <span></span>
            <span></span>
          </div>
        </summary>
        {children}
      </details>
    </aside>
  );
}
