import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/logos/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className="wgc">
        {/* DEV : ajouter la class "excr" pour les pages sponsorisées */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
