import PageTitle from '@/components/content/PageTitle';
import { TextInput } from '@/components/inputs/Inputs';
import Button from '@/components/navigation/Button';
import Link from 'next/link';
import css from './Onboarding.module.scss';

export default function Login() {
  return (
    <main className={css.login}>
      <PageTitle title={'Login'} returnBtn></PageTitle>

      <form>
        <TextInput id={'mail'} label={'E-Mail'} type={'text'} />
        <TextInput id={'password'} label={'Password'} type={'password'} />
      </form>

      <div className={css.btns}>
        <Button href="/">Sign in</Button>
        <Link className="textLink" href="/create">
          I don&apos;t have an account
        </Link>
      </div>
    </main>
  );
}
