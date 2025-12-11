import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Greania Build – Sustainable Construction, Roofing, Renovations & Green Building Solutions in Kenya",
  description = "Greania Build is Kenya's trusted construction partner specializing in sustainable building, roofing, renovations, interiors, and energy-efficient solutions. We deliver quality workmanship, eco-friendly designs, and value-driven project execution for homeowners, developers, and commercial clients.",
  keywords = "Greania Build, construction company Kenya, sustainable construction Kenya, roofing services Kenya, renovations Kenya, green building Kenya, house construction Kenya, interior design Kenya, real estate development Kenya, building contractor Nairobi, eco-friendly construction Kenya",
  image = "https://greaniabuild.co.ke/assets/hero.jpg",
  url = "https://greaniabuild.co.ke/",
  type = "website",
  address = {
    streetAddress: "",
    addressLocality: "Nairobi",
    addressRegion: "",
    postalCode: "",
    addressCountry: "KE"
  },
  contact = {
    telephone: "+254",
    email: "info@greaniabuild.co.ke"
  },
  openingHours = "Mo-Fr 08:00-17:00",
  pageSpecificSchema = null
}) => {
  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/",
    "logo": "https://greaniabuild.co.ke/assets/logo.png",
    "description": "Sustainable construction, roofing, renovations, and green building solutions in Kenya.",
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contact.telephone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Swahili"]
    },
    "email": contact.email,
    "openingHours": openingHours,
    "sameAs": [
      "https://www.facebook.com/greaniabuild",
      "https://www.instagram.com/greaniabuild"
    ]
  };

  // Local Business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Greania Build",
    "image": image,
    "@id": "https://greaniabuild.co.ke/",
    "url": "https://greaniabuild.co.ke/",
    "telephone": contact.telephone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "description": description,
    "openingHours": openingHours,
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  };

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Construction, Roofing, Renovations, Interiors",
    "provider": {
      "@type": "Organization",
      "name": "Greania Build",
      "url": "https://greaniabuild.co.ke/"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  };

  // Home page specific schema
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "mainEntity": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Greania Build" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
      
      {/* Language and location */}
      <html lang="en" />
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Greania Build" />
      <meta property="og:locale" content="en_ke" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@GreaniaBuild" />
      <meta name="twitter:site" content="@GreaniaBuild" />

      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#2E7D32" />
      <meta name="msapplication-TileColor" content="#2E7D32" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      {/* Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(homePageSchema)}
      </script>
      
      {/* Page-specific schema if provided */}
      {pageSpecificSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSpecificSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;