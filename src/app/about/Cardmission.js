const Cardmission = () => {
  return (
    <div className="mx-12 py-16">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-20">
        {/* Mission Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="bg-gradient-to-r from-[#f89b1a] to-[#834e04] bg-clip-text text-4xl font-semibold text-transparent text-left">
            Our Mission
          </h1>
          <p className="text-base font-medium text-richblack-300 text-left leading-relaxed lg:min-h-[200px]">
            &ldquo;धर्मेणैव जयते न्यायः&rdquo; – Justice prevails through righteousness
            alone. Guided by this principle, our mission is to bridge the
            justice gap by offering free legal aid and education, empowered by
            cutting-edge AI technology, ensuring no one is left behind in their
            pursuit of justice.
          </p>
        </div>

        {/* Vision Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="bg-gradient-to-r from-[#f89b1a] to-[#834e04] bg-clip-text text-4xl font-semibold text-transparent text-left">
            Our Vision
          </h1>
          <p className="text-base font-medium text-richblack-300 text-left leading-relaxed lg:min-h-[200px]">
            To modernize court procedures, ensure adequate judicial resources,
            promote timely judge appointments, and drive judicial reforms. We
            are dedicated to empowering underserved communities with legal aid,
            improving the efficiency and fairness of justice delivery for a more
            inclusive society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardmission;
