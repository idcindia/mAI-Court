import Image from "next/image";

const HomePage = () => {
  return (
    <section className="flex justify-between items-center p-5">
      <div>
        <h1 className="text-4xl font-bold mb-1 text-[#717476]"> Your Legal Companion,</h1>
        <p className="text-3xl font-bold text-[#C39504] mb-1">Powered by AI</p>
        <p className="text-[#717476] text-xl mb-1">Justice prevails through righteousness alone.</p>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          src="/law 1.png"
          alt="Legal Assistant"
          width={450}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HomePage;
