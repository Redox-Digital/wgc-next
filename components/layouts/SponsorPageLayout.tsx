import css from '@/components/layouts/SponsorPageLayout.module.scss';
import Head from 'next/head';
import SectionTitle from '@/components/layouts/SectionTitle';
import ChallengePreview from '@/components/content/ChallengePreview';
import { ChangeBackgroundColor } from '@/utils/changePageSettings';
import LogoSct from '@/components/content/LogoSct';
import TextImgSection from '@/components/layouts/TextImgSection';
import { PriceListShort, PrizeType } from '@/components/layouts/PriceList';

export type SponsorChallengeConfig = {
  style: string;
  challengeTitle: string;
  light?: boolean;
  hero: React.ReactNode;
  children?: React.ReactNode;
  txtImgSct: {
    content: React.ReactNode;
    image?: string;
  };
  prices: {
    title?: React.ReactNode;
    description?: React.ReactNode;
    list: PrizeType[];
  };
  challengeImage?: string;
  lobbyUrl?: string;
};

export type SponsorPageLayoutProps = SponsorChallengeConfig & {
  challenges: {
    title?: React.ReactNode;
    description?: React.ReactNode;
    list: ChallengePreview[];
  };
};

export default function SponsorPageLayout({
  style,
  challengeTitle,
  hero,
  light,
  children,
  txtImgSct,
  challenges,
  prices,
}: SponsorPageLayoutProps) {
  return (
    <>
      <style jsx global>
        {style}
      </style>
      <Head>
        <title>{challengeTitle} | Welcome</title>
      </Head>
      <ChangeBackgroundColor
        lightTheme={light}
        color={light ? 'var(--white)' : 'var(--primary)'}
        gradientBg
      />

      {hero}

      <main className={`${css.clubhouse} ${light && css.light}`}>
        {prices && (
          <PriceListShort
            lightTheme={light}
            lightBg
            title={prices.title || 'No entry fee. Zero risk. Just golf.'}
            description={
              prices.description ||
              'Submit your score and join the WGC Community. Win exclusive prizes from our sponsors.'
            }
            prizes={prices.list}
          />
        )}

        <SectionTitle title={challenges.title || `Join the ${challengeTitle}`}>
          {challenges.description || (
            <p>
              Choisissez votre catégorie en fonction de votre handicap, entrez votre score, et
              tentez votre chance !
            </p>
          )}
        </SectionTitle>
        <div className={css.challenges}>
          {challenges && challenges.list.length > 0 ? (
            challenges.list.map((c, key) => <ChallengePreview light={light} key={key} {...c} />)
          ) : (
            <h3>
              <i style={{ fontStyle: 'italic' }}>No active Challenge at the moment.</i>
            </h3>
          )}
        </div>
      </main>

      <TextImgSection
        img={txtImgSct.image || '/layouts/home/hcp-single.JPG'}
        inverted
        lightBg={light}
      >
        {txtImgSct.content}
      </TextImgSection>

      {/* For challenge's specific sections */}
      {children}

      <LogoSct marginTop marginBottom lightBg={light} />
    </>
  );
}
