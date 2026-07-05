import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pradeep Nawarathne | Creative Director",
  description:
    "Sri Lankan Creative Director, Commercial & Music Video Director, Script Writer, Lyrics Writer, Production Designer, and International Event Manager. 15+ years shaping stories from script to screen.",
  keywords: [
    "Pradeep Nawarathna",
    "Creative Director Sri Lanka",
    "Music Video Director",
    "Commercial Director",
    "Script Writer",
    "Lyrics Writer",
    "Event Manager",
  ],
  openGraph: {
    title: "Pradeep Nawarathne | Creative Director",
    description:
      "I build and direct stories at scale — commercials, music videos, live events, and branded entertainment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cinema text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
