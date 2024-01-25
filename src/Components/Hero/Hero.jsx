import React, { useEffect, useState } from "react";

import { TypeAnimation } from "react-type-animation";

import Button from "../Button/Button";
import ContactPopUp from "../Contact/ContactPopUp";

const Hero = () => {
  //for pop show and hide
   //for pop show and hide
   const [showPopUp, setShowPopUp] = useState(false);

   const popHandler = () => {
     setShowPopUp(true);
    
   };
 
   const closeIcon = () => {
     setShowPopUp(false);
   };

   useEffect(()=>{
    setTimeout(()=>{
        setShowPopUp(true)
    },5000)
   },[])
  
  return (
    <>
      <main className="h-screen w-full bg-[url('C:/Users/91828/Desktop/React_Projects/Portfolio_React/portfolio/src/assets/gif/background_portfolio.gif')] bg-cover bg-center bg-no-repeat ">
        <div className="container md:pt-28  py-10">
          <div className="text-start text-white flex flex-col justify-center gap-3 pt-20 ">
            <h1 className="text-4xl font-semibold">
              Hi, I'm<br></br> <span className="text-primary">Nitin Kumar</span>
            </h1>

            <TypeAnimation
              sequence={[
                "I Am a Frontend Developer",
                1000,
                "I Am a Web Designer",
                1000,
              ]}
              wrapper="span"
              className=" text-[1.6em] md:text-6xl inline-block text-[#24dee6] "
              speed={50}
              repeat={Infinity}
            />
            <button onClick={popHandler}>
            <Button  title="Hello Me" /></button>
          </div>
          {/* //popup */}
          {showPopUp && <ContactPopUp closeIcon={closeIcon} />}
         
        </div>
        
      </main>
    </>
  );
};

export default Hero;
