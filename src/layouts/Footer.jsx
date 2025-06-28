import React, { forwardRef } from "react";
import {
  Github,
  Facebook,
  Instagram,
  Mail,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

const Footer = forwardRef((props, ref) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/satoryuk",
      color: "hover:text-gray-300",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1C6XhTbPoi/?mibextid=wwXIfr",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/thong_vathana?igsh=cWttdmk3a2ZnbHBw&utm_source=qr",
      color: "hover:text-pink-400",
    },
  ];

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#about" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 text-gray-300 relative overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-600 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto py-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-500" />
              Get In Touch
            </h3>
            <p className="text-gray-400 leading-relaxed text-left">
              Thank you for your interest in connecting with me. I welcome your
              feedback, questions, <br /> and suggestions. Feel free to reach
              out for collaborations or just to say hello!
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-yellow-500" />
              <a
                href="mailto:thongvathana22@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 underline decoration-dotted"
              >
                thongvathana22@gmail.com
              </a>
            </div>
            <p className="text-xs text-left text-gray-500">
              I typically respond within 24 hours
            </p>
          </div>

          {/* Navigation section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200 py-1 hover:pl-2 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 py-1 hover:pl-2 transition-all group"
              >
                <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
                Back to Top
              </button>
            </nav>
          </div>
        </div>

        {/* Social media section */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Social links */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h4 className="text-lg font-medium text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-800 ${social.color} transition-all duration-200 hover:scale-110 hover:bg-gray-700 group`}
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity absolute translate-x-3 translate-y-[-8px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Tech stack */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 mb-1">Built with</p>
              <div className="flex justify-center md:justify-end gap-2 text-xs">
                <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Thong Vathana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
