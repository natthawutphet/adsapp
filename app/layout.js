import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const inter = new FontFace('Inter', 'url(https://rsms.me/inter/font-files/Inter-Regular.woff2)');
    inter.load().then(() => {
      document.fonts.add(inter);
      setFontLoaded(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>รับทำโฆษณาออนไลน์สายเทา</title>
        <meta name="description" content="รับทำโฆษณาออนไลน์สายเทา Google, YouTube, Facebook" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="adsmanager" />
        <meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
        <meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา Google, YouTube, Facebook" />
        <meta property="og:image" content="https://myfbad.com/img/ads.jpg" />
        <meta name="twitter:image" content="https://myfbad.com/img/ads.jpg" />
        <link rel="canonical" href="https://myfbad.com" />
      </Head>
      <body className={fontLoaded ? 'Inter' : ''}>
        <Nav />
        {children}
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16529044379" strategy="beforeInteractive" />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16529044379');
          `}
        </Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" />
      </body>
    </>
  );
}
