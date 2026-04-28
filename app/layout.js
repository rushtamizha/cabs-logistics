import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serif = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["700", "900"],
});

const sans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: {
    default: "GGV Cabs & Logistics | Driving Success Together",
    template: "%s | GGV Cabs & Logistics",
  },
  description:
    "Founded in 2022 with 15+ years of expertise. Premier provider of Corporate Car Rentals, Employee Transportation (ETS), and Containerized Logistics across India.",
  keywords: [
    "Corporate Car Rentals India",
    "Employee Transportation Service Bangalore",
    "Logistics and Container Transport Tamil Nadu",
    "Premium SUV Rental for VIPs",
    "GGV Cabs Krishnagiri",
    "Industrial Freight Solutions Chennai",
  ],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ggvcabs.co.in",
    title: "GGV Cabs & Logistics | Premium Mobility & Logistics Solutions",
    description: "200+ fleet. 15+ years expertise. Seamless corporate travel and industrial logistics across Bangalore, Chennai, and Pan-India.",
    siteName: "GGV Cabs & Logistics",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsCompany",
    "name": "GGV Cabs & Logistics",
    "alternateName": "GGV Cabs",
    "description": "Seamless mobility and logistics solutions across India. Specializing in premium car rentals, employee transportation, and industrial container logistics.",
    "url": "https://ggvcabs.co.in",
    "logo": "https://ggvcabs.co.in/logo.jpg",
    "telephone": "+919943098822",
    "email": "sales@ggvcabs.co.in",
    "foundingDate": "2022",
    "knowsAbout": [
      "Premium Car Rentals",
      "Employee Transportation Service",
      "Logistics Solutions",
      "Container Transport",
      "Airport Transfers"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "name": "Registered Office",
        "streetAddress": "No-1/78D, Puliyur, Pochampalli",
        "addressLocality": "Krishnagiri",
        "addressRegion": "Tamil Nadu",
        "postalCode": "635201",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "name": "Bangalore Office",
        "streetAddress": "No-07, 7th Cross, CT Bed, Banashankari 2nd Stage",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560070",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "name": "Hosur Office",
        "streetAddress": "No-22, Kothagondapalli, Royakottai Road, Hosur",
        "addressLocality": "Krishnagiri",
        "addressRegion": "Tamil Nadu",
        "postalCode": "635109",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "name": "Chennai Office",
        "streetAddress": "No-1/22, 2nd Floor, Mangadu Main Road, Kovur",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600128",
        "addressCountry": "IN"
      }
    ],
    "areaServed": ["Chennai", "Coimbatore", "Hosur", "Bangalore", "Krishnagiri", "Hyderabad", "Delhi"]
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