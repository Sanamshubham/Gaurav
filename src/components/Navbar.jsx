import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Vixel Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline text-2xl font-bold text-primary-foreground">
                Gaurav & Brothers
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="#"
              className="text-primary-foreground/90 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-primary-foreground/90 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/90 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-md h-10 px-4 py-2 text-sm font-medium transition"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-md h-10 w-10 hover:bg-primary/80 text-primary-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 text-center bg-primary rounded-md py-4 shadow-lg">
            <a
              href="/Solution"
              className="block text-primary-foreground/90 hover:text-white"
            >
              Solution
            </a>
            <a
              href="#services"
              className="block text-primary-foreground/90 hover:text-white"
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-primary-foreground/90 hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-primary-foreground/90 hover:text-white"
            >
              Contact
            </a>
            <button className="w-full border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-md py-2 text-sm font-medium transition">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
