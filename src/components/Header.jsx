import React, { useState } from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import assets, { bgImag } from "../assets/assets";
import { motion } from "framer-motion";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImag.length);
  };

  const prevBg = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bgImag.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {bgImag.map((image, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0 relative">
            {/* Background Image */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 mx-auto"
            >
              <h2 className="text-3xl sm:text-6xl md:text-[70px] font-semibold drop-shadow-lg mb-2  mt-5 md:mb-2 inline-block max-w-3xl ">
                Explore homes that fit your dreams
              </h2>
              <div className="flex flex-col sm:flex-row sm:space-x-6  md:mt-8 mt-6 space-y-4 sm:space-y-0">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="/projects"
                  className="px-8 py-2 bg-blue-500 text-white rounded-md "
                >
                  Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="/contact"
                  className="px-8 py-2 bg-blue-500 text-white rounded-md "
                >
                  Contact
                </motion.a>
              </div>

              <div className="flex space-x-6 md:mt-5 mt-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://wa.me/919922998987"
                  // className="px-8 py-2 bg-blue-500 text-white rounded-md"
                >
                  <img
                    src={assets.whatsapp}
                    className="h-10 w-10 sm:h-6 sm:w-6  md:h-10 md:w-10"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://www.instagram.com/leobuildconstruction/"
                  // className="px-8 py-2 bg-blue-500 text-white rounded-md"
                >
                  <img
                    src={assets.instagram}
                    className="h-10 w-10 sm:h-6 sm:w-6 md:h-10 md:w-10"
                  />
                </motion.a>
                {/* <a
                  href="https://t.me/"
                  // className="px-8 py-2 bg-blue-500 text-white rounded-md"
                >
                  <img
                    src={assets.telegram}
                    className="h-10 w-10 sm:h-6 sm:w-6  md:h-10 md:w-10"
                  />
                </a>
                <a
                  href="mailto:shravanijadhao23@gmail.com"
                  // className="px-8 py-2 bg-blue-500 text-white rounded-md"
                >
                  <img
                    src={assets.gmail}
                    className="h-10 w-10 sm:h-6 sm:w-6 md:h-10 md:w-10"
                  />
                </a> */}
              </div>
            </motion.div>

            {/* Left Button */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
              <button
                onClick={prevBg}
                className="bg-white/50 hover:bg-white/70 p-3 rounded-full shadow-md"
              >
                <img
                  src={assets.back_arraow}
                  alt="previous"
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* Right Button */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
              <button
                onClick={nextBg}
                className="bg-white/50 hover:bg-white/70 p-3 rounded-full shadow-md"
              >
                <img
                  src={assets.forwrd_arraow}
                  alt="next"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navbar stays above all */}
      <div className="absolute top-0 left-0 right-0 z-40">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
