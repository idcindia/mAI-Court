



const LearningGridArray = [
    { 
      order: -1,
      
      
      description:
        "This title for mAI Court highlights the transformative impact of AI in reshaping the legal landscape, emphasizing innovation and the use of advanced technology to make justice more efficient and accessible.",
      
    },
    {
      order: 1,
      heading: "Why Choose mAI Court? ",
      description:
        "AI-Powered Legal Assistance: Get instant, personalized legal advice powered by cutting-edge AI technology. Whether you’re drafting a document or seeking legal guidance, our AI is available 24/7 in multiple Indian languages. ",
    },
    {
      order: 2,
      heading: "Benefit for Users",
      description:
        "Affordable Access: Legal aid shouldn’t be a luxury. Our freemium model ensures that everyone can access basic legal services for free, with premium options available for more complex needs at just ₹1/day. ",
    },
    {
      order: 3,
      heading: "Useful for Law-Students",
      description:
        "Comprehensive Resources: Empower yourself with a wealth of educational resources, from legal articles and guides to mock tests and webinars. Whether you're a law student, a professional, or simply seeking legal information, we have something for you. ",
    },
    {
      order: 4,
      heading: `Flexible and Accessible`,
      description:
        "Flexible and accessible services ensure that users can easily adapt to varying needs and access resources without barriers. By providing user-friendly solutions, we create opportunities for people to engage anytime, anywhere, regardless of limitations. ",
    },
    {
      order: 5,
      heading: "Empowering Through Innovation",
      description:
        "mAI Court leverages cutting-edge AI technology to simplify legal processes, making justice accessible for all. Our platform ensures transparency, efficiency, and fairness, empowering individuals to navigate the legal system with confidence.",
    },
  ];
  


const LearningGrid =()=>{
    return(
        <div className="grid  w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 mb-12 mx-10">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "lg:col-span-2 lg:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-gray-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-gray-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "lg:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col gap-10 pb-10 lg:pb-0">
                <div className=" ">
                 <h1 className="bg-gradient-to-r from-[#F09819]  to-[#7e5b2b] bg-clip-text text-4xl font-bold text-transparent">Revolutionizing Justice with</h1>
                  <h2 className="bg-gradient-to-r from-[#F09819]  to-[#7e5b2b] bg-clip-text text-3xl font-bold text-transparent">AI-Powered Solutions</h2>
                </div>
                <p className="text-gray-600 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                 
                </div>
              </div>
            ) : (
              <div className="pt-7 flex flex-col gap-6">
                <h1 className="text-white text-lg">{card.heading}</h1>

                <p className="text-slate-300 font-medium text-left pl-5">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
    )
}
export default LearningGrid