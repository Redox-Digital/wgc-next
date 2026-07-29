import css from '@/components/layouts/SponsorPageLayout.module.scss';
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
import PriceList, { PriceListShort, PrizeType } from '@/components/layouts/PriceList';
import leagueCss from '@/components/content/LeagueBadge.module.scss';
import Image from 'next/image';
import SponsorsSection from '@/components/layouts/SponsorsSection';
import SponsorsBanner from '@/components/layouts/SponsorsBanner';
import SponsorPageLayout, { SponsorPageLayoutProps } from '@/components/layouts/SponsorPageLayout';

const bpopPrizes: PrizeType[] = [
  {
    title: "Une œuvre d'art au poignet",
    logo: '/sponsors/JaquetDroz/JD_white.svg',
    description: (
      <>
        Tentez de remporter par tirage au sort une pièce de haute horlogerie suisse Jaquet Droz,
        d'une valeur de € 300'000.-.
      </>
    ),
    badge: { title: 'tirage au sort global', className: leagueCss.pgaChampion },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price01-alt.jpg',
  },
  {
    title: 'LIV Pro-Am Valderrama',
    logo: '/sponsors/JaquetDroz/4Aces_Logo_white.svg',
    description: (
      <>
        Marquez l'histoire en gagnant votre invitation pour jouer aux côtés des légendes lors d'un
        Pro-Am exclusif.
      </>
    ),
    badge: { title: 'tirage au sort par catégorie', className: leagueCss.clubhouseKing },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price02.jpg',
  },
  {
    title: 'Le kit complet des 4Aces',
    logo: '/sponsors/JaquetDroz/logo-under-armor-white.svg',
    description: <>Pour un équipement de la tête aux pieds de notre partenaire 4Aces.</>,
    badge: { title: 'top 20 de chaque catégorie', className: leagueCss.tournamentReady },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price03.webp',
  },
];

export const bpopChallenges: ChallengePreview[] = [
  {
    url: '/bepopcorn/lobby',
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg',
    name: 'BePopcorn Challenge 🍿',
    dates: 'Mar. 14th to Mar. 18th',
    gameType: 'Net Strableford',
    hcp: 'single',
    players: 11,
    id: 0,
    pool: 0,
    fee: 110,
  },
  {
    url: '/bepopcorn/lobby',
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg',
    name: 'BePopcorn Challenge 🍿',
    dates: 'Mar. 14th to Mar. 18th',
    gameType: 'Net Strableford',
    hcp: 'up to 18',
    players: 8,
    id: 1,
    pool: 0,
    fee: 110,
  },
  {
    url: '/bepopcorn/lobby',
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC-JD-challenge.svg',
    name: 'BePopcorn Challenge 🍿',
    dates: 'Mar. 14th to Mar. 18th',
    gameType: 'Net Strableford',
    hcp: 'up to 54',
    players: 0,
    id: 2,
    pool: 0,
    fee: 110,
  },
];

export default function BePopcornIndex() {
  const bePopSponsorPage: SponsorPageLayoutProps = {
    style: `
          * {
            /* Overwriting Color Variables to fit the Sponsor's Identity */
            /* BePopcorn Challenge */

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
        `,
    challengeTitle: 'BePopcorn Challenge 🍿',
    hero: (
      <EventHero
        alt
        title={
          <>
            Let’s celebrate the <em>1,000&nbsp;users</em> milestone
          </>
        }
        description={<p>Join the WGC Warm-Up Challenge !</p>}
        mainSponsor={{ src: '/logos/logo-wgc-full-accent-white.svg', alt: 'World Golf Challenge' }}
        hideSponsors
        image={{ src: '/layouts/home/lobby_hero.jpg', style: { right: 0, maxWidth: '100%' } }}
      />
    ),
    txtImgSct: {
      content: (
        <>
          <h2>Playing golf physically while competing digitally.</h2>
          <p>
            Play in the club of your choice in real life while measuring yourself & your score,
            virtually against any other player in the world!
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', flexWrap: 'wrap' }}>
            <Button href="/support">How to play ?</Button>
            <Button href="/terms" outline darkBg>
              Terms & Conditions
            </Button>
          </div>
        </>
      ),
      image: '',
    },
    challenges: {
      title: undefined,
      description: undefined,
      list: bpopChallenges,
    },
    prices: {
      title: undefined,
      description: undefined,
      list: bpopPrizes,
    },
  };

  return (
    <>
      <SponsorPageLayout {...bePopSponsorPage}></SponsorPageLayout>

      {/* <SponsorsBanner
        title="L'excellence reconnue par les plus grands"
        logos={[
          { src: '/sponsors/JaquetDroz/blocmarque-BGUG_white.svg', title: 'BLUEGREEN x UGOLF' },
          { src: '/sponsors/JaquetDroz/4Aces_Logo_white.svg', title: '4Aces GC' },
          { src: '/sponsors/JaquetDroz/JD_white.svg', title: 'Jaquet Droz' },
        ]}
      >
        <p>
          Un événement organisé en partenariat avec BLUEGREEN et UGOLF, leaders du golf en France,
          et soutenu par Jaquet Droz et les 4Aces.
        </p>
      </SponsorsBanner> */}

      {/* <RichCTA
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
      /> */}
    </>
  );
}
