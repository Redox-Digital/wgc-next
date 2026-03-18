import css from './LogoSct.module.scss';
import Image from 'next/image';

type Props = {
  marginTop?: boolean;
  marginBottom?: boolean;
};

export default function LogoSct({ marginTop, marginBottom }: Props) {
  return (
    <section
      className={`${css.logoSct} ${marginTop && css.marginTop} ${marginBottom && css.marginBottom}`}
    >
      <Image src="/logos/wgc-text.svg" alt="" fill />
    </section>
  );
}
