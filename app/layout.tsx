import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import CopyButtons from '@/components/CopyButtons';
import { SITE } from '@/lib/site';
import { HOME_TITLE } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: HOME_TITLE, template: `%s · ${SITE.name}` },
  description: SITE.description,
  authors: [{ name: SITE.author, url: SITE.url }],
  creator: SITE.author,
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'es_UY', images: [{ url: '/img/og-default.jpg', width: 1200, height: 630, alt: SITE.author }] },
  twitter: { card: 'summary_large_image', site: '@gustavguez', creator: '@gustavguez' },
};

export const viewport: Viewport = { themeColor: '#0A1222', colorScheme: 'dark light' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {SITE.gtmId && (
          <>
            {/* Google Tag Manager */}
            <script async src={`https://www.googletagmanager.com/gtm.js?id=${SITE.gtmId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());",
              }}
            />
          </>
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=JetBrains+Mono:wght@400;600&family=Caveat:wght@600;700&display=swap" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Newsletter />
        <Footer />
        <CopyButtons />
      </body>
    </html>
  );
}
