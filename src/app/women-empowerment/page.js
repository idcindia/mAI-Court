import React from "react";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

const WomenEmpowermentBlog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url(/Assests/women.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold font-serif bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Empowering Women Through Legal Knowledge
          </h1>
          <p className="mt-4 text-xl text-slate-100 font-serif">
            Understanding legal rights can empower women and promote gender
            equality.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <article className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 font-serif">
            <Image
              src="/Assets/women.jpg"
              alt="Empowering Women Through Legal Knowledge"
              className="w-full h-64 object-cover rounded-t-lg mb-4"
              width={800}
              height={400}
            />
            <div className="flex items-center mb-4 text-gray-600">
              <PersonIcon className="mr-2 text-[#F09819]" />
              <span className="mr-4 font-semibold">By Sarah Johnson</span>
              <CalendarTodayIcon className="mr-2 text-[#F09819]" />
              <span className="font-semibold">October 10, 2024</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Empowering Women Through Legal Knowledge
            </h2>
            <p className="text-gray-800 mb-6 font-serif">
              Women empowerment has become a global movement, but one of the
              most crucial aspects of empowerment that is often overlooked is
              legal awareness. When women are educated about their legal rights,
              they gain the confidence and tools to protect themselves and
              advocate for change, not just for themselves but for future
              generations as well.
            </p>
            <h3 className="text-2xl font-bold mb-2 font-serif">
              Why Legal Knowledge is Key to Empowerment
            </h3>
            <p className="text-gray-800 mb-4 font-serif">
              Legal knowledge enables women to understand their rights, navigate
              challenges, and take informed decisions in both personal and
              professional settings. Whether it is understanding property laws,
              workplace harassment rights, or domestic violence laws, knowing
              the legal framework offers a protective shield.
            </p>
            <p className="text-gray-800 mb-4 font-serif">
              Laws like the <strong> Protection of Women from Domestic Violence Act</strong> and
              <strong> The Sexual Harassment of Women at Workplace (Prevention,
                Prohibition, and Redressal) Act</strong> are examples of legal tools that
              are specifically designed to safeguard women. Unfortunately, many
              women remain unaware of these resources, limiting their potential
              to stand up for their rights.
            </p>
            <h3 className="text-2xl font-bold mb-2 font-serif">
              How Can Women Access Legal Resources?
            </h3>
            <p className="text-gray-800 mb-4 font-serif">
              With advancements in technology, access to legal resources has
              never been easier. Women can now use online platforms, legal aid
              websites, and AI-based services to seek counsel and educate
              themselves about their legal standing. Moreover, many
              non-governmental organizations (NGOs) provide free legal services
              aimed at empowering women, offering direct support for those in
              need.
            </p>
            <p className="text-gray-800 mb-4 font-serif">
              By providing women with the right tools and resources to
              understand their rights, we can contribute towards creating a
              society where gender equality becomes the norm, not the exception.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpowermentBlog;
