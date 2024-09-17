import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArticleIcon from "@mui/icons-material/Article";
import TagIcon from "@mui/icons-material/Tag";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// Import the JSON data
import blogData from "./blogData.json";

const Blog = () => {
  const { posts, categories, recentPosts, tags } = blogData;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url(/Assests/law3.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="mt-4 text-xl text-slate-100">
            Explore our latest articles and updates. Stay informed with insights
            and tips.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Blog Posts */}
            <div className="lg:w-2/3 space-y-10">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-t-lg mb-4"
                    width={800}
                    height={400}
                  />
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">
                    By <span className="font-semibold">{post.author}</span> on{" "}
                    <span className="font-semibold">{post.date}</span>
                  </p>
                  <p className="text-gray-800 mb-4">{post.summary}</p>
                  <Link href={post.link}>
                    <span className="text-[#F09819] font-semibold hover:underline">
                      Read More
                    </span>
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-10">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link href={category.link}>
                        <span className="text-[#F09819] hover:underline">
                          {category.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.title}>
                      <Link href={post.link}>
                        <span className="flex items-center text-gray-800 hover:text-[#F09819]">
                          <ArticleIcon className="text-[#F09819] mr-2" />{" "}
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag.name}
                      href={`/tags/${tag.name.toLowerCase()}`}
                    >
                      <span className="bg-[#F09819] text-white px-4 py-2 rounded-full text-sm">
                        {tag.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
