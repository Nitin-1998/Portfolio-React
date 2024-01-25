import React, { useState } from "react";
import work1 from "../../assets/My Work/calculator.png";
import work2 from "../../assets/My Work/currency-convertor.png";
import work3 from "../../assets/My Work/movie_app.png";
import work4 from "../../assets/My Work/My_quiz.png";
import work5 from "../../assets/My Work/password_generator.png";
import work6 from "../../assets/My Work/to-do-list.png";
import work7 from "../../assets/My Work/weather_app.png";
import work8 from "../../assets/My Work/quote-generater.png";
import work9 from "../../assets/My Work/qrcode-generater.png";
import work10 from "../../assets/My Work/my-store.png";
import work11 from "../../assets/My Work/book-store.png";
import work12 from "../../assets/My Work/food-app.png";
import work13 from "../../assets/My Work/tour-app.png";

import { FaExternalLinkAlt } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    img: work6,
    title: "To Do List",
    description:
      "The To-Do List App is a web-based tool designed to help users organize their tasks and manage their daily activities effectively. It offers a simple yet intuitive interface, allowing users to add, edit, and remove tasks dynamically.",
    link: "https://todolistjs1.unaux.com/?i=1",
  },
  {
    id: 2,
    img: work1,
    title: "Calculator",
    description:
      "The Calculator App is a web-based utility designed to perform basic arithmetic operations, providing users with a convenient and interactive tool for calculations. This application is built using HTML for structure, CSS for styling, and JavaScript for dynamic functionality.",
    link: "https://calculatorjs.unaux.com/?i=1",
  },
  {
    id: 3,
    img: work4,
    title: "Quiz App",
    description:
      "The Quiz App is a web-based application designed to test users' knowledge through a series of multiple-choice questions. The app is built using a combination of HTML for structuring the content, CSS for styling, and JavaScript for dynamic functionality.",
    link: "https://myquizjs.unaux.com/?i=1",
  },
  {
    id: 4,
    img: work5,
    title: "Password Generator",
    description:
      "The SecurePass Generator is a web-based application that allows users to create strong and secure passwords for their online accounts. The application is built using a combination of HTML for the structure, CSS for styling, and JavaScript for functionality.",
    link: "https://myquizjs.unaux.com/?i=1",
  },
  {
    id: 5,
    img: work7,
    title: "Weather App",
    description:
      "Weather App is a web-based application that provides real-time weather information for a user-specified location. The application is built using HTML for the structure, CSS for styling, and JavaScript for fetching and displaying weather data.",
    link: "http://myweatherapp.unaux.com/?i=2",
  },
  {
    id: 6,
    img: work3,
    title: "Movie App",
    description:
      "Movie App is a web-based application that allows users to explore and discover information about movies. The application is built using HTML for the structure, CSS for styling, and JavaScript for dynamic content and interactivity.",
    link: "http://movieapp.unaux.com/?i=1",
  },
  {
    id: 7,
    img: work2,
    title: "Currency Converter",
    description:
      "The Currency Converter project is a web-based application that allows users to quickly and easily convert between different currencies. The application is built using HTML for the structure, CSS for styling, and JavaScript for dynamic functionality.",
    link: "http://currencycoverter.liveblog365.com/?i=1",
  },
  {
    id: 8,
    img: work8,
    title: "Quote Generator",
    description:
      "Designed and implemented a dynamic JavaScript-powered random quote generator for insightful and motivational snippets, enhancing user experience and engagement.",
    link: "https://generate-randomquote.netlify.app/",
  },
  {
    id: 9,
    img: work9,
    title: "QRCode Generator",
    description:
      "Developed a JavaScript-based QR Code Generator application, seamlessly converting data into scannable QR codes for streamlined information sharing.",
    link: "https://generate-unique-qrcode.netlify.app/",
  },
  // Reacts Projects Starts From here
  {
    id: 10,
    img: work10,
    title: "My Store - React",
    description:
      "Engineered a dynamic Gadget Store application using React, delivering an immersive user experience with responsive design and seamless navigation for a diverse range of tech enthusiasts.",
    link: "https://mygadgets-react.netlify.app",
  },
  {
    id: 11,
    img: work11,
    title: "Book Store - React",
    description:
      "Designed and implemented an engaging Book Store application using React, combining a visually appealing interface with intuitive navigation to enhance the online shopping experience for avid readers.",
    link: "https://free-online-book-store.netlify.app",
  },
  {
    id: 12,
    img: work12,
    title: "Pet Pooja - React",
    description:
      "Engineered a captivating React-powered Food Website, seamlessly blending enticing visuals, intuitive navigation, and dynamic features to enhance the online culinary journey for users.",
    link: "https://pet-pooja.netlify.app",
  },
  {
    id: 13,
    img: work13,
    title: "Tour - React",
    description:
      "Architected an immersive Tour Website using React, harmonizing stunning visuals, intuitive navigation, and dynamic content to provide users with an enchanting virtual exploration experience",
    link: "https://make-my-tour.netlify.app",
  },
];

const reactCardData = [
  {
    id: 201,
    img: work10,
    title: "My Store - React",
    description:
      "Engineered a dynamic Gadget Store application using React, delivering an immersive user experience with responsive design and seamless navigation for a diverse range of tech enthusiasts.",
    link: "https://mygadgets-react.netlify.app",
  },
  {
    id: 202,
    img: work11,
    title: "Book Store - React",
    description:
      "Designed and implemented an engaging Book Store application using React, combining a visually appealing interface with intuitive navigation to enhance the online shopping experience for avid readers.",
    link: "https://free-online-book-store.netlify.app",
  },
  {
    id: 203,
    img: work12,
    title: "Pet Pooja - React",
    description:
      "Engineered a captivating React-powered Food Website, seamlessly blending enticing visuals, intuitive navigation, and dynamic features to enhance the online culinary journey for users.",
    link: "https://pet-pooja.netlify.app",
  },
  {
    id: 204,
    img: work13,
    title: "Tour - React",
    description:
      "Architected an immersive Tour Website using React, harmonizing stunning visuals, intuitive navigation, and dynamic content to provide users with an enchanting virtual exploration experience",
    link: "https://make-my-tour.netlify.app",
  },
];

const jsCardData = [
  {
    id: 111,
    img: work6,
    title: "To Do List",
    description:
      "The To-Do List App is a web-based tool designed to help users organize their tasks and manage their daily activities effectively. It offers a simple yet intuitive interface, allowing users to add, edit, and remove tasks dynamically.",
    link: "https://todolistjs1.unaux.com/?i=1",
  },
  {
    id: 112,
    img: work1,
    title: "Calculator",
    description:
      "The Calculator App is a web-based utility designed to perform basic arithmetic operations, providing users with a convenient and interactive tool for calculations. This application is built using HTML for structure, CSS for styling, and JavaScript for dynamic functionality.",
    link: "https://calculatorjs.unaux.com/?i=1",
  },
  {
    id: 113,
    img: work4,
    title: "Quiz App",
    description:
      "The Quiz App is a web-based application designed to test users' knowledge through a series of multiple-choice questions. The app is built using a combination of HTML for structuring the content, CSS for styling, and JavaScript for dynamic functionality.",
    link: "https://myquizjs.unaux.com/?i=1",
  },
  {
    id: 114,
    img: work5,
    title: "Password Generator",
    description:
      "The SecurePass Generator is a web-based application that allows users to create strong and secure passwords for their online accounts. The application is built using a combination of HTML for the structure, CSS for styling, and JavaScript for functionality.",
    link: "https://myquizjs.unaux.com/?i=1",
  },
  {
    id: 115,
    img: work7,
    title: "Weather App",
    description:
      "Weather App is a web-based application that provides real-time weather information for a user-specified location. The application is built using HTML for the structure, CSS for styling, and JavaScript for fetching and displaying weather data.",
    link: "http://myweatherapp.unaux.com/?i=2",
  },
  {
    id: 116,
    img: work3,
    title: "Movie App",
    description:
      "Movie App is a web-based application that allows users to explore and discover information about movies. The application is built using HTML for the structure, CSS for styling, and JavaScript for dynamic content and interactivity.",
    link: "http://movieapp.unaux.com/?i=1",
  },
  {
    id: 117,
    img: work2,
    title: "Currency Converter",
    description:
      "The Currency Converter project is a web-based application that allows users to quickly and easily convert between different currencies. The application is built using HTML for the structure, CSS for styling, and JavaScript for dynamic functionality.",
    link: "http://currencycoverter.liveblog365.com/?i=1",
  },
  {
    id: 118,
    img: work8,
    title: "Quote Generator",
    description:
      "Designed and implemented a dynamic JavaScript-powered random quote generator for insightful and motivational snippets, enhancing user experience and engagement.",
    link: "https://generate-randomquote.netlify.app/",
  },
  {
    id:119,
    img: work9,
    title: "QRCode Generator",
    description:
      "Developed a JavaScript-based QR Code Generator application, seamlessly converting data into scannable QR codes for streamlined information sharing.",
    link: "https://generate-unique-qrcode.netlify.app/",
  },
];

const WorkCard = () => {
  const [showCard, setShowCard] = useState(1);

  const cardHandler = (data) => {
    // console.warn(data);
    setShowCard(data);
  };

  return (
    <>
      <main>
        <div>
          <div>
            {/* Button area */}
            <div>
              <div className=" bg-slate-100 dark:bg-[#041118] flex justify-center items-center py-1 text-xl font-semibold my-2   ">
                <button
                  onClick={() => cardHandler(1)}
                  className={`${
                    showCard === 1 ? "tabs active-tabs" : "tabs"
                  } border border-black dark:border-white rounded-l-2xl px-4 py-2`}
                >
                  All
                </button>
                <button
                  onClick={() => cardHandler(2)}
                  className={`${
                    showCard === 2 ? "tabs active-tabs" : "tab"
                  } border border-black dark:border-white py-2 px-4`}
                >
                  ReactJS
                </button>
                <button
                  onClick={() => cardHandler(3)}
                  className={`${
                    showCard === 3 ? "tabs active-tabs" : "tabs"
                  } border border-black dark:border-white rounded-r-2xl py-2 px-4`}
                >
                  Java Script
                </button>
              </div>
            </div>

            {/* Card area */}
            <div className="content-tabs py-10">
              {/* Tab 1 */}
              <div
                className={
                  showCard === 1 ? "content active-content" : "content"
                }
              >
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-content-center place-items-center gap-4  ">
                  {cardData.map((data) => {
                    return (
                      <>
                        <div key={data.id} className="work shadow-2xl ">
                          <img
                            className="images12"
                            src={data.img}
                            alt="images"
                          />
                          <div className="layer">
                            <h3 className="text-lg font-bold">{data.title}</h3>
                            <p className="mb-2 text-xs md:text-sm line-clamp-6 ">
                              {data.description}
                            </p>
                            <a
                              className="text-xl  bg-white text-black p-3  rounded-full hover:scale-125 transition delay-100 hover:text-[#24dee6] "
                              target="_blank"
                              href={data.link}
                            >
                              <FaExternalLinkAlt size={16} />
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              {/* Tab 2 */}
              <div
                className={
                  showCard === 2 ? "content active-content" : "content"
                }
              >
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-content-center place-items-center gap-4  ">
                  {reactCardData.map((data) => {
                    return (
                      <>
                        <div key={data.id} className="work shadow-2xl">
                          <img
                            className="images12"
                            src={data.img}
                            alt="images"
                          />
                          <div className="layer">
                            <h3 className="text-lg font-bold">{data.title}</h3>
                            <p className="mb-2 text-xs md:text-sm line-clamp-6 ">
                              {data.description}
                            </p>
                            <a
                              className="text-xl  bg-white text-black p-3 rounded-full hover:scale-125 transition delay-100 hover:text-[#24dee6]"
                              target="_blank"
                              href={data.link}
                            >
                              <FaExternalLinkAlt />
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {/* Tab 3 */}
              <div
                className={
                  showCard === 3 ? "content active-content" : "content"
                }
              >
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-content-center place-items-center gap-4  ">
                  {jsCardData.map((data) => {
                    return (
                      <>
                        <div key={data.id} className="work shadow-2xl">
                          <img
                            className="images12"
                            src={data.img}
                            alt="images"
                          />
                          <div className="layer">
                            <h3 className="text-lg font-bold">{data.title}</h3>
                            <p className="mb-2 text-xs md:text-sm line-clamp-6  ">
                              {data.description}
                            </p>
                            <a
                              className="text-xl  bg-white text-black p-3 rounded-full hover:scale-125 transition delay-100 hover:text-[#24dee6]"
                              target="_blank"
                              href={data.link}
                            >
                              <FaExternalLinkAlt />
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WorkCard;
