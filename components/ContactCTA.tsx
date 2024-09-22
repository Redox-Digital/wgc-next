import css from './ContactCTA.module.scss';
import Button from './navigation/Button';
import Image from 'next/image';

export default function ContactCTA() {
  return (
    <section className={css.contactCTA}>
      <div className={css.contactCTA__texts}>
        <h3>Do you want more ?</h3>
        <p>
          More Free and Buy-in Challenges available on wgc.gg & your own Challenges with friends,
          clients, club members to create!
        </p>
        <Button wgc to="https://wgc.gg" blank>
          visit wgc.gg
        </Button>
      </div>
      <div className={css.contactCTA__img}>
        <Image src={'/layouts/placeholder1.jpg'} alt={''} fill />
      </div>
    </section>
  );
}
