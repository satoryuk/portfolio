import React from "react";
import {
  MonitorSmartphone,
  ServerCog,
  Palette,
  Bug,
  GitBranch,
  Figma,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: <MonitorSmartphone className="w-6 h-6 text-blue-500" />,
    description: "Crafting responsive and modern interfaces using React, Tailwind CSS, and HTML/CSS.",
  },
  {
    title: "Backend Development",
    icon: <ServerCog className="w-6 h-6 text-green-500" />,
    description: "Building robust APIs with Laravel and MySQL to power dynamic applications.",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    description: "Designing clean, user-centered interfaces using Figma and Canva.",
  },
  {
    title: "Debugging & Testing",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    description: "Efficiently identifying and resolving bugs using Postman, browser tools, and logic.",
  },
  {
    title: "Version Control",
    icon: <GitBranch className="w-6 h-6 text-yellow-500" />,
    description: "Managing code with Git and GitHub to ensure smooth collaboration and deployment.",
  },
  {
    title: "Wireframing & Planning",
    icon: <Figma className="w-6 h-6 text-purple-500" />,
    description: "Visualizing ideas and workflows with Figma and dbdiagram.io before development.",
  },
];

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4" id="services">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          My Services
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="dark:bg-gray-950 p-6 rounded-xl shadow-sm hover:shadow-yellow-400 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
