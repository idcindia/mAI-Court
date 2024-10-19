"use client"; // Ensure this is at the top
import { useState } from "react";
import { motion } from "framer-motion";

const legalTerms = [
    { term: "Affidavit", meaning: "A written statement confirmed by oath or affirmation, for use as evidence in court." },
    { term: "Alimony", meaning: "A financial support paid to a spouse after separation or divorce." },
    { term: "Amicus Curiae", meaning: "A person or group who is not a party to a lawsuit but has a strong interest in the matter and offers information or expertise to the court." },
    { term: "Arbitration", meaning: "A method of resolving disputes outside the courts, where an arbitrator makes the final decision." },
    { term: "Bail", meaning: "A sum of money used as a security deposit to ensure that an accused person returns for their trial." },
    { term: "Due Diligence", meaning: "The investigation or exercise of care that a reasonable business or person is expected to take before entering into an agreement or contract." },
    { term: "Ex Parte", meaning: "A proceeding brought by one party in the absence of and without representation or notification to other parties." },
    { term: "Injunction", meaning: "A judicial order that restrains a person from an action or compels a person to perform a certain act." },
    { term: "Litigation", meaning: "The process of taking legal action or resolving disputes in a court of law." },
    { term: "Negligence", meaning: "The failure to exercise the care that a reasonably prudent person would exercise in like circumstances." },
    { term: "Perjury", meaning: "The offense of willfully telling an untruth in a court after having taken an oath." },
    { term: "Plaintiff", meaning: "The person who brings a case against another in a court of law." },
    { term: "Defendant", meaning: "An individual, company, or institution being accused or sued in a court of law." },
    { term: "Pro Bono", meaning: "Legal services performed voluntarily and without payment." },
    { term: "Settlement", meaning: "An agreement reached between parties in a lawsuit, typically resulting in the withdrawal of the suit." },
    { term: "Tort", meaning: "A wrongful act or an infringement of a right leading to civil legal liability." },
    { term: "Subpoena", meaning: "A document that orders an individual to appear in court or produce evidence." },
    { term: "Habeas Corpus", meaning: "A legal principle that protects against unlawful and indefinite imprisonment." },
    { term: "Jurisdiction", meaning: "The official power to make legal decisions and judgments." },
    { term: "Liability", meaning: "The state of being responsible for something, especially by law." },
    { term: "Mediation", meaning: "A method of dispute resolution where a neutral third party helps the disputing parties reach a mutually acceptable agreement." },
    { term: "Nolo Contendere", meaning: "A plea by a defendant in a criminal prosecution that does not admit guilt but also does not contest the charge." },
    { term: "Parole", meaning: "The conditional release of a prisoner before the completion of their sentence." },
    { term: "Probate", meaning: "The legal process of validating a will and administering an estate." },
    { term: "Quid Pro Quo", meaning: "A favor or advantage granted in return for something." },
    { term: "Statute", meaning: "A written law passed by a legislative body." },
    { term: "Trust", meaning: "A fiduciary relationship in which one party holds property for the benefit of another." },
    { term: "Writ", meaning: "A formal order issued by a body with administrative or judicial jurisdiction." },
    { term: "Indictment", meaning: "A formal charge or accusation of a serious crime." },
    { term: "Contempt of Court", meaning: "Behavior that shows disrespect or defies the authority of a court." },
    { term: "Due Process", meaning: "Fair treatment through the normal judicial system, especially as a citizen's entitlement." },
    { term: "Exemption", meaning: "A legal provision that relieves a person from a duty or obligation." },
    { term: "Felony", meaning: "A serious crime, typically one involving violence, punishable by imprisonment." },
    { term: "Grand Jury", meaning: "A group of citizens convened to determine whether there is enough evidence to charge someone with a crime." },
    { term: "Innocent Until Proven Guilty", meaning: "The principle that one is considered innocent unless proven guilty." },
    { term: "Malpractice", meaning: "Improper, illegal, or negligent professional behavior." },
    { term: "Plea Bargain", meaning: "An agreement in a criminal case where the defendant pleads guilty to a lesser charge." },
    { term: "Remand", meaning: "To send a case back to a lower court for further action." },
    { term: "Slander", meaning: "The action or crime of making a false spoken statement damaging to a person's reputation." },
    { term: "Trademark", meaning: "A symbol, word, or words legally registered or established by use as representing a company or product." },
    { term: "Will", meaning: "A legal document in which a person states their wishes regarding the distribution of their property after death." },
    { term: "Affirmative Defense", meaning: "A defense raised in which the defendant offers evidence to justify their actions." },
    { term: "Civil Rights", meaning: "The rights of citizens to political and social freedom and equality." },
    { term: "Double Jeopardy", meaning: "The prosecution of a person twice for the same offense." },
    { term: "Entrapment", meaning: "The act of tricking someone into committing a crime." },
    { term: "Frivolous Lawsuit", meaning: "A legal claim that lacks any merit or purpose." },
    { term: "Immunity", meaning: "Exemption from legal responsibility or penalty." },
    { term: "Jury Duty", meaning: "The responsibility of a citizen to serve on a jury when summoned." },
    { term: "Libel", meaning: "A published false statement that is damaging to a person's reputation." },
    { term: "Negligence Per Se", meaning: "A legal doctrine that makes an act negligent because it violates a statute or regulation." },
    { term: "Out-of-Court Settlement", meaning: "An agreement reached by the parties in a dispute without going to trial." },
    { term: "Quasi-Contract", meaning: "An obligation that is imposed by law to prevent unjust enrichment." },
    { term: "Sequestration", meaning: "The act of seizing property until a debt has been paid or a trial concluded." },
    { term: "Vicarious Liability", meaning: "A legal doctrine that assigns liability to one party for the actions of another." },
    { term: "Zoning Laws", meaning: "Laws that regulate land use and development." }
  ];
  

/**
 * A glossary page that displays a list of legal terms and their meanings.
 * The page has a search bar at the top and will filter the list of terms based on the search input.
 * The list of terms is displayed in a card format with the term name and its meaning.
 * The page also has a hero section with a background image and a heading.
 * The hero section is followed by the search bar and the list of terms.
 * The page uses framer-motion for animations.
 */
const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = legalTerms.filter((term) =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/law-glossary.jpeg')" }} // Add your hero background image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent font-times p-2">
            Legal Terms Glossary
          </h1>
          <p className="mt-4 text-xl text-slate-100 font-serif max-w-3xl">
            This easy-to-read guide contains over 200 terms that you encounter in the context of various laws and explains each of them in simple terms.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center mt-10">
        <input
          type="text"
          className="w-full sm:w-1/2 p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#F09819]"
          placeholder="Search for a legal term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Legal Terms List */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, index) => (
              <motion.div
                key={index}
                className="mb-6 border-b border-gray-200 pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-[#F09819]">{item.term}</h2>
                <p className="text-gray-700 mt-2 font-serif">{item.meaning}</p>
              </motion.div>
            ))
          ) : (
            <div className="text-center mt-10 text-gray-500">
              <p>No terms found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;


