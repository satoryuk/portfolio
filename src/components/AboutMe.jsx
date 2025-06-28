import React from "react";
import { GraduationCap, Briefcase, MapPin, BrainCircuit, Coffee } from 'lucide-react';
import { profile } from "../assets/Image";

const AboutMe = () => {
  return (
    <section className="py-16 px-6 md:px-12" id="about">
      <div className="max-w-[1500px] mx-auto text-center">
        {/* Profile */}
        <div className="flex justify-center mb-6">
          <img
            src={profile}
            alt="My Avatar"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Short Introduction */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">About Me</h2>
        <p className="text-lg text-gray-400 mb-6">
          I'm a passionate web developer who enjoys crafting responsive, modern interfaces and working with APIs.
        </p>

        <p className="text-gray-300 mb-8">
          My main tech stack includes <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Laravel</strong> for building powerful, full-stack applications.
        </p>

        <p className="italic text-gray-200 mb-12">
          I love solving real-world problems through code, and I'm always curious to explore new tech trends and tools.
        </p>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-center space-x-3">
            <GraduationCap className="text-blue-500" />
            <span>Studying at Royal University of Phnom Penh</span>
          </div>
          <div className="flex items-center space-x-3">
            <Briefcase className="text-green-500" />
            <span>Freelance – 3 months</span>
          </div>
          {/* <div className="flex items-center space-x-3">
            <MapPin className="text-red-500" />
            <span>Phnom Penh, Cambodia</span>
          </div> */}
          <div className="flex items-center space-x-3">
            <BrainCircuit className="text-purple-500" />
            <span>Learning Next.js</span>
          </div>
          <div className="flex items-center space-x-3">
            <Coffee className="text-yellow-500" />
            <span>Coffee & music lover</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/your-cv.pdf" // Replace with your actual CV link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
          >
            View My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
