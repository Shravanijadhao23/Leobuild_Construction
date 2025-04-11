import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe6c5ffd-5415-404d-89b3-ffa4f63bf5f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      // alert("Form Submitted Sucessfully");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className="text-center p-6 py-30 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact us
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Contact with us for more information about Leobuild Constructions
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              tyoe="text"
              placeholder="Your Name"
              name="Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              tyoe="email"
              placeholder="Your Email"
              name="email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            name="Message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded-md"
        >
          {result ? result : "Send Message"}
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
