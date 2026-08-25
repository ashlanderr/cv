import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
