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
  metadataBase: new URL("https://ashlanderr.github.io/cv/"),
  title: "Александр Шилов — Senior FullStack Developer",
  description: "Senior FullStack Developer — резюме Александра Шилова",
  // Явные icons не подставляют basePath, в отличие от файловой конвенции,
  // поэтому /cv здесь прописан руками и должен совпадать с next.config.ts.
  icons: {
    icon: [
      { url: "/cv/icon.svg", type: "image/svg+xml" },
      { url: "/cv/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "Александр Шилов — Senior FullStack Developer",
    description: "Senior FullStack Developer — резюме Александра Шилова",
    type: "website",
    url: "https://ashlanderr.github.io/cv",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Александр Шилов — Senior FullStack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Александр Шилов — Senior FullStack Developer",
    description: "Senior FullStack Developer — резюме Александра Шилова",
    images: ["/og.png"],
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
