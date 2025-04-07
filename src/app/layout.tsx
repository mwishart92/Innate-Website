import type { Metadata } from 'next'
import {
  Inter,
  Montserrat,
  Rajdhani,
  Inknut_Antiqua,
  Bodoni_Moda,
} from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'
import { TabProvider } from '@/context/TabContsxt'
import MyProvider from '@/components/MyProvider'

import Script from 'next/script' // Import Script from next/script

export const metadata: Metadata = {
  title: 'Innate NW | Custom Design & Construction Solutions',
  description:
    'Innate NW offers expert design, project management, and construction services, delivering high-quality custom spaces tailored to your unique needs.',
  keywords:
    'construction, architecture, engineering, roofing, construction consulting, landscaping, Innate design',
  icons: {
    icon: '/favicon.ico',
  },
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const monts = Montserrat({ subsets: ['latin'], variable: '--font-monts' })
const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
})
const inknut = Inknut_Antiqua({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inknut',
})
const Bodoni = Bodoni_Moda({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-Bodoni',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-innate.png" />
      </head>
      <body
        className={`gradient ${inter.variable} ${monts.variable} ${rajdhani.variable} ${inknut.variable} ${Bodoni.variable} bg-[#000]`}
      >
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFW4QBRG');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFW4QBRG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <MyProvider>
          <TabProvider>
            {children}
            <Footer />
          </TabProvider>
        </MyProvider>
      </body>
    </html>
  )
}
