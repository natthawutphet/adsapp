import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Script from 'next/script';
import "./globals.css";
import "./style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {


  return (
    <html lang="en">
   <meta name="google-site-verification" content="RUGTR3VbcF6w2Ejs1n1-0CThkzCgXGNxswXwfbO0D0s" />
   <Script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "adsmanager",
              "url": "https://myfbad.com/",
              "Image": "https://myfbad.com/img/ads.jpg",
              "sameAs": [
                "https://myfbad.com/favicon.ico"
              ]
            }
          `}
        </Script>

   <meta name="robots" content="index, follow" />

<meta name="author" content="adsmanager" />

<meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
<meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา Google, YouTube, Facebook" />
<link rel="canonical" href='https://myfbad.com' />
<meta name="twitter:image" content="https://myfbad.com/img/ads.jpg" />
      <meta property="og:image" content="https://myfbad.com/img/ads.jpg" />
      <body className={inter.className}>
        <Nav/>
        {children}
       
     
        <Footer/>
        </body>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>

    </html>
  );
}
