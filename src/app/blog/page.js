import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleIcon from '@mui/icons-material/Article';
import TagIcon from '@mui/icons-material/Tag';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/Assests/law3.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">Our Blog</h1>
          <p className="mt-4 text-xl text-slate-100">Explore our latest articles and updates. Stay informed with insights and tips.</p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Blog Posts */}
            <div className="lg:w-2/3 space-y-10">
              {/* Sample Blog Post */}
              <article className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <Image src="/Assests/sample-blog-image.jpeg" alt="Blog Post" className="w-full h-64 object-cover rounded-t-lg mb-4" width={800} height={400} />
                <h2 className="text-2xl font-bold mb-2">Sample Blog Post Title</h2>
                <p className="text-gray-600 mb-4">By <span className="font-semibold">Author Name</span> on <span className="font-semibold">September 16, 2024</span></p>
                <p className="text-gray-800 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link href="/blog/sample-post">
                  <span className="text-[#F09819] font-semibold hover:underline">Read More</span>
                </Link>
              </article>
              
              {/* Repeat the article block for more blog posts */}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-10">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><Link href="/category/legal"><span className="text-[#F09819] hover:underline">Legal Insights</span></Link></li>
                  <li><Link href="/category/education"><span className="text-[#F09819] hover:underline">Educational Resources</span></Link></li>
                  <li><Link href="/category/updates"><span className="text-[#F09819] hover:underline">Latest Updates</span></Link></li>
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  <li><Link href="/blog/recent-post-1"><span className="flex items-center text-gray-800 hover:text-[#F09819]">
                    <ArticleIcon className="text-[#F09819] mr-2" /> Recent Post 1
                  </span></Link></li>
                  <li><Link href="/blog/recent-post-2"><span className="flex items-center text-gray-800 hover:text-[#F09819]">
                    <ArticleIcon className="text-[#F09819] mr-2" /> Recent Post 2
                  </span></Link></li>
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/tags/legal"><span className="bg-[#F09819] text-white px-4 py-2 rounded-full text-sm">Legal</span></Link>
                  <Link href="/tags/education"><span className="bg-[#F09819] text-white px-4 py-2 rounded-full text-sm">Education</span></Link>
                  <Link href="/tags/updates"><span className="bg-[#F09819] text-white px-4 py-2 rounded-full text-sm">Updates</span></Link>
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
