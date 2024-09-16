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
            Our mission is to ensure justice is accessible to all by providing
            affordable legal awareness and leveraging technology to empower
            individuals and communities. We are dedicated to making legal
            resources easy to access, ensuring that every person can confidently
            navigate their rights and obligations. Our goal is to support you at
            every stage of your legal journey, fostering a just and equitable
            society for everyone.
          </p>
        </div>

        {/* Vision Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="bg-gradient-to-r from-[#f89b1a] to-[#834e04] bg-clip-text text-4xl font-semibold text-transparent text-left">
            Our Vision
          </h1>
          <p className="text-base font-medium text-richblack-300 text-left leading-relaxed lg:min-h-[200px]">
            Our vision is to create a society where justice is a right, not a
            privilege. By combining advanced AI technology with a strong network
            of legal professionals, educators, and advocates, we aim to make the
            legal system transparent, accessible, and equitable for all. We
            believe in empowering individuals with the knowledge, tools, and
            resources they need to seek justice, regardless of their background
            or financial standing. Through this, we strive to democratize legal
            access and build a fairer, more inclusive world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardmission;
