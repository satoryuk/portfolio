import React from "react";
import { SMS, phoneShop, libraryManagement } from "../assets/Image";

const projects = [
  {
    title: "Sales Management System",
    image: SMS,
    description:
      "Full-stack system with Laravel RESTful API and ReactJS, Tailwind CSS. Integrated with MySQL and JWT authentication.",
    link: "https://drive.google.com/file/d/1CGjBofhaTYXVaGNr3PmFpjtk1eqYnA16/view?usp=sharing",
  },
  {
    title: "Phone Shop",
    image: phoneShop,
    description:
      "RESTful APIs with Laravel for managing products and built responsive UI.",
    link: "https://drive.google.com/file/d/1DypJhl-fw40duuplghrvZFUL8OZpoQ5W/view?usp=sharing",
  },
  {
    title: "Library Management System",
    image: libraryManagement,
    description:
      "Java-based application using MySQL and Docker to manage book inventory and transactions.",
    link: "https://drive.google.com/file/d/1zfCuR30ygVTkHzcZHTpxzfJ8Pv87QNP_/view?usp=sharing",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-8 px-4" id="projects">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Projects
        </h2>

        <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-yellow-400 hover:shadow-xs transition transform hover:-translate-y-1 hover:scale-100 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-500 hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
