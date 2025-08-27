
import banner1 from "../assets/10.png";
import banner2 from "../assets/13.jpg";
import banner3 from "../assets/77.avif";
import carpet1 from "../assets/carpet1.jpeg";
import carpet2 from "../assets/carpet2.jpeg";
import carpet3 from "../assets/carpet3.jpeg";
import carpet4 from "../assets/carpet4.jpeg";
import carpet5 from "../assets/carpet5.jpeg";
import carpet6 from "../assets/carpet6.jpeg";
import carpet7 from "../assets/carpet1.jpeg";
import carpet8 from "../assets/carpet2.jpeg";
import carpet9 from "../assets/carpet3.jpeg";
import carpet10 from "../assets/carpet4.jpeg";
import carpet11 from "../assets/carpet5.jpeg";
import carpet12 from "../assets/carpet6.jpeg";







import React, { useState } from "react";



const Home = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

// const [selectedImage, setSelectedImage] = useState(null);

  // Example images (replace with your real carpet images in /public/images/)
 const images = [carpet1, carpet2, carpet3, carpet4, carpet5, carpet6,carpet7, carpet8, carpet9, carpet10, carpet11, carpet12];

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

        <section>
            
                  <div className="relative w-full overflow-hidden">
                          <div className="flex w-full animate-slide">
                            <img src={banner1} alt="Banner 1" className="w-full object-cover" />
                            <img src={banner2} alt="Banner 2" className="w-full object-cover" />
                            <img src={banner3} alt="Banner 3" className="w-full object-cover" />
                          </div>
                        </div>
        </section> */}



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
                <img
                  src={src}
                  alt={`Carpet ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedIndex !== null && (
        <div
  className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//   onClick={closeModal}   // ✅ Only clicking BACKGROUND closes modal
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
