import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { YandexMetrica } from "@/app/components/YandexMetrica";
import { CookieBanner } from "@/app/components/CookieBanner";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Александр Шилов — Senior FullStack Developer",
  description: "Senior FullStack Developer — резюме Александра Шилова",
  openGraph: {
    title: "Александр Шилов — Senior FullStack Developer",
    type: "website",
    url: "https://ashlanderr.github.io/cv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${notoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
        <YandexMetrica />
      </body>
    </html>
  );
}
