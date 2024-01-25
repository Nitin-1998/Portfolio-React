import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({closeIcon}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [meassage, setMeassage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMeassage("");

    emailjs
      .sendForm(
        "service_3kvf6pg",
        "template_wa57uzs",
        form.current,
        "_BzHZRRB5h8xT7KyZ"
      )
      .then(
        (result) => {
          console.log(result.text);

        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  //form
  const form = useRef();

  //Tostify
  const notify = () => toast("Message Sent Successfully!");


  return (
    <>
      <main>
        <form ref={form} onSubmit={submitHandler}>
          <div className="flex flex-col gap-3 ">
          
            <div>
              <input
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#262626] h-9 px-4 text-lg font-semibold capitalize rounded-xl focus:bg-secondary transition duration-300  "
                autoComplete="false"
                required
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#262626] h-9 px-4 text-lg font-semibold  rounded-xl focus:bg-secondary transition duration-300"
                type="email"
                placeholder="Your Email"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={meassage}
                onChange={(e) => setMeassage(e.target.value)}
                className="bg-[#262626] px-4 text-lg font-semibold rounded-xl focus:bg-secondary transition duration-300 w-full pt-2 "
                rows="6"
                placeholder="Your Message"
              />
            </div>

            <div>
              <input
              onClick={notify}
                className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary outline-1 text-white px-4 py-2  rounded-2xl border border-primary transition duration-300  "
                type="submit"
                value="Submit"
              />
              <ToastContainer />
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default ContactForm;
