import css from './Hero.module.scss';

type Props = {
  title: string | React.ReactNode;
  gradient?: boolean;
  children?: string | React.ReactNode;
};

const Hero = ({ title, children, gradient }: Props) => {
  return (
    <>
      <header className={`${css.hero} ${gradient && css.gradientBg}`}>
        <h1>{title}</h1>
        <div className={css.content}>{children}</div>
      </header>

      <span id="intro">{/* Anchor */}</span>
    </>
  );
};

export default Hero;
