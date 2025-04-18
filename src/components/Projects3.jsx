import React, { useEffect, useState } from "react";
import assets, { projectsData } from "../assets/assets";

const Projects3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto  py-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>{" "}
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto ">
        Our Projects, Built to Last. Designed to Inspire.
      </p>

      {/* *************************************** Slider Buttons ********************************************************* */}

      <div className="flex  justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="next" />
        </button>
      </div>

      {/* ********************************************* Project Slider Container **************************************************************** */}

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="flex-shrink-0  w-full sm:w-1/4">
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              <div className="mt-4 bg-white px-4 py-2 shadow-md rounded-md text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p>
                  {project.client} <span>|</span> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects3;
