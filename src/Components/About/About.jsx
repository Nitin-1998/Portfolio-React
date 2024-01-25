import React, { useState } from "react";
import myImg from "../../assets/Photos/Passport_photo.png";

const About = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    // console.warn(index);
    setToggleState(index);
  };

  return (
    <>
      <main className="dark:bg-[#041118] dark:text-white bg-gray-200  text-black py-10 ">
        <div className="container  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-center h-auto ">
            <div className="flex justify-center items-center">
              <img className="h-[300px] shadow-2xl rounded-2xl " src={myImg} />
            </div>
            {/* about section */}
            <div>
              <div>
                <h1 className="text-4xl text-center sm:text-start font-bold pt-2 pb-4">
                  About me
                </h1>
                <p className="text-center sm:text-start">
                  Hello there! I'm Nitin, a passionate frontend web developer
                  with expertise in React.js, Tailwind CSS, JavaScript, HTML,
                  CSS, and Bootstrap, I bring a proven track record of creating
                  visually appealing and highly functional user interfaces. With
                  a keen eye for design and a commitment to delivering seamless
                  user experiences, I excel in translating design concepts into
                  responsive and interactive web applications. My proficiency in
                  the latest frontend technologies, coupled with a strong
                  problem-solving mindset, allows me to contribute effectively
                  to project success. I am dedicated to staying updated on
                  industry trends and best practices to ensure the delivery of
                  cutting-edge and user-friendly applications..
                </p>
              </div>
              {/* Skills section */}
              <div className="py-2">
                <div className=" bg-gray-400 dark:bg-[#041118]">
                  {/* Heading buttons */}
                  <div className="bloc-tabs flex justify-between items-center md:text-xl md:font-bold overflow-hidden dark:bg-[#041118]  px-1 ">
                    <div
                      onClick={() => toggleTab(1)}
                      className={`${
                        toggleState === 1 ? "tabs active-tabs" : "tabs"
                      }  text-lg font-semibold cursor-pointer hover:scale-105 transition duration-300 `}
                    >
                      Skills
                    </div>
                    <div
                      onClick={() => toggleTab(2)}
                      className={`${
                        toggleState === 2 ? "tabs active-tabs" : "tabs"
                      } text-lg font-semibold cursor-pointer hover:scale-105 transition duration-300   `}
                    >
                      Experience
                    </div>
                    <div
                      onClick={() => toggleTab(3)}
                      className={`${
                        toggleState === 3 ? "tabs active-tabs" : "tabs"
                      }  text-lg font-semibold cursor-pointer hover:scale-105 transition duration-300  `}
                    >
                      Education
                    </div>
                  </div>

                  {/* Tab Contents */}

                  <div className="content-tabs">
                    <div
                      className={
                        toggleState === 1 ? "content active-content" : "content"
                      }
                    >
                      <hr />
                      <ul>
                        <li className="pt-4">
                          <span className="text-secondary dark:text-primary font-semibold ">
                            HTML (HyperText Markup Language)
                          </span>
                          <br />
                          Designing Web/App Interface
                        </li>
                        <li>
                          <span className="text-secondary dark:text-primary  font-semibold ">
                            CSS (Cascading Style Sheets){" "}
                          </span>
                          <br />
                          Web App Development
                        </li>
                        <li>
                          <span className="text-secondary dark:text-primary font-semibold ">
                            JavaSCript
                          </span>
                          <br />
                          Developing Interactive Web Applications
                        </li>
                        <li className=" line-clamp-3">
                          <span className="text-secondary dark:text-primary  font-semibold">
                            ReactJs
                          </span>
                          <br />
                          Proficient in building dynamic and responsive user
                          interfaces with React.js to enhance web application
                          functionality and user experience
                        </li>
                        <li className=" line-clamp-3">
                          <span className="text-secondary dark:text-primary  font-semibold">
                            Tailwind CSS
                          </span>
                          <br />
                          Expert in crafting modern and visually appealing UI
                          designs using Tailwind CSS, a utility-first CSS
                          framework.
                        </li>
                        <li className=" line-clamp-3">
                          <span className="text-secondary dark:text-primary font-semibold">
                            Bootstrap
                          </span>
                          <br />
                          streamlined and improved the responsive design by
                          utilizing the Bootstrap framework
                        </li>
                        <li className=" line-clamp-3">
                          <span className="text-secondary dark:text-primary font-semibold ">
                            Wordpress
                          </span>
                          <br />
                          Implemented and customized WordPress themes and
                          plugins to create visually compelling and
                          user-friendly websites with seamless functionality.
                        </li>
                        <li className=" line-clamp-3">
                          <span className="text-secondary dark:text-primary  font-semibold">
                            Shopify
                          </span>
                          <br />
                          Applied Shopify expertise to develop and customize
                          e-commerce websites
                        </li>
                        <li className=" line-clamp-3">
                          <span className="text-secondary dark:text-primary font-semibold">
                            Woocommerce
                          </span>
                          <br />
                          developed and optimized e-commerce websites using
                          WooCommerce
                        </li>
                      </ul>
                    </div>

                    <div
                      className={
                        toggleState === 2 ? "content active-content" : "content"
                      }
                    >
                      <hr />
                      <ul>
                        <li>
                          <span className="text-secondary dark:text-primary  font-semibold">
                            2022 (November) - Current
                          </span>
                          <br />
                          Front-End Web Developer
                        </li>
                        <li>
                          <span className="text-secondary dark:text-primary font-semibold">
                            2017-2022 (November)
                          </span>
                          <br />
                          Front Office Assistant at The Delhi Parsi Anjuman
                        </li>
                      </ul>
                    </div>

                    <div
                      className={
                        toggleState === 3 ? "content active-content" : "content"
                      }
                    >
                      <hr />
                      <ul>
                        <li>
                          <span className="text-secondary dark:text-primary  font-semibold">
                            2018- Delhi University (SOL)
                          </span>
                          <br />
                          Bachelor of Commerce
                        </li>
                        <li>
                          <span className="text-secondary dark:text-primary font-semibold">
                            2015- HM DAV Ser. Sec. School{" "}
                          </span>
                          <br />
                          12th Standard
                        </li>
                        <li>
                          <span className="text-secondary dark:text-primary  font-semibold">
                            2013- HM DAV Ser. Sec. School
                          </span>
                          <br />
                          10th Standard
                        </li>
                      </ul>
                    </div>
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

export default About;
