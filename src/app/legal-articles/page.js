import React from "react";
import Link from "next/link";
import Image from "next/image";
import articlesData from "./articleData.json"; 

const LegalArticles = () => {
  const { articles, categories } = articlesData;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assests/legal-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Legal Articles
          </h1>
          <p className="mt-4 text-xl text-slate-100">
            Explore in-depth legal resources and articles written by experts in
            the field.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Link key={category.name} href={category.link} className="bg-[#F09819] text-white px-6 py-3 rounded-lg hover:bg-[#f5c686]">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Article List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  width={600}
                  height={300}
                />
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">
                  By <span className="font-semibold">{article.author}</span> on{" "}
                  <span className="font-semibold">{article.date}</span>
                </p>
                <p className="text-gray-800 mb-4">{article.summary}</p>
                <Link href={article.link} className="text-[#F09819] font-semibold hover:underline">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalArticles;
