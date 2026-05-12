import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Rajdhani,
  Inknut_Antiqua,
  Bodoni_Moda,
} from "next/font/google";
import "./globals.css";
import "@/styles/swiper.css";
import Footer from "@/components/Footer";
import { TabProvider } from "@/context/TabContsxt";
import MyProvider from "@/components/MyProvider";
import GTMPageTracker from "@/components/GTMPageTracker";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const monts = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
  display: "swap",
  preload: true,
});
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
  preload: true,
});
const inknut = Inknut_Antiqua({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inknut",
  display: "swap",
  preload: true,
});
const Bodoni = Bodoni_Moda({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-Bodoni",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-innate.png" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KNSHDN66');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body { margin: 0; padding: 0; }
            .gradient { background: linear-gradient(to left, #0e1637 0%, #080a1c 25%, #000000 100%); }
            .loading { opacity: 0; transition: opacity 0.3s; }
            .loaded { opacity: 1; }
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const body = document.getElementById('body');
              if (body) {
                body.classList.remove('loading');
                body.classList.add('loaded');
              }
            });
          `,
          }}
        />
        <meta
          name="google-site-verification"
          content="T7ZHr0DyuChgFqqjvqmmCbJ5Y9KtuuvE7lEA36EQUQw"
        />
      </head>
      <body
        className={`gradient ${inter.variable} ${monts.variable} ${rajdhani.variable} ${inknut.variable} ${Bodoni.variable} bg-[#000] loading`}
        id="body"
        suppressHydrationWarning
      >
        {/* Noscript fallback for users without JavaScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNSHDN66"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MyProvider>
          <TabProvider>
            <GTMPageTracker />
            <PerformanceMonitor />
            {children}
            <Footer />
          </TabProvider>
        </MyProvider>
      </body>
    </html>
  );
}
