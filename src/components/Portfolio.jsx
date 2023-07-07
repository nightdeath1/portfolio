import React from "react";
import ageGuess from "../assets/portfolio/Screenshot_7.jpg";
import natureSound from "../assets/portfolio/Screenshot_6.jpg";
import houses from "../assets/portfolio/Screenshot_4.jpg";
import pizza from "../assets/portfolio/Screenshot_1.jpg"
import travelling from "../assets/portfolio/Screenshot_2.jpg"
import bank from "../assets/portfolio/Screenshot_3.jpg"
import drumKit from "../assets/portfolio/Screenshot_8.jpg"
import todo from "../assets/portfolio/Screenshot_5.jpg"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ageGuess,
      demo: 'https://age-guesser-music-box.vercel.app/',
      code: 'https://github.com/nightdeath1/Age-Guesser-Music-Box',
      description: 'Age Guesser with Music Player HTML/CSS/JS'
    },
    {
      id: 2,
      src: natureSound,
      demo: 'https://nature-sounds-1md05k85g-nightdeath1.vercel.app/',
      code: 'https://github.com/nightdeath1/Nature-sounds',
      description: 'Different Nature Sound onClick HTML/CSS/JS'
    },
    {
      id: 3,
      src: drumKit,
      demo: 'https://drum-kit-one-snowy.vercel.app/',
      code: 'https://github.com/nightdeath1/Drum-Kit',
      description: 'Drum Kit on Keydown in Vanilla JS'
    },
    {
      id: 4,
      src: todo,
      demo: 'https://react-todo-list-beta-pied.vercel.app/',
      code: 'https://github.com/nightdeath1/react-todo-list',
      description: 'React Todo List App'
    },
    {
      id: 5,
      src: pizza,
      demo: 'https://pizza-react-website.vercel.app/',
      code: 'https://github.com/nightdeath1/pizza-react-website',
      description: 'React.js Pizza Website using Styled Components '
    },
    {
      id: 6,
      src: houses,
      demo: 'https://house-react-zeta.vercel.app/',
      code: 'https://github.com/nightdeath1/house-react',
      description: 'Responsive Real Estate Website with React.js'
    },
    {
      id: 7,
      src: bank,
      demo: 'https://bank-simple-website.vercel.app/',
      code: 'https://github.com/nightdeath1/bank-website',
      description: 'Bank React Website using Styled Components and Smooth Scroll'
    },
    {
      id: 8,
      src: travelling,
      demo: 'https://traveling-seven.vercel.app/',
      code: 'https://github.com/nightdeath1/travelling-react-website',
      description: 'Travelling Website React.js'
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, description}) => (
            <div key={id} className=" flex items-center justify-center flex-col shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md"
              />
             <p className="text-gray-500 py-2 px-4 max-w-md text-center mt-2 h-15">{description}</p>
              <div className="flex items-center justify-center">
              
                <a href={demo} target="_blank" className="px-6 py-3 m-3 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" className="px-6 py-3 m-3 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;