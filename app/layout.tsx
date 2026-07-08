import type { Metadata, Viewport } from "next";
import localfont from 'next/font/local'
import "./globals.css";
import OrganizationSchema from "@/components/OrganizationSchema";

const siteUrl = "https://southborn.co.za"; // update to your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Southborn | South African Gym & Lifestyle Apparel",
    template: "%s | Southborn",
  },
  description:
    "Southborn is a South African-born gym and streetwear brand for those who train hard and dress harder. Shop compression wear built for performance and street style.",
  keywords: [
    "Southborn",
    "South African gym apparel",
    "South African streetwear",
    "gym clothing South Africa",
    "compression shirt South Africa",
    "Cape Town gym brand",
    "gym wear Cape Town",
    "workout clothes South Africa",
    "street meets gym",
    "fitness apparel brand SA",
    "men's compression shirt",
    "South African fitness brand",
    "gym fashion South Africa",
    "activewear South Africa",
  ],
  authors: [{ name: "Southborn" }],
  creator: "Southborn",
  publisher: "Southborn",
  applicationName: "Southborn",
  category: "Shopping",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Southborn",
    title: "Southborn | South African Gym & Street Apparel",
    description:
      "Cape Town-born gym and streetwear brand for South Africans who train hard and dress harder. Compression wear built for performance and style.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Southborn - South African Gym & Street Apparel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Southborn | South African Gym & Street Apparel",
    description:
      "Cape Town-born gym and streetwear brand for South Africans who train hard and dress harder.",
    images: ["/og-image.jpg"],
    // creator: "@southborn", // add once you have a handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // verification: {
  //   google: "your-google-search-console-code",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const Bebas = localfont({
  src: './Fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas'
})

const Inter = localfont({
  src: './Fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Bebas.variable} ${Inter.variable}`}
    >
      <head>
      <OrganizationSchema/>
      </head>
      <body>{children}</body>
    </html>
  );
}