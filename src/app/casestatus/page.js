"use client"; // Ensure this is at the top
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Use useRouter from "next/navigation"

const cases = [
  {
    title: "Supreme Court Cases",
    description: "Details about Supreme Court cases.",
    emoji: "⚖️",
    path: "https://www.sci.gov.in/case-status-case-no/",
  },
  {
    title: "High Court Cases",
    description: "Details about High Court cases.",
    emoji: "🏛️",
    path: "https://ecourts.gov.in/ecourts_home/static/highcourts.php",
  },
  {
    title: "District Court Cases",
    description: "Details about District Court cases.",
    emoji: "🏢",
    path: "https://ecourts.gov.in/ecourts_home/static/highcourts.php",
  },
  {
    title: "Consumer Court",
    description: "Details about Consumer Court cases.",
    emoji: "🛍️",
    path: "https://consumeraffairs.nic.in/organisation-and-units/division/legal-metrology/court-cases-and-judgements/court-cases-and-judgements",
  },
];

const CaseStatus = () => {
  const router = useRouter(); // Correct import from next/navigation

  return (
    <div>
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/law3.jpeg')" }} // Ensure image path is correct
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Track Court cases in any Court
          </h1>
          <p className="mt-4 text-xl text-slate-100">
            Track court cases across any court with real-time updates, ensuring you stay informed on case progress.
          </p>
        </div>
      </section>

      <div className="p-5">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">Home Case Status</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push(caseItem.path)} // Correct use of router.push
            >
              <div className="text-4xl mb-2">{caseItem.emoji}</div>
              <h2 className="text-xl font-semibold">{caseItem.title}</h2>
              <p className="text-gray-600">{caseItem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStatus;
