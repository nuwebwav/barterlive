import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

const DOMAIN = "https://barterconstruction.com";

const SEOHead = ({ title, description, canonical, jsonLd }: SEOHeadProps) => {
  const fullCanonical = canonical ? `${DOMAIN}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

// JSON-LD helpers
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://barterconstruction.com${item.url}`,
    })),
  };
}

export function localBusinessJsonLd(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Barter Construction",
    description: "B2B marketplace for construction materials",
    url: "https://barterconstruction.com",
    telephone: "+917777045007",
    email: "barterconstructions@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Prasad Chamber, Tata Road 2, Opera House",
      addressLocality: "Mumbai",
      postalCode: "400004",
      addressCountry: "IN",
    },
    ...overrides,
  };
}

export default SEOHead;
