import { Helmet } from "react-helmet-async";

export default function SchemaMarkup({
  name,
  description,
  url,
  serviceType,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    description,
    url,
    image: "https://gurpinarhukuk.com/og-image.jpg",
    telephone: "+90 507 140 35 11",
    email: "avselingurpinar@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yenimahalle 3066. Sokak No: 15",
      addressLocality: "Atakum",
      addressRegion: "Samsun",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: "Samsun",
    },
    serviceType,
    priceRange: "$$",
    sameAs: [
      "https://maps.app.goo.gl/HQeK2iHcWqxiS3Gx8",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}