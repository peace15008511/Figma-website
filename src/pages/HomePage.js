import React from "react";

//Import all components that make up a home page
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Brands from "../components/Brands";
import ContactUs from "../components/ContactUs";

function HomePage() {
  return (
    <div>
      {/*List all components that make up a home page in order*/}
      <NavBar />
      <Hero />
      <Services />
      <CaseStudies />
      <Brands />
      <ContactUs />
    </div>
  );
}

export default HomePage;
