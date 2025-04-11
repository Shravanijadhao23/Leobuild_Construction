import React from "react";
import assets from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto px-4 py-20 mt-10 md:px-10 lg:px-10"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center md:mt-12">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Leobuild Construction
        </span>
      </h1>

      <p className="text-gray-500 max-w-md text-center mb-15 px-4 sm:px-0">
        With every brick we lay, we shape not just buildings — but the lives and
        dreams within them. That’s the Leobuild difference.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="Leobuild"
          className="w-full sm:w-3/4 md:w-1/2 max-w-lg rounded-md"
        />

        <div className="mt-10 md:mt-0 w-full">
          <div className="mb-10 p-5 border-2 rounded-2xl border-blue-500 text-center md:text-left">
            <p className="text-gray-600">
              At Leobuild Constructions, we believe that every structure tells a
              story — of strength, craftsmanship, and lasting value. With over a
              decade of experience in the construction industry, we specialize
              in turning ambitious architectural visions into reality.
            </p>
            <p className="text-gray-600 mt-3">
              Whether it’s residential buildings, commercial spaces, or complex
              infrastructure projects, our team of skilled engineers,
              architects, and project managers bring unmatched dedication and
              precision to every project we undertake.
            </p>
            <p className="text-gray-600 mt-3">
              We’re not just builders — we’re partners in your journey. From
              initial planning to final handover, we prioritize transparency,
              safety, sustainability, and client satisfaction.
            </p>
          </div>

          <div className=" md:text-left">
            <h4 className="text-center underline underline-offset-4 decoration-1 font-light mb-4">
              Why Choose Us
            </h4>
            <ul className="text-left list-disc ml-6 text-sm text-gray-700 space-y-2">
              <li>Expert Team with Hands-on Experience</li>
              <li>Timely Project Delivery</li>
              <li>High-Quality Materials & Workmanship</li>
              <li>Transparent Communication</li>
              <li>Sustainable Building Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
