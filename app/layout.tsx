import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Recetas de Perú - Recetas Auténticas de Comida Peruana",
    template: "%s | Recetas de Perú",
  },
  description:
    "Descubre las auténticas recetas de comida del Perú. Aprende a preparar platos tradicionales llenos de historia y sabor. Tu guía esencial de recetas peruanas.",
  metadataBase: new URL("https://recetasdeperu.com"),
  openGraph: {
    locale: "es_PE",
    type: "website",
    siteName: "Recetas de Perú",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1070738569472471"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
