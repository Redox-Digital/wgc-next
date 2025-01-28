import Button from '@/components/navigation/Button';
import css from './404.module.scss';
import PageTitle from '@/components/content/PageTitle';

export default function NotFoundPage() {
  return (
    <main className={css.notFound}>
      <PageTitle title="404 - Page Not Found">
        <p>The page you are looking for does not exist.</p>
      </PageTitle>
      <Button href={'/'}>Back to Homepage</Button>
    </main>
  );
}
