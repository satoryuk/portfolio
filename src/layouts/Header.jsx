import React, { useState } from "react";
import { profile } from "../assets/Image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto p-2 flex justify-between items-center">
        {/* Logo and Profile */}
        <div className="flex items-center space-x-2">
          <img
            src={profile}
            alt="profile image"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="hidden md:block text-2xl font-bold px-4 text-yellow-400">
            My Portfolio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block py-4">
          <ul className="flex space-x-8 lg:space-x-20">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-yellow-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline hover:text-yellow-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline hover:text-yellow-400 transition"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline hover:text-yellow-400 transition"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:underline hover:text-yellow-400 transition"
              >
                Skills
              </a>
            </li>
            {/* <li>
              <a
                href="#contact"
                className="hover:underline hover:text-yellow-400 transition"
              >
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900 z-50">
            <nav className="px-4 py-6">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a
                    href="/"
                    className="block hover:underline hover:text-yellow-400 transition text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block hover:underline hover:text-yellow-400 transition text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block hover:underline hover:text-yellow-400 transition text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block hover:underline hover:text-yellow-400 transition text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="block hover:underline hover:text-yellow-400 transition text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#contact"
                    className="block hover:underline hover:text-yellow-400 transition text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
