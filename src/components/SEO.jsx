import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  // Core metadata
  title = "Greania Build – Sustainable Construction, Roofing, Renovations & Green Building Solutions in Kenya",
  description = "Greania Build is Kenya's leading construction company specializing in sustainable building, roofing, renovations, interiors, and energy-efficient solutions. Quality workmanship, eco-friendly designs, and value-driven project execution for residential and commercial clients in Nairobi and across Kenya.",
  keywords = "construction company Kenya, sustainable construction Kenya, roofing services Kenya, house renovations Kenya, green building solutions, interior design Nairobi, building contractor Kenya, eco-friendly construction, real estate development Kenya, construction services Nairobi, roofing contractor Kenya, home renovations Nairobi",
  
  // Open Graph/Twitter
  image = "https://greaniabuild.co.ke/assets/og-image.jpg",
  url = "https://greaniabuild.co.ke/",
  type = "website",
  
  // Local Business info
  address = {
    streetAddress: "Westlands, Nairobi",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    postalCode: "00100",
    addressCountry: "KE"
  },
  contact = {
    telephone: "+254 711 234 567",
    email: "info@greaniabuild.co.ke"
  },
  openingHours = "Mo-Fr 08:00-17:00, Sa 09:00-13:00",
  
  // Additional SEO
  pageSpecificSchema = null,
  articlePublishedTime = null,
  articleModifiedTime = null,
  noIndex = false,
  structuredData = [],
  geo = {
    latitude: "-1.2921",
    longitude: "36.8219",
    placename: "Nairobi, Kenya"
  },
  
  // Service specific
  serviceType = "Construction Services",
  serviceAreas = ["Nairobi", "Kiambu", "Kajiado", "Machakos", "Nakuru"],
  priceRange = "KES 500,000 - 50,000,000+",
  
  // Performance
  preloadImages = [],
  canonicalOverride = null
}) => {
  
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Organization schema (enhanced)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://greaniabuild.co.ke/#organization",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/logo.png",
      "width": "300",
      "height": "100"
    },
    "description": "Leading sustainable construction, roofing, renovations, and green building solutions provider in Kenya.",
    "foundingDate": "2020",
    "founder": "Greania Build Team",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "20-50"
    },
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contact.telephone,
        "contactType": "customer service",
        "areaServed": ["KE"],
        "availableLanguage": ["English", "Swahili"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+254 733 123 456",
        "contactType": "sales",
        "areaServed": ["KE"]
      }
    ],
    "email": contact.email,
    "openingHours": openingHours,
    "sameAs": [
      "https://www.facebook.com/greaniabuild",
      "https://www.instagram.com/greaniabuild",
      "https://twitter.com/greaniabuild",
      "https://www.linkedin.com/company/greaniabuild",
      "https://www.youtube.com/@greaniabuild"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sustainable Construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roofing Services"
        }
      }
    ],
    "knowsAbout": [
      "Sustainable Construction",
      "Green Building",
      "Roofing Installation",
      "Building Renovations",
      "Interior Design",
      "Construction Management"
    ]
  };

  // Local Business schema (enhanced)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://greaniabuild.co.ke/#localbusiness",
    "name": "Greania Build",
    "image": [
      image,
      "https://greaniabuild.co.ke/assets/project-1.jpg",
      "https://greaniabuild.co.ke/assets/project-2.jpg"
    ],
    "url": "https://greaniabuild.co.ke/",
    "telephone": contact.telephone,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "description": description,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "paymentAccepted": "Cash, Credit Card, Debit Card, M-Pesa, Bank Transfer",
    "currenciesAccepted": "KES, USD",
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sustainable Construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roofing Services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Service schema (enhanced)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build",
      "url": "https://greaniabuild.co.ke/"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services Catalog"
    }
  };

  // Breadcrumb schema (for all pages)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://greaniabuild.co.ke/"
      }
    ]
  };

  // FAQ schema (reusable for all pages)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas in Kenya does Greania Build serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Nairobi, Kiambu, Kajiado, Machakos, Nakuru, and surrounding areas. Contact us for projects in other regions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer sustainable/green building solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in sustainable construction using eco-friendly materials, energy-efficient designs, and green building practices."
        }
      }
    ]
  };

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://greaniabuild.co.ke/#website",
    "url": "https://greaniabuild.co.ke/",
    "name": "Greania Build",
    "description": description,
    "publisher": {
      "@type": "Organization",
      "@id": "https://greaniabuild.co.ke/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://greaniabuild.co.ke/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Combine all schemas
  const allSchemas = [
    organizationSchema,
    localBusinessSchema,
    serviceSchema,
    breadcrumbSchema,
    faqSchema,
    websiteSchema,
    ...structuredData
  ];

  if (pageSpecificSchema) {
    allSchemas.push(pageSpecificSchema);
  }

  // Determine robots meta tag
  const robotsContent = noIndex 
    ? "noindex, nofollow" 
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Greania Build Ltd" />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <link rel="canonical" href={canonicalOverride || url} />
      
      {/* Language, Location & Business */}
      <html lang="en" />
      <meta httpEquiv="content-language" content="en" />
      <meta name="geo.region" content="KE-Nairobi" />
      <meta name="geo.placename" content={geo.placename} />
      <meta name="geo.position" content={`${geo.latitude};${geo.longitude}`} />
      <meta name="ICBM" content={`${geo.latitude}, ${geo.longitude}`} />
      <meta name="company" content="Greania Build Ltd" />
      <meta name="copyright" content={`© ${currentYear} Greania Build Ltd. All rights reserved.`} />
      
      {/* Article specific */}
      {articlePublishedTime && (
        <meta name="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta name="article:modified_time" content={articleModifiedTime} />
      )}
      
      {/* Mobile & PWA */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#2E7D32" />
      <meta name="msapplication-TileColor" content="#2E7D32" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Greania Build - Sustainable Construction in Kenya" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Greania Build" />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:locale:alternate" content="sw_KE" />
      <meta property="og:street-address" content={address.streetAddress} />
      <meta property="og:locality" content={address.addressLocality} />
      <meta property="og:region" content={address.addressRegion} />
      <meta property="og:postal-code" content={address.postalCode} />
      <meta property="og:country-name" content={address.addressCountry} />
      <meta property="og:email" content={contact.email} />
      <meta property="og:phone_number" content={contact.telephone} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GreaniaBuild" />
      <meta name="twitter:creator" content="@GreaniaBuild" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Greania Build Construction Services" />
      <meta name="twitter:label1" content="Services" />
      <meta name="twitter:data1" content="Construction, Roofing, Renovations" />
      <meta name="twitter:label2" content="Location" />
      <meta name="twitter:data2" content="Nairobi, Kenya" />
      
      {/* Additional SEO meta tags */}
      <meta name="rating" content="safe for kids" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="category" content="Construction, Building Services" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Kenya" />
      <meta name="resource-type" content="document" />
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Preload important images */}
      {preloadImages.map((img, index) => (
        <link 
          key={index} 
          rel="preload" 
          as="image" 
          href={img.src}
          imagesrcset={img.srcSet}
          imagesizes={img.sizes}
        />
      ))}
      
      {/* Favicon & App icons */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2E7D32" />
      
      {/* Output all schemas */}
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Additional meta for verification (add your actual codes) */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      <meta name="facebook-domain-verification" content="YOUR_FACEBOOK_VERIFICATION_CODE" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
    </Helmet>
  );
};

export default SEO;

// Helper component for page-specific SEO
export const ServicePageSEO = ({ 
  serviceName, 
  serviceDescription, 
  serviceImage,
  areaServed = ["Nairobi"],
  servicePrice,
  serviceDuration 
}) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build",
      "url": "https://greaniabuild.co.ke/"
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "offers": {
      "@type": "Offer",
      "price": servicePrice,
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock"
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": "Completed Construction Project"
    }
  };

  return (
    <SEO
      title={`${serviceName} - Greania Build Kenya`}
      description={serviceDescription}
      pageSpecificSchema={serviceSchema}
      serviceType={serviceName}
    />
  );
};

// Helper component for project/portfolio pages
export const ProjectPageSEO = ({
  projectName,
  projectDescription,
  projectImages = [],
  location,
  completionDate,
  projectType
}) => {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": projectName,
    "description": projectDescription,
    "image": projectImages,
    "dateCreated": completionDate,
    "author": {
      "@type": "Organization",
      "name": "Greania Build"
    },
    "location": {
      "@type": "Place",
      "name": location
    },
    "about": {
      "@type": "Thing",
      "name": projectType
    }
  };

  return (
    <SEO
      title={`${projectName} - Greania Build Portfolio`}
      description={projectDescription}
      pageSpecificSchema={projectSchema}
      articlePublishedTime={completionDate}
    />
  );
};

// Helper component for blog posts
export const BlogPostSEO = ({
  postTitle,
  postDescription,
  postImage,
  author = "Greania Build Team",
  publishDate,
  modifiedDate,
  tags = []
}) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postTitle,
    "description": postDescription,
    "image": postImage,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Greania Build",
      "logo": {
        "@type": "ImageObject",
        "url": "https://greaniabuild.co.ke/assets/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "keywords": tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <SEO
      title={`${postTitle} - Greania Build Blog`}
      description={postDescription}
      image={postImage}
      type="article"
      pageSpecificSchema={blogSchema}
      articlePublishedTime={publishDate}
      articleModifiedTime={modifiedDate}
      keywords={tags.join(", ")}
    />
  );
};
