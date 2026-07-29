import { EventHero } from '@/components/layouts/Hero';
import Button from '@/components/navigation/Button';
import { PrizeType } from '@/components/layouts/PriceList';
import leagueCss from '@/components/content/LeagueBadge.module.scss';
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
            /* BePopcorn Challenge - LIGHT THEME */

            --dark : #1b1b1b;
            --dark-rgb : 27, 27, 27;
            --primary: #FFF9D2;
            --primary-rgb: 255, 249, 210;
            --accent: #D7A057;
            --accent-rgb: 215, 160, 87;
            --secondary: #E1B780;
            --secondary-rgb: 225, 183, 128;
            --white: #ffffff;

            --gradient-accent: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);

          }
        `,
    challengeTitle: 'BePopcorn Challenge 🍿',
    light: true,
    hero: (
      <EventHero
        light
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
          <h2>
            Playing golf <em>physically</em> while competing <em>digitally</em>.
          </h2>
          <p>
            Play in the club of your choice in real life while measuring yourself & your score,
            virtually against any other player in the world!
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', flexWrap: 'wrap' }}>
            <Button href="/support">How to play ?</Button>
            <Button href="/terms" outline>
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
