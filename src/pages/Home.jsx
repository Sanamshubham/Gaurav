import { motion } from "framer-motion";
import { useState } from "react";

import banner1 from "../assets/13.jpg";
import banner2 from "../assets/13.jpg";
import banner3 from "../assets/77.avif";
import carpet1 from "../assets/20.jpeg";
import carpet2 from "../assets/21..jpeg";
import carpet3 from "../assets/22.jpeg";
import carpet4 from "../assets/23.jpeg";
import carpet5 from "../assets/25.jpeg";
import carpet6 from "../assets/26.webp";
import carpet7 from "../assets/27.jpeg";
import carpet8 from "../assets/28.jpeg";
import carpet9 from "../assets/29.jpeg";
import carpet10 from "../assets/30.jpeg";
import carpet11 from "../assets/31.jpeg";
import carpet12 from "../assets/32.jpeg";
import carpet13 from "../assets/33.jpeg";
import carpet14 from "../assets/34.jpeg";
import carpet15 from "../assets/35.jpeg";
import carpet16 from "../assets/36.jpeg";
import carpet17 from "../assets/37.jpeg";
import carpet18 from "../assets/38.jpeg";
// import carpet19 from "../assets/39.jpeg";
import carpet20 from "../assets/40.jpeg";




<<<<<<< HEAD
// Import your images
import img1 from "../assets/image5.jpeg";
import img2 from "../assets/image8.jpg";
import img3 from "../assets/Model 077.jpg";
import img4 from "../assets/Model 071.jpg";
import img5 from "../assets/Model 031.jpg";
// import img6 from "../assets/Model 033.jpg";
// import img7 from "../assets/Model 029.jpg";

const Home = () => {


  const images = [img1, img2, img3, img4, img5];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* HERO SECTION */}
<section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
  <div className="container mx-auto px-5 text-center">

    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
    >
      Welcome to your trusted destination for{" "}
      <motion.span
        whileHover={{ scale: 1.1, color: "#8B4513" }}
        className="text-primary"
      >
        custom-built storage
      </motion.span>{" "}
      solutions
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-semibold max-w-3xl mx-auto leading-relaxed mb-10"
    >
      Whether it's tool carts, industrial workstations, safety cabinets, 
      secured lockers, or heavy-duty cabinets, we bring precision, safety, 
      and elegance to every corner of your space.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center  m-19"
    >
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/services"
        className="bg-primary text-primary-foreground px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl shadow-lg hover:bg-primary/90"
      >
        Explore Our Services
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#solution"
        className="border border-input px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:bg-accent hover:text-accent-foreground"
      >
        View Solutions
      </motion.a>
    </motion.div>
  </div>
</section>
=======






import React, { useState } from "react";



const Home = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

// const [selectedImage, setSelectedImage] = useState(null);

  // Example images (replace with your real carpet images in /public/images/)
 const images = [carpet1, carpet2, carpet3, carpet4, carpet5, carpet6,carpet7, carpet8, 
  carpet9, carpet10, carpet11, carpet12,carpet13, carpet14, carpet15, carpet16, carpet17, carpet18, carpet20];

  // Close modal
  const closeModal = () => setSelectedIndex(null);

  // Next image
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  // Previous image
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>

      {/* ✅ Other home sections above this */}

<section className="relative w-full h-[80vh] overflow-hidden">
  {/* Banner Slider */}
  <div className="absolute inset-0 flex w-full animate-slide">
    <img
      src={banner1}
      alt="Banner 1"
      className="w-full h-full object-cover"
    />
    <img
      src={banner2}
      alt="Banner 2"
      className="w-full h-full object-cover"
    />
    <img
      src={banner3}
      alt="Banner 3"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Welcome Text */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center max-w-4xl px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        Welcome to <span >Gaurav & Brothers</span>
      </h1>
      <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
        Manufacturers & Suppliers of Premium Carpets – Hand Knots, Handloom, Tibetan Rugs, Hand Tufts.
      </p>
    </div>
  </div>
</section>



{/* 
      
        <section class="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">Welcome to <span class="text-primary">Gaurav & Brothers</span></h1>
                    <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Manufacturers & Suppliers of Premium Carpets – Hand Knots, Handloom, Tibetan Rugs, Hand Tufts.</p>
                
                   */}
                    {/* <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md text-lg px-8 py-6"
                        >
                            Explore Our Services
                        </a>
                        <a
                            href="#solution"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6"
                        >
                            View Solution
                        </a>

                    </div> */}
                {/* </div>
            </div>
        </section>
>>>>>>> f828432e250f23f63bb4933a8b603e78047bf1f2

        <section>
            
                  <div className="relative w-full overflow-hidden">
                          <div className="flex w-full animate-slide">
                            <img src={banner1} alt="Banner 1" className="w-full object-cover" />
                            <img src={banner2} alt="Banner 2" className="w-full object-cover" />
                            <img src={banner3} alt="Banner 3" className="w-full object-cover" />
                          </div>
                        </div>
        </section> */}


      {/* FEATURES SECTION */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Crafted for Strength, Designed for Style
          </motion.h2>

<<<<<<< HEAD
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg opacity-90 mb-12"
          >
            Premium Lockers, Cabinets, and Industrial workstations That Last a Lifetime.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              "Premium Quality Materials",
              "Custom Design Solutions",
              "Professional Installation",
              "Lifetime Durability",
              "Security Features",
              "Space Optimization",
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.10 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: -1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                className="flex items-center justify-center gap-2 bg-white/10 p-4 rounded-lg shadow-md cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-sm md:text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 lg:py-32 bg-gradient-to-br from-white to-gray-50">
  <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE - IMAGE GALLERY */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start w-full">

      {/* Thumbnails */}
      <div className="flex flex-row sm:flex-col gap-3 sm:gap-4 order-2 sm:order-1 flex-wrap justify-center sm:justify-start">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-md cursor-pointer border-2 overflow-hidden ${
              selectedImage === img ? "border-primary" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(img)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Main Image */}
      <motion.div
        key={selectedImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:flex-1 rounded-xl shadow-lg overflow-hidden order-1 sm:order-2"
      >
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto max-h-[500px] sm:max-h-[600px] object-contain mx-auto"
        />
      </motion.div>
    </div>

    {/* RIGHT SIDE - TEXT CARDS */}
    <div className="space-y-4 sm:space-y-5 text-center md:text-left">
      {[
        "Welcome to your trusted destination for custom built storage solutions",
        "Whether it’s tool carts, industrial workstations, safety cabinets, secured lockers, or heavy-duty cabinets",
        "We bring precision, safety, and elegance to every corner of your space",
        "Crafted for Strength, Designed for Style",
        "Premium lockers, cabinets, and industrial workstations that last a lifetime",
      ].map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
          className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl cursor-pointer border border-gray-200"
        >
          <motion.p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed tracking-wide">
            {line}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


   </div>

        );
    
};

        export default Home;
=======
        <section class="py-16 bg-primary text-primary-foreground">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Crafted for Comfort, Designed for Elegance</h2>
                    <p class="text-xl opacity-90 mb-8">Premium Carpets & Rugs That Transform Every Space.</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-lg">Premium Quality Fabrics</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent">
                                <path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm md:text-lg">Custom Design Solutions</span></div>
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-base">Professional Installation</span></div>
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-base">Long-Lasting Durability</span></div>
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-base">Stain & Slip Resistance</span></div>
                            <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm md:text-base">Perfect Fit for Space</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

 {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-primary text-5xl md:text-6xl font-bold text-center mb-16 py-6">
            Our Carpet Collection
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl cursor-pointer shadow-md group"
                onClick={() => setSelectedIndex(index)}
              >
                {/* Fixed Size Container */}
                <div className="aspect-square w-full">
                  <img
                    src={src}
                    alt={`Carpet ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            ×
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-6 text-white text-3xl font-bold"
            onClick={prevImage}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt="Full view"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />

          {/* Next Button */}
          <button
            className="absolute right-6 text-white text-3xl font-bold"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
>>>>>>> f828432e250f23f63bb4933a8b603e78047bf1f2
