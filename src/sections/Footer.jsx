import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-neutral-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side - Name */}
        <h3 className="text-xl font-semibold text-white">
          Kevin Chaudhari
        </h3>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/kevin-chaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/kevin-chaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:chaudharikevin21@gmail.com"
            className="text-neutral-400 hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-neutral-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Kevin Chaudhari. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
