import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import Bounce from "react-reveal/Bounce";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ThemeContext } from "./Context";
import "./App.css";

// import styled from 'styled-components';
function App() {
  /* eslint-disable no-unused-vars */
  const [theme, setTheme] = useState("dark");
  /* eslint-enable no-unused-vars */
  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    // console.log(lightMode);
  }
  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <Bounce>
          <button
            className="bg-black-500 rounded-full p-2 border-2"
            type="submit"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <BsFillMoonFill className="text-3xl" />
            ) : (
              <MdOutlineLightMode className="text-3xl" />
            )}
          </button>
        </Bounce>

        <Intro />
        <Projects />
        <Contact />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
