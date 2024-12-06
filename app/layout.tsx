import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Milenial Al-Aliim Indonesia",
  description: "Training Center Hotel & Cruises Ship - Pelatihan Kerja Pariwisata dan Perhotelan Swasta yang berpengalaman dalam kerjasama dengan perusahaan-perusahaan nasional.",
  keywords: ["training center", "hotel", "cruise ship", "pelatihan kerja", "pariwisata", "perhotelan", "bangkalan", "madura"],
  authors: [{ name: "PT. Milenial Alaliim Indonesia" }],
  creator: "PT. Milenial Alaliim Indonesia",
  publisher: "PT. Milenial Alaliim Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
