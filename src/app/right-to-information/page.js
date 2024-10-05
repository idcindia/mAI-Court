const RightToInformation = () => {
  return (
    <div>
      {/* Header Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assests/rti-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Right to Information Act
          </h1>
          <p className="mt-4 text-xl text-slate-100">
            Empowering citizens to access information and promote transparency.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="p-6">
        <div className="my-10">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg mb-6">
            The Right to Information Act (RTI) 2005 empowers Indian citizens to
            request information from public authorities. This law aims to
            promote transparency and accountability in the workings of the
            government. Under this act, citizens can seek information regarding
            government decisions, operations, and documents.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Key Objectives of the RTI Act
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">
              Promote transparency in government processes.
            </li>
            <li className="text-lg mb-2">
              Ensure accountability by holding public authorities responsible.
            </li>
            <li className="text-lg mb-2">
              Empower citizens to participate actively in democracy.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-4">
            Key Features of the RTI Act
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">
              Right to request information from any public authority.
            </li>
            <li className="text-lg mb-2">
              Response time for information is within 30 days.
            </li>
            <li className="text-lg mb-2">
              Covers all constitutional bodies, including the executive,
              legislature, and judiciary.
            </li>
            <li className="text-lg mb-2">
              Appeal process in case of denied information requests.
            </li>
            <li className="text-lg mb-2">
              Exemptions apply for sensitive information such as national
              security and personal privacy.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-4">
            How to File an RTI Application
          </h2>
          <ol className="list-decimal pl-6 mb-6">
            <li className="text-lg mb-2">
              Identify the public authority that holds the information.
            </li>
            <li className="text-lg mb-2">
              Draft a simple RTI application specifying the information you
              need.
            </li>
            <li className="text-lg mb-2">
              Submit the application either online or by mail with the
              prescribed fee.
            </li>
            <li className="text-lg mb-2">
              Await a response within 30 days from the concerned authority.
            </li>
          </ol>

          <h2 className="text-3xl font-bold mb-4">
            Important Sections of the RTI Act
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">
              <strong>Section 4:</strong> Public authorities must maintain
              records for easy dissemination of information.
            </li>
            <li className="text-lg mb-2">
              <strong>Section 6:</strong> Citizens can file requests to access
              information.
            </li>
            <li className="text-lg mb-2">
              <strong>Section 8:</strong> Lists exemptions where disclosure is
              not mandatory.
            </li>
            <li className="text-lg mb-2">
              <strong>Section 19:</strong> Outlines the appeal procedure in case
              of denied requests.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-4">Challenges to the RTI Act</h2>
          <p className="text-lg mb-6">
            Despite its powerful provisions, the RTI Act faces challenges such
            as delays in responses, lack of awareness among citizens, and misuse
            of exemptions by public authorities. Continuous public awareness and
            improvements in processing RTI requests are essential for maximizing
            its impact.
          </p>

          <h2 className="text-3xl font-bold mb-4">Learn More</h2>
          <p className="text-lg mb-6">
            Visit the{" "}
            <a
              href="https://rti.gov.in"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              official RTI website
            </a>{" "}
            or
            <a
              href="https://rtionline.gov.in"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              file an RTI application online
            </a>{" "}
            to know more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightToInformation;
