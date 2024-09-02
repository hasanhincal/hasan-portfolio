import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Hasan Hınçal - Frontend Developer Portfolio",
  description:
    "Explore my projects, experience, and skills as a passionate Frontend Developer with expertise in React, Next.js, and modern web technologies.",
  keywords:
    "Hasan Hınçal, Frontend Developer, React, Next.js, Portfolio, Web Developer",
  author: "Hasan Hınçal",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.myportfolio.safewebsite.store",
    title: "Hasan Hınçal - Frontend Developer Portfolio",
    description:
      "Explore my projects, experience, and skills as a passionate Frontend Developer with expertise in React, Next.js, and modern web technologies.",
    image: "http://www.myportfolio.safewebsite.store/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Hasan Hınçal - Frontend Developer Portfolio",
    description:
      "Explore my projects, experience, and skills as a passionate Frontend Developer.",
    image: "http://www.myportfolio.safewebsite.store/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.image} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
