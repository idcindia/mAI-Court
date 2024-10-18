"use client"; 
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Use useRouter from "next/navigation"

const ReportPage = () => {
  const router = useRouter(); // Correct import from next/navigation

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/law-report.jpeg')" }} // Add your hero background image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent font-times">
            Explore Case Reports Nationwide
          </h1>
          <p className="mt-4 text-xl text-slate-100 font-serif">
            Access comprehensive case reports from courts across India with real-time updates.
          </p>
        </div>
      </section>

      {/* Report Section */}
      <div className="p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 p-2 text-center">National Judicial Data Grid</h1>
          <p className="mb-6 text-lg text-gray-600 text-center max-w-3xl">
            The National Judicial Data Grid (NJDG) is a comprehensive and real-time data platform that
            provides statistical reports on the pending and disposed cases of various courts in India.
            You can use the NJDG platform to track ongoing legal processes and explore detailed case
            information by visiting the platform linked below.
          </p>
          <motion.button
            className="bg-[#F09819] hover:bg-[#f5c686] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("https://njdg.ecourts.gov.in/njdg_v3/")}
          >
            Visit National Judicial Data Grid
          </motion.button>
        </div>

        {/* Additional Content */}
        <div className="mt-10 max-w-6xl mx-auto p-6 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">What is NJDG?</h2>
          <p className="text-gray-700 mb-4 font-serif">
            The NJDG is a national platform developed by the eCourts project under the Department of
            Justice, India. It provides information on case pendency, disposal rates, and other
            important statistics about the judicial system. The platform is available for public use
            to ensure transparency and accountability in the legal process.
          </p>
          <h3 className="text-xl font-bold mb-2">Why Use NJDG?</h3>
          <ul className="list-disc pl-6 text-gray-700 font-serif">
            <li>Access to statistical reports on various courts.</li>
            <li>Transparency in the judicial system.</li>
            <li>Monitor disposal rates and pendency of cases.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
