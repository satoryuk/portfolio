import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  BrainCircuit,
  Coffee,
  Download,
} from "lucide-react";
import { profile2 } from "../assets/Image";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickFacts = [
    {
      icon: <GraduationCap className="w-5 h-5 text-yellow-400" />,
      label: "Studying at Royal University of Phnom Penh",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-yellow-400" />,
      label: "Freelance – 3 months experience",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-yellow-400" />,
      label: "Currently learning Next.js",
    },
    {
      icon: <Coffee className="w-5 h-5 text-yellow-400" />,
      label: "Coffee & Music lover",
    },
  ];

  const techStack = ["React", "Tailwind CSS", "Laravel", "Next.js"];

  return (
    <section
      className="py-8 px-6 md:px-12 bg-gray-950"
      id="about"
    >
      <div className="max-w-[1500px] mx-auto">
        <div
          className={`grid lg:grid-cols-2 lg:gap-16 gap-8 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Profile Image */}
          <div className="relative max-w-80 sm:max-w-96 mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
              <img src={profile2} alt="profile" className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-cyan-500"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-gray-200 text-left text-3xl md:text-4xl font-bold tracking-wide uppercase mb-2">
                About Me
              </p>
              <p className="text-gray-400 text-lg leading-relaxed text-left">
                I enjoy crafting responsive, modern interfaces and working with APIs.
                My main tech stack includes React, Tailwind CSS, and Laravel for
                building powerful, full-stack applications. I love solving real-world
                problems through code, and I'm always curious to explore new tech
                trends and tools.
              </p>
            </div>

            {/* Quick Facts */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 pl-3 border-yellow-400">
                Quick Facts
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      {fact.icon}
                    </div>
                    <span>{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 pl-3 border-yellow-400">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/your-cv.pdf"
                download
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
