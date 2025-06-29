import React from "react";
import {
  Code2,
  Database,
  Palette,
  GitBranch,
  LayoutDashboard,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <LayoutDashboard className="w-6 h-6 text-yellow-500" />,
    items: ["HTML", "CSS","React JS", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6 text-green-500" />,
    items: ["Laravel (RESTful APIs)", "MySQL", "Postman"],
  },
  {
    title: "Tools & Design",
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    items: ["Figma", "Canva", "dbdiagram.io", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300 dark:text-white mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-2xl transition hover:shadow-xl"
            >
              <div className="flex items-center mb-4 space-x-3">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.title}
                </h3>
              </div>
              <ul className="list-disc text-left list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-1">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
