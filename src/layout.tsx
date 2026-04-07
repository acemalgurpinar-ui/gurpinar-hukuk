import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gürpınar Hukuk | Av. Nisa Selin Gürpınar",
  description:
    "Aile hukuku, tazminat, taşınmaz, miras, malpraktis ve hukuki danışmanlık alanlarında Samsun'dan yurtiçi ve yurtdışı müvekkillerine hizmet veren hukuk bürosu.",
  keywords: [
    "avukat samsun",
    "hukuk bürosu",
    "aile hukuku",
    "tazminat",
    "malpraktis",
    "miras hukuku",
    "Nisa Selin Gürpınar",
  ],
  authors: [{ name: "Av. Nisa Selin Gürpınar" }],
  openGraph: {
    title: "Gürpınar Hukuk",
    description:
      "Stratejik hukuki destek. Samsun merkezli, yurtiçi ve yurtdışı müvekkillere hizmet.",
    url: "https://gurpinarhukuk.com",
    siteName: "Gürpınar Hukuk",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gürpınar Hukuk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gürpınar Hukuk",
    description: "Stratejik hukuki destek.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
