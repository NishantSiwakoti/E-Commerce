import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* About HamroMart Section */}
        <section className="mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-orange-500 mb-6">
            About HamroMart
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="font-bold text-orange-500">HamroMart</span>,
            Nepal's premier e-commerce platform. At HamroMart, we are dedicated
            to revolutionizing the online shopping experience in Nepal.
            Developed with passion and precision, HamroMart aims to bring
            convenience and quality right to your doorstep.
          </p>
        </section>

        {/* Developed By Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
            Developed By
          </h2>

          {/* Developer Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Developer Image */}
            <div className="flex-shrink-0">
              <img
                src="https://www.nishantshiwakoti.com.np/assets/Rectangle-BSEEfVt6.png" // Replace with your photo URL
                alt="Developer"
                className="w-48 h-48 rounded-full shadow-md"
              />
            </div>

            {/* Developer Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">
                Nishant Siwakoti
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                HamroMart is developed by{" "}
                <span className="font-bold text-orange-400">
                  Nishant Siwakoti
                </span>
                , a skilled software developer creating responsive and scalable
                web applications.
              </p>

              {/* Developer Links */}
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/nishant-siwakoti-470a06231/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline flex items-center"
                  >
                    linkedin.com/in/nishant{" "}
                    <FaExternalLinkAlt className="ml-1" />
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/NishantSiwakoti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline flex items-center"
                  >
                    github.com/NishantSiwakoti{" "}
                    <FaExternalLinkAlt className="ml-1" />
                  </a>
                </li>
                <li>
                  <strong>Portfolio:</strong>{" "}
                  <a
                    href="https://www.nishantshiwakoti.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline flex items-center"
                  >
                    nishantshiwakoti.com.np{" "}
                    <FaExternalLinkAlt className="ml-1" />
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:nishantsiwakoti1@gmail.com"
                    className="text-orange-500 hover:underline flex items-center"
                  >
                    nishantsiwakoti1@gmail.com
                    <FaEnvelope className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
