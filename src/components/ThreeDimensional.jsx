import React from "react";
import { tdImage } from "../assets/assets";
import { motion } from "framer-motion";

const ThreeDimensional = () => {
  const chunkedProjects = [];
  for (let i = 0; i < tdImage.length; i += 2) {
    chunkedProjects.push(tdImage.slice(i, i + 2));
  }

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto px-4 py-20 mt-10 md:px-2 lg:px-10"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Our 3D Designs
      </h1>
      <div className="w-full py-5 flex justify-end mb-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-blue-600 px-8 py-2 rounded-md"
        >
          <a href="./projects" className="text-center text-white block">
            Our Designs
          </a>
        </motion.div>
      </div>
      <div className="w-full overflow-hidden">
        {chunkedProjects.map((pair, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-8 mb-6 justify-center"
          >
            {pair.map((image, idx) => (
              <div key={idx} className="relative flex-shrink-0 w-full sm:w-1/2">
                <img
                  src={image}
                  alt={`3D Design ${index * 2 + idx + 1}`}
                  className="w-full h-[500px] mb-6 object-cover rounded-lg shadow-md bg-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDimensional;
