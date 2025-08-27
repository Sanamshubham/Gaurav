import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
  <div>
    {/* <Services/> */}
  
    <Navbar />
    <Home/>
     
    <About/>
   
    <Contact/>
    <Footer />
  
  </div>
);

export default App;
