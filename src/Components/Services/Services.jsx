import React from "react";
import ServicesCardComp from "./ServicesCardComp";

const Services = () => {
  return (
    <>
      <main className="dark:bg-[#041118] bg-gray-200 dark:text-white py-10">
        <div>
          <div className="container">
            {/* Heading */}
            <div>
            <h1 className="text-4xl font-bold">My Services</h1>
            </div>
            {/* Cards */}
            <div>
                <ServicesCardComp />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
