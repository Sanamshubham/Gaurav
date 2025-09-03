import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
=======
import logo from "../assets/logo.png";
>>>>>>> f828432e250f23f63bb4933a8b603e78047bf1f2

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
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Vixel Logo"
                className="h-10 w-auto object-contain"
              />
<<<<<<< HEAD
              <span className="hidden sm:inline text-2xl font-bold text-primary">
                V I X E L
              </span>
            </Link>
=======
              <span className="hidden sm:inline text-2xl font-bold text-primary-foreground">
                Gaurav & Brothers
              </span>
            </a>
>>>>>>> f828432e250f23f63bb4933a8b603e78047bf1f2
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5">
<<<<<<< HEAD
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 px-4 py-2 text-sm font-medium"
            >
              Get Quote
            </Link>
=======
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
>>>>>>> f828432e250f23f63bb4933a8b603e78047bf1f2
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden mt-2 space-y-4 text-center">
            <Link
              to="/"
              className="block text-foreground/80 hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-foreground/80 hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-foreground/80 hover:text-foreground"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-foreground/80 hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2 text-sm font-medium"
            >
=======
          <div className="md:hidden mt-2 space-y-4 text-center bg-primary rounded-md py-4 shadow-lg">
            <a
              href="/"
              className="block text-primary-foreground/90 hover:text-white"
            >
              Home
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
>>>>>>> f828432e250f23f63bb4933a8b603e78047bf1f2
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
