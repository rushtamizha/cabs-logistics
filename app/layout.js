import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Authoritative Serif for Headlines
const serif = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--",
  weight: ["700", "900"],
});

// Clean, Modern Sans for Professional Body Text
const sans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: {
    default: "GGV Cabs | Premier Corporate Mobility & Enterprise Logistics India",
    template: "%s | GGV Cabs & Logistics",
  },
  icons : {
    icon:"/logo.jpg",
    apple:"/logo.jpg"
  },
  description:
    "Leading provider of employee transport and corporate logistics since 2020. Over 10,000+ daily trips across Chennai, Bangalore, Hosur, and Coimbatore. PAN India presence with a fleet of 200+ premium vehicles.",
  keywords: [
    "Corporate Cabs Tamil Nadu",
    "Employee Transportation Services Bangalore",
    "School Bus Logistics Hosur",
    "Enterprise Fleet Management Chennai",
    "GGV Cabs Krishnagiri",
    "Premium Volvo Coach Rental India",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ggvcabs.co.in",
    title: "GGV Cabs | Moving Corporate India Since 2020",
    description: "5+ years of excellence in corporate mobility. Serving ALTEN, Crouzet, and Apnatime with a 200+ vehicle in-house fleet.",
    siteName: "GGV Cabs",
  },
};

export default function RootLayout({ children }) {
  // Advanced Schema for Rank #1 (LocalBusiness + Logistics)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsCompany",
    "name": "GGV Cabs & Logistics",
    "alternateName": "GGV Cabs",
    "description": "Premium corporate transportation and employee mobility provider since 2020.",
    "url": "https://ggvcabs.co.in",
    "logo": "https://ggvcabs.co.in/logo.png",
    "telephone": "+919943098822",
    "email": "sales@ggvcabs.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No- 1/78d, Puliyur, Pochampalli",
      "addressLocality": "Krishnagiri",
      "addressRegion": "Tamilnadu",
      "postalCode": "635201",
      "addressCountry": "IN"
    },
    "founder": "Eswaran",
    "foundingDate": "2020",
    "areaServed": ["Chennai", "Coimbatore", "Hosur", "Bangalore", "Krishnagiri", "Theni"],
    "numberOfEmployees": "40000", // Traveling per day metric
    "knowsAbout": ["Employee Transportation", "Corporate Rentals", "Logistics", "Tier-3 Mobility"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased text-slate-900 bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}