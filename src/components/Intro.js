import { ImHtmlFive } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { ThemeContext } from "../Context";
import "../App.css";

function Intro() {
  const theme = useContext(ThemeContext);

  return (
    <div id={theme} className="-mt-10">
      <div className="my-20">
        <h1
          className={
            theme === "light"
              ? "typewriter after:bg-[#0f1329] satisfy-font sm:text-7xl text-6xl m-5"
              : "typewriter after:bg-[#d6d5cb] satisfy-font sm:text-7xl text-6xl m-5"
          }
        >
          Segun Lawal
        </h1>
        <hr className="a-line bg-cyan-400 mx-auto -mt-4" />
        <p className="sm:text-3xl text-2xl mx-2 mt-5 tracking-tighter font-[500]">
          Front End Web Developer
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 sm:mx-20 mx-5 mt-20">
        <div>
          <Slide left>
            <p className="text-left pb-1 font-bold">ABOUT</p>
          </Slide>
          <hr className="b-line bg-cyan-400" />
          <Fade>
            <p className="mt-2 text-left">
              I am a front-end Web developer working with React, Tailwind CSS
              and other related tools. I am interested in Web development and
              optimizing general user experience. I belive a lot in simplicity
              in content structure. There a few things I love more than bringing
              clean design patterns to life.
            </p>
          </Fade>
          <Fade>
            <p className="mt-5 text-left">
              I love simple but unique designs. I believe a User Interface
              should be simple enough to navigate but also unique enough to
              stand out.
            </p>
          </Fade>
          <Fade>
            <p className="mt-5 text-left">
              I am currently on a path to mastering the fundamentals of software
              development. I believe that software engineering provides endless
              possibilities. It is a perfect way to challenge my creativity and
              problem solving skills.
            </p>
          </Fade>
        </div>

        <div>
          <Slide left>
            <p className="text-left pb-1  font-bold">TECH I WORK WITH</p>
          </Slide>
          <hr className="b-line bg-cyan-400 mb-1" />
          <Fade>
            <p className="text-left mt-2">
              With skills in various aspects of front-end engineering, these are
              some of the web technologies I&apos;ve worked with and still work
              with.
            </p>
          </Fade>
          <Fade>
            <div className="mt-10">
              <ImHtmlFive className="text-3xl text-cyan-400" />
              <p className="text-2xl my-1 text-left font-semibold">
                Layout & Design
              </p>
              <p className="text-left">
                I use HTML to create website layouts based on templates and
                wireframes. I style with CSS and its popular libraries. I have
                developed websites with Bootstrap and Tailwind CSS.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="mt-10">
              <FaReact className="text-3xl text-cyan-400" />
              <p className="text-2xl my-1 text-left font-semibold">React JS</p>
              <p className="text-left">
                I am familiar with JavaScript and its ES6 features. I have an
                understanding of ReactJS and its main fundamentals like JSX,
                Virtual DOM, component lifecycle. I have implemented several
                user interfaces (UIs) and UI components using React and React
                Hooks.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="mt-10">
              <AiFillGithub className="text-3xl text-cyan-400" />
              <p className="text-2xl my-1 text-left font-semibold">
                Version Control
              </p>
              <p className="text-left">
                I use Git and GitHub for version or source control. It allows me
                to work with others, develop code faster and track any changes.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Intro;
