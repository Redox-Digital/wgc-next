import Button from '@/components/navigation/Button';
import css from './404.module.scss';

export default function NotFoundPage() {
  return (
    <section className={`light ${css.notFoundPage}`}>
      <div className="container">
        <h5>404</h5>
        <h2>Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Button to={'/'}>Back to Homepage</Button>
      </div>
    </section>
  );
}
