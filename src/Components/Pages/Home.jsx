import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import AllWorkArea from "../AllWorks/AllWorkArea";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <AllWorkArea />
        <Services />
        <Contact />
      </main>
    </>
  );
};

export default Home;
