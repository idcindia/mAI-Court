"use client";

import Image from "next/image";
import Cardmission from "./Cardmission";
import LearningGrid from "./LearningGrid";
import Testimonial from "../components/common/Testimonial";

const About = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className=" flex flex-col items-center text-center">
        <h1 className="mt-24 w-[15rem] h-10 bg-gradient-to-r from-[#F09819] to-[#7e5b2b] text-white text-xl font-semibold pt-2">
          ।। धर्मेणैव जयते न्यायः।।
        </h1>
        <div className="flex lg:flex-row w-[100%] mt-10 gap-10 flex-col justify-center">
          <div className="w-[45%] ">
            <Image
              src="/Assests/bestlegal.png"
              width={1000}
              height={700}
              className="object-contain h-[22rem] rounded-xl"
            />
          </div>
          <div className="w-[45%] mb-5">
            <h1 className="mb-2 bg-gradient-to-r from-[#F09819] to-[#7e5b2b] bg-clip-text text-4xl font-bold text-transparent">
              Justice prevails through righteousness alone.
            </h1>
            <p className="flex text-left w-full text-black-600 ">
              At mAI Court, we are driven by a profound commitment to bridge the
              vast gap in access to legal rights, services, and information in
              India. With over 6 crore pending court cases, the complexities of
              the legal system often leave citizens feeling overwhelmed and
              helpless.
              <br /> <br />
              Our mission is to empower every individual by providing the tools,
              resources, and support they need to navigate the legal landscape
              confidently. This resonates with the essence of Article 39A of the
              Indian Constitution, which mandates equal access to justice for
              all, especially for those from marginalized communities.
              <br /> <br />
              We believe knowledge is power. By raising awareness and making
              legal information accessible, we help citizens protect their
              rights and seek justice. Our platform offers comprehensive legal
              resources, easy-to-follow guides, and direct support, ensuring
              everyone has the chance to be heard.
            </p>
          </div>
        </div>
        <div>
          <Cardmission />
        </div>
        <div>
          <div id="why-maicourt">
            <LearningGrid />
          </div>
        </div>
        <div>
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default About;
