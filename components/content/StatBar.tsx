import Link from 'next/link';
import css from './StatBar.module.scss';
import Image from 'next/image';

type StatProps = {
  title?: string;
  className?: string;
  elements: { name: string; value?: string | number; picto?: string; url?: string }[];
};

export default function StatBar({ title, elements, className }: StatProps) {
  return (
    <div className={`${css.statBar} ${className}`}>
      {title && <h6>{title}</h6>}
      <ul>
        {elements.map((item, key) => (
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
        ))}
      </ul>
    </div>
  );
}
