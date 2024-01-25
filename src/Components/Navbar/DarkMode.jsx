import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const DarkMode = () => {
  //Toggle Button
  const [showButton, setShowButton] = useState(false);

  const toggleHandler = () => {
    setShowButton(!showButton);
  };

  //Dark & Light Mode funtionality
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setShowButton(!showButton);
    } else {
      setTheme("light");
      setShowButton(!showButton);
    }
  };

  return (
    <>
      <div>
        {showButton ? (
          <MdDarkMode onClick={changeTheme} size={32} />
        ) : (
          <MdOutlineLightMode onClick={changeTheme} size={32} />
        )}
      </div>
    </>
  );
};

export default DarkMode;
