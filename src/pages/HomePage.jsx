import React from "react";
import { background } from "../assets/Image";
import { Mail, Phone, MapPin, GithubIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";

const HomePage = () => {
  const { footerRef } = useOutletContext();

  const handleContactClick = () => {
    footerRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white">
      <section
        className="flex items-center min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-[1500px] mx-auto">
          <div className="text-center lg:text-left w-full lg:w-2/3 px-4 lg:px-12">
            {/* Text Content */}
            <h2 className="text-2xl text-gray-300">
              Hi There! I'm Thong Vathana
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-300">
              I am <span className="text-yellow-400">Junior Developer</span>
              <span className="blinking-cursor text-yellow-400">|</span>
            </h1>
            <p className="text-gray-400 mt-4 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              I design and build responsive, user-friendly websites tailored to
              client needs. Passionate about solving problems with clean,
              efficient code.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              onClick={handleContactClick}
            >
              Contact Me
            </button>
            {/* Contact Info */}
            <div className="mt-10 lg:mt-40 flex flex-col lg:flex-row justify-center lg:justify-start text-sm text-gray-400 space-y-4 lg:space-y-0 lg:space-x-8">
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Mail className="w-4" />
                  <p>Email</p>
                </div>
                <p className="text-white text-center lg:text-left">
                  thongvathana22@gmial.com
                </p>
              </div>
              <span className="hidden lg:block h-10 w-px bg-gray-500"></span>
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Phone className="w-4" />
                  <p>Phone</p>
                </div>
                <p className="text-white text-center lg:text-left">
                  +855 968 779 593
                </p>
              </div>
              <span className="hidden lg:block h-10 w-px bg-gray-500"></span>
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <GithubIcon className="w-4" />
                  <p>GitHub</p>
                </div>
                <p className="text-white text-center lg:text-left">satoryuk</p>
              </div>
              <span className="hidden lg:block h-10 w-px bg-gray-500"></span>
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MapPin className="w-4" />
                  <p>Location</p>
                </div>
                <p className="text-white text-center lg:text-left">
                  Phnom Penh, Porsenchey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Skills />
      </section>
    </div>
  );
};

export default HomePage;
