import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ThemeProvider, LanguageProvider } from "@/components/shared/providers";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intitax.com"),
  title: {
    default: "Intitax | Preparación de Impuestos Federales y Estatales en EE.UU.",
    template: "%s | Intitax",
  },
  description:
    "Especialistas en preparación de taxes personales (Form 1040), Schedule C para trabajadores independientes 1099, tramitación de ITIN (Form W-7), enmiendas y resolución de cartas del IRS. Atención 100% digital y bilingüe en todo EE.UU.",
  keywords: [
    "taxes en español",
    "preparación de impuestos personales",
    "declaración de taxes 1040",
    "taxes para independientes 1099",
    "schedule c taxes",
    "tramitar itin w7",
    "renovar itin",
    "cartas del irs",
    "enmiendas de taxes 1040x",
    "tax preparer en español",
    "reembolso irs maximo",
    "personal tax return usa",
    "federal and state tax return",
    "intitax",
  ],
  authors: [{ name: "Intitax" }],
  creator: "Intitax",
  publisher: "Intitax",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://intitax.com",
    siteName: "Intitax",
    title: "Intitax | Your Taxes, In Good Hands",
    description:
      "Acompañamiento profesional en impuestos federales y estatales de forma clara y segura. Form 1040, Schedule C, ITIN W-7 y cartas del IRS.",
    images: [
      {
        url: "/logo-clean.png",
        width: 600,
        height: 180,
        alt: "Intitax Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intitax | Your Taxes, In Good Hands",
    description:
      "Preparación de impuestos federales y estatales ante el IRS. Atención 100% bilingüe y digital en todo EE.UU.",
    images: ["/logo-clean.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Schema.org Structured Data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Intitax",
  description:
    "Servicios profesionales de preparación de impuestos federales y estatales ante el IRS en Estados Unidos.",
  url: "https://intitax.com",
  email: "mcollahua@intitax.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsLanguage: ["es", "en"],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Fiscales",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Preparación de Impuestos Personales (Form 1040)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Schedule C para Independientes y 1099",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tramitación y Renovación de ITIN (Form W-7)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asistencia con Cartas y Notificaciones del IRS",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Declaraciones Enmendadas (Form 1040-X)",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-background text-foreground flex min-h-full flex-col transition-colors duration-200"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
