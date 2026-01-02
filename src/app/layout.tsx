import type { Metadata } from "next";
import { Inter, Poppins, Roboto_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://debugchaps.com'), // Replace with your actual domain
  title: {
    default: "DebugChaps - Modern Web & Mobile Development Solutions",
    template: "%s | DebugChaps"
  },
  description: "Professional web development, mobile app development, and machine learning solutions. Transform your ideas into powerful digital experiences with cutting-edge technology. Academic projects and real-world applications.",
  keywords: [
    "web development",
    "mobile development",
    "machine learning",
    "AI solutions",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "academic projects",
    "software development",
    "app development",
    "full-stack development",
    "e-learning platform",
    "CSE interview preparation"
  ],
  authors: [{ name: "DebugChaps Team" }],
  creator: "DebugChaps",
  publisher: "DebugChaps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "Software Development",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://debugchaps.com",
    title: "DebugChaps - Modern Web & Mobile Development Solutions",
    description: "Professional web development, mobile app development, and machine learning solutions. Transform your ideas into powerful digital experiences.",
    siteName: "DebugChaps",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "DebugChaps - Modern Development Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DebugChaps - Modern Web & Mobile Development Solutions",
    description: "Professional web development, mobile app development, and machine learning solutions.",
    images: ["/og-image.jpg"], // You'll need to add this image
    creator: "@debugchaps", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace with actual code
    other: {
      "msvalidate.01": "your-bing-verification-code", // Replace with actual code
    },
  },
  alternates: {
    canonical: "https://debugchaps.com",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "twitter:site": "@debugchaps",
    "twitter:creator": "@debugchaps",
    "viewport": "width=device-width, initial-scale=1, maximum-scale=5",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DebugChaps",
    "url": "https://debugchaps.com",
    "logo": "https://debugchaps.com/logo.png",
    "description": "Professional web development, mobile app development, and machine learning solutions.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX", // Replace with actual phone
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/debugchaps", // Replace with actual social links
      "https://linkedin.com/company/debugchaps",
      "https://github.com/debugchaps"
    ],
    "serviceType": ["Web Development", "Mobile Development", "Machine Learning", "Academic Projects"],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Modern web applications using React, Next.js, Node.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Development",
            "description": "Cross-platform mobile applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Solutions",
            "description": "AI and ML powered applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Academic Projects",
            "description": "Complete project development for students"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${robotoMono.variable} ${playfairDisplay.variable} ${montserrat.variable} antialiased font-inter`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
