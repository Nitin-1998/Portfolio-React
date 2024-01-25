import React from "react";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

const CardData = [
  {
    id: 1,
    img: <FaCode />,
    title: "Web Design",
    description:
      "In the realm where artistry meets functionality, my passion for web design comes to life. Crafting visually captivating and user-centric interfaces is not just a task but a creative journey I embark on with each project. My approach to web design is driven by a commitment to seamless user experiences and an unwavering attention to detail.",
  },
  {
    id: 2,
    img: <CgWebsite />,
    title: "Dynamic Website",
    description:
      "Diving into the dynamic realm of web development, I bring a robust set of skills focused on transforming static websites into interactive and engaging digital experiences. My expertise lies in leveraging the power of JavaScript and modern frameworks to breathe life into web applications. Explore my portfolio to witness the dynamic websites I've crafted",
  },
  {
    id: 3,
    img: <FaReact />,
    title: "React JS",
    description:
      "Proficient in React.js: A skilled front-end developer with hands-on experience in building interactive and responsive user interfaces using React.js. Demonstrated expertise in creating reusable and modular components, managing state efficiently, and optimizing application performance. Familiar with React hooks, context API, and Redux for state management. Strong understanding of the virtual DOM and its role in enhancing application speed.",
  },
  {
    id: 4,
    img: <FaWordpress />,
    title: "Wordpress",
    description:
      "Embark on a journey through the dynamic world of WordPress with me, where seamless design meets robust functionality. As a frontend web developer, I specialize in harnessing the power of WordPress to create visually stunning and user-friendly websites that leave a lasting impression. Explore my portfolio to witness the diverse range of WordPress projects I've undertaken",
  },
];

const ServicesCardComp = () => {
  return (
    <>
      <main>
        <div className="  grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 place-items-center  ">
          {CardData.map((data) => {
            return (
              <>
                <div key={data.id} className=" hover:-translate-y-6 duration-300  " >
                  <div className=" dark:bg-[#262626] bg-slate-500 text-white rounded-xl p-4 hover:bg-secondary dark:hover:bg-primary   ">
                    {/* image */}
                    <div className="text-6xl py-4">
                        {data.img}
                    </div>
                    {/* title/description */}
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">{data.title}</h1>
                        <p className=" line-clamp-[8]" >{data.description}</p>
                        <button>Learn More...</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ServicesCardComp;
