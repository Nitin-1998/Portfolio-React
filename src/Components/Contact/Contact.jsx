import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import Resume from "../../assets/resume.pdf";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <main className="dark:bg-[#041118] dark:text-white bg-gray-500 py-16 ">
        <div className="container">
          <div className="flex justify-center items-center flex-wrap gap-10 md:gap-24 ">
            {/* left column */}
            <div className="flex flex-col gap-4 ">
              <h1 className="text-4xl font-semibold">Contact Me</h1>
              <span className="flex items-center gap-1 cursor-pointer text-xl font-semibold">
                <SiMinutemailer className="text-primary" size={32} />
                nk199894@gmail.com
              </span>
              <a href="tel:+918287856996">
                <span className="flex items-center gap-1 cursor-pointer text-xl font-semibold">
                  <CiMobile3 className="text-primary" size={32} />
                  +91 8287856996
                </span>
              </a>

              <span className="flex text-3xl my-2 gap-2">
                <a href="https://github.com/Nitin-1998">
                  {" "}
                  <FaGithub className="hover:text-primary hover:-translate-y-2 duration-200 transition " />{" "}
                </a>
                <a href="https://www.linkedin.com/in/nitin-kumar-2883aa158/">
                  <FaLinkedin className="hover:text-primary hover:-translate-y-2 duration-200 transition " />{" "}
                </a>{" "}
                <a href="https://www.facebook.com/Nitin.kumar.1998">
                  <FaFacebookSquare className="hover:text-primary hover:-translate-y-2 duration-200 transition " />
                </a>
                <a href="https://www.instagram.com/n_nitin_kumar/">
                  <FaInstagram className="hover:text-primary hover:-translate-y-2 duration-200 transition " />
                </a>
                <a href="#">
                  <FaXTwitter className="hover:text-primary hover:-translate-y-2 duration-200 transition " />
                </a>
              </span>
              <span className="">
                <a
                  href={Resume}
                  download
                  className="text-xl font-semibold bg-black outline-1 text-white px-4 py-2  rounded-2xl border border-primary hover:bg-primary transition duration-300 "
                >
                  Download Resume
                </a>
              </span>
            </div>
            {/* right coloumn */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
