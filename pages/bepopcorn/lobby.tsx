import { EventHero } from '@/components/layouts/Hero';
import SponsorLobbyLayout, {
  SponsorLobbyLayoutProps,
} from '@/components/layouts/SponsorLobbyPageLayout';
import Button from '@/components/navigation/Button';
import { bpopChallenges, bpopPrizes } from '.';

export default function SponsoredLobby() {
  const bePopSponsorPage: SponsorLobbyLayoutProps = {
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
      <SponsorLobbyLayout {...bePopSponsorPage}></SponsorLobbyLayout>
    </>
  );
}
