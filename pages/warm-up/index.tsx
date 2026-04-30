import css from '@/components/layouts/SponsoredPages.module.scss';

import Head from 'next/head';
import Hero, { EventHero } from '@/components/layouts/Hero';
import PricePool from '@/components/layouts/PricePool';
import CTA from '@/components/navigation/CTA';
import SectionTitle from '@/components/layouts/SectionTitle';
import ChallengePreview from '@/components/content/ChallengePreview';
import { ChangeBackgroundColor } from '@/utils/changePageSettings';
import Button from '@/components/navigation/Button';
import SponsoredPricesPreview from '@/components/content/SponsoredPricesPreview';
import { PriceListShort, PrizeType } from '@/components/layouts/PriceList';
import TextImgSection from '@/components/layouts/TextImgSection';
import LogoSct from '@/components/content/LogoSct';
import leagueCss from '@/components/content/LeagueBadge.module.scss';

export const warmUpPrizes: PrizeType[] = [
  {
    title: 'Exclusive TM Tour Bag signed by Dustin Johnson',
    logo: '/sponsors/WGC/WGC_May2026/Taylormade.svg',
    description: (
      <>
        Enter the drawing for a chance to win this Major Special Edition golf bag autographed by
        4Aces star Dustin Johnson.
      </>
    ),
    badge: { title: 'The grand draw', className: leagueCss.pgaChampion },
    img: '/sponsors/WGC/WGC_May2026/WarmUp-Bag.png',
  },
  {
    title: 'TaylorMade TP5x Balls',
    logo: '/sponsors/WGC/WGC_May2026/Taylormade.svg',
    description: (
      <>
        You can never have too many golf balls. Complete your golf kit with these WGC-branded balls.
      </>
    ),
    badge: { title: 'Top 3 of each category', className: leagueCss.clubhouseKing },
    img: '/sponsors/WGC/WGC_May2026/WarmUp-Balls.png',
  },
  {
    title: 'WGC Caps',
    logo: '/logos/logo-wgc-full-accent-white.svg',
    description: <>Grip it. Click it. Protected from the sun, but not from challenges.</>,
    badge: { title: 'Top 15 of each category', className: leagueCss.tournamentReady },
    img: '/sponsors/WGC/WGC_May2026/WarmUp-Caps.png',
  },
];

export default function SponsoredClubhouse() {
  const challenges: ChallengePreview[] = [
    {
      url: '/warm-up/lobby',
      img: '/sponsors/WGC/WGC_May2026/WarmUp-Cover.png',
      name: 'The Warm-Up Challenge',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'single',
      players: 11,
      id: 0,
      pool: 0,
      fee: 0,
    },
    {
      url: '/warm-up/lobby',
      img: '/sponsors/WGC/WGC_May2026/WarmUp-Cover.png',
      name: 'The Warm-Up Challenge',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'up to 18',
      players: 8,
      id: 1,
      pool: 0,
      fee: 0,
    },
    {
      url: '/warm-up/lobby',
      img: '/sponsors/WGC/WGC_May2026/WarmUp-Cover.png',
      name: 'The Warm-Up Challenge',
      dates: 'Mar. 14th to Mar. 18th',
      gameType: 'Net Strableford',
      hcp: 'up to 54',
      players: 0,
      id: 2,
      pool: 0,
      fee: 0,
    },
  ];

  const prices: { title: string; url: string }[] = [
    { title: 'Extracurricular Cap', url: '/layouts/excr/prices/hat.webp' },
    { title: '50%-Off Gift Card', url: '/layouts/excr/prices/WGC-EXCR_price_50percents.png' },

    { title: 'Extracurricular Polo Shirt', url: '/layouts/excr/prices/polo1.webp' },
    { title: '1000$ Gift Card', url: '/layouts/excr/prices/WGC-EXCR_price_1000.png' },
    { title: 'Extracurricular Polo Shirt', url: '/layouts/excr/prices/polo2.webp' },
  ];

  return (
    <>
      <Head>
        <title>WGC Warm-Up Challenge | Welcome</title>
        <link type="image/svg+xml" href="/logos/favicon_excr.svg" />
      </Head>
      {/* Insert below the hex code of the PRIMARY color */}
      <ChangeBackgroundColor color="var(--primary)" gradientBg />

      <EventHero
        alt
        title="Let’s celebrate the 1,000 users milestone"
        description={<p>Join the WGC Warm-Up Challenge !</p>}
        mainSponsor={{ src: '/logos/logo-wgc-full-accent-white.svg', alt: 'World Golf Challenge' }}
        hideSponsors
        image={{ src: '/layouts/home/lobby_hero.jpg', style: { right: 0, maxWidth: '100%' } }}
      />

      <main className={css.clubhouse}>
        <PriceListShort
          lightBg
          title="No entry fee. Zero risk. Just golf."
          description={
            <>
              Post your score and join the WGC community. Win exclusive WGC Premium balls and a
              signed Tour Bag in our exclusive draw.
            </>
          }
          prizes={warmUpPrizes}
        />

        <SectionTitle title={'Join the Challenge'}>
          <p>
            Choose your category based on your handicap, enter your score, and take your chance!
          </p>
        </SectionTitle>
        <div className={css.challenges}>
          {challenges.map((c, key) => (
            <ChallengePreview key={key} {...c} />
          ))}
        </div>

        {/* <SponsoredPricesPreview prices={prices} /> */}
      </main>

      <TextImgSection img={'/layouts/home/hcp-single.JPG'} inverted>
        <>
          <h2>
            Playing golf <em>physically</em> while competing <em>digitally</em>.
          </h2>
          <p>
            Play in the club of your choice in real life while measuring yourself & your score,
            virtually against any other player in the world!
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', flexWrap: 'wrap' }}>
            <Button href="/support">Learn how to play</Button>
          </div>
        </>
      </TextImgSection>

      <LogoSct marginTop marginBottom />
    </>
  );
}
