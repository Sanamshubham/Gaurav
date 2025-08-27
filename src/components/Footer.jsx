import React from "react";
import logo from "../assets/logo.png"; // Update path if needed

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      {/* Grid Sections */}
      <div className="grid md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div className="text-center md:text-left ">
          <img
            src={logo}
            alt="Gaurav & Brothers Logo"
            className="h-14 w-32 mx-auto md:mx-0 mb-3 rounded-[10%]"
          />
          <h3 className="text-2xl font-bold mb-2 hover:underline cursor-pointer transition">
            Gaurav & Brothers
          </h3>
          <p className="opacity-90 text-sm">
            Manufacturers & Suppliers of Premium Carpets – Hand Knots, Handloom, Tibetan Rugs, Hand Tufts.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4 hover:text-white transition">Carpet Collections</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:underline cursor-pointer">Hand Knotted Carpets</li>
            <li className="hover:underline cursor-pointer">Handloom Carpets</li>
            <li className="hover:underline cursor-pointer">Tibetan Rugs</li>
            <li className="hover:underline cursor-pointer">Hand Tufted Carpets</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 hover:text-white transition">Services</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:underline cursor-pointer">Custom Designs</li>
            <li className="hover:underline cursor-pointer">Export & Wholesale</li>
            <li className="hover:underline cursor-pointer">Bulk Orders</li>
            <li className="hover:underline cursor-pointer">Worldwide Shipping</li>
          </ul>
        </div>

        {/* Solutions / Industries */}
        <div>
          <h4 className="font-semibold mb-4 hover:text-white transition">Industries We Serve</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:underline cursor-pointer">Residential Interiors</li>
            <li className="hover:underline cursor-pointer">Luxury Hotels</li>
            <li className="hover:underline cursor-pointer">Corporate Spaces</li>
            <li className="hover:underline cursor-pointer">Event & Exhibition</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full my-8 bg-primary-foreground/20"></div>

      {/* Copyright */}
      <div className="text-center text-sm opacity-75">
        <p>© 2025 Gaurav & Brothers Carpets. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
