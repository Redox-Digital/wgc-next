import css from './GlobalStatBar.module.scss';

type Props = {
  elements: { title: string; desc: string }[];
};

export default function GlobalStatBar({ elements }: Props) {
  return (
    <section className={css.globalStatBar}>
      {elements.map((elt, i) => (
        <div key={i} className={css.elt}>
          <p>{elt.title}</p>
          <small>{elt.desc}</small>
        </div>
      ))}
    </section>
  );
}
