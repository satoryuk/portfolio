import React, { forwardRef } from "react";
import { GithubIcon, FacebookIcon, InstagramIcon, Mail } from "lucide-react";

const Footer = forwardRef((props, ref) => (
  <footer ref={ref} className="bg-gray-950 text-gray-400 py-8 text-center">
    <div className="space-y-4">
      <p>
        Thank you for your interest in getting in touch with me. I welcome your
        feedback, questions, and suggestions. If you have a specific question or
        comment, please feel free to email me directly at
        thongvathana22@gmail.com. I make an effort to respond to all messages
        within 24 hours, although it may take me longer during busy periods.
        Finally, if you prefer to connect on social media, you can connect with
        me using the social media links below.
      </p>
      <nav>
        <li>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Go back to top!
          </a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Project</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
      </nav>
      <div className="flex flex-col justify-center gap-6 text-xl">
        <a
          href="https://github.com/satoryuk"
          target="_blank"
          className="hover:text-white flex items-center gap-2"
        >
          <GithubIcon className="w-6 h-6" />
          Follow me on GitHub
        </a>
        <a
          href="https://www.facebook.com/share/1C6XhTbPoi/?mibextid=wwXIfr"
          target="_blank"
          className="hover:text-white flex items-center gap-2"
        >
          <FacebookIcon className="w-6 h-6" />
          Follow me on Facebook
        </a>
        <a
          href="https://www.instagram.com/thong_vathana?igsh=cWttdmk3a2ZnbHBw&utm_source=qr"
          target="_blank"
          className="hover:text-white flex items-center gap-2"
        >
          <InstagramIcon className="w-6 h-6" />
          Follow me on Instagram
        </a>
        <span className="hidden lg:block h-px w-74 bg-gray-500"></span>
        <div className="flex items-center justify-center lg:justify-start space-x-2 hover:text-white">
          <Mail className="w-6 h-6" />
          <p>thongvathana22@gmial.com</p>
        </div>
      </div>
      <p className="text-sm">Built with React JS & Tailwind CSS</p>
      <p>© 2025 Thong Vathana. All rights reserved.</p>
    </div>
  </footer>
));

export default Footer;
