import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '@/styles/wgc-globals.scss';

import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --wgc-roboto-font: ${roboto.style.fontFamily};
            --wgc-montserrat-font: ${montserrat.style.fontFamily};
          }
        `}
      </style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
