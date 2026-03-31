import Link from 'next/link';
import css from './StatBar.module.scss';
import Image from 'next/image';

export type StatElt = { name: string; value?: string | number; picto?: string; url?: string };

type StatProps = {
  title?: string;
  className?: string;
  clickable?: { href: string; title: string };
  defaultText?: string;
  elements: StatElt[];
};

export default function StatBar({ title, elements, className, clickable, defaultText }: StatProps) {
  if (clickable)
    return (
      <Link href={clickable.href} title={clickable.title} className={`${css.statBar} ${className}`}>
        {title && <h6>{title}</h6>}
        <StatList elements={elements} defaultText={defaultText} />
      </Link>
    );

  return (
    <div className={`${css.statBar} ${className}`}>
      {title && <h6>{title}</h6>}
      <StatList elements={elements} defaultText={defaultText} />
    </div>
  );
}

function StatList({ elements, defaultText }: StatProps) {
  return (
    <ul>
      {elements.length > 0 ? (
        elements.map((item, key) => (
          <li key={key}>
            {item.url ? (
              <Link href={item.url}>
                {item.picto && <Image src={item.picto} alt={item.name} width={18} height={18} />}
                <small>{item.name}</small>
                {item.value && <span>{item.value}</span>}
              </Link>
            ) : (
              <>
                {item.picto && <Image src={item.picto} alt={item.name} width={24} height={24} />}
                <small>{item.name}</small>
                {item.value && <span>{item.value}</span>}
              </>
            )}
          </li>
        ))
      ) : (
        <em>{defaultText}</em>
      )}
    </ul>
  );
}
