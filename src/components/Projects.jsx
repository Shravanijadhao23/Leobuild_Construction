import React from "react";
import { projectsData } from "../assets/assets";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const chunkedProjects = [];
  for (let i = 0; i < projectsData.length; i += 2) {
    chunkedProjects.push(projectsData.slice(i, i + 2));
  }

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto px-4 py-20 mt-10 md:px-2 lg:px-10"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Our Designs
      </h1>
      <div className=" w-full py-5 flex justify-end mb-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" bg-blue-600  px-8 py-2 rounded-md"
        >
          <a href="./threeDimensional" className="text-center text-white block">
            Our 3D Plans
          </a>
        </motion.div>
      </div>
      <div className="w-full overflow-hidden">
        {chunkedProjects.map((pair, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-8 mb-6 justify-center"
          >
            {pair.map((project, idx) => (
              <div key={idx} className="relative flex-shrink-0 w-full sm:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] mb-14 object-cover rounded-lg shadow-md bg-cover"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-blue-50 w-3/4 px-4 py-2 shadow-md rounded-md">
                    <h3 className="font-semibold text-lg text-center">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {project.client} <span>|</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-8  mx-auto py-3 w-full bg-blue-100 shadow-md rounded-2xl">
        <div className=" flex items-center justify-start px-6 gap-4">
          <p className="text-2xl font-medium">Have a Project, let’s discuss</p>
          <a href="/contact">
            <motion.img
              whileHover={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              // viewport={{ once: true }}
              src={assets.forwrd_arraow}
              alt="forward arrow"
              className="h-12 w-12 rounded-full bg-white p-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
