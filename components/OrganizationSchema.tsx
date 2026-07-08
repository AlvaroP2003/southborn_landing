


export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Southborn",
    url: "https://southborn.co.za",
    logo: "https://southborn.co.za/logo.png",
    sameAs: [
      "https://www.instagram.com/southborn_apparel",
      "https://www.tiktok.com/@southborn_apparel",
      "https://www.facebook.com/southbornapparel",
      "https://www.youtube.com/@southborn_apparel",
      "https://www.linkedin.com/company/southborn",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}