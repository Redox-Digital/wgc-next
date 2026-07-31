import { EventHero } from '@/components/layouts/Hero';
import Button from '@/components/navigation/Button';
import { PrizeType } from '@/components/layouts/PriceList';
import leagueCss from '@/components/content/LeagueBadge.module.scss';
import SponsorPageLayout, { SponsorChallengeConfig } from '@/components/layouts/SponsorPageLayout';

export const bpopPrizes: PrizeType[] = [
  {
    title: 'Free Premium Article',
    logo: '/sponsors/BePopcorn/vice_logo_white.svg',
    description: (
      <>
        A free <b>VICE Golf premium item</b>, delivered right to your door.
      </>
    ),
    badge: { title: 'Top 3 de chaque catégorie', className: leagueCss.clubhouseKing },
    img: '/sponsors/BePopcorn/BePop_Aug2026/Golfclub_VICE.png',
  },
  {
    title: 'Vice Golf Accessories',
    logo: '/sponsors/BePopcorn/vice_logo_white.svg',
    description: (
      <>
        VICE Golf <b>balls</b>, <b>towels</b>, or <b>accessories</b> to reward your performance.
      </>
    ),
    badge: { title: 'Top 10 de chaque catégorie', className: leagueCss.tournamentReady },
    img: '/sponsors/BePopcorn/BePop_Aug2026/Accessories_VICE.png',
  },
  {
    title: '20% off',
    logo: '/sponsors/BePopcorn/vice_logo_white.svg',
    description: (
      <>
        A 20% off coupon valid on the entire <b>VICE Golf online store</b>.
      </>
    ),
    badge: { title: 'top 20 de chaque catégorie', className: leagueCss.tourProspect },
    img: '/sponsors/BePopcorn/BePop_Aug2026/20percents_VICE.png',
  },
  {
    title: 'VICE Golf & Be!Popcorn Discount Coupons',
    logo: '/sponsors/BePopcorn/vice_logo_white.svg',
    description: (
      <>
        As soon as you enter your score, you'll automatically receive a <b>10% discount</b> coupon
        for your next <b>VICE Golf</b> order, as well as a <b>30% discount</b> coupon for your next{' '}
        <b>Be!Popcorn</b> order.
      </>
    ),
    badge: { title: 'Tous les participants', className: leagueCss.weekender },
    img: '/sponsors/BePopcorn/BePop_Aug2026/30percents_BePop.png',
    largeCard: true,
  },
];

export const bpopChallenges: ChallengePreview[] = [
  {
    url: '/bepopcorn/lobby',
    img: '/sponsors/BePopcorn/bepopcorn-logo.png',
    name: 'BePopcorn Challenge 🍿',
    dates: 'Aug. 8th to Sept. 27th',
    gameType: 'Net Strableford',
    hcp: 'single',
    players: 11,
    id: 0,
    pool: 0,
    fee: 110,
  },
  {
    url: '/bepopcorn/lobby',
    img: '/sponsors/BePopcorn/bepopcorn-logo.png',
    name: 'BePopcorn Challenge 🍿',
    dates: 'Aug. 8th to Sept. 27th',
    gameType: 'Net Strableford',
    hcp: 'up to 18',
    players: 8,
    id: 1,
    pool: 0,
    fee: 110,
  },
  {
    url: '/bepopcorn/lobby',
    img: '/sponsors/BePopcorn/bepopcorn-logo.png',
    name: 'BePopcorn Challenge 🍿',
    dates: 'Aug. 8th to Sept. 27th',
    gameType: 'Net Strableford',
    hcp: 'up to 54',
    players: 0,
    id: 2,
    pool: 0,
    fee: 110,
  },
];

export const bePopConfig: SponsorChallengeConfig = {
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
  challengeImage: '/sponsors/BePopcorn/bepopcorn-logo.png',
  light: true,
  hero: (
    <EventHero
      light
      alt
      title={
        <>
          <em>Swiss popcorn</em>,<br /> a <em>national</em> ranking.
        </>
      }
      description={<p>Join the Be!Popcorn Challenge !</p>}
      mainSponsor={{
        src: '/sponsors/BePopcorn/bepopcorn-logo-square.png',
        alt: 'World Golf Challenge',
      }}
      hideSponsors
      image={{
        src: '/sponsors/BePopcorn/BePop_Aug2026/BePop_home_banner.jpg',
        style: { right: 0, maxWidth: '100%' },
      }}
      // Actions for dev purpose
      actions={[
        {
          label: 'Join the Challenge',
          href: '#',
        },
      ]}
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
  prices: { list: bpopPrizes },
  lobbyUrl: '/bepopcorn/lobby',
};

export default function BePopcornIndex() {
  return (
    <>
      <SponsorPageLayout {...bePopConfig} challenges={{ list: bpopChallenges }} />

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
