import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '@/styles/wgc-globals.scss';

import { Inter, Lexend, Syne } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });
const syne = Syne({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --fontfamily-body: ${inter.style.fontFamily};
            --fontfamily-titles: ${lexend.style.fontFamily};
          }
        `}
      </style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
