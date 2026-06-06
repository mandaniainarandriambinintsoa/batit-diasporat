import "./globals.css";
import { Montserrat } from "next/font/google";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat"
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: "/images/bati-diaspora/hero-construction.png",
        width: 795,
        height: 420,
        alt: "Maison en construction suivie à distance par Bati Diaspora"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
