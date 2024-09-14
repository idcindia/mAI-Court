const Cardmission = () => {
  return (
    <div className="mx-12 py-16">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-20">
        {/* Mission Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="bg-gradient-to-r from-[#f89b1a] to-[#834e04] bg-clip-text text-4xl font-semibold text-transparent text-left">
            Our Mission
          </h1>
          <h2 className="bg-gradient-to-r from-[#F09819] to-[#7e5b2b] bg-clip-text text-xl font-bold text-transparent text-left">
            Justice prevails through righteousness alone.
          </h2>
          <p className="text-base font-medium text-richblack-300 text-left leading-relaxed lg:min-h-[200px]">
            Guided by this principle, our mission is to make justice accessible
            for everyone by providing affordable legal awareness and leveraging
            technology to empower individuals and communities. We are committed
            to bridging the gap between people and the legal system, ensuring
            that every individual can navigate their rights and obligations confidently. 
            With a focus on education, support, and innovative tools, we are here to assist 
            you at every stage of your legal journey, fostering a fair and just society for all.
          </p>
        </div>

        {/* Vision Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="bg-gradient-to-r from-[#f89b1a] to-[#834e04] bg-clip-text text-4xl font-semibold text-transparent text-left">
            Our Vision
          </h1>
          <h2 className="bg-gradient-to-r from-[#F09819] to-[#7e5b2b] bg-clip-text text-xl font-bold text-transparent text-left">
            Justice prevails through righteousness alone.
          </h2>
          <p className="text-base font-medium text-richblack-300 text-left leading-relaxed lg:min-h-[200px]">
            Our vision is to create a world where every individual, regardless of their
            background, is empowered with the knowledge, tools, and support needed to 
            seek and achieve justice. By harnessing the power of advanced AI technology 
            and building a strong community of legal professionals, educators, and advocates,
            we strive to democratize the legal system in India. Our vision is to make it more
            transparent, accessible, and equitable for all, ensuring that justice is not a 
            privilege, but a right available to everyone. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardmission;
