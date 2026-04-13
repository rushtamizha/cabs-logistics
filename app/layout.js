import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// High-end Serif for Headlines (Business Standard Style)
const serif = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["700", "900"],
});

// Professional Sans for Body Text
const sans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: {
    default: "FleetMaster | #1 Corporate Cabs & Enterprise Logistics Tamil Nadu",
    template: "%s | FleetMaster Logistics",
  },
  description:
    "Tamil Nadu's premier enterprise logistics partner since 2020. Specializing in corporate cab services, employee transportation, and in-house fleet management across Chennai, Coimbatore, Hosur, and Bangalore.",
  keywords: [
    "Corporate Cabs Chennai",
    "Employee Transportation Coimbatore",
    "Logistics Services Hosur",
    "Enterprise Mobility Bangalore",
    "Staff Bus Service Tamil Nadu",
    "Tier 3 City Logistics India",
  ],
  icons: {
    icon: "/logo.jpg", // Standard favicon
    shortcut: "/logo.jpg",
    apple: "/logo.jpg", // Recommended for premium look on iPhones
  },
  authors: [{ name: "Wepzite Digital" }],
  creator: "Eswaran - Wepzite",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fleetmaster.in",
    title: "FleetMaster | Enterprise Logistics & Corporate Mobility",
    description: "Secure, tech-enabled transportation for Corporate India. Operating in Chennai, Bangalore, and beyond.",
    siteName: "FleetMaster",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsStore",
    "name": "FleetMaster Logistics",
    "image": "https://fleetmaster.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Theni",
      "addressRegion": "TN",
      "addressCountry": "IN"
    },
    "url": "https://fleetmaster.in",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "areaServed": ["Chennai", "Coimbatore", "Hosur", "Bangalore", "Theni"],
    "founder": "Eswaran"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Applying font variables to the body */}
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased text-slate-900 bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}