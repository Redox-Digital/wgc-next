import css from './ContactCTA.module.scss';
import Button from './navigation/Button';
import Image from 'next/image';

export default function ContactCTA() {
  return (
    <section className={css.contactCTA}>
      <div className={css.contactCTA__texts}>
        <h2>Do you want more&nbsp;?</h2>
        <p>
          More Free and Buy-in Challenges available on wgc.gg & your own Challenges with friends,
          clients, club members to create!
        </p>
        <Button to="https://wgc.gg" blank>
          visit wgc.gg
        </Button>
      </div>
      <div className={css.contactCTA__img}>
        <Image src={'/layouts/contact-cta.webp'} alt={''} fill />
      </div>
    </section>
  );
}
