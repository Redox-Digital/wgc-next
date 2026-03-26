import css from '@/components/layouts/SponsoredPages.module.scss';
import Head from 'next/head';
import Hero, { EventHero } from '@/components/layouts/Hero';
import PricePool from '@/components/layouts/PricePool';
import CTA, { RichCTA } from '@/components/navigation/CTA';
import SectionTitle from '@/components/layouts/SectionTitle';
import ChallengePreview from '@/components/content/ChallengePreview';
import { ChangeBackgroundColor } from '@/utils/changePageSettings';
import Button from '@/components/navigation/Button';
import SponsoredPricesPreview from '@/components/content/SponsoredPricesPreview';
import LogoSct from '@/components/content/LogoSct';
import TextImgSection from '@/components/layouts/TextImgSection';
import PriceList, { PriceListShort } from '@/components/layouts/PriceList';
import Image from 'next/image';
import SponsorsSection from '@/components/layouts/SponsorsSection';
import SponsorsBanner from '@/components/layouts/SponsorsBanner';

export const jdChallenges: ChallengePreview[] = [
  {
    url: '/jaquet-droz/lobby',
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg',
    name: 'Jaquet Droz Challenge',
    dates: 'Mar. 14th to Mar. 18th',
    gameType: 'Net Strableford',
    hcp: 'single',
    players: 11,
    id: 0,
    pool: 0,
    fee: 110,
  },
  {
    url: '/jaquet-droz/lobby',
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg',
    name: 'Jaquet Droz Challenge',
    dates: 'Mar. 14th to Mar. 18th',
    gameType: 'Net Strableford',
    hcp: 'up to 18',
    players: 8,
    id: 1,
    pool: 0,
    fee: 110,
  },
  {
    url: '/jaquet-droz/lobby',
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg',
    name: 'Jaquet Droz Challenge',
    dates: 'Mar. 14th to Mar. 18th',
    gameType: 'Net Strableford',
    hcp: 'up to 54',
    players: 0,
    id: 2,
    pool: 0,
    fee: 110,
  },
];

export default function SponsoredClubhouse() {
  return (
    <>
      <style jsx global>
        {`
          * {
            /* Overwriting Color Variables to fit the Sponsor's Identity */
            /* Jaquet Droz Challenge */
            --black: #141414;
            --black-rgb: 20, 20, 20;
            --primary: #333333;
            --primary-rgb: 51, 51, 51;
            --accent: #b5991c;
            --accent-rgb: 181, 153, 28;
            --secondary: #fafafa;
            --secondary-rgb: 250, 250, 250;

            --gradient-accent: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
          }
        `}
      </style>
      <Head>
        <title>Jaquet Droz Challenge | Welcome</title>
        <link type="image/svg+xml" href="/logos/favicon_excr.svg" />
      </Head>
      {/* Insert below the hex code of the PRIMARY color */}
      <ChangeBackgroundColor color="var(--primary)" gradientBg />

      {/* <Hero
        title={
          <span>
            Playing golf physically&nbsp;
            <br />
            while competing digitally
          </span>
        }
        gradient
      >
        <p>
          Play in the club of your choice in real life while measuring yourself & your score,
          virtually against any other player in the world!
        </p>
      </Hero>*/}

      <EventHero alt />

      <main className={css.clubhouse}>
        <PriceListShort lightBg />

        <SectionTitle title={'Rejoignez le Challenge'}>
          <p>
            Choisissez votre catégorie en fonction de votre handicap, entrez votre score, et tentez
            votre chance !
          </p>
        </SectionTitle>
        <div className={css.challenges}>
          {jdChallenges.map((c, key) => (
            <ChallengePreview key={key} {...c} />
          ))}
        </div>

        {/* <SponsoredPricesPreview prices={prices} /> */}
      </main>

      <TextImgSection img={'/sponsors/JaquetDroz/wgc-hcp-section.jpg'} inverted>
        <>
          <h2>
            <em>Index 54 ou Scratch ?</em>
            <br />
            Vous jouez pour le même rêve.
          </h2>
          <p>
            Nous célébrons le golf dans sa globalité. Ne laissez pas votre handicap vous freiner. La
            montre Jaquet Droz et les places Pro-Am ne dépendent pas de votre carte de score. Votre
            seule obligation : vous inscrire et prendre du plaisir sur le parcours.
          </p>
          <p>
            Le sort est le seul juge, et <b>il est le même pour tous.</b>
          </p>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', flexWrap: 'wrap' }}>
            <Button href="/support">Comment participer ?</Button>
            <Button href="/terms" outline darkBg>
              Conditions de participation
            </Button>
          </div>
        </>
      </TextImgSection>

      <SponsorsBanner
        title="L'excellence reconnue par les plus grands"
        logos={[
          { src: '/sponsors/JaquetDroz/blocmarque-BGUG_white.svg', title: 'BLUEGREEN x UGOLF' },
          { src: '/sponsors/JaquetDroz/JDx4A_white.svg', title: 'Jaquet Droz x 4Aces GC' },
        ]}
      >
        <p>
          Un événement organisé en partenariat avec BLUEGREEN et UGOLF, leaders du golf en France,
          et soutenu par Jaquet Droz et les 4Aces.
        </p>
      </SponsorsBanner>

      <RichCTA
        title={'Prêt à relever le défi ?'}
        description={
          <>
            Intégrez le classement international et jouez pour une dotation à 6 chiffres.{' '}
            <b>Tout cela pour seulement 125 €.</b>
          </>
        }
        btnLabel="Se connecter"
        href={'/profile/login'}
        img={'/sponsors/JaquetDroz/wgc-JD-lobby-cta.jpg'}
        logo={{ src: '/sponsors/JaquetDroz/blocmarque-BGUG_white.svg', title: 'BLUEGREEN x UGOLF' }}
        badge={
          <>
            Accès « Early Bird » : <b>500 places</b> restantes
          </>
        }
      />

      <LogoSct marginTop marginBottom />

      {/*
      <section className={css.homeCTAs}>
        <CTA
          title={'How to play'}
          description={<p>Playing golf physically while competing digitally.</p>}
          btnLabel={'Learn how to play'}
          href={'/support'}
          img={'/layouts/clubhouse/wgc-how-to.jpg'}
          opacity={0.15}
        />
        <CTA
          title={'Look fresh on the greens'}
          description={
            <p>
              Elevate your wardrobe by visiting our sponsor&apos;s e-shop, <b>Extracurricular</b>,
              and discover men&apos;s premium golf apparel including polos, hats, shorts, and pants.
            </p>
          }
          btnLabel={'The shop'}
          href={'https://ex-cr.com/?utm_source=wgc'}
          btnBlank
          img={'/sponsors/4Aces/4Aces_landing_cta.webp'}
          opacity={0.4}
        />
      </section>
      */}
    </>
  );
}
