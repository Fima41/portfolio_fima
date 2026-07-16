import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CanvasBackground from "@/components/CanvasBackground";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Fima Sichone — Climate Data Scientist, Lusaka",
  description: "Fima Sichone is a climate data scientist based in Lusaka, Zambia, building intelligent climate and ML systems for Africa.",
  openGraph: {
    title: "Fima Sichone — Climate Data Scientist",
    description: "Building intelligent climate systems for Africa.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@300;400;500&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CanvasBackground />
        <Navigation />
        <RevealWrapper>
          <div className="content-wrapper">
            {children}
          </div>
        </RevealWrapper>
        <Footer />
      </body>
    </html>
  );
}
