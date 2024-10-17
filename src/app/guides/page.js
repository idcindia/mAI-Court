import React from "react";
import Link from "next/link";

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: "How to File a Legal Complaint",
      description: "Step-by-step guide on filing different types of legal complaints in India.",
      link: "/guides/legal-complaint",
    },
    {
      id: 2,
      title: "Understanding Property Rights",
      description: "A comprehensive guide to property laws and rights in India.",
      link: "/guides/property-rights",
    },
    {
      id: 3,
      title: "Filing for Divorce in India",
      description: "A guide on the legal process of filing for divorce in India, including documentation and procedures.",
      link: "/guides/divorce-filing",
    },
    {
      id: 4,
      title: "Consumer Protection Laws",
      description: "A detailed guide on consumer rights and how to file a consumer complaint.",
      link: "/guides/consumer-protection",
    },
    {
      id: 5,
      title: "Rights of Women in the Workplace",
      description: "Legal protections for women in the workplace, including maternity benefits and protection against harassment.",
      link: "/guides/women-rights-workplace",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assests/web2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold font-serif bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Legal Guides
          </h1>
          <p className="mt-4 text-xl text-slate-100 font-serif">
            Learn about your legal rights and the steps you can take for justice.
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-8">Browse Our Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article
                key={guide.id}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold font-serif mb-2">{guide.title}</h3>
                <p className="text-gray-700 mb-4">{guide.description}</p>
                <Link href={guide.link}>
                  <span className="text-[#F09819] font-semibold font-serif hover:underline">
                    Read More
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;
