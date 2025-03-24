import { Html, Head, Main, NextScript } from 'next/document';
import { usePathname } from 'next/navigation';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/logos/favicon.svg" type="image/svg+xml" />

        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="WGC.GG" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta property="og:image" content="/favicon/social_thumbnail.png" />
        <meta name="twitter:image" content="/favicon/social_thumbnail.png" />
      </Head>
      <body className="wgc">
        {/* DEV : ajouter la class "excr" pour les pages sponsorisées */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
