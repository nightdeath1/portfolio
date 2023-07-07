import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          As a passionate Frontend Developer with 1 year of experience, I have a
          strong foundation in HTML, CSS, JavaScript, React, and Tailwind. I
          bring a unique perspective from my 6 years experience as a founder of
          a gaming services company, which fuels my creativity in developing
          engaging web applications.
        </p>
        <br />
        <p className="text-xl">
          With a keen eye for design and attention to detail, I create intuitive
          and visually appealing user interfaces. I am proficient in utilizing
          HTML, CSS, and JavaScript to build responsive and dynamic websites. My
          expertise in React and Tailwind allows me to develop efficient and
          scalable frontend solutions.
        </p>
        <br />
        <p className="text-xl">
          I am excited about the opportunity to contribute my frontend
          development skills and gaming industry insights to a dynamic and
          innovative team. Let's connect and discuss how my expertise can
          support your organization's goals.
        </p>
        {/* <br />
        <p className="text-xl">
          I am excited about the opportunity to contribute my frontend
          development skills and gaming industry insights to a dynamic and
          innovative team. Let's connect and discuss how my expertise can
          support your organization's goals.
        </p> */}
      </div>
    </div>
  );
};

export default About;
