"use client";
import Script from "next/script";

export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthew Ogieva",
    url: "https://e-portfolio-tau-seven.vercel.app",
    sameAs: [
      "https://www.linkedin/in/matthew-ogieva",
      "https://x.com/OgievaMatthew",
    ],
    jobTitle: "Leadership Consultant",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
  };

  return (
    <Script
      id="ld-json-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
