export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul-Sobur Ibrahim",
    url: "https://abdul-sobur-portfolio.vercel.app",
    image: "https://abdul-sobur-portfolio.vercel.app/profile.jpg",
    sameAs: [
      "https://github.com/ibrahim1921-dot",
      "https://linkedin.com/in/abdul-sobur-ibrahim-342aa634a",
      "https://twitter.com/CodeWithIbra1",
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kwame Nkrumah University of Science and Technology",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Node.js",
      "Express.js",
      "Web Development",
      "Software Engineering",
    ],
    email: "abdulsobur1921@gmail.com",
    address: {
      "@type": "P.O. Box 263, Adum, Kumasi, Ghana",
      addressLocality: "Kumasi",
      addressCountry: "GH",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abdul-Sobur Ibrahim Portfolio",
    url: "https://abdul-sobur-portfolio.vercel.app",
    description:
      "Full-stack developer portfolio showcasing projects, blog posts, and technical skills",
    author: {
      "@type": "Person",
      name: "Abdul-Sobur Ibrahim",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
