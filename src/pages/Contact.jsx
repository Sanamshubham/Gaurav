  import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";



const About = () => (
 
        <section id="contact" class="py-20 bg-secondary/30">
   


<div className="p-8 max-w-5xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-primary">Contact Us</h2>
      
      {/* Description */}
      <p className="mb-4 text-lg">
        <strong>Gaurav & Brothers</strong>, located in Bhadohi – the Carpet City of India,
        specializes in manufacturing and supplying high-quality carpets.
      </p>
      <p className="mb-6 text-gray-700">
        <strong>Directors:</strong> V.K. Jaiswal & Gaurav Jaiswal
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        {/* Address Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <MapPin className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-gray-600 text-sm">
            Railway Crossing, Gopal Patti Road, Bhadohi - 221401
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <Mail className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-600 text-sm">
            gbgauravandbrothers@gmail.com
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <Phone className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-gray-600 text-sm">
            +91-9151739855 <br /> +91-9532656227 <br /> +91-9140285656
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-6 mt-10">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <Facebook className="w-6 h-6 text-primary hover:scale-110 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram className="w-6 h-6 text-primary hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 text-primary hover:scale-110 transition" />
        </a>
        <a href="https://wa.me/919151739855" target="_blank" rel="noreferrer">
          <MessageCircle className="w-6 h-6 text-primary hover:scale-110 transition" />
        </a>
      </div>
    </div>

  

        </section>
);

export default About;