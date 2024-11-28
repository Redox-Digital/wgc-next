import ContactCTA from '@/components/content/ContactCTA';
import css from './Lobby.module.scss';
import Hero from '@/components/layouts/Hero';
import PricePool from '@/components/layouts/PricePool';
import Image from 'next/image';
import Button from '@/components/navigation/Button';
import Link from 'next/link';
import Rankings from '@/components/layouts/Rankings';
import Head from 'next/head';

export default function Lobby() {
  return (
    <>
      <Head>
        <title>Lobby | EXTRACURRICULAR x WGC</title>
      </Head>
      <Hero
        title={'EXTRACURRICULAR - HCP Single'}
        subtitle={'Net Stableford - 18 Holes - Ongoing'}
        source={'/layouts/lobby_hero.webp'}
        opacity={0.25}
      />
      <main>
        <section className={css.intro}>
          <Image src={'/logos/logo_excr.svg'} alt={''} width={800} height={120} />
          <div className={css.texts}>
            <Image src={'/logos/logo_excr.svg'} alt={''} width={800} height={120} />

            <h3>Challenge #7607</h3>
            <p>
              <b>Start time:</b> 2024-09-16 11:00
              <br />
              <b>End time:</b> 2024-09-20 21:59
            </p>
            <Button to={'#'}>Enter score</Button>
            <Link className={css.textLink} href={'#'}>
              Unregister
            </Link>
          </div>
          <div className={css.gameRules}>
            <h4>Game Rules</h4>
            <div className={css.rule}>
              <Image src={'/pictograms/clock.svg'} alt={''} width={20} height={20} />{' '}
              <p>
                Ongoing. Ends in <b>8h 52min 07s</b>
              </p>
            </div>

            <div className={css.rule}>
              <Image src={'/pictograms/golf.svg'} alt={''} width={20} height={20} />
              <p>
                Course type : <b>18 Holes</b>
                <br />
                Game type : <b>Net Stableford</b>
                <br />
                Player HCP : <b>HCP Up to 18</b>
              </p>
            </div>

            <div className={css.rule}>
              <Image src={'/pictograms/users.svg'} alt={''} width={20} height={20} />
              <p>
                Player count min : <b>0</b>
                <br />
                Player count max : <b>-</b>
              </p>
            </div>
          </div>
          <Rankings />
        </section>
        <PricePool alt />
        <ContactCTA img="/layouts/contact-cta.webp" title={<>Do you want more&nbsp;?</>}>
          <p>
            More Free and Buy-in Challenges available on wgc.gg & your own Challenges with friends,
            clients, club members to create!
          </p>
          <Button to={'https://wgc.gg'} blank>
            Visit wgc.gg
          </Button>
        </ContactCTA>
      </main>
    </>
  );
}
