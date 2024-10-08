// pages/ipc-section/page.js
import React from "react";

const ipcSections = [
  {
    section: "IPC Section 302",
    title: "Punishment for Murder",
    description:
      "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
  },
  {
    section: "IPC Section 307",
    title: "Attempt to Murder",
    description:
      "Whoever does any act with the intention or knowledge of causing death, and under such circumstances that, if he caused death, he would be guilty of murder, shall be punished with imprisonment for a term which may extend to 10 years.",
  },
  {
    section: "IPC Section 376",
    title: "Punishment for Rape",
    description:
      "Whoever commits rape shall be punished with rigorous imprisonment of not less than 10 years, but which may extend to imprisonment for life, and shall also be liable to fine.",
  },
  {
    section: "IPC Section 420",
    title: "Cheating and Dishonestly Inducing Delivery of Property",
    description:
      "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property shall be punished with imprisonment up to 7 years and shall also be liable to fine.",
  },
  {
    section: "IPC Section 498A",
    title: "Husband or Relative of Husband Subjecting Woman to Cruelty",
    description:
      "Husband or relative of a husband who subjects a woman to cruelty shall be punished with imprisonment for a term which may extend to 3 years and shall also be liable to fine.",
  },
  {
    section: "IPC Section 144",
    title: "Unlawful Assembly",
    description:
      "An assembly of five or more persons with the common objective of committing unlawful acts shall be punishable with imprisonment for a term which may extend to 3 years, or fine, or both.",
  },
];

const IPCSectionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assests/rti-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Schedule a Legal Consultation
          </h1>
          <p className="mt-4 text-xl text-slate-100">
            Get expert advice from professionals or AI-powered assistance for
            your legal concerns. Choose from various legal consultation options.
          </p>
        </div>
      </section>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-6 mb-8">
          Popular Indian Penal Code Sections
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
          {ipcSections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">
                {section.section} - {section.title}
              </h2>
              <p className="text-gray-700">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPCSectionPage;
