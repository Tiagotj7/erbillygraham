import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Embaixada Billy Graham",
    template: "%s | Embaixada Billy Graham",
  },
  description:
    "Formando jovens discípulos e líderes para transformar o mundo através do amor de Cristo. Organização Embaixadores do Rei - Embaixada Billy Graham.",
  manifest: "/icones/site.webmanifest",
  icons: {
    icon: [
      { url: "/icones/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icones/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icones/html1.ico" },
    ],
    apple: [{ url: "/icones/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
