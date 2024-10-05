// src/app/landmark-judgment-summaries/page.js
import { landmarkJudgments } from './data';

const LandmarkJudgmentSummaries = () => {
  return (
    <div className="">
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assests/law3.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Landmark Judgment Summaries
          </h1>
          <p className="mt-4 text-xl text-slate-100">
            Explore in-depth legal resources and articles written by experts in
            the field.
          </p>
        </div>
      </section>

      <h1 className="text-2xl font-bold mb-4 m-4">Landmark Judgment Summaries</h1>
      <div className="overflow-x-auto mx-4"> {/* Added div for responsive overflow */}
        <table className="min-w-full border-collapse border border-gray-600 px-4 my-4"> {/* Added my-4 for vertical spacing */}
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Serial Number</th>
              <th className="border border-gray-300 px-4 py-2">Date of Judgment</th>
              <th className="border border-gray-300 px-4 py-2">Cause Title/Case No.</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Judgment Summary</th>
            </tr>
          </thead>
          <tbody>
            {landmarkJudgments.map((judgment) => (
              <tr key={judgment.serialNumber} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{judgment.serialNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{judgment.dateOfJudgment}</td>
                <td className="border border-gray-300 px-4 py-2">{judgment.causeTitle} <br /> {judgment.caseNo}</td>
                <td className="border border-gray-300 px-4 py-2">{judgment.subject}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div>
                    <strong>{judgment.judgmentSummary.title}</strong><br />
                    Citation: {judgment.judgmentSummary.citation}<br />
                    Justices: {judgment.judgmentSummary.justices}<br />
                    <strong>Questions:</strong>
                    <ul>
                      {judgment.judgmentSummary.questions.map((question, index) => (
                        <li key={index}>{question}</li>
                      ))}
                    </ul>
                    <strong>Factual Background:</strong><br />
                    {judgment.judgmentSummary.factualBackground}<br />
                    <a href={judgment.judgmentSummary.readMoreLink} className="text-blue-500 hover:underline">Read More</a> | 
                    <a href={judgment.judgmentSummary.viewJudgmentLink} className="text-blue-500 hover:underline"> View Judgment</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandmarkJudgmentSummaries;
