import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeContext } from "../Context";
import "../App.css";

function Navbar() {
  /* eslint-disable no-unused-vars */
  const theme = useContext(ThemeContext);
  /* eslint-enable no-unused-vars */
  return (
    <div className="sm:mx-2 mx-1 pt-2">
      <nav className=" Navbox" id={theme}>
        <div className="m-2">
          <p className=" ">SEGUN</p>
          <p className="-mt-2">LAWAL</p>
        </div>
        <p className="sm:text-lg font-bold py-4">MY PORTFOLIO</p>
        {/* <button
            p-2 m-2  rounded hover:bg-cyan-400 hover:text-white hover:text- "
          type="submit"
        >
          CONTACT ME
        </button> */}
        <a href="#contact">
          <Button
            variant="outlined"
            className="tracking-tighter sm:tracking-normal outline outline-inherit outline-1 rounded-lg font-normal sm:px-3 px-2 sm:text-lg text-sm sm:h-14 h-10 mt-1"
          >
            CONTACT ME
          </Button>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
