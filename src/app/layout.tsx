import type { Metadata } from "next";
import { Inter, Anek_Telugu } from "next/font/google";
import "./globals.css";
import RouteTracker from "@/components/custom/RouteTracker";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anekTelugu = Anek_Telugu({
  variable: "--font-anek-telugu",
  subsets: ["telugu"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinTech Telugu - తెలుగులో ఆర్థిక విద్య",
  description: "మీ ఆర్థిక లక్ష్యాలను సాధించడంలో మీకు సహాయం చేయడానికి ఉచిత కాలిక్యులేటర్లు, విద్యాపరమైన కంటెంట్ మరియు ఆర్థిక మార్గదర్శకత్వం",
  keywords: "Telugu, ఆర్థిక విద్య, SIP calculator, EMI calculator, FD calculator, financial planning, తెలుగులో",
  authors: [{ name: "FinTech Telugu Team" }],
  creator: "FinTech Telugu",
  publisher: "FinTech Telugu",
  openGraph: {
    type: "website",
    locale: "te_IN",
    url: "https://fintechtelugu.com",
    siteName: "FinTech Telugu",
    title: "FinTech Telugu - తెలుగులో ఆర్థిక విద్య",
    description: "మీ ఆర్థిక లక్ష్యాలను సాధించడంలో మీకు సహాయం చేయడానికి ఉచిత కాలిక్యులేటర్లు మరియు విద్యాపరమైన కంటెంట్",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech Telugu - తెలుగులో ఆర్థిక విద్య",
    description: "మీ ఆర్థిక లక్ష్యాలను సాధించడంలో మీకు సహాయం చేయడానికి ఉచిత కాలిక్యులేటర్లు మరియు విద్యాపరమైన కంటెంట్",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4B6FFF" />
      </head>
      <body
        className={`${inter.variable} ${anekTelugu.variable} antialiased bg-white text-gray-900 font-sans`}
        style={{ fontFamily: 'var(--font-inter), var(--font-anek-telugu), system-ui, sans-serif' }}
      >
        <RouteTracker />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
