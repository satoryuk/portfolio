import React from "react";

const projects = [
  {
    title: "Library Management System",
    image: "/images/library.png",
    description: "Java Swing + MySQL app to manage books, members, and issuing records.",
    link: "https://github.com/yourname/library-management",
  },
  {
    title: "UniversityPedia Website",
    image: "/images/universitypedia.png",
    description: "Responsive React website helping students compare university programs.",
    link: "https://yourdomain.com/universitypedia",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-12 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
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
