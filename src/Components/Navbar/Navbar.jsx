import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import DarkMode from "./DarkMode";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import ContactPopUp from "../Contact/ContactPopUp";

const Navbar = () => {
  //Navicon Toggle
  const [toggleIcon, setToggleIcon] = useState(false);
  const MenuToggleHandler = () => {
    setToggleIcon(!toggleIcon);
  };

  //for pop show and hide
  const [showPopUp, setShowPopUp] = useState(false);

  const popHandler = () => {
    setShowPopUp(true);
    setToggleIcon(false);
  };

  const closeIcon = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <main className="dark:bg-slate-800 w-full   dark:text-white relative bg-white  shadow-md z-[9999] ">
        <div className="  container pt-8 pb-4">
          <div className=" flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link className="text-3xl font-semibold" to="/">
                Nitin <span className="text-primary">K.</span>
              </Link>
            </div>

            {/* Links */}
            <div className="navlinks flex  text-lg  justify-center items-center gap-6 font-medium ">
              {/* Dark mode */}
              <div>
                <DarkMode />
              </div>

              {/* Navbar */}
              <div className="hidden md:flex md:justify-center md:items-center  gap-6 ">
                <Link
                  className="hover:border-b-4 hover:text-primary hover:border-b-[#24dee6] "
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className=" hover:border-b-4 hover:text-primary hover:border-b-[#24dee6]"
                  to="About"
                >
                  About
                </Link>
                <Link
                  className=" hover:border-b-4 hover:text-primary hover:border-b-[#24dee6]"
                  to="/services"
                >
                  Services
                </Link>
                <Link
                  className=" hover:border-b-4 hover:text-primary hover:border-b-[#24dee6]"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  className=" hover:border-b-4 hover:text-primary hover:border-b-[#24dee6]"
                  to="contact"
                >
                  Contact
                </Link>
              </div>
              <div className="bg-secondary hidden dark:bg-primary sm:block text-white text-[16px] py-2 px-4 transition duration-200 rounded-xl">
                <button onClick={popHandler}>Contact Me</button>
              </div>

              {/* //popup */}

              {showPopUp && <ContactPopUp closeIcon={closeIcon} />}

              {/* Mobile Navbar */}
              <div className="md:hidden  ">
                {toggleIcon ? (
                  <CiMenuBurger onClick={MenuToggleHandler} size={32} />
                ) : (
                  <CiMenuFries onClick={MenuToggleHandler} size={32} />
                )}
              </div>
              <div
                className={`${
                  toggleIcon ? "left-0" : "left-[100%]"
                } flex flex-col h-[2000px] fixed lg:hidden text-white top-0 w-[70%] bg-[#019ab2] dark:bg-[#1d1d1d] z-[10] transition-all rounded-r-2xl duration-300 gap-6 text-xl font-semibold px-5 py-10 `}
              >
                <div className="flex items-center gap-4 ">
                  <div>
                    <FaUserCircle size={56} />
                  </div>
                  <div className="text-lg">
                    <h1>Welcome User</h1>
                    <h1>Premium User</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-6 justify-start items-start  ">
                  <Link
                    className="hover:border-b-2 hover:text-black dark:hover:text-primary dark:hover:border-b-[#24dee6] "
                    onClick={() => setToggleIcon(false)}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="hover:border-b-2 hover:text-black dark:hover:text-primary dark:hover:border-b-[#24dee6] "
                    onClick={() => setToggleIcon(false)}
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="hover:border-b-2 hover:text-black dark:hover:text-primary dark:hover:border-b-[#24dee6] "
                    onClick={() => setToggleIcon(false)}
                    to="/services"
                  >
                    Services
                  </Link>
                  <Link
                    className="hover:border-b-2 hover:text-black dark:hover:text-primary dark:hover:border-b-[#24dee6] "
                    onClick={() => setToggleIcon(false)}
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                  <Link
                    className="hover:border-b-2 hover:text-black dark:hover:text-primary dark:hover:border-b-[#24dee6] "
                    onClick={() => setToggleIcon(false)}
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <div className="bg-secondary text-white py-2 px-4 rounded-xl">
                    <button onClick={popHandler}>Contact Me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
