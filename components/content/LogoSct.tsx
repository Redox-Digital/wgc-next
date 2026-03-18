import css from './LogoSct.module.scss';
import Image from 'next/image';

type Props = {
  marginTop?: boolean;
  marginBottom?: boolean;
  lightBg?: boolean;
};

export default function LogoSct({ marginTop, marginBottom, lightBg }: Props) {
  return (
    <section
      className={`${css.logoSct} ${marginTop && css.marginTop} ${marginBottom && css.marginBottom}`}
    >
      {lightBg ? (
        <Image src="/logos/wgc-text-dark.svg" alt="" fill />
      ) : (
        <Image src="/logos/wgc-text.svg" alt="" fill />
      )}
    </section>
  );
}
