import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '@/styles/wgc-globals.scss';

import { Inter, Lexend } from 'next/font/google';

const inter = Inter({ weight: ['400', '500', '700'], subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

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
