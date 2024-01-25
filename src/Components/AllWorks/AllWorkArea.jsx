import React from "react";
import WorkCard from "./WorkCard";

const AllWorkArea = () => {
  return (
    <>
      <main className="dark:bg-[#041118] dark:text-white">
        <div className="container">
          <div >
            {/* text area */}
            <div className="text-center py-5">
                <h1 className="text-4xl font-bold pb-2">Projects</h1>
                <p className="text-lg font-medium  ">I have worked on a wide range of projects. Here are some of my projects.</p>
            </div>

            {/* card area */}
            <div>
              <WorkCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AllWorkArea;
